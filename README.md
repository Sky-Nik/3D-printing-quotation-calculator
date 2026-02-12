# 3D Printing Quotation Calculator

A modern web application for calculating 3D printing quotations built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Material Selection**: Choose from multiple material types (PLA, ABS, PETG, TPU, Resin, Nylon) with automatic density and cost population
- **Model Specifications**: Input model volume, support volume, infill percentage, and layer height
- **Printer Settings**: Configure print time, printer costs, electricity costs, and power consumption
- **Business Parameters**: Set labor costs, markup percentage, and additional fees
- **Real-time Calculations**: Automatic quote updates as you type
- **Detailed Breakdown**: Visual cost breakdown with progress bars
- **Print/Export**: Export quotations for clients
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Frontend**: React 18+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Next.js built-in bundler

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Sky-Nik/3D-printing-quotation-calculator.git
cd 3D-printing-quotation-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
/app
  /calculator
    page.tsx          # Main calculator page
  /components
    Calculator.tsx    # Calculator form component
    ResultsPanel.tsx  # Results display component
    MaterialSelect.tsx # Material selection component
  /lib
    calculations.ts   # Calculation functions
    materials.ts      # Material presets/constants
  layout.tsx          # Root layout
  page.tsx            # Landing/home page
  globals.css         # Global styles
/public               # Static assets
```

## Calculation Formulas

### Material Cost
```
Material Cost = (Model Volume × Infill% + Support Volume) × Density × Material Cost per kg / 1000
```

### Electricity Cost
```
Electricity Cost = Print Time × Power Consumption × Electricity Rate / 1000
```

### Labor Cost
```
Labor Cost = Print Time × Labor Rate
```

### Printer Cost
```
Printer Cost = Print Time × Printer Cost per Hour
```

### Total Cost
```
Total Cost = Material Cost + Electricity Cost + Labor Cost + Printer Cost + Additional Fees
```

### Final Price
```
Final Price = Total Cost × (1 + Markup%)
```

## Usage

1. Navigate to the calculator page
2. Select a material type from the dropdown
3. Fill in all required fields (marked with *)
4. The quotation will update automatically as you type
5. View the detailed cost breakdown in the results panel
6. Click "Print Quote" to export the quotation

## Material Presets

The calculator comes with presets for common 3D printing materials:

- **PLA**: Density 1.24 g/cm³, ~$20/kg
- **ABS**: Density 1.04 g/cm³, ~$25/kg
- **PETG**: Density 1.27 g/cm³, ~$30/kg
- **TPU**: Density 1.21 g/cm³, ~$40/kg
- **Resin**: Density 1.15 g/cm³, ~$50/kg
- **Nylon**: Density 1.14 g/cm³, ~$35/kg

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.