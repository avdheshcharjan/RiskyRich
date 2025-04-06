# Life Insurance Association (LIA) Singapore Guidelines

## Insurance Coverage Recommendations

According to the Life Insurance Association (LIA) of Singapore, these are the recommended insurance coverage amounts:

- **Life Insurance (Death/TPD)**: 9-10 times annual income
  $Coverage_{Life/TPD} = Annual Income \times (9 \text{ to } 10)$

- **Critical Illness Coverage**: 4 times annual income
  $Coverage_{CI} = Annual Income \times 4$

## Protection Gap Study Findings

The 2022 LIA Protection Gap Study found that economically active Singaporeans have:
- A 21% mortality protection gap
  $MortalityGap\% = 21\%$
  $Actual Coverage = (100\% - 21\%) = 79\%$ of recommended coverage

- A 74% critical illness protection gap
  $CIGap\% = 74\%$
  $Actual Coverage = (100\% - 74\%) = 26\%$ of recommended coverage

This means the average Singaporean has only about 26% of the critical illness coverage they need.

## Calculating Protection Gaps

To determine an individual's protection gap:

1. **Life/TPD Gap Calculation**:
   - Recommended coverage = Annual income × 9 (or 10)
     $Coverage_{Recommended} = Annual Income \times 9 \text{ (or } 10)$
   - Existing coverage = Total of all life insurance policies
     $Coverage_{Existing} = \sum_{i=1}^{n} Policy_i$
   - Gap = Recommended coverage - Existing coverage
     $Gap = Coverage_{Recommended} - Coverage_{Existing}$

2. **Critical Illness Gap Calculation**:
   - Recommended coverage = Annual income × 4
     $Coverage_{Recommended} = Annual Income \times 4$
   - Existing coverage = Total of all CI insurance policies
     $Coverage_{Existing} = \sum_{i=1}^{n} CI\_Policy_i$
   - Gap = Recommended coverage - Existing coverage
     $Gap = Coverage_{Recommended} - Coverage_{Existing}$

3. **Protection Score**:
   - Perfect Score = 100 (when existing coverage meets or exceeds recommended coverage)
   - Life Coverage Score = (Existing life coverage / Recommended life coverage) × 100 (max 100)
     $Score_{Life} = \min(100, \frac{Coverage_{Existing}}{Coverage_{Recommended}} \times 100)$
   - CI Coverage Score = (Existing CI coverage / Recommended CI coverage) × 100 (max 100)
     $Score_{CI} = \min(100, \frac{CI\_Coverage_{Existing}}{CI\_Coverage_{Recommended}} \times 100)$
   - Overall Protection Score = Average of Life Coverage Score and CI Coverage Score
     $Score_{Overall} = \frac{Score_{Life} + Score_{CI}}{2}$

## Risk Levels

Based on the protection score:
- **High Risk** (Score 0-30): Severely underinsured with major protection gaps
- **Moderate Risk** (Score 31-60): Significantly underinsured with substantial gaps
- **Low Risk** (Score 61-90): Partially protected but still has some coverage gaps
- **Protected** (Score 91-100): Well protected with minimal or no coverage gaps

Mathematically defined as:
$RiskLevel(Score) = \begin{cases}
\text{High Risk}, & \text{if } 0 \leq Score \leq 30 \\
\text{Moderate Risk}, & \text{if } 31 \leq Score \leq 60 \\
\text{Low Risk}, & \text{if } 61 \leq Score \leq 90 \\
\text{Protected}, & \text{if } 91 \leq Score \leq 100
\end{cases}$

## Factors Affecting Insurance Needs

Additional factors that may increase or decrease insurance needs:
- Number of dependents (children, elderly parents)
  $Adjustment_{Dependents} = Dependents \times Factor_{PerDependent}$
- Existing debts (mortgage, loans)
  $Coverage_{Additional} = \sum Outstanding\_Debts$
- Lifestyle expenses
- Emergency savings
  $Coverage_{Reduced} = Emergency\_Savings \times AdjustmentFactor$
- Specific health concerns or family medical history
- Career risks (hazardous occupations)

## Age-Specific Considerations

### Young Adults (20-35)
- Focus on building base coverage
- Consider critical illness protection early when premiums are low
- May need less coverage if no dependents
  $Multiplier_{Life} = \begin{cases}
  6-8, & \text{if no dependents} \\
  9-10, & \text{if dependents}
  \end{cases}$

### Middle-Age (36-50)
- Peak income and responsibility years
- Maximum protection needs typically required during this period
  $Multiplier_{Life} = 9-10$
  $Multiplier_{CI} = 4$
- Family protection is a priority

### Pre-Retirement (51-65)
- Decreasing coverage needs as dependents become independent
  $Multiplier_{Life} = 5-8$
- Increased focus on health insurance and retirement planning
- Critical illness coverage remains important 
  $Multiplier_{CI} = 3-4$ 