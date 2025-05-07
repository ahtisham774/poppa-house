import  { useState } from 'react';
import CalculatorInput from './calculatorInput';
import CalculateButton from './calculateButton';


const ROICalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [annualRental, setAnnualRental] = useState('');
  const [annualExpenses, setAnnualExpenses] = useState('');
  const [roi, setRoi] = useState(null);

  const handleCalculate = () => {
    if (!purchasePrice || !annualRental || !annualExpenses) return;
    
    const price = parseFloat(purchasePrice);
    const rental = parseFloat(annualRental);
    const expenses = parseFloat(annualExpenses);
    
    // Calculate net income
    const netIncome = rental - expenses;
    
    // Calculate ROI as percentage
    const roiValue = (netIncome / price) * 100;
    setRoi(roiValue.toFixed(2));
  };

  return (
    <div>
      <p className="text-gray-500 mb-6">
        Our ROI Calculator quickly helps property investors assess a property's profitability before deciding.
      </p>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-primary font-semibold mb-2">What is ROI in Property Investment?</h3>
        <p className="text-primary text-sm">
          ROI measures how much profit you make from an investment compared to the cost. It's usually expressed as a percentage. A higher ROI means a better return on your money.
        </p>
      </div>
      
      <CalculatorInput
        label="Enter Purchase Price (£)"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
        type="number"
        placeholder="Enter purchase price"
        className="mb-4"
      />
      
      <CalculatorInput
        label="Enter Annual Rental Income (£)"
        value={annualRental}
        onChange={(e) => setAnnualRental(e.target.value)}
        type="number"
        placeholder="Enter annual rental income"
        className="mb-4"
      />
      
      <CalculatorInput
        label="Enter Annual Expenses (£)"
        value={annualExpenses}
        onChange={(e) => setAnnualExpenses(e.target.value)}
        type="number"
        placeholder="Enter annual expenses"
        className="mb-4"
      />
      
      <CalculateButton onClick={handleCalculate} />
      
      {roi !== null && (
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Return on Investment:</p>
          <p className="text-4xl font-bold text-navy-900">{roi}%</p>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;