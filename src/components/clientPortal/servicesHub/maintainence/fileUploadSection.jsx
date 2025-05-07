'use client'

import { useState } from 'react'
import RadioGroup from './radioGroup'
import CheckboxGroup from './checkboxGroup'

const FileUploadSection = ({
  formData,
  fields,
  onChange,
  isSubscription,
  serviceType
}) => {
  const [selectedFiles, setSelectedFiles] = useState([])

  const [warrantyOption, setWarrantyOption] = useState('')

  const handleFileChange = e => {
    const files = Array.from(e.target.files)
    setSelectedFiles(files)
    onChange({ photos: files })
  }





  const handleWarrantyChange = value => {
    setWarrantyOption(value)
    onChange({ warrantyOption: value })
  }

  // Determine if upload is mandatory based on service type


  // Determine if we need to show warranty options (only for repair service)
  const showWarrantyOptions = serviceType === 'repair'

 

  return (
    <div>
      <div className='border border-dashed border-gray-300 rounded-lg p-8 mb-6 flex flex-col items-center justify-center'>
        <svg
          width='42'
          height='41'
          viewBox='0 0 42 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.16667 40.6666C3.74583 40.6666 2.52994 40.1611 1.519 39.1502C0.508055 38.1392 0.00172222 36.9225 0 35.4999V30.3333C0 29.6013 0.248 28.9882 0.744 28.4939C1.24 27.9997 1.85311 27.7517 2.58333 27.7499C3.31356 27.7482 3.92753 27.9962 4.42525 28.4939C4.92297 28.9917 5.17011 29.6048 5.16667 30.3333V35.4999H36.1667V30.3333C36.1667 29.6013 36.4147 28.9882 36.9107 28.4939C37.4067 27.9997 38.0198 27.7517 38.75 27.7499C39.4802 27.7482 40.0942 27.9962 40.5919 28.4939C41.0896 28.9917 41.3368 29.6048 41.3333 30.3333V35.4999C41.3333 36.9208 40.8279 38.1375 39.8169 39.1502C38.806 40.1629 37.5892 40.6683 36.1667 40.6666H5.16667ZM18.0833 9.27911L13.2396 14.1229C12.7229 14.6395 12.1098 14.8875 11.4002 14.8669C10.6907 14.8462 10.0767 14.5767 9.55833 14.0583C9.08472 13.5416 8.83672 12.9388 8.81433 12.2499C8.79194 11.5611 9.03994 10.9583 9.55833 10.4416L18.8583 1.14161C19.1167 0.883274 19.3965 0.700719 19.6979 0.593941C19.9993 0.487164 20.3222 0.432914 20.6667 0.431192C21.0111 0.42947 21.334 0.483719 21.6354 0.593941C21.9368 0.704164 22.2167 0.886719 22.475 1.14161L31.775 10.4416C32.2917 10.9583 32.5397 11.5611 32.519 12.2499C32.4983 12.9388 32.2503 13.5416 31.775 14.0583C31.2583 14.5749 30.6452 14.8445 29.9357 14.8669C29.2261 14.8892 28.6121 14.6412 28.0938 14.1229L23.25 9.27911V27.7499C23.25 28.4819 23.002 29.0959 22.506 29.5919C22.01 30.0879 21.3969 30.335 20.6667 30.3333C19.9364 30.3316 19.3233 30.0836 18.8273 29.5893C18.3313 29.095 18.0833 28.4819 18.0833 27.7499V9.27911Z'
            fill='#B1B1B1'
          />
        </svg>

        <h4 className='text-lg font-medium text-[#131e47] mb-2'>
          Upload your files
        </h4>
        <p className='text-sm text-gray-500 mb-4'>
          Drag and drop or click to browse files
        </p>

        <label className='bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer'>
          Select Files
          <input
            type='file'
            multiple
            accept='image/*,video/*'
            onChange={handleFileChange}
            className='hidden'
          />
        </label>

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

      {showWarrantyOptions && (
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
      )}

      {fields &&
        fields.map((field, index) => {
          switch (field.type) {
            case 'checkbox-group':
              return (
                <CheckboxGroup
                  key={index}
                  field={field}
                  formData={formData}
                  onChange={
                    (name, value) => onChange(name, value)
                  }
                  onNestedChange={
                    (optionName, subFieldName, value) =>
                     {
                        console.log("optionName", optionName, "subFieldName", subFieldName, "value", value)
                        onChange(optionName, { ...formData[optionName], [subFieldName]: value })
                     }
                  }
                />
              )
            case 'radio-group':
              return (
                <RadioGroup
                  key={index}
                  field={field}
                  formData={formData}
                  onChange={
                    (name, value) => onChange(name, value)
                  }
                />
              )
           
            default:
              return null
          }
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
