// src/components/MaintenanceService/FormField.jsx
import React from 'react'
import Address from '../../../common/address'
import dayjs from 'dayjs'
import { DatePicker } from 'antd'

const FormField = ({ field, form, value, onChange }) => {
  const {
    type = 'text',
    name,
    label,
    placeholder = '',
    options = [],
    required = false,
    rows = 3,
    min,
    max,
    step,
    disabled = false,
    className = ''
  } = field

  const handleChange = e => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    onChange(val)
  }

  const renderField = () => {
    switch (type) {
      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            required={required}
            disabled={disabled}
            className='w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#131e47] focus:border-[#131e47]'
          >
            <option value=''>{placeholder}</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      case 'address':
        return <Address allowExpand form={form} />
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            rows={rows}
            className='w-full border  rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#131e47] focus:border-[#131e47]'
          />
        )
      case 'checkbox':
        return (
          <label className='inline-flex items-start cursor-pointer'>
            <input
              type='checkbox'
              name={name}
              checked={!!value}
              onChange={handleChange}
              disabled={disabled}
              className='relative shrink-0 mr-2 mt-1 appearance-none size-4 border-2 border-[#131e47] rounded-full checked:bg-white focus:outline-none focus:ring-0 transition-colors duration-200'
              style={{
                backgroundImage: value
                  ? 'radial-gradient(circle, #131e47 0%, #131e47 40%, white 40%, white 100%)'
                  : 'none'
              }}
            />
            <span className='font-medium'>{label}</span>
          </label>
        )
      case 'radio':
        return (
          <label className='inline-flex items-center cursor-pointer'>
            <input
              type='radio'
              name={name}
              checked={!!value}
              onChange={handleChange}
              disabled={disabled}
              className='relative mr-2 appearance-none size-4 border-2 border-[#131e47] rounded-full checked:bg-white focus:outline-none focus:ring-0 transition-colors duration-200'
              style={{
                backgroundImage: value
                  ? 'radial-gradient(circle, #131e47 0%, #131e47 40%, white 40%, white 100%)'
                  : 'none'
              }}
            />
            <span className='font-medium'>{label}</span>
          </label>
        )
      case 'date':
        return (
          <DatePicker
            name={name}
            className='w-full p-1.5 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            value={value ? dayjs(value) : null}
            onChange={date => {
              const formattedDate = date ? date.format('YYYY-MM-DD') : ''
              onChange(formattedDate)
            }}
            placeholder={placeholder}
            format='YYYY-MM-DD'
          />
        )
      case 'number':
        return (
          <input
            type='number'
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            className='w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#131e47] focus:border-[#131e47]'
          />
        )
      case 'file':
        return (
          <div className='w-full'>
            <div className='border-2 border-dashed border-gray-300 rounded-lg p-6 text-center'>
              <input
                type='file'
                id={name}
                name={name}
                onChange={handleChange}
                required={required}
                disabled={disabled}
                className='hidden'
              />
              <label htmlFor={name} className='cursor-pointer'>
                <div className='flex flex-col items-center'>
                  <svg
                    className='w-10 h-10 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                    ></path>
                  </svg>
                  <p className='mt-2 text-sm text-gray-500'>
                    Drag and drop or click to browse files
                  </p>
                </div>
              </label>
            </div>
            {value && (
              <p className='mt-2 text-sm text-gray-500'>
                {typeof value === 'string' ? value : value.name}
              </p>
            )}
          </div>
        )
      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className='w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#131e47] focus:border-[#131e47]'
          />
        )
    }
  }

  return (
    <div className={`mb-4 ${className}`}>
      {type !== 'checkbox' && type !== 'radio' && label && (
        <label
          htmlFor={name}
          className='block mb-1 text-sm font-medium text-[#131e47]'
        >
          {label}
          {/* {required && <span className="text-red-500 ml-1">*</span>} */}
        </label>
      )}
      {renderField()}
    </div>
  )
}

export default FormField
