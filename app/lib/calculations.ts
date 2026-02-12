// Calculation functions for 3D printing quotations

export interface CalculationInputs {
  // Material
  materialDensity: number; // g/cm³
  materialCostPerKg: number; // USD per kg
  
  // Model specifications
  modelVolume: number; // cm³
  supportVolume: number; // cm³
  infillPercentage: number; // 0-100
  
  // Printer settings
  printTime: number; // hours
  printerCostPerHour: number; // USD per hour
  electricityCostPerKwh: number; // USD per kWh
  printerPowerConsumption: number; // watts
  
  // Business parameters
  laborCostPerHour: number; // USD per hour
  markupPercentage: number; // 0-100
  additionalCosts: number; // USD
}

export interface CalculationResults {
  materialCost: number;
  electricityCost: number;
  laborCost: number;
  printerCost: number;
  additionalCosts: number;
  totalCost: number;
  markup: number;
  finalPrice: number;
}

/**
 * Calculate material cost based on volume, density, and cost per kg
 */
export function calculateMaterialCost(
  modelVolume: number,
  supportVolume: number,
  infillPercentage: number,
  density: number,
  costPerKg: number
): number {
  // Material weight in grams
  const materialWeight = (modelVolume * (infillPercentage / 100) + supportVolume) * density;
  // Convert to kg and multiply by cost
  return (materialWeight / 1000) * costPerKg;
}

/**
 * Calculate electricity cost based on print time, power consumption, and electricity rate
 */
export function calculateElectricityCost(
  printTime: number,
  powerConsumption: number,
  electricityRate: number
): number {
  // Convert watts to kilowatts and multiply by hours and rate
  return (printTime * powerConsumption * electricityRate) / 1000;
}

/**
 * Calculate labor cost based on print time and labor rate
 */
export function calculateLaborCost(
  printTime: number,
  laborRate: number
): number {
  return printTime * laborRate;
}

/**
 * Calculate printer cost based on print time and printer cost per hour
 */
export function calculatePrinterCost(
  printTime: number,
  printerCostPerHour: number
): number {
  return printTime * printerCostPerHour;
}

/**
 * Calculate total cost and final price with markup
 */
export function calculateTotalAndFinal(
  materialCost: number,
  electricityCost: number,
  laborCost: number,
  printerCost: number,
  additionalCosts: number,
  markupPercentage: number
): { totalCost: number; markup: number; finalPrice: number } {
  const totalCost = materialCost + electricityCost + laborCost + printerCost + additionalCosts;
  const markup = totalCost * (markupPercentage / 100);
  const finalPrice = totalCost + markup;
  
  return { totalCost, markup, finalPrice };
}

/**
 * Main calculation function that computes all costs
 */
export function calculateQuote(inputs: CalculationInputs): CalculationResults {
  const materialCost = calculateMaterialCost(
    inputs.modelVolume,
    inputs.supportVolume,
    inputs.infillPercentage,
    inputs.materialDensity,
    inputs.materialCostPerKg
  );
  
  const electricityCost = calculateElectricityCost(
    inputs.printTime,
    inputs.printerPowerConsumption,
    inputs.electricityCostPerKwh
  );
  
  const laborCost = calculateLaborCost(
    inputs.printTime,
    inputs.laborCostPerHour
  );
  
  const printerCost = calculatePrinterCost(
    inputs.printTime,
    inputs.printerCostPerHour
  );
  
  const { totalCost, markup, finalPrice } = calculateTotalAndFinal(
    materialCost,
    electricityCost,
    laborCost,
    printerCost,
    inputs.additionalCosts,
    inputs.markupPercentage
  );
  
  return {
    materialCost,
    electricityCost,
    laborCost,
    printerCost,
    additionalCosts: inputs.additionalCosts,
    totalCost,
    markup,
    finalPrice,
  };
}
