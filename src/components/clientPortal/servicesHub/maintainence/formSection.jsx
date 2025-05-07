import CheckboxGroup from './checkboxGroup'
import FileUploadSection from './fileUploadSection'
import FormField from './formField'
import RadioGroup from './radioGroup'
import DynamicRoomTypes from './roomTypeSection'

const FormSection = ({
  section,
  formData,
  onChange,
  onNestedChange,
  serviceType
}) => {
  // Check if this section should be displayed based on conditions
  const shouldDisplay = () => {
    if (!section.conditions) return true

    return section.conditions.every(condition => {
      const { field, value, operator = 'equals' } = condition
      const fieldValue = formData[field]

      switch (operator) {
        case 'equals':
          return fieldValue === value
        case 'notEquals':
          return fieldValue !== value
        case 'contains':
          return Array.isArray(fieldValue) ? fieldValue.includes(value) : false
        case 'startsWith':
          return typeof fieldValue === 'string'
            ? fieldValue.startsWith(value)
            : false
        default:
          return true
      }
    })
  }

    const isSubmissionSection = section.type === "submission"

  if (!shouldDisplay()) return null;
  if (isSubmissionSection) {
    return (
      <FileUploadSection
        formData={formData}
        onChange={onChange}
        fields={section.fields}
        isSubscription={section.isSubscription || false}
        serviceType={serviceType}
      />
    )
  }
  return (
    <div className='mb-6'>
      {section.title && (
        <h4 className='text-md font-medium text-[#131e47] mb-2'>
          {section.title}
        </h4>
      )}

      {section.description && (
        <p className='text-sm text-gray-500 mb-3'>{section.description}</p>
      )}

      <div
        className={
          section.grid
            ? `grid grid-cols-1 md:grid-cols-${section.grid} gap-4`
            : ''
        }
      >
        {section.fields?.map((field, fieldIndex) => {
          switch (field.type) {
            case 'checkbox-group':
              return (
                <CheckboxGroup
                  key={fieldIndex}
                  field={field}
                  formData={formData}
                  onChange={onChange}
                  onNestedChange={onNestedChange}
                />
              )
            case 'radio-group':
              return (
                <RadioGroup
                  key={fieldIndex}
                  field={field}
                  formData={formData}
                  onChange={onChange}
                />
              )
            case 'label':
              return (
                <div key={fieldIndex} className='col-span-1 sm:col-span-2 mb-3'>
                  <h4 className='text-lg font-semibold text-[#131e47] mb-1'>
                    {field.label}
                  </h4>
                  <p className='text-sm text-gray-600'>{field.description}</p>
                </div>
              )
            case 'room-type':
              return (
                <DynamicRoomTypes formData={formData} onChange={onChange} />
              )
            default:
              // Handle conditional fields based on service type
              if (field.showFor && !field.showFor.includes(serviceType)) {
                return null
              }

              return (
                <FormField
                  key={fieldIndex}
                  field={field}
                  value={formData[field.name] || ''}
                  onChange={value => onChange(field.name, value)}
                />
              )
          }
        })}
      </div>
    </div>
  )
}

export default FormSection
