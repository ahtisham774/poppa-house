import React from 'react';

const CalculatorInput = ({ label, value, onChange, type = 'text', placeholder, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        value={value}
        min={0}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
     
    </div>
  );
};

export default CalculatorInput;