import FormField from '../formField'

export const MaintenanceStep1 = ({ formData, setFormData }) => {
  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <h3 className='text-lg font-semibold text-primary mb-6'>
        1. Personal Information
      </h3>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <FormField
          type='text'
          name='fullName'
          label={'Full Name'}
          value={formData.fullName}
          onChange={handleChange}
          placeholder='Enter your full name'
        />
        <FormField
          type='email'
          name='email'
          label={'Email Address'}
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email address'
        />
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <FormField
          type='text'
          name='phoneNumber'
          label={'Phone Number'}
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder='Enter your phone number'
        />
        <FormField
          type='text'
          name='address'
          label={'Address'}
          value={formData.address}
          onChange={handleChange}
          placeholder='Enter your address'
        />
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <FormField
          type='select'
          name='city'
          label={'City'}
          value={formData.city}
          onChange={handleChange}
          placeholder='Enter your city'
          options={[
            { value: 'london', label: 'London' },
            { value: 'manchester', label: 'Manchester' },
            { value: 'birmingham', label: 'Birmingham' },
            { value: 'leeds', label: 'Leeds' }
          ]}
        />
        <FormField
          type='select'
          name='state'
          label='State/Province'
          value={formData.state}
          onChange={handleChange}
          placeholder='Select your state/province'
          options={[
            { value: 'england', label: 'England' },
            { value: 'scotland', label: 'Scotland' },
            { value: 'wales', label: 'Wales' },
            { value: 'northernIreland', label: 'Northern Ireland' }
          ]}
        />
      </div>

      <div className='grid grid-cols-2 gap-4 mb-4'>
        <FormField
          type='text'
          name='postalCode'
          label={'Postal Code'}
          value={formData.postalCode}
          onChange={handleChange}
          placeholder='Enter your postal code'
        />
        <FormField
          type='select'
          name='country'
          label={'Country'}
          value={formData.country}
          onChange={handleChange}
          placeholder='Enter your country'
          options={[
            { value: 'uk', label: 'United Kingdom' },
            { value: 'us', label: 'United States' },
            { value: 'canada', label: 'Canada' },
            { value: 'australia', label: 'Australia' }
          ]}
        />
      </div>
    </div>
  )
}
