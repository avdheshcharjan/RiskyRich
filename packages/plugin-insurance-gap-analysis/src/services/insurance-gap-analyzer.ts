import { IAgentRuntime, Service, ServiceType } from "@elizaos/core";
import {
  UserInfo,
  LifeStage,
  RiskLevel,
  RecommendedCoverage,
  InsuranceGaps,
  ProtectionScores,
  GapPriority,
  InsuranceGapAnalysis
} from "../types";

/**
 * Service that performs insurance gap analysis based on LIA guidelines
 */
export class InsuranceGapAnalyzerService implements Service {
  name = "insurance-gap-analyzer";
  serviceType: ServiceType = ServiceType.TEXT_GENERATION;
  
  constructor(private runtime: IAgentRuntime) {}
  
  /**
   * Initialize the service
   */
  async initialize(): Promise<void> {
    // No initialization required
  }

  /**
   * Determine life stage based on age and dependents
   */
  determineLifeStage(userInfo: UserInfo): LifeStage {
    const { age, dependents } = userInfo;
    
    if (age < 30 && dependents === 0) {
      return LifeStage.YOUNG_SINGLE;
    } else if (age < 40 && dependents > 0) {
      return LifeStage.YOUNG_FAMILY;
    } else if (age < 55) {
      return LifeStage.ESTABLISHED_FAMILY;
    } else {
      return LifeStage.PRE_RETIREMENT;
    }
  }

  /**
   * Calculate recommended coverage based on annual income, life stage and dependents
   */
  calculateRecommendedCoverage(userInfo: UserInfo, lifeStage: LifeStage): RecommendedCoverage {
    const { annualIncome, dependents } = userInfo;
    
    let lifeMultiplier = 0;
    let ciMultiplier = 0;
    
    switch (lifeStage) {
      case LifeStage.YOUNG_SINGLE:
        lifeMultiplier = 7; // Using average of 6-8
        ciMultiplier = 3.5; // Using average of 3-4
        break;
      case LifeStage.YOUNG_FAMILY:
        lifeMultiplier = 10.5; // Using average of 9-12
        ciMultiplier = 4.5; // Using average of 4-5
        break;
      case LifeStage.ESTABLISHED_FAMILY:
        lifeMultiplier = 9; // Using average of 8-10
        ciMultiplier = 4;
        break;
      case LifeStage.PRE_RETIREMENT:
        lifeMultiplier = 6.5; // Using average of 5-8
        ciMultiplier = 3.5; // Using average of 3-4
        break;
    }
    
    // Adjust for mortgage if applicable
    if (userInfo.hasMortgage && userInfo.mortgageAmount) {
      const lifeTPD = annualIncome * lifeMultiplier + userInfo.mortgageAmount;
      const criticalIllness = annualIncome * ciMultiplier;
      return { lifeTPD, criticalIllness };
    }
    
    const lifeTPD = annualIncome * lifeMultiplier;
    const criticalIllness = annualIncome * ciMultiplier;
    return { lifeTPD, criticalIllness };
  }

  /**
   * Calculate insurance gaps based on recommended coverage and existing coverage
   */
  calculateGaps(userInfo: UserInfo, recommendedCoverage: RecommendedCoverage): InsuranceGaps {
    const { existingLifeCoverage, existingCICoverage } = userInfo;
    const { lifeTPD, criticalIllness } = recommendedCoverage;
    
    const lifeGap = Math.max(0, lifeTPD - existingLifeCoverage);
    const ciGap = Math.max(0, criticalIllness - existingCICoverage);
    
    const lifeGapPercentage = lifeTPD > 0 ? (lifeGap / lifeTPD) * 100 : 0;
    const ciGapPercentage = criticalIllness > 0 ? (ciGap / criticalIllness) * 100 : 0;
    
    return {
      lifeGap,
      lifeGapPercentage,
      ciGap,
      ciGapPercentage
    };
  }

  /**
   * Calculate protection scores based on existing and recommended coverage
   */
  calculateScores(userInfo: UserInfo, recommendedCoverage: RecommendedCoverage): ProtectionScores {
    const { existingLifeCoverage, existingCICoverage, dependents } = userInfo;
    const { lifeTPD, criticalIllness } = recommendedCoverage;
    
    const lifeScore = Math.min(100, (existingLifeCoverage / lifeTPD) * 100);
    const ciScore = Math.min(100, (existingCICoverage / criticalIllness) * 100);
    
    const overallScore = (lifeScore + ciScore) / 2;
    
    // Calculate weighted score if applicable
    let weightedScore: number | undefined = undefined;
    if (dependents > 0) {
      const weightLife = (dependents * 15) + 50;
      const weightCI = 100 - weightLife;
      weightedScore = (lifeScore * weightLife + ciScore * weightCI) / 100;
    }
    
    // Determine risk level based on overall score
    let riskLevel: RiskLevel;
    if (overallScore <= 30) {
      riskLevel = RiskLevel.HIGH_RISK;
    } else if (overallScore <= 60) {
      riskLevel = RiskLevel.MODERATE_RISK;
    } else if (overallScore <= 90) {
      riskLevel = RiskLevel.LOW_RISK;
    } else {
      riskLevel = RiskLevel.PROTECTED;
    }
    
    return {
      lifeScore,
      ciScore,
      overallScore,
      weightedScore,
      riskLevel
    };
  }

  /**
   * Determine priority of gaps to address
   */
  determineGapPriority(userInfo: UserInfo, gaps: InsuranceGaps): GapPriority {
    const { 
      age, 
      dependents, 
      existingCICoverage, 
      hasFamilyHistoryOfIllness, 
      isPrimaryIncomeEarner, 
      hasMortgage 
    } = userInfo;
    
    // Calculate priority scores
    const ciCoverageZero = existingCICoverage === 0 ? 1 : 0;
    const ageOver40 = age > 40 ? 1 : 0;
    const hasHistory = hasFamilyHistoryOfIllness ? 1 : 0;
    
    const hasDependent = dependents > 0 ? 1 : 0;
    const primaryEarner = isPrimaryIncomeEarner ? 1 : 0;
    const hasMortgageDebt = hasMortgage ? 1 : 0;
    
    const cIPriorityScore = (ciCoverageZero * 5) + (ageOver40 * 3) + (hasHistory * 3);
    const lifePriorityScore = (hasDependent * 4) + (primaryEarner * 3) + (hasMortgageDebt * 4);
    
    const prioritizeCI = cIPriorityScore > lifePriorityScore;
    
    // Generate reason for prioritization
    let reason = "";
    if (prioritizeCI) {
      if (ciCoverageZero) reason += "You have no critical illness coverage. ";
      if (ageOver40) reason += "Your age increases critical illness risk. ";
      if (hasHistory) reason += "Your family history increases critical illness risk. ";
    } else {
      if (hasDependent) reason += "You have dependents who rely on your income. ";
      if (primaryEarner) reason += "You are the primary income earner. ";
      if (hasMortgageDebt) reason += "You have mortgage debt to consider. ";
    }
    
    return {
      prioritizeCI,
      cIPriorityScore,
      lifePriorityScore,
      reason: reason.trim()
    };
  }

  /**
   * Apply adjustment factors to risk level
   */
  applyRiskAdjustments(
    userInfo: UserInfo, 
    gaps: InsuranceGaps, 
    scores: ProtectionScores
  ): RiskLevel {
    const { 
      dependents, 
      age, 
      isSingleIncomeHousehold, 
      hasPreExistingConditions 
    } = userInfo;
    
    // Start with calculated risk level
    let adjustedRiskLevel = scores.riskLevel;
    
    // Apply dependent adjustment
    if (gaps.lifeGapPercentage > 10 || gaps.ciGapPercentage > 10) {
      if (dependents >= 3) {
        // Increase risk by 2 levels
        if (adjustedRiskLevel === RiskLevel.LOW_RISK) {
          adjustedRiskLevel = RiskLevel.HIGH_RISK;
        } else if (adjustedRiskLevel === RiskLevel.MODERATE_RISK) {
          adjustedRiskLevel = RiskLevel.HIGH_RISK;
        }
      } else if (dependents >= 1) {
        // Increase risk by 1 level
        if (adjustedRiskLevel === RiskLevel.LOW_RISK) {
          adjustedRiskLevel = RiskLevel.MODERATE_RISK;
        } else if (adjustedRiskLevel === RiskLevel.MODERATE_RISK) {
          adjustedRiskLevel = RiskLevel.HIGH_RISK;
        }
      }
    }
    
    // Apply single income household adjustment
    if (isSingleIncomeHousehold) {
      if (adjustedRiskLevel === RiskLevel.LOW_RISK) {
        adjustedRiskLevel = RiskLevel.MODERATE_RISK;
      } else if (adjustedRiskLevel === RiskLevel.MODERATE_RISK) {
        adjustedRiskLevel = RiskLevel.HIGH_RISK;
      }
    }
    
    // Apply pre-existing conditions adjustment
    if (hasPreExistingConditions && gaps.ciGapPercentage > 10) {
      if (adjustedRiskLevel === RiskLevel.LOW_RISK) {
        adjustedRiskLevel = RiskLevel.MODERATE_RISK;
      } else if (adjustedRiskLevel === RiskLevel.MODERATE_RISK) {
        adjustedRiskLevel = RiskLevel.HIGH_RISK;
      }
    }
    
    return adjustedRiskLevel;
  }

  /**
   * Generate a summary of the analysis
   */
  generateSummary(
    userInfo: UserInfo,
    recommendedCoverage: RecommendedCoverage,
    gaps: InsuranceGaps,
    scores: ProtectionScores,
    priority: GapPriority,
    adjustedRiskLevel: RiskLevel
  ): string {
    const formattedLifeRecommended = recommendedCoverage.lifeTPD.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
    
    const formattedCIRecommended = recommendedCoverage.criticalIllness.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
    
    const formattedLifeGap = gaps.lifeGap.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
    
    const formattedCIGap = gaps.ciGap.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
    
    let summary = `Based on your age (${userInfo.age}) and annual income of ${userInfo.annualIncome.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    })}, I've analyzed your insurance needs.\n\n`;
    
    summary += `You should have approximately ${formattedLifeRecommended} in life/TPD coverage and ${formattedCIRecommended} in critical illness coverage.\n\n`;
    
    if (gaps.lifeGapPercentage > 0 || gaps.ciGapPercentage > 0) {
      summary += `Your current protection gaps are:\n`;
      if (gaps.lifeGapPercentage > 0) {
        summary += `- Life/TPD gap: ${formattedLifeGap} (${Math.round(gaps.lifeGapPercentage)}% gap)\n`;
      }
      if (gaps.ciGapPercentage > 0) {
        summary += `- Critical Illness gap: ${formattedCIGap} (${Math.round(gaps.ciGapPercentage)}% gap)\n`;
      }
      summary += `\n`;
    }
    
    summary += `Your overall protection score is ${Math.round(scores.overallScore)}/100, putting you at ${adjustedRiskLevel.replace('_', ' ')} level.\n\n`;
    
    if (adjustedRiskLevel === RiskLevel.HIGH_RISK || adjustedRiskLevel === RiskLevel.MODERATE_RISK) {
      summary += `I recommend you prioritize ${priority.prioritizeCI ? 'Critical Illness' : 'Life/TPD'} coverage first. ${priority.reason}\n`;
    } else if (adjustedRiskLevel === RiskLevel.LOW_RISK) {
      summary += `You have decent coverage, but there's still room for improvement. Consider closing your remaining gaps for better protection.\n`;
    } else {
      summary += `Congratulations! You're well protected with your current insurance coverage.\n`;
    }
    
    return summary;
  }

  /**
   * Perform a complete insurance gap analysis
   */
  analyzeInsuranceGap(userInfo: UserInfo): InsuranceGapAnalysis {
    // Step 1: Determine life stage
    const lifeStage = this.determineLifeStage(userInfo);
    
    // Step 2: Calculate recommended coverage
    const recommendedCoverage = this.calculateRecommendedCoverage(userInfo, lifeStage);
    
    // Step 3: Calculate gaps
    const gaps = this.calculateGaps(userInfo, recommendedCoverage);
    
    // Step 4: Calculate protection scores
    const scores = this.calculateScores(userInfo, recommendedCoverage);
    
    // Step 5: Determine priority
    const priority = this.determineGapPriority(userInfo, gaps);
    
    // Step 6: Apply adjustments to risk level
    const adjustedRiskLevel = this.applyRiskAdjustments(userInfo, gaps, scores);
    
    // Step 7: Generate summary
    const summary = this.generateSummary(
      userInfo,
      recommendedCoverage,
      gaps,
      scores,
      priority,
      adjustedRiskLevel
    );
    
    // Return complete analysis
    return {
      userInfo,
      lifeStage,
      recommendedCoverage,
      gaps,
      scores,
      priority,
      adjustedRiskLevel,
      summary
    };
  }
} 