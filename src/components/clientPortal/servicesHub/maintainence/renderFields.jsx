import Address from '../../../common/address'
import CheckboxGroup from './checkboxGroup'
import FormField from './formField'
import RadioGroup from './radioGroup'
import DynamicRoomTypes from './roomTypeSection'

const RenderFields = ({ index, step, form, formData, field, onChange }) => {
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

  switch (field.type) {
    case 'checkbox-group':
      return (
        <CheckboxGroup
          key={index}
          field={field}
          formData={formData}
          onChange={onChange}
          onNestedChange={handleNestedChange}
        />
      )
    case 'radio-group':
      return (
        <RadioGroup
          key={index}
          field={field}
          formData={formData}
          onChange={onChange}
        />
      )
    case 'address':
      return (
        <Address
          allowExpand
          form={form}
          name={field.name}
          initialValues={formData[field.name]}
        />
      )

    case 'room-type':
      return <DynamicRoomTypes formData={formData} onChange={onChange} />
    case 'label':
      return (
        <div key={index} className='col-span-1 sm:col-span-2 '>
          <h4 className='text-base font-semibold text-[#131e47] mb-2'>
            {field.label}
          </h4>
          <p className='text-sm text-gray-600'>{field.description}</p>
        </div>
      )
    case 'note':
      return (
        <div
          key={index}
          className='col-span-1 sm:col-span-2 flex flex-col gap-2 border rounded-lg p-4 bg-[#EFF6FF] border-[#D3E6FF]'
        >
          <p className='text-lg font-medium text-[#2B4BB4]'>{field.label}</p>
          <div className='flex flex-col gap-2'>
            {field?.options?.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className='text-sm text-[#2B4BB4] flex items-center font-normal'
              >
                <svg
                  width='17'
                  height='18'
                  viewBox='0 0 17 18'
                  className='shrink-0 mr-2'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.125 9.45312C2.125 5.93271 4.97958 3.07812 8.5 3.07812C12.0204 3.07812 14.875 5.93271 14.875 9.45312C14.875 12.9735 12.0204 15.8281 8.5 15.8281C4.97958 15.8281 2.125 12.9735 2.125 9.45312Z'
                    stroke='#2B4BB4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M5.66406 9.4528L7.78906 11.5778L11.3307 8.03613'
                    stroke='#2B4BB4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                {option}
              </div>
            ))}
          </div>
        </div>
      )
    default:
      return (
        <FormField
          key={index}
          field={{
            ...field,
            className: `${
              (step.inline && field.type == 'textarea') || field.full
                ? 'sm:col-span-2'
                : ''
            }`
          }}
          value={formData[field.name] || ''}
          onChange={value => {
            handleChange(field.name, value)
          }}
        />
      )
  }
}

export default RenderFields
