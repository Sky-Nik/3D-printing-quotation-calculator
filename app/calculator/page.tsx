import Calculator from '../components/Calculator';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            3D Printing Quotation Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate accurate quotes for your 3D printing projects
          </p>
        </div>
        
        <Calculator />
      </div>
    </div>
  );
}
