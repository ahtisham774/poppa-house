// src/components/MaintenanceService/FormStep.jsx
import FormSection from './formSection'
import RenderFields from './renderFields'

const FormStep = ({ index, step,form, formData, onChange, serviceType }) => {
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
      <div className='mb-6 '>
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
          form={form}
          formData={formData}
          onChange={onChange}
          onNestedChange={handleNestedChange}
          serviceType={serviceType}
        />
      ))}
      <div className={step.inline ? "" : 'md:grid md:grid-cols-2 md:gap-4'}>
        {step.fields?.map((field, fieldIndex) => {
          return (
            <RenderFields
              key={fieldIndex}
              step={step}
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

export default FormStep
