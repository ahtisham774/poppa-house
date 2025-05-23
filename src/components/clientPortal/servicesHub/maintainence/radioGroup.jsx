// src/components/MaintenanceService/RadioGroup.jsx
import React from 'react'
import FormField from './formField'
import CheckboxGroup from './checkboxGroup'
import DynamicRoomTypes from './roomTypeSection'
import RenderFields from './renderFields'

const RadioGroup = ({ field, formData, onChange }) => {
  const {
    name,
    label,
    isList,
    full,
    description,
    options,
    inline = false
  } = field

  const handleRadioChange = value => {
    console.log('handleRadioChange', name, value)
    onChange({ [name]: value })
  }

  // console.log('formData Radio', formData[name],label, options.filter(option => option.value === formData[name])[0]?.subFields);

  return (
    <div className={`mb-4 ${full ? 'col-span-2' : ''} `}>
      {label && (
        <label className='block mb-2  font-medium text-[#131e47]'>
          {label}
        </label>
      )}
      {description && (
        <p className='text-xs text-gray-500 mb-2'>{description}</p>
      )}

      <div className={`${inline ? 'flex flex-wrap gap-4' : 'space-y-2'}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`${inline ? '' : 'mb-2'} ${
              isList ? 'border-2 rounded-lg p-4' : ''
            } `}
          >
            <label className='inline-flex items-center cursor-pointer'>
              <input
                type='radio'
                name={name}
                checked={formData[name] === option.value}
                onChange={() => handleRadioChange(option.value)}
                className='relative mr-2 appearance-none size-4 border-2 border-[#131e47] rounded-full checked:bg-white focus:outline-none focus:ring-0 transition-colors duration-200'
                style={{
                  backgroundImage:
                    formData[name] === option.value
                      ? 'radial-gradient(circle, #131e47 0%, #131e47 40%, white 40%, white 100%)'
                      : 'none'
                }}
              />
              <div className={`${isList ? 'flex flex-col gap-1' : ''}`}>
                <span className='font-medium text-sm'>{option.label}</span>
                {isList && option.description && (
                  <p className='text-xs text-gray-500 mb-2'>
                    {option.description}
                  </p>
                )}
              </div>
            </label>

            {/* Render sub-fields if this option is selected */}
          </div>
        ))}
      </div>
      {formData[name] &&
        options.filter(option => option.value === formData[name])[0]
          ?.subFields && (
          <div className=' mt-2 space-y-2'>
            {options
              .filter(option => option.value === formData[name])[0]
              ?.subFields?.map((subField, subIndex) => {
                //  switch (subField.type) {
                //   case 'checkbox-group':
                //     return (
                //       <CheckboxGroup
                //         key={subIndex}
                //         field={subField}
                //         formData={formData}
                //         onNestedChange={(optionName, subFieldName, value) => onChange(optionName, { ...formData[optionName], [subFieldName]: value })}
                //       />
                //     )
                //     case 'room-type':
                //       return (
                //         <DynamicRoomTypes formData={formData} onChange={onChange} />
                //       )
                //   case 'radio-group':
                //     return (
                //       <RadioGroup
                //         key={subIndex}
                //         field={subField}
                //         formData={formData}
                //         onChange={
                //           (value) => onChange(subField.name, value)
                //         }
                //       />
                //     )
                //   default:
                //     return (
                //       <FormField
                //       key={subIndex}
                //       field={subField}
                //       value={formData[subField.name] || ''}
                //       onChange={(value) => onChange(subField.name, value)}
                //       />
                //     )
                // }
                return (
                  <RenderFields
                    key={subIndex}
                    index={subIndex}
                    step={field}
                    formData={formData}
                    field={subField}
                    onChange={onChange}
                  />
                )
              })}
          </div>
        )}
    </div>
  )
}

export default RadioGroup
