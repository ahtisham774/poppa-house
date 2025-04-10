import React from 'react';

const AccountSecurity = ({ onResetPassword }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
      <div className="flex items-center mb-4">
        <svg
          className="h-5 w-5 mr-2 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <h2 className="text-lg font-semibold text-gray-900">Account Security</h2>
      </div>

      <div className="mt-4">
        <button
          onClick={onResetPassword}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          <svg
            className="h-5 w-5 mr-2 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
            />
          </svg>
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default AccountSecurity;
