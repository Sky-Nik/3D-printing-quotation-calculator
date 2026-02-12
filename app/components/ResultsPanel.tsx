'use client';

import React from 'react';
import { CalculationResults } from '../lib/calculations';

interface ResultsPanelProps {
  results: CalculationResults | null;
  onPrint: () => void;
}

export default function ResultsPanel({ results, onPrint }: ResultsPanelProps) {
  if (!results) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quotation Results</h3>
        <p className="text-gray-500 text-center py-8">
          Fill in the calculator form to see the quotation breakdown
        </p>
      </div>
    );
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  const costItems = [
    { label: 'Material Cost', value: results.materialCost, color: 'bg-blue-500' },
    { label: 'Electricity Cost', value: results.electricityCost, color: 'bg-green-500' },
    { label: 'Labor Cost', value: results.laborCost, color: 'bg-yellow-500' },
    { label: 'Printer Cost', value: results.printerCost, color: 'bg-purple-500' },
    { label: 'Additional Costs', value: results.additionalCosts, color: 'bg-pink-500' },
  ];

  const getPercentage = (value: number, total: number) => {
    return total > 0 ? (value / total) * 100 : 0;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Quotation Results</h3>
        <button
          onClick={onPrint}
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
        >
          Print Quote
        </button>
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-3">
        <h4 className="font-medium text-gray-700">Cost Breakdown</h4>
        {costItems.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{item.label}</span>
              <span className="font-medium text-gray-800">{formatCurrency(item.value)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${item.color} h-2 rounded-full transition-all duration-300`}
                style={{
                  width: `${Math.min(getPercentage(item.value, results.totalCost), 100)}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-base">
          <span className="text-gray-700">Subtotal</span>
          <span className="font-semibold text-gray-800">{formatCurrency(results.totalCost)}</span>
        </div>
        <div className="flex justify-between text-base">
          <span className="text-gray-700">Markup</span>
          <span className="font-semibold text-gray-800">{formatCurrency(results.markup)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold border-t pt-2">
          <span className="text-gray-900">Final Price</span>
          <span className="text-blue-600">{formatCurrency(results.finalPrice)}</span>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 rounded-md p-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Quote Summary:</span> This quotation includes all 
          material, electricity, labor, and printer costs with the applied markup. 
          Final price: <span className="font-bold text-blue-600">{formatCurrency(results.finalPrice)}</span>
        </p>
      </div>
    </div>
  );
}
