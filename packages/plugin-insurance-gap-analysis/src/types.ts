import { UUID } from "@elizaos/core";

/**
 * User information required for insurance gap analysis
 */
export interface UserInfo {
  age: number;
  annualIncome: number;
  dependents: number;
  existingLifeCoverage: number;
  existingCICoverage: number;
  hasMortgage?: boolean;
  mortgageAmount?: number;
  isSingleIncomeHousehold?: boolean;
  hasPreExistingConditions?: boolean;
  hasFamilyHistoryOfIllness?: boolean;
  isPrimaryIncomeEarner?: boolean;
}

/**
 * Life stage categorization for insurance multiplier determination
 */
export enum LifeStage {
  YOUNG_SINGLE = "YOUNG_SINGLE",
  YOUNG_FAMILY = "YOUNG_FAMILY",
  ESTABLISHED_FAMILY = "ESTABLISHED_FAMILY",
  PRE_RETIREMENT = "PRE_RETIREMENT"
}

/**
 * Risk level classification
 */
export enum RiskLevel {
  HIGH_RISK = "HIGH_RISK",
  MODERATE_RISK = "MODERATE_RISK",
  LOW_RISK = "LOW_RISK",
  PROTECTED = "PROTECTED"
}

/**
 * Recommended insurance coverage based on user information
 */
export interface RecommendedCoverage {
  lifeTPD: number;
  criticalIllness: number;
}

/**
 * Insurance gaps calculation result
 */
export interface InsuranceGaps {
  lifeGap: number;
  lifeGapPercentage: number;
  ciGap: number;
  ciGapPercentage: number;
}

/**
 * Protection score calculation
 */
export interface ProtectionScores {
  lifeScore: number;
  ciScore: number;
  overallScore: number;
  weightedScore?: number;
  riskLevel: RiskLevel;
}

/**
 * Prioritization of insurance gaps
 */
export interface GapPriority {
  prioritizeCI: boolean;
  cIPriorityScore: number;
  lifePriorityScore: number;
  reason: string;
}

/**
 * Complete insurance gap analysis result
 */
export interface InsuranceGapAnalysis {
  userInfo: UserInfo;
  lifeStage: LifeStage;
  recommendedCoverage: RecommendedCoverage;
  gaps: InsuranceGaps;
  scores: ProtectionScores;
  priority: GapPriority;
  adjustedRiskLevel: RiskLevel;
  summary: string;
} 