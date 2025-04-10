import React, { useState } from 'react';

const VerificationModal = ({ verification, onClose, onSubmit }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('default'); // default, underReview, verified

  const getModalTitle = () => {
    if (verification.status === 'verified') {
      return `${verification.label} Verification`;
    } else if (verification.status === 'pending') {
      return `${verification.label} Verification`;
    } else {
      return `${verification.label} Verification`;
    }
  };

  const getModalContent = () => {
    if (verification.status === 'verified') {
      return (
        <div>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="font-medium mb-2">Status: Verified</p>
            <p className="text-[#888888]">Two professional references required</p>
            <p className="text-[#888888]">Verified on March 22, 2025</p>
          </div>
          <div className="bg-green-100 p-4 rounded-md">
            <div className="flex items-center mb-2">
              <svg className="h-5 w-5 text-green-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-green-700 font-medium">Document Verified and Locked</p>
            </div>
            <p className="text-green-700">This document has been verified and locked. No further changes can be made. If you need to update this information, please contact support.</p>
          </div>
        </div>
      );
    } else if (verification.status === 'pending') {
      return (
        <div>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="font-medium mb-2">Status: Pending</p>
            <p className="text-[#888888]">Two professional references required</p>
            <p className="text-[#888888]">Submitted on March 22, 2025</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md">
            <div className="flex items-center mb-2">
              <svg className="h-5 w-5 text-yellow-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-yellow-700 font-medium">Under Review</p>
            </div>
            <p className="text-yellow-700">Your document is currently being reviewed by our team. This process typically takes 1-3 business days.</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="font-medium mb-2">Status: Required</p>
            <p className="text-[#888888]">{verification.description}</p>
          </div>

          <div className="border-2 border-dashed border-gray-300 p-10 rounded-lg text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <svg className="h-12 w-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-lg font-medium text-[#888888]">Upload your document</p>
              <p className="text-sm text-gray-500 mb-3">Drag and drop or click to browse files</p>
              <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors text-sm">
                Select Files
              </button>
            </div>
          </div>

          <div className="mt-2 text-sm text-gray-500 text-center">
            Accepted formats: PDF, JPG, PNG (max 50MB)
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="confirmCheck"
              className="h-4 w-4 tebg-primary border-gray-300 rounded"
              checked={isConfirmed}
              onChange={() => setIsConfirmed(!isConfirmed)}
            />
            <label htmlFor="confirmCheck" className="ml-2 text-sm text-[#888888]">
              I confirm that this document is authentic and accurate. I understand that providing false information may result in termination of my account.
            </label>
          </div>
        </div>
      );
    }
  };

  const handleSubmit = () => {
    if (verification.status === 'required') {
      if (isConfirmed) {
        onSubmit();
      }
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <svg className="h-6 w-6 mr-2 text-[#888888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
              <h2 className="text-xl font-semibold text-gray-900">{getModalTitle()}</h2>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-[#888888]">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {getModalContent()}

          {verification.status === 'required' && (
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isConfirmed}
                className={`px-4 py-2 rounded-md font-medium ${
                  isConfirmed
                    ? 'bg-primary text-white hover:bg-primary/95'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } transition-colors`}
              >
                Submit Document
              </button>
            </div>
          )}

          {verification.status === 'pending' && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          )}

          {verification.status === 'verified' && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
