'use client';

import React from 'react';
import { MATERIALS, MATERIAL_OPTIONS } from '../lib/materials';

interface MaterialSelectProps {
  selectedMaterial: string;
  onMaterialChange: (material: string) => void;
  onDensityChange: (density: number) => void;
  onCostPerKgChange: (cost: number) => void;
  density: number;
  costPerKg: number;
}

export default function MaterialSelect({
  selectedMaterial,
  onMaterialChange,
  onDensityChange,
  onCostPerKgChange,
  density,
  costPerKg,
}: MaterialSelectProps) {
  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const material = e.target.value;
    onMaterialChange(material);
    
    if (material && MATERIALS[material]) {
      onDensityChange(MATERIALS[material].density);
      onCostPerKgChange(MATERIALS[material].defaultCostPerKg);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Material Selection</h3>
      
      <div>
        <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">
          Material Type *
        </label>
        <select
          id="material"
          value={selectedMaterial}
          onChange={handleMaterialChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Material</option>
          {MATERIAL_OPTIONS.map((material) => (
            <option key={material} value={material}>
              {MATERIALS[material].name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="costPerKg" className="block text-sm font-medium text-gray-700 mb-1">
            Material Cost per kg ($) *
          </label>
          <input
            type="number"
            id="costPerKg"
            value={costPerKg}
            onChange={(e) => onCostPerKgChange(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div>
          <label htmlFor="density" className="block text-sm font-medium text-gray-700 mb-1">
            Material Density (g/cm³) *
          </label>
          <input
            type="number"
            id="density"
            value={density}
            onChange={(e) => onDensityChange(parseFloat(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            step="0.01"
            required
          />
        </div>
      </div>
    </div>
  );
}
