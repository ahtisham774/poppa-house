// src/components/MaintenanceService/FormStep.jsx
import React from 'react'
import FormField from './formField'
import FormSection from './formSection'
import CheckboxGroup from './checkboxGroup'
import RadioGroup from './radioGroup'
import DynamicRoomTypes from './roomTypeSection'

const FormStep = ({ index, step, formData, onChange, serviceType }) => {
  const handleChange = (name, value) => {
    onChange({ [name]: value })
  }

  const handleNestedChange = (parentKey, childKey, value) => {
    const updatedParent = {
      ...(formData[parentKey] || {}),
      [childKey]: value
    }
    onChange({ [parentKey]: updatedParent })
  }

  return (
    <div>
      <div className='mb-6'>
        <h3 className='text-lg font-semibold text-[#131e47] mb-2'>
          {index}.{step.title}
        </h3>
        {step.description && (
          <p className='text-sm text-gray-600'>{step.description}</p>
        )}
      </div>

      {step.sections?.map((section, sectionIndex) => (
        <FormSection
          key={sectionIndex}
          section={section}
          formData={formData}
          onChange={handleChange}
          onNestedChange={handleNestedChange}
          serviceType={serviceType}
        />
      ))}
      <div
        className={`grid grid-cols-1 ${
          step.inline ? 'sm:grid-cols-2' : ''
        } gap-4 mb-4`}
      >
        {step.fields?.map((field, fieldIndex) => {
          switch (field.type) {
            case 'checkbox-group':
              return (
                <CheckboxGroup
                  key={fieldIndex}
                  field={field}
                  formData={formData}
                  onChange={handleChange}
                  onNestedChange={handleNestedChange}
                />
              )
            case 'radio-group':
              return (
                <RadioGroup
                  key={fieldIndex}
                  field={field}
                  formData={formData}
                  onChange={handleChange}
                />
              )
            case 'room-type':
              return (
                <DynamicRoomTypes formData={formData} onChange={onChange} />
              )
            case 'label':
              return (
                <div key={fieldIndex} className='col-span-1 sm:col-span-2'>
                  <h4 className='text-lg font-semibold text-[#131e47] mb-2'>
                    {field.label}
                  </h4>
                  <p className='text-sm text-gray-600'>{field.description}</p>
                </div>
              )
            default:
              return (
                <FormField
                  key={fieldIndex}
                  field={{
                    ...field,
                    className: `${
                      (step.inline && field.type == 'textarea') || field.full
                        ? 'sm:col-span-2'
                        : ''
                    }`
                  }}
                  value={formData[field.name] || ''}
                  onChange={value => handleChange(field.name, value)}
                />
              )
          }
        })}
      </div>
    </div>
  )
}

export default FormStep
