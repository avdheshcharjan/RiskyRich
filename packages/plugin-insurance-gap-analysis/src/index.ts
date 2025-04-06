import type { Plugin } from '@elizaos/core';
import { analyzeInsuranceGapAction } from './actions/analyze-insurance-gap';
// No need to import InsuranceGapAnalyzerService here - it's exported by the actions module

/**
 * Insurance Gap Analysis Plugin
 * 
 * This plugin provides AI-Powered Insurance Gap Analysis based on LIA guidelines.
 * It helps users identify protection gaps in their insurance coverage using established
 * financial recommendations from the Life Insurance Association (LIA).
 */
export const insuranceGapAnalysisPlugin: Plugin = {
  name: "insurance-gap-analysis",
  description: "AI-Powered Insurance Gap Analysis based on LIA guidelines",
  actions: [analyzeInsuranceGapAction]
};

export default insuranceGapAnalysisPlugin;

// Export individual components
export { analyzeInsuranceGapAction } from './actions/analyze-insurance-gap';
export { InsuranceGapAnalyzerService } from './services/insurance-gap-analyzer';
export * from './types'; 