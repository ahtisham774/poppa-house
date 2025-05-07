import FormField from '../formField'

export const MaintenanceStep3 = ({ formData, setFormData }) => {
  const handleChange = e => {
    const { name, value, type, checked } = e.target
    console.log(name, value, type, checked) // Debugging line to check the values

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleRadioChange = (name, value) => {
    console.log(name, value) // Debugging line to check the values
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <h3 className='text-lg font-semibold text-primary mb-6'>
        3. Location & Availability
      </h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
        <FormField
          type='text'
          name='serviceAddress'
          label='Service Address'
          value={formData.serviceAddress}
          onChange={handleChange}
          placeholder='Enter your address'
        />
        <FormField
          type='select'
          name='serviceCity'
          label='City'
          value={formData.serviceCity}
          onChange={handleChange}
          options={[
            { value: '', label: 'Select City' },
            { value: 'london', label: 'London' },
            { value: 'manchester', label: 'Manchester' },
            { value: 'birmingham', label: 'Birmingham' },
            { value: 'leeds', label: 'Leeds' }
          ]}
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
        <FormField
          type='select'
          name='serviceStateProvince'
          label='State/Province'
          value={formData.serviceStateProvince}
          onChange={handleChange}
          options={[
            { value: '', label: 'Select state/province name' },
            { value: 'england', label: 'England' },
            { value: 'scotland', label: 'Scotland' },
            { value: 'wales', label: 'Wales' },
            { value: 'northern-ireland', label: 'Northern Ireland' }
          ]}
        />
        <FormField
          type='text'
          name='servicePostalCode'
          label='Postal Code'
          value={formData.servicePostalCode}
          onChange={handleChange}
          placeholder='Enter your postal code'
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
        <FormField
          type='select'
          name='serviceCountry'
          label='Country'
          value={formData.serviceCountry}
          onChange={handleChange}
          options={[
            { value: '', label: 'Select Country' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'au', label: 'Australia' }
          ]}
        />
        <FormField
          type='date'
          name='preferredDate'
          label='Preferred Cleaning Date'
          value={formData.preferredDate}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='block mb-1 text-sm text-gray-800 font-medium'>
            Preferred Time Slot
          </label>
          <div className='flex gap-4 mt-2'>
            {['morning', 'afternoon', 'evening'].map(time => (
              <FormField
                key={time}
                type='radio'
                name='preferredTimeSlot'
                label={time.charAt(0).toUpperCase() + time.slice(1)}
                value={time}
                checked={formData.preferredTimeSlot === time}
                onChange={() => handleRadioChange('preferredTimeSlot', time)}
              />
            ))}
          </div>
        </div>
        <div>
          <label className='block mb-1 text-sm text-gray-800 font-medium'>
            Will you be present during the cleaning?
          </label>
          <div className='flex gap-4 mt-2'>
            <FormField
              type='radio'
              name='presentDuringCleaning'
              label='Yes, I will be available'
              value='yes'
              checked={formData.presentDuringCleaning === 'yes'}
              onChange={() => handleRadioChange('presentDuringCleaning', 'yes')}
            />
            <FormField
              type='radio'
              name='presentDuringCleaning'
              label='No, but I will arrange access'
              value='no'
              checked={formData.presentDuringCleaning === 'no'}
              onChange={() => handleRadioChange('presentDuringCleaning', 'no')}
            />
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <label className='block mb-1 text-sm text-gray-800 font-medium'>
          Is there parking available for our team?
        </label>
        <div className='flex gap-4 mt-2'>
          <FormField
            type='radio'
            name='parkingAvailable'
            label='Yes'
            value='yes'
            checked={formData.parkingAvailable === 'yes'}
            onChange={() => handleRadioChange('parkingAvailable', 'yes')}
          />
          <FormField
            type='radio'
            name='parkingAvailable'
            label='No'
            value='no'
            checked={formData.parkingAvailable === 'no'}
            onChange={() => handleRadioChange('parkingAvailable', 'no')}
          />
        </div>
      </div>

      <FormField
        type='textarea'
        name='accessInstructions'
        label='Are there any special instructions for access?'
        value={formData.accessInstructions}
        onChange={handleChange}
        placeholder='Enter any access instructions, security codes, key pick up information, etc...'
        rows={5}
      />
    </div>
  )
}