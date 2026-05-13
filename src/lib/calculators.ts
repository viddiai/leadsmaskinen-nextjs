export interface CostInputs {
  numSalespeople: number;
  costPerHour: number;
  hoursPerWeek: number;
  inefficientPct: number; // 0–100
}

export interface CostOutputs {
  prospectingHoursPerYear: number;
  totalProspectingCost: number;
  wastedCost: number;
}

export function costOfBadProspecting(input: CostInputs): CostOutputs {
  const prospectingHoursPerYear =
    input.numSalespeople * input.hoursPerWeek * 52;
  const totalProspectingCost = prospectingHoursPerYear * input.costPerHour;
  const wastedCost = totalProspectingCost * (input.inefficientPct / 100);
  return { prospectingHoursPerYear, totalProspectingCost, wastedCost };
}

export interface OpportunityInputs {
  newDealsPerYear: number;
  avgOrderValue: number;
  marginPct: number; // 0–100
  customerLifetimeYears: number;
}

export interface OpportunityOutputs {
  salesYear1: number;
  grossMarginY1: number;
  ltvValue: number;
}

export function opportunityValue(input: OpportunityInputs): OpportunityOutputs {
  const salesYear1 = input.newDealsPerYear * input.avgOrderValue;
  const grossMarginY1 = salesYear1 * (input.marginPct / 100);
  const ltvValue = grossMarginY1 * input.customerLifetimeYears;
  return { salesYear1, grossMarginY1, ltvValue };
}
