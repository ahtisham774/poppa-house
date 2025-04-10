import React, { useState } from 'react';

const WithdrawModal = ({ onClose, onSubmit, maxAmount }) => {
  const [amount, setAmount] = useState('');
  const percentage = ((maxAmount / 800) * 100).toFixed(0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Withdraw Funds</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            Maximum withdrawal amount is £{maxAmount.toFixed(2)} ({percentage}% of available balance)
          </p>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Amount
            </label>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount to withdraw"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => onSubmit(amount)}
              className="bg-primary text-white px-6 py-2 rounded-md font-medium  transition duration-200"
            >
              Confirm Withdrawal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
