import React from 'react';

const VerificationItem = ({ type, title, description, status, onUpload, onView }) => {
  const getIcon = () => {
    switch (type) {
      case 'photoId':
        return (
          <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
        );
      case 'nationalInsurance':
        return (
          <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m-6-8h6M9 20l3-3m0 0l3 3m-3-3v7m6-10v2a4 4 0 01-4 4H9a4 4 0 01-4-4V4h18v5a2 2 0 01-2 2h-3.5a2 2 0 01-1.93-1.46l-.7-2.55a1 1 0 00-.95-.69H9.45a1 1 0 00-.95.69L7.5 9.54A2 2 0 015.57 11H5a2 2 0 01-2-2V5a3 3 0 013-3h12a3 3 0 013 3v4a1 1 0 01-1 1h-1a1 1 0 01-1-1V8a1 1 0 011-1h.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v2a.5.5 0 00.5.5H7a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V5" />
          </svg>
        );
      case 'references':
        return (
          <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'rightToWork':
        return (
          <svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'verified':
        return (
          <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Locked</span>
          </div>
        );
      case 'pending':
        return (
          <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Pending</span>
          </div>
        );
      case 'required':
      default:
        return (
          <div className="flex items-center text-gray-500 px-3 py-1 rounded-md text-sm">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Required</span>
          </div>
        );
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center">
          {getIcon()}
          <h3 className="ml-2 text-lg font-medium text-gray-900">{title}</h3>
        </div>
        {getStatusBadge()}
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <div className="mt-auto">
        {status === 'required' ? (
          <button
            onClick={onUpload}
            className="w-full py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-blue-800 transition duration-200"
          >
            Upload Document
          </button>
        ) : (
          <button
            onClick={onView}
            className="w-full py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition duration-200"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default VerificationItem;
