'use client'

import { useRef, useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import RenderFields from './renderFields'

const FileUploadSection = ({
  formData,
  fields,
  step,
  onChange,
  isSubscription,
  serviceType
}) => {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  // Handle file selection
  const handleFileSelect = e => {
    const files = Array.from(e.target.files)
    setSelectedFiles(files)
    onChange({ files: files })
  }

  // Handle drag events
  const handleDragEnter = e => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  // Handle browse files click
  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-lg p-8 mb-6 flex flex-col items-center justify-center cursor-pointer ${
          isDragging ? 'border-primary bg-blue-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
      >
        <input
          type='file'
          className='invisible'
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept='.pdf,.jpg,.jpeg,.png,.doc,.docx'
        />

        {selectedFile ? (
          <div className='text-center'>
            <div className='text-green-600 mb-2'>
              <svg
                className='h-12 w-12 mx-auto'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
            <p className='text-lg font-medium'>{selectedFile.name}</p>
            <p className='text-sm text-gray-500'>
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
            <button
              type='button'
              className='mt-3 text-sm text-primary hover:text-primary'
              onClick={e => {
                e.stopPropagation()
                setSelectedFile(null)
              }}
            >
              Change file
            </button>
          </div>
        ) : (
          <>
            <FiUpload className='h-12 w-12 text-gray-400 mb-3' />
            <h4 className='text-lg font-medium mb-1'>Upload your document</h4>
            <p className='text-sm text-gray-500 text-center mb-4'>
              Drag and drop or click to browse files
            </p>
            <button
              type='button'
              className='px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition-colors'
              onClick={e => {
                e.stopPropagation()
                handleBrowseClick()
              }}
            >
              Select Files
            </button>
          </>
        )}

        {selectedFiles.length > 0 && (
          <div className='mt-4 w-full'>
            <p className='text-sm font-medium text-gray-700 mb-2'>
              Selected files:
            </p>
            <ul className='text-sm text-gray-600'>
              {selectedFiles.map((file, index) => (
                <li key={index} className='mb-1'>
                  {file.name} ({(file.size / 1024).toFixed(1)} KB)
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        type='button'
        className='w-full bg-[#131e47] text-white py-3 rounded-lg font-medium mb-6'
      >
        Upload Document
      </button>

      {/* {showWarrantyOptions && (
        <div className='mb-6'>
          <p className='text-sm font-medium text-gray-700 mb-3'>
            Would you like to add a repair warranty for a follow-up check?
          </p>
          <div className='space-y-2'>
            <label className='flex items-center'>
              <input
                type='radio'
                name='warranty'
                checked={warrantyOption === 'yes'}
                onChange={() => handleWarrantyChange('yes')}
                className='h-4 w-4 text-[#131e47] border-gray-300 focus:ring-[#131e47]'
              />
              <span className='ml-2 text-sm text-gray-700'>
                Yes, 30-day warranty included
              </span>
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                name='warranty'
                checked={warrantyOption === 'no'}
                onChange={() => handleWarrantyChange('no')}
                className='h-4 w-4 text-[#131e47] border-gray-300 focus:ring-[#131e47]'
              />
              <span className='ml-2 text-sm text-gray-700'>No</span>
            </label>
          </div>
        </div>
      )} */}

      {fields &&
        fields.map((field, index) => {
          return (
            <RenderFields
              key={index}
              index={index}
              step={step}
              formData={formData}
              field={field}
              onChange={onChange}
            />
          )
        })}

      {serviceType === 'cleaning' && isSubscription && (
        <div className='bg-blue-50 p-4 rounded-md mb-6'>
          <p className='text-sm text-blue-800 font-medium'>Note:</p>
          <p className='text-sm text-blue-700'>
            By submitting this form, you are requesting a subscription cleaning
            service. Our team will review your details and contact you shortly
            with a quote and to confirm the subscription details.
          </p>
        </div>
      )}

      {serviceType === 'cleaning' && !isSubscription && (
        <div className='bg-blue-50 p-4 rounded-md mb-6'>
          <p className='text-sm text-blue-800 font-medium'>Note:</p>
          <p className='text-sm text-blue-700'>
            If we need to inspect the property before we can provide you with an
            accurate quote, we will send you a corresponding email within two
            working days.
          </p>
        </div>
      )}
    </div>
  )
}

export default FileUploadSection
