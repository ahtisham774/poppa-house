import Address from '../../../common/address'
import CheckboxGroup from './checkboxGroup'
import FormField from './formField'
import RadioGroup from './radioGroup'
import DynamicRoomTypes from './roomTypeSection'

const RenderFields = ({ index, step,form, formData, field, onChange }) => {
  const handleChange = (name, value) => {
    console.log('handleChange', index, step, name, value)
    onChange({ [name]: value })
  }

  const handleNestedChange = (parentKey, childKey, value) => {
    const updatedParent = {
      ...(formData[parentKey] || {}),
      [childKey]: value
    }
    console.log('handleNestedChange', parentKey, childKey, value)
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
      return <Address allowExpand form={form} initialValues={formData.address} />

    case 'room-type':
      return <DynamicRoomTypes formData={formData} onChange={onChange} />
    case 'label':
      return (
        <div key={index} className='col-span-1 sm:col-span-2'>
          <h4 className='text-lg font-semibold text-[#131e47] mb-2'>
            {field.label}
          </h4>
          <p className='text-sm text-gray-600'>{field.description}</p>
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
            console.log('onChange', field.name, value)
            handleChange(field.name, value)
          }}
        />
      )
  }
}

export default RenderFields
