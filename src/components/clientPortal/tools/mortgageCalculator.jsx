import React, { useState } from 'react';
import CalculatorInput from './calculatorInput';
import CalculateButton from './calculateButton';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleCalculate = () => {
    if (!loanAmount || !interestRate || !loanTerm) return;
    
    // Convert inputs to numbers
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const termMonths = parseFloat(loanTerm) * 12; // Term in months
    
    // Calculate monthly payment using mortgage formula
    if (rate === 0) {
      // If interest rate is 0, simple division
      setMonthlyPayment((principal / termMonths).toFixed(2));
    } else {
      // Standard mortgage formula: P * (r(1+r)^n) / ((1+r)^n - 1)
      const payment = principal * rate * Math.pow(1 + rate, termMonths) / (Math.pow(1 + rate, termMonths) - 1);
      setMonthlyPayment(payment.toFixed(2));
    }
  };

  return (
    <div>
      <p className="text-gray-500 mb-6">
        Our mortgage calculator estimates your monthly payments based on loan amount, interest rate, and term
      </p>
      
      <CalculatorInput
        label="Enter Loan Amount (£)"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        type="number"
        placeholder="Enter loan amount"
        className="mb-4"
      />
      
      <CalculatorInput
        label="Enter Annual Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        type="number"
        placeholder="Enter interest rate"
        className="mb-4"
      />
      
      <CalculatorInput
        label="Enter Loan Terms (Years)"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
        type="number"
        placeholder="Enter loan term"
        className="mb-4"
      />
      
      <CalculateButton onClick={handleCalculate} />
      
      {monthlyPayment !== null && (
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Monthly Mortgage Payment:</p>
          <p className="text-4xl font-bold text-navy-900">£{monthlyPayment}</p>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;