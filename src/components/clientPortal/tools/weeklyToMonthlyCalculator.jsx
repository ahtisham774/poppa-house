import React, { useState } from 'react';
import CalculatorInput from './calculatorInput';
import CalculateButton from './calculateButton';

const WeeklyToMonthlyCalculator = () => {
  const [weeklyRent, setWeeklyRent] = useState('');
  const [monthlyRent, setMonthlyRent] = useState(null);

  const handleCalculate = () => {
    if (!weeklyRent) return;
    
    // Convert weekly to monthly (weekly × 52 ÷ 12)
    const weekly = parseFloat(weeklyRent);
    const monthly = (weekly * 52 / 12).toFixed(2);
    setMonthlyRent(monthly);
  };

  return (
    <div>
      <p className="text-gray-500 mb-6">
        Easily convert your weekly rent into a monthly figure with our calculator. This helps you plan your budget more effectively and compare rental costs on a monthly basis
      </p>
      
      <CalculatorInput
        label="Enter weekly rent (£)"
        value={weeklyRent}
        onChange={(e) => setWeeklyRent(e.target.value)}
        type="number"
        className='mb-4'
        placeholder="Enter weekly rent"
      />
      
      <CalculateButton onClick={handleCalculate} />
      
      {monthlyRent !== null && (
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Monthly Rent:</p>
          <p className="text-4xl font-bold text-navy-900">£{monthlyRent}</p>
        </div>
      )}
    </div>
  );
};

export default WeeklyToMonthlyCalculator;