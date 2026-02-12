// Material types and constants for 3D printing

export interface Material {
  name: string;
  density: number; // g/cm³
  defaultCostPerKg: number; // USD per kg
}

export const MATERIALS: Record<string, Material> = {
  PLA: {
    name: 'PLA (Polylactic Acid)',
    density: 1.24,
    defaultCostPerKg: 20,
  },
  ABS: {
    name: 'ABS (Acrylonitrile Butadiene Styrene)',
    density: 1.04,
    defaultCostPerKg: 25,
  },
  PETG: {
    name: 'PETG (Polyethylene Terephthalate Glycol)',
    density: 1.27,
    defaultCostPerKg: 30,
  },
  TPU: {
    name: 'TPU (Thermoplastic Polyurethane)',
    density: 1.21,
    defaultCostPerKg: 40,
  },
  Resin: {
    name: 'Resin',
    density: 1.15,
    defaultCostPerKg: 50,
  },
  Nylon: {
    name: 'Nylon',
    density: 1.14,
    defaultCostPerKg: 35,
  },
};

export const MATERIAL_OPTIONS = Object.keys(MATERIALS);
