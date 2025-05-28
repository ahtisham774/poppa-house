import FileUploadSection from './fileUploadSection'
import RenderFields from './renderFields'

const FormSection = ({
  section,
  formData,
  form,
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
        step={section}
        fields={section.fields}
        isSubscription={section.isSubscription || false}
        serviceType={serviceType}
      />
    )
  }
  return (
    <div className='mb-6'>
      {section.title && (
        <h4 className='text-base font-medium text-[#131e47] mb-2'>
          {section.title}
        </h4>
      )}

      {section.description && (
        <p className='text-sm text-gray-500 mb-3'>{section.description}</p>
      )}

      <div
        className={
          section.grid
            ? `grid grid-cols-1 md:grid-cols-${section.grid} gap-4 `
            : ''
        }
      >
        {section.fields?.map((field, fieldIndex) => {
           return (
            <RenderFields
              key={fieldIndex}
              step={section}
              form={form}
              formData={formData}
              index={fieldIndex}
              onChange={onChange}
              field={field}
            />
          )
        })}
        
      </div>
    </div>
  )
}

export default FormSection
