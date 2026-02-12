'use client';

import React, { useState, useEffect } from 'react';
import MaterialSelect from './MaterialSelect';
import ResultsPanel from './ResultsPanel';
import { calculateQuote, CalculationInputs, CalculationResults } from '../lib/calculations';

export default function Calculator() {
  // Material state
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [materialDensity, setMaterialDensity] = useState(0);
  const [materialCostPerKg, setMaterialCostPerKg] = useState(0);

  // Model specifications
  const [modelVolume, setModelVolume] = useState(0);
  const [supportVolume, setSupportVolume] = useState(0);
  const [infillPercentage, setInfillPercentage] = useState(20);
  const [layerHeight, setLayerHeight] = useState(0.2);

  // Printer settings
  const [printTime, setPrintTime] = useState(0);
  const [printerCostPerHour, setPrinterCostPerHour] = useState(5);
  const [electricityCostPerKwh, setElectricityCostPerKwh] = useState(0.12);
  const [printerPowerConsumption, setPrinterPowerConsumption] = useState(150);

  // Business parameters
  const [laborCostPerHour, setLaborCostPerHour] = useState(15);
  const [markupPercentage, setMarkupPercentage] = useState(30);
  const [additionalCosts, setAdditionalCosts] = useState(0);

  // Results
  const [results, setResults] = useState<CalculationResults | null>(null);

  // Calculate whenever inputs change
  useEffect(() => {
    if (selectedMaterial && materialDensity > 0 && printTime > 0 && modelVolume > 0) {
      const inputs: CalculationInputs = {
        materialDensity,
        materialCostPerKg,
        modelVolume,
        supportVolume,
        infillPercentage,
        printTime,
        printerCostPerHour,
        electricityCostPerKwh,
        printerPowerConsumption,
        laborCostPerHour,
        markupPercentage,
        additionalCosts,
      };

      const calculatedResults = calculateQuote(inputs);
      setResults(calculatedResults);
    }
  }, [
    selectedMaterial,
    materialDensity,
    materialCostPerKg,
    modelVolume,
    supportVolume,
    infillPercentage,
    printTime,
    printerCostPerHour,
    electricityCostPerKwh,
    printerPowerConsumption,
    laborCostPerHour,
    markupPercentage,
    additionalCosts,
  ]);

  const handleReset = () => {
    setSelectedMaterial('');
    setMaterialDensity(0);
    setMaterialCostPerKg(0);
    setModelVolume(0);
    setSupportVolume(0);
    setInfillPercentage(20);
    setLayerHeight(0.2);
    setPrintTime(0);
    setPrinterCostPerHour(5);
    setElectricityCostPerKwh(0.12);
    setPrinterPowerConsumption(150);
    setLaborCostPerHour(15);
    setMarkupPercentage(30);
    setAdditionalCosts(0);
    setResults(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Calculator Form */}
      <div className="space-y-6">
        {/* Material Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <MaterialSelect
            selectedMaterial={selectedMaterial}
            onMaterialChange={setSelectedMaterial}
            onDensityChange={setMaterialDensity}
            onCostPerKgChange={setMaterialCostPerKg}
            density={materialDensity}
            costPerKg={materialCostPerKg}
          />
        </div>

        {/* Model Specifications */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Model Specifications</h3>
          
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <p className="text-sm text-gray-600">
              📁 File upload: STL/OBJ files supported (placeholder)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="modelVolume" className="block text-sm font-medium text-gray-700 mb-1">
                Model Volume (cm³) *
              </label>
              <input
                type="number"
                id="modelVolume"
                value={modelVolume}
                onChange={(e) => setModelVolume(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.1"
                required
              />
            </div>

            <div>
              <label htmlFor="supportVolume" className="block text-sm font-medium text-gray-700 mb-1">
                Support Volume (cm³)
              </label>
              <input
                type="number"
                id="supportVolume"
                value={supportVolume}
                onChange={(e) => setSupportVolume(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.1"
              />
            </div>

            <div>
              <label htmlFor="infillPercentage" className="block text-sm font-medium text-gray-700 mb-1">
                Infill Percentage (%) *
              </label>
              <input
                type="number"
                id="infillPercentage"
                value={infillPercentage}
                onChange={(e) => setInfillPercentage(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max="100"
                step="1"
                required
              />
            </div>

            <div>
              <label htmlFor="layerHeight" className="block text-sm font-medium text-gray-700 mb-1">
                Layer Height (mm)
              </label>
              <input
                type="number"
                id="layerHeight"
                value={layerHeight}
                onChange={(e) => setLayerHeight(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Printer Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Printer Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="printTime" className="block text-sm font-medium text-gray-700 mb-1">
                Print Time (hours) *
              </label>
              <input
                type="number"
                id="printTime"
                value={printTime}
                onChange={(e) => setPrintTime(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.1"
                required
              />
            </div>

            <div>
              <label htmlFor="printerCostPerHour" className="block text-sm font-medium text-gray-700 mb-1">
                Printer Cost per Hour ($)
              </label>
              <input
                type="number"
                id="printerCostPerHour"
                value={printerCostPerHour}
                onChange={(e) => setPrinterCostPerHour(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label htmlFor="electricityCostPerKwh" className="block text-sm font-medium text-gray-700 mb-1">
                Electricity Cost per kWh ($)
              </label>
              <input
                type="number"
                id="electricityCostPerKwh"
                value={electricityCostPerKwh}
                onChange={(e) => setElectricityCostPerKwh(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label htmlFor="printerPowerConsumption" className="block text-sm font-medium text-gray-700 mb-1">
                Printer Power (watts)
              </label>
              <input
                type="number"
                id="printerPowerConsumption"
                value={printerPowerConsumption}
                onChange={(e) => setPrinterPowerConsumption(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="1"
              />
            </div>
          </div>
        </div>

        {/* Business Parameters */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Business Parameters</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="laborCostPerHour" className="block text-sm font-medium text-gray-700 mb-1">
                Labor Cost per Hour ($)
              </label>
              <input
                type="number"
                id="laborCostPerHour"
                value={laborCostPerHour}
                onChange={(e) => setLaborCostPerHour(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label htmlFor="markupPercentage" className="block text-sm font-medium text-gray-700 mb-1">
                Markup Percentage (%)
              </label>
              <input
                type="number"
                id="markupPercentage"
                value={markupPercentage}
                onChange={(e) => setMarkupPercentage(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max="1000"
                step="1"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="additionalCosts" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Costs/Fees ($)
              </label>
              <input
                type="number"
                id="additionalCosts"
                value={additionalCosts}
                onChange={(e) => setAdditionalCosts(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleReset}
            className="flex-1 px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors font-medium"
          >
            Reset Calculator
          </button>
        </div>
      </div>

      {/* Results Panel */}
      <div className="lg:sticky lg:top-6 h-fit">
        <ResultsPanel results={results} onPrint={handlePrint} />
      </div>
    </div>
  );
}
