import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            3D Printing Quotation Calculator
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12">
            Professional quotation tool for accurate 3D printing cost estimates
          </p>

          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-2xl">
                    🎨
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Material Selection</h3>
                  <p className="text-gray-600">Choose from PLA, ABS, PETG, TPU, Resin, and Nylon</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white text-2xl">
                    📐
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Model Specifications</h3>
                  <p className="text-gray-600">Input volume, infill, layer height, and support material</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white text-2xl">
                    ⚙️
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Printer Settings</h3>
                  <p className="text-gray-600">Configure print time, power consumption, and costs</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white text-2xl">
                    💰
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Business Parameters</h3>
                  <p className="text-gray-600">Set labor costs, markup, and additional fees</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white text-2xl">
                    📊
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Detailed Breakdown</h3>
                  <p className="text-gray-600">View cost breakdown with visual progress bars</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-2xl">
                    🖨️
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Print Quotes</h3>
                  <p className="text-gray-600">Export and print professional quotations</p>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/calculator"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Launch Calculator →
          </Link>

          <div className="mt-16 text-blue-100">
            <p className="text-sm">
              Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
