import FormField from '../formField'

export const MaintenanceStep2 = ({ formData, setFormData }) => {
  const handleChange = e => {
    const { name, value, type, checked } = e.target
    console.log(name, value, type, checked) // Debugging line to check the values

    if (name.startsWith('specificAreas.')) {
      const areaName = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        specificAreas: {
          ...prev.specificAreas,
          [areaName]: checked
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
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
        2. Cleaning Service Details
      </h3>

      <FormField
        type='select'
        name='cleaningType'
        label='Type of Cleaning'
        value={formData.cleaningType}
        onChange={handleChange}
        options={[
          { value: '', label: 'Select the type of cleaning' },
          {
            value: 'general',
            label:
              'General Cleaning (Surface dusting, vacuuming, mopping, and sanitizing)'
          },
          { value: 'deep', label: 'Deep Cleaning' },
          { value: 'move-in', label: 'Move-in/Move-out Cleaning' },
          { value: 'post-construction', label: 'Post-Construction Cleaning' },
          { value: 'other', label: 'Other' }
        ]}
      />

      {formData.cleaningType === 'other' && (
        <FormField
          type='text'
          name='otherCleaningType'
          label='Please specify other cleaning type'
          value={formData.otherCleaningType}
          onChange={handleChange}
          placeholder='Enter the specific cleaning type'
        />
      )}

      <div className='mb-4'>
        <label className='block mb-1 text-sm text-gray-800 font-medium'>
          Property Type
        </label>
        <div className='flex flex-wrap gap-3 mt-1'>
          {['apartment', 'house', 'office', 'commercial', 'other'].map(type => (
            <FormField
              key={type}
              type='radio'
              name='propertyType'
              label={type.charAt(0).toUpperCase() + type.slice(1)}
              value={type}
              checked={formData.propertyType === type}
              onChange={() => handleRadioChange('propertyType', type)}
              radioLabel={
                type === 'commercial'
                  ? 'Commercial Space'
                  : type === 'other'
                  ? 'Other'
                  : type
              }
            />
          ))}
        </div>
      </div>

      {formData.propertyType === 'other' && (
        <FormField
          type='text'
          name='otherPropertyType'
          label='Please specify property type'
          value={formData.otherPropertyType}
          onChange={handleChange}
          placeholder='Enter the specific property type'
        />
      )}

      <div className='mb-4'>
        <label className='block mb-1 text-sm text-gray-800 font-medium'>
          Specific Areas to Clean (Apartments & Houses)
        </label>
        <p className='text-xs text-gray-500 mb-2'>
          Check all that apply based on your property type
        </p>

        <div className='grid grid-cols-1 gap-2'>
          {[
            { key: 'bedroom', label: 'Bedroom (Sweeping, Mopping, Vacuuming)' },
            {
              key: 'otherRooms',
              label: 'Other rooms (Sweeping, Mopping, Vacuuming)'
            },
            { key: 'walls', label: 'Walls & Baseboards' },
            { key: 'windows', label: 'Windows & Glass Surfaces' },
            {
              key: 'kitchen',
              label: 'Kitchen (Countertops, Appliances, Sink, etc.)'
            },
            { key: 'cabinets', label: 'Inside Cabinets & Cupboards' },
            { key: 'bathrooms', label: 'Bathrooms (Tiles, Showers, Toilets)' },
            { key: 'carpet', label: 'Carpet & Upholstery' },
            { key: 'balcony', label: 'Balcony/Patio' },
            { key: 'other', label: 'Other' }
          ].map(area => (
            <div key={area.key}>
              <FormField
                type='checkbox'
                name={`specificAreas.${area.key}`}
                label={area.label}
                checked={formData?.specificAreas[area.key]}
                onChange={handleChange}
              />

              {formData?.specificAreas[area.key] && (
                <div className='grid grid-cols-2 gap-4 mb-2'>
                  {area.key === 'bedroom' && (
                    <>
                      <FormField
                        type='number'
                        name='bedroomCount'
                        label='Number of bedrooms'
                        value={formData.bedroomCount}
                        onChange={handleChange}
                      />
                      <FormField
                        type='number'
                        name='bedroomFloorArea'
                        label='Floor Area (in m²)'
                        value={formData.bedroomFloorArea}
                        onChange={handleChange}
                      />
                    </>
                  )}

                  {area.key === 'otherRooms' && (
                    <>
                      <FormField
                        type='number'
                        name='otherRoomsCount'
                        label='Number of other rooms'
                        value={formData.otherRoomsCount}
                        onChange={handleChange}
                      />
                      <FormField
                        type='number'
                        name='otherRoomsFloorArea'
                        label='Floor Area (in m²)'
                        value={formData.otherRoomsFloorArea}
                        onChange={handleChange}
                      />
                    </>
                  )}

                  {area.key === 'kitchen' && (
                    <>
                      <FormField
                        type='number'
                        name='kitchenCount'
                        label='Number of kitchens'
                        value={formData.kitchenCount}
                        onChange={handleChange}
                      />
                      <FormField
                        type='number'
                        name='kitchenFloorArea'
                        label='Floor Area (in m²)'
                        value={formData.kitchenFloorArea}
                        onChange={handleChange}
                      />
                    </>
                  )}

                  {area.key === 'bathrooms' && (
                    <>
                      <FormField
                        type='number'
                        name='bathroomCount'
                        label='Number of bathrooms'
                        value={formData.bathroomCount}
                        onChange={handleChange}
                      />
                      <FormField
                        type='number'
                        name='bathroomFloorArea'
                        label='Floor Area (in m²)'
                        value={formData.bathroomFloorArea}
                        onChange={handleChange}
                      />
                    </>
                  )}

                  {area.key === 'other' && formData.specificAreas.other && (
                    <>
                      <FormField
                        type='text'
                        name='otherAreaDescription'
                        label='Please specify'
                        value={formData.otherAreaDescription}
                        onChange={handleChange}
                        placeholder='Describe the area'
                      />
                      <FormField
                        type='number'
                        name='otherAreaCount'
                        label='Count'
                        value={formData.otherAreaCount}
                        onChange={handleChange}
                      />
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <label className='block mb-1 text-sm text-gray-800 font-medium'>
          Additional Property Details
        </label>
        <p className='text-xs text-gray-500 mb-2'>
          Provide more details about your space to help us tailor your quote.
        </p>

        <FormField
          type='number'
          name='totalFloorArea'
          label='Floor Area (in m²)'
          value={formData.totalFloorArea}
          onChange={handleChange}
          
        />

        <div className='mb-3'>
          <label className='block mb-1 text-sm text-gray-800'>
            Ceiling Height
          </label>
          <div className='flex gap-4'>
            <FormField
              type='radio'
              name='ceilingHeight'
              label='Standard (2.4m–2.7m)'
              value='standard'
              checked={formData.ceilingHeight === 'standard'}
              onChange={() => handleRadioChange('ceilingHeight', 'standard')}
            />
            <FormField
              type='radio'
              name='ceilingHeight'
              label='High (2.8m+)'
              value='high'
              checked={formData.ceilingHeight === 'high'}
              onChange={() => handleRadioChange('ceilingHeight', 'high')}
            />
          </div>
        </div>
      </div>

      <FormField
        type='textarea'
        name='additionalDetails'
        label='Any Other Important Property Details?'
        value={formData.additionalDetails}
        onChange={handleChange}
        placeholder='Please describe the property details...'
        rows={5}
      />
    </div>
  )
}
