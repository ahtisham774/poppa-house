import React, { useState } from 'react';
import CalculatorInput from './calculatorInput';
import CalculateButton from './calculateButton';

const RentAffordabilityCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [affordableRent, setAffordableRent] = useState(null);

  const handleCalculate = () => {
    if (!monthlyIncome) return;
    
    // Calculate 30% of income as affordable rent
    const income = parseFloat(monthlyIncome);
    const rent = (income * 0.3).toFixed(2);
    setAffordableRent(rent);
  };

  return (
    <div>
      <p className="text-gray-500 mb-6">
        Find out how much rent you can afford based on your income, using the industry standard of allocating 30% of your gross monthly earnings.
      </p>
      
      <CalculatorInput
        label="Enter monthly income (£)"
        value={monthlyIncome}
        onChange={(e) => setMonthlyIncome(e.target.value)}
        type="number"
        placeholder="Enter monthly income"
         className='mb-4'
      />
      
      <CalculateButton onClick={handleCalculate} />
      
      {affordableRent !== null && (
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Recommended Maximum Rent (30% of income):</p>
          <p className="text-4xl font-bold text-navy-900">£{affordableRent}</p>
        </div>
      )}
    </div>
  );
};

export default RentAffordabilityCalculator;