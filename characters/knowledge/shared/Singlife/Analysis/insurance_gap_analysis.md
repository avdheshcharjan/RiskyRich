# Insurance Gap Analysis Logic

## Protection Gap Calculation Framework

The Insurance Gap Analysis uses a systematic approach to determine insurance coverage gaps and risk levels, following these steps:

1. **Gather User Information**
   - Age
   - Annual income
   - Family situation (marital status, number of dependents)
   - Existing insurance coverage (life, TPD, critical illness)
   - Any special risk factors (health conditions, occupation)

2. **Calculate Recommended Coverage**
   - Life/TPD: Annual income × Income Multiplier
     $Recommended_{Life/TPD} = Annual Income \times Life Multiplier$
   - Critical Illness: Annual income × CI Multiplier
     $Recommended_{CI} = Annual Income \times CI Multiplier$

3. **Determine Protection Gaps**
   - Calculate difference between recommended and existing coverage
   - Express gaps in both monetary terms and percentage terms

4. **Compute Risk Scores**
   - Calculate coverage scores for each insurance type
   - Determine overall protection score
   - Classify risk level based on scores

5. **Generate Recommendations**
   - Prioritize gaps to address based on risk level
   - Suggest relevant products to close gaps
   - Provide actionable next steps

## Calculation Formulas

### Income Multipliers

| Life Stage | Life Insurance Multiplier | Critical Illness Multiplier |
|------------|---------------------------|----------------------------|
| Young Single (20-30) | 6-8× income | 3-4× income |
| Young Family (25-40) | 9-12× income | 4-5× income |
| Established Family (40-55) | 8-10× income | 4× income |
| Pre-Retirement (55-65) | 5-8× income | 3-4× income |

### Base Gap Calculation

For all insurance types:
```
Gap = Recommended Coverage - Existing Coverage
Gap Percentage = (Gap / Recommended Coverage) × 100%
```

Mathematically expressed:
$Gap = Coverage_{Recommended} - Coverage_{Existing}$
$Gap\% = \frac{Gap}{Coverage_{Recommended}} \times 100\%$

### Coverage Score Calculation

For each insurance type:
```
Coverage Score = (Existing Coverage / Recommended Coverage) × 100
```

Mathematically expressed:
$CoverageScore = \min(100, \frac{Coverage_{Existing}}{Coverage_{Recommended}} \times 100)$

Note: If Existing Coverage ≥ Recommended Coverage, then Coverage Score = 100

### Overall Protection Score

```
Overall Protection Score = (Life Coverage Score + CI Coverage Score) / 2
```

Mathematically expressed:
$ProtectionScore = \frac{CoverageScore_{Life} + CoverageScore_{CI}}{2}$

### Weighted Score Option

For more accurate assessment, scores can be weighted based on life stage and dependents:
```
Weight_Life = (Number of Dependents × 15) + 50
Weight_CI = 100 - Weight_Life

Overall Weighted Score = (Life Coverage Score × Weight_Life + CI Coverage Score × Weight_CI) / 100
```

Mathematically expressed:
$Weight_{Life} = (Dependents \times 15) + 50$
$Weight_{CI} = 100 - Weight_{Life}$
$WeightedScore = \frac{CoverageScore_{Life} \times Weight_{Life} + CoverageScore_{CI} \times Weight_{CI}}{100}$

## Risk Level Classification Logic

| Overall Score | Risk Level | Description |
|---------------|------------|-------------|
| 0-30 | High Risk | Severely underinsured with major protection gaps |
| 31-60 | Moderate Risk | Significantly underinsured with substantial gaps |
| 61-90 | Low Risk | Partially protected but still has some coverage gaps |
| 91-100 | Protected | Well protected with minimal or no coverage gaps |

Risk classification function:
$RiskLevel(Score) = \begin{cases}
\text{High Risk}, & \text{if } 0 \leq Score \leq 30 \\
\text{Moderate Risk}, & \text{if } 31 \leq Score \leq 60 \\
\text{Low Risk}, & \text{if } 61 \leq Score \leq 90 \\
\text{Protected}, & \text{if } 91 \leq Score \leq 100
\end{cases}$

## Additional Adjustment Factors

### Dependent Adjustment

The number of dependents increases risk level:
- No dependents: No adjustment
- 1-2 dependents: Risk level increases by 1 if gaps exist
- 3+ dependents: Risk level increases by 2 if gaps exist

Mathematically:
$Adjustment_{Dependents} = \begin{cases}
0, & \text{if } Dependents = 0 \\
1, & \text{if } 1 \leq Dependents \leq 2 \text{ and gaps exist} \\
2, & \text{if } Dependents \geq 3 \text{ and gaps exist}
\end{cases}$

### Age Adjustment

Age can increase risk urgency:
- Under 30: No adjustment
- 30-45: Critical illness risk increases if gaps exist
- 45+: Both life and critical illness risks increase if gaps exist

Mathematically:
$Adjustment_{Age} = \begin{cases}
0, & \text{if } Age < 30 \\
1 \text{ (for CI)}, & \text{if } 30 \leq Age \leq 45 \text{ and CI gaps exist} \\
1 \text{ (for Life & CI)}, & \text{if } Age > 45 \text{ and gaps exist}
\end{cases}$

### Special Circumstances Adjustment

- Single Income Household: Risk level increases by 1
- Existing Mortgage: Life coverage needs increase by outstanding mortgage amount
- Pre-existing Health Conditions: Critical illness risk level increases by 1

Mathematically:
$Adjustment_{Special} = \begin{cases}
1, & \text{if Single Income Household} \\
0, & \text{otherwise}
\end{cases}$

$Coverage_{Life} = Coverage_{Life} + Mortgage_{Outstanding}$

$Adjustment_{Health} = \begin{cases}
1 \text{ (for CI)}, & \text{if Pre-existing Conditions} \\
0, & \text{otherwise}
\end{cases}$

## Prioritization Logic

When multiple gaps exist but budget is limited, recommend closing gaps in this order:

1. **Critical Illness** gap if:
   - CI coverage is $0
   - Age is over 40
   - Family history of serious illness exists

2. **Life Insurance** gap if:
   - User has dependents
   - User is primary income earner
   - Mortgage or other large debts exist

3. **Other Insurance** gaps based on individual circumstances

Prioritization formula:
$Priority_{CI} = (CI_{Coverage} == 0) \times 5 + (Age > 40) \times 3 + (FamilyHistory) \times 3$
$Priority_{Life} = (Dependents > 0) \times 4 + (PrimaryIncome) \times 3 + (HasMortgage) \times 4$
$Recommendation = \max(Priority_{CI}, Priority_{Life})$

## Example Calculation

For a 35-year-old with $60,000 annual income, married with 2 children, and existing coverage of $100,000 life insurance and $0 critical illness:

1. **Recommended Coverage**:
   - Life/TPD: $60,000 × 10 = $600,000$
     $Recommended_{Life} = \$60,000 \times 10 = \$600,000$
   - Critical Illness: $60,000 × 4 = $240,000$
     $Recommended_{CI} = \$60,000 \times 4 = \$240,000$

2. **Protection Gaps**:
   - Life Insurance Gap: $600,000 - $100,000 = $500,000 (83.3% gap)$
     $Gap_{Life} = \$600,000 - \$100,000 = \$500,000$
     $Gap\%_{Life} = \frac{\$500,000}{\$600,000} \times 100\% = 83.3\%$
   - Critical Illness Gap: $240,000 - $0 = $240,000 (100% gap)$
     $Gap_{CI} = \$240,000 - \$0 = \$240,000$
     $Gap\%_{CI} = \frac{\$240,000}{\$240,000} \times 100\% = 100\%$

3. **Coverage Scores**:
   - Life Coverage Score: $(100,000 / 600,000) × 100 = 16.7$
     $CoverageScore_{Life} = \frac{\$100,000}{\$600,000} \times 100 = 16.7$
   - CI Coverage Score: $(0 / 240,000) × 100 = 0$
     $CoverageScore_{CI} = \frac{\$0}{\$240,000} \times 100 = 0$

4. **Protection Score**:
   - Overall Score: $(16.7 + 0) / 2 = 8.35$
     $ProtectionScore = \frac{16.7 + 0}{2} = 8.35$
   - Risk Level: High Risk (score < 30)
     $RiskLevel(8.35) = \text{High Risk}$

5. **Adjusted Risk Assessment**:
   - Dependent Adjustment: Risk increased due to 2 dependents
     $Adjustment_{Dependents} = 1$ (2 dependents with gaps)
   - Final Risk Assessment: High Risk
   - Prioritize Critical Illness coverage due to 100% gap

## Implementation Pseudo-code

```
function calculateInsuranceGaps(age, income, dependents, existingLifeCoverage, existingCICoverage) {
    // Determine multipliers based on age and dependents
    let lifeMultiplier, ciMultiplier;
    
    if (age < 30 && dependents == 0) {
        lifeMultiplier = 6;
        ciMultiplier = 3;
    } else if (age < 40 && dependents > 0) {
        lifeMultiplier = 10;
        ciMultiplier = 4;
    } else if (age < 55) {
        lifeMultiplier = 9;
        ciMultiplier = 4;
    } else {
        lifeMultiplier = 6;
        ciMultiplier = 3;
    }
    
    // Calculate recommended coverage
    const recommendedLifeCoverage = income * lifeMultiplier;
    const recommendedCICoverage = income * ciMultiplier;
    
    // Calculate gaps
    const lifeGap = Math.max(0, recommendedLifeCoverage - existingLifeCoverage);
    const ciGap = Math.max(0, recommendedCICoverage - existingCICoverage);
    
    // Calculate coverage scores
    const lifeScore = Math.min(100, (existingLifeCoverage / recommendedLifeCoverage) * 100);
    const ciScore = Math.min(100, (existingCICoverage / recommendedCICoverage) * 100);
    
    // Calculate overall protection score
    const overallScore = (lifeScore + ciScore) / 2;
    
    // Determine risk level
    let riskLevel;
    if (overallScore <= 30) {
        riskLevel = "High Risk";
    } else if (overallScore <= 60) {
        riskLevel = "Moderate Risk";
    } else if (overallScore <= 90) {
        riskLevel = "Low Risk";
    } else {
        riskLevel = "Protected";
    }
    
    // Apply dependent adjustment
    if (dependents >= 3 && overallScore < 90) {
        riskLevel = "High Risk";
    } else if (dependents >= 1 && overallScore < 90) {
        // Increase risk level by one step
        if (riskLevel == "Low Risk") riskLevel = "Moderate Risk";
        if (riskLevel == "Moderate Risk") riskLevel = "High Risk";
    }
    
    return {
        recommendedLifeCoverage,
        recommendedCICoverage,
        lifeGap,
        ciGap,
        lifeScore,
        ciScore,
        overallScore,
        riskLevel
    };
}
```

## Communicating Results to Users

When presenting results to users, follow these guidelines:

1. **Focus on the Positive**:
   - Frame as "You're X% protected" rather than "You're Y% at risk"
   - Acknowledge existing coverage before mentioning gaps

2. **Quantify Gaps Specifically**:
   - Use exact dollar amounts: "Your life insurance gap is approximately $500,000"
   - Explain what the gap means in practical terms

3. **Personalize the Risk Level**:
   - Explain why their specific situation contributes to the risk assessment
   - Connect risk level to life stage and family situation

4. **Give Clear Next Steps**:
   - Prioritize which gap to address first
   - Suggest specific products that match the gaps
   - Provide budget-friendly options if needed

5. **Visual Representations**:
   - Use visualization aids like progress bars or risk meters
   - Show before/after scenarios when addressing gaps 