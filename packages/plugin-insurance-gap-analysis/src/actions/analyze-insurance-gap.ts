import { IAgentRuntime, Action, Memory, State, HandlerCallback, UUID } from "@elizaos/core";
import { InsuranceGapAnalyzerService } from "../services/insurance-gap-analyzer";
import { UserInfo } from "../types";
import { ServiceType } from "@elizaos/core";

/**
 * Action that analyzes insurance gaps based on user information
 */
export const analyzeInsuranceGapAction: Action = {
  name: "analyzeInsuranceGap",
  description: "Analyzes insurance gaps based on user information using LIA guidelines",
  similes: [
    "evaluate insurance coverage",
    "calculate insurance protection score",
    "assess insurance needs",
    "determine protection gaps",
    "compute risk level for insurance"
  ],
  examples: [
    [
      {
        user: "Agent",
        content: {
          text: "Let me analyze your insurance coverage. I'll need some information about you.",
          action: "analyzeInsuranceGap"
        }
      }
    ],
    [
      {
        user: "User",
        content: {
          text: "I'm 35 years old with an annual income of $75,000. I have 2 children, and I'm the primary earner. I currently have $300,000 in life insurance and $50,000 in critical illness coverage. Can you tell me if I have enough coverage?"
        }
      },
      {
        user: "Agent",
        content: {
          text: "Let me analyze your insurance coverage based on this information.",
          action: "analyzeInsuranceGap"
        }
      }
    ]
  ],
  
  validate: async (runtime: IAgentRuntime, message: Memory): Promise<boolean> => {
    // This action can be triggered by the agent, no specific validation needed
    return true;
  },
  
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state?: State,
    options?: { [key: string]: unknown },
    callback?: HandlerCallback
  ): Promise<any> => {
    try {
      // Get the analyzer service
      const analyzerService = runtime.getService<InsuranceGapAnalyzerService>(
        ServiceType.TEXT_GENERATION // Using TEXT_GENERATION as we set in the service
      );
      
      if (!analyzerService) {
        throw new Error("Insurance Gap Analyzer service not found");
      }
      
      // Extract user info from message or options
      const userInfo = extractUserInfo(message, options);
      
      if (!userInfo) {
        return callback?.({
          text: "I need more information about you to analyze your insurance needs. Could you please provide your age, annual income, dependents, and current insurance coverage details?"
        });
      }
      
      // Perform analysis
      const analysis = analyzerService.analyzeInsuranceGap(userInfo);
      
      // Store analysis result in state for future reference
      if (state) {
        state.insuranceAnalysis = analysis;
      }
      
      // Return the analysis summary
      return callback?.({
        text: analysis.summary
      });
    } catch (error) {
      console.error("Error in analyzeInsuranceGap action:", error);
      return callback?.({
        text: "I'm sorry, I encountered an issue while analyzing your insurance needs. Please try again or provide more detailed information."
      });
    }
  }
};

/**
 * Extract user info from message or options
 */
function extractUserInfo(
  message: Memory,
  options?: { [key: string]: unknown }
): UserInfo | null {
  // First check if options has userInfo
  if (options?.userInfo) {
    return options.userInfo as UserInfo;
  }
  
  // Try to extract from message text using NLP patterns
  const messageText = message.content.text;
  
  // Extract age
  const ageMatch = messageText.match(/(\d+)\s*(years?|yrs?)(\s*old)?/i);
  const age = ageMatch ? parseInt(ageMatch[1]) : undefined;
  
  // Extract income
  const incomeMatch = messageText.match(/(\$)?\s*([0-9,]+)\s*(k|thousand|annual|annually|salary|income|per year|a year)/i);
  let annualIncome = 0;
  if (incomeMatch) {
    const incomeStr = incomeMatch[2].replace(/,/g, '');
    annualIncome = parseInt(incomeStr);
    if (incomeMatch[3]?.toLowerCase().startsWith('k')) {
      annualIncome *= 1000;
    }
  }
  
  // Extract dependents
  const dependentMatch = messageText.match(/([0-9]+)\s*(dependents?|children|kids|child)/i);
  const dependents = dependentMatch ? parseInt(dependentMatch[1]) : 0;
  
  // Extract existing life coverage
  const lifeCoverageMatch = messageText.match(/(\$)?\s*([0-9,.]+)\s*(k|thousand|million|m)?\s*(in)?\s*(life(\s*insurance)?|coverage)/i);
  let existingLifeCoverage = 0;
  if (lifeCoverageMatch) {
    const coverageStr = lifeCoverageMatch[2].replace(/,/g, '');
    existingLifeCoverage = parseInt(coverageStr);
    if (lifeCoverageMatch[3]?.toLowerCase().startsWith('k')) {
      existingLifeCoverage *= 1000;
    } else if (lifeCoverageMatch[3]?.toLowerCase().startsWith('m')) {
      existingLifeCoverage *= 1000000;
    }
  }
  
  // Extract existing critical illness coverage
  const ciCoverageMatch = messageText.match(/(\$)?\s*([0-9,.]+)\s*(k|thousand|million|m)?\s*(in)?\s*(ci|critical\s*illness)(\s*insurance|\s*coverage)?/i);
  let existingCICoverage = 0;
  if (ciCoverageMatch) {
    const coverageStr = ciCoverageMatch[2].replace(/,/g, '');
    existingCICoverage = parseInt(coverageStr);
    if (ciCoverageMatch[3]?.toLowerCase().startsWith('k')) {
      existingCICoverage *= 1000;
    } else if (ciCoverageMatch[3]?.toLowerCase().startsWith('m')) {
      existingCICoverage *= 1000000;
    }
  }
  
  // Check other factors
  const isPrimaryIncomeEarner = /primary\s*(income|earner|breadwinner)/i.test(messageText);
  const hasMortgage = /mortgage|home\s*loan/i.test(messageText);
  let mortgageAmount: number | undefined = undefined;
  
  const mortgageMatch = messageText.match(/mortgage(\s*of)?\s*(\$)?\s*([0-9,.]+)\s*(k|thousand|million|m)?/i);
  if (mortgageMatch) {
    const mortgageStr = mortgageMatch[3].replace(/,/g, '');
    mortgageAmount = parseInt(mortgageStr);
    if (mortgageMatch[4]?.toLowerCase().startsWith('k')) {
      mortgageAmount *= 1000;
    } else if (mortgageMatch[4]?.toLowerCase().startsWith('m')) {
      mortgageAmount *= 1000000;
    }
  }
  
  const isSingleIncomeHousehold = /single\s*income|only\s*income|sole\s*provider/i.test(messageText);
  const hasPreExistingConditions = /pre-existing|preexisting|health\s*condition|medical\s*condition/i.test(messageText);
  const hasFamilyHistoryOfIllness = /family\s*history|history\s*of\s*illness|parents\s*had/i.test(messageText);
  
  // If we don't have minimum required info, return null
  if (age === undefined || annualIncome === 0) {
    return null;
  }
  
  // Create user info object
  return {
    age,
    annualIncome,
    dependents,
    existingLifeCoverage,
    existingCICoverage,
    isPrimaryIncomeEarner,
    hasMortgage,
    mortgageAmount,
    isSingleIncomeHousehold,
    hasPreExistingConditions,
    hasFamilyHistoryOfIllness
  };
} 