import React, { useState } from 'react';

const VerificationModal = ({
  verification,
  selectedFiles,
  onClose,
  onSubmit,
  onFileChange,
  onRemoveFile,
  uploading,
  uploadProgress,
  uploadError
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  console.log('Verification Modal Rendered', verification);

  const getModalTitle = () => {
    return `${verification.label} Verification`;
  };

  const getFilePreview = (file) => {
    if (file.type.startsWith('image/')) {
      return (
        <img 
          src={URL.createObjectURL(file)} 
          alt="Preview" 
          className="h-20 w-20 object-cover rounded"
        />
      );
    }
    return (
      <div className="h-20 w-20 flex items-center justify-center bg-gray-100 rounded">
        <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </div>
    );
  };

  const renderFileInput = () => {
    if (verification.status !== 'required' && verification.status !== "not submitted") return null;
    
    return (
      <div className="mb-4">
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <svg className="h-12 w-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-lg font-medium text-gray-600">Upload your document</p>
            <p className="text-sm text-gray-500 mb-3">Drag and drop or click to browse files</p>
            <input
              type="file"
              id="documentUpload"
              className="hidden"
              onChange={onFileChange}
              accept={verification.accept}
              multiple={verification.multiple}
            />
            <label 
              htmlFor="documentUpload"
              className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-sm cursor-pointer"
            >
              Select Files
            </label>
          </div>
        </div>
        
        <div className="mt-2 text-sm text-gray-500 text-center">
          Accepted formats: {verification.accept.includes('image/*') ? 'JPG, PNG, ' : ''}
          {verification.accept.includes('application/pdf') ? 'PDF' : ''}
          (max 10MB each)
        </div>
      </div>
    );
  };

  const renderSelectedFiles = () => {
    if (!selectedFiles || (Array.isArray(selectedFiles) && selectedFiles.length === 0)) {
      return null;
    }

    const filesToDisplay = Array.isArray(selectedFiles) ? selectedFiles : [selectedFiles];
    
    return (
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Selected files:</h4>
        <div className="space-y-2">
          {filesToDisplay.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-2 border border-gray-200 rounded">
              <div className="flex items-center">
                {getFilePreview(file)}
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700  max-w-xs break-all">{file.name}</p>
                  <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onRemoveFile(file)}
                className="text-red-500 hover:text-red-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderUploadProgress = () => {
    if (!uploading) return null;
    
    return (
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Uploading...</span>
          <span>{Math.round(uploadProgress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full" 
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderError = () => {
    if (!uploadError) return null;
    
    return (
      <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded text-sm">
        {uploadError}
      </div>
    );
  };

  const renderConfirmation = () => {
    if (verification.status !== 'required' && verification.status != 'not submitted') return null;
    
    return (
      <div className="mt-4 flex items-start">
        <input
          type="checkbox"
          id="confirmCheck"
          className="mt-1 h-4 w-4 text-primary border-gray-300 rounded"
          checked={isConfirmed}
          onChange={() => setIsConfirmed(!isConfirmed)}
        />
        <label htmlFor="confirmCheck" className="ml-2 text-sm text-gray-600">
          I confirm that this document is authentic and accurate. I understand that providing false information may result in termination of my account.
        </label>
      </div>
    );
  };

  const renderSubmitButton = () => {
    if (verification.status !== 'required' && verification.status != 'not submitted') {
      return (
        <button
          onClick={onClose}
          className="w-full mt-4 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Close
        </button>
      );
    }

    const hasFiles = selectedFiles && 
      (Array.isArray(selectedFiles) ? selectedFiles.length > 0 : selectedFiles !== null);
    
    return (
      <button
        onClick={onSubmit}
        disabled={!hasFiles || !isConfirmed || uploading}
        className={`w-full mt-4 px-4 py-2 rounded-md font-medium ${
          (!hasFiles || !isConfirmed || uploading)
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-primary text-white hover:bg-primary/95'
        } transition-colors`}
      >
        {uploading ? 'Uploading...' : 'Submit Documents'}
      </button>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-wrap gap-2 items-center">
              <svg className="h-6 w-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
              <h2 className="text-xl font-semibold text-gray-900">{getModalTitle()}</h2>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <p className="font-medium mb-1">Status: {verification.status.charAt(0).toUpperCase() + verification.status.slice(1)}</p>
            <p className="text-gray-600 text-sm">{verification.description}</p>
            {verification.submittedDate && (
              <p className="text-gray-500 text-sm mt-1">Submitted on {verification.submittedDate}</p>
            )}
          </div>

          {verification.status === 'required' || verification.status === 'not submitted' && (
            <>
              {renderFileInput()}
              {renderSelectedFiles()}
              {renderUploadProgress()}
              {renderError()}
              {renderConfirmation()}
            </>
          )}

          {verification.status === 'pending' && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex flex-wrap gap-3">
                <div className="shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-yellow-700">
                    Your documents are under review. This process typically takes 1-3 business days.
                  </p>
                </div>
              </div>
            </div>
          )}

          {verification.status === 'verified' && (
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    Your documents have been verified and locked. No further changes can be made.
                  </p>
                </div>
              </div>
            </div>
          )}

          {renderSubmitButton()}
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;