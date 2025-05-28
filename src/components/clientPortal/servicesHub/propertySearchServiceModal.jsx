import React, { useEffect } from 'react'
import { useModal } from '../../../context/useModal'
import { useAuth } from '../../../context/useAuth'
import Loader from '../../common/loader'
import clientProfileService from '../../../api/services/clientProfileService'
import serviceHub from '../../../api/services/servicesHub'

export function PropertySearchServiceModal ({ close }) {
  const [tab, setTab] = React.useState(0)
  const { openModal } = useModal()
  const [loading, setLoading] = React.useState(false)
  const [scheduleForm, setScheduleForm] = React.useState({
    firstName: '',
    secondName: '',
    phoneNumber: '',
    preferredCountry: '',
    preferredCity: '',
    callDate: '',
    callTime: '',
    agreeToTerms: false
  })
  const { user } = useAuth()

  const [searchForm, setSearchForm] = React.useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    preferredContactMethod: '',
    propertyType: '',
    otherPropertyType: '',
    bedrooms: '',
    bathrooms: '',
    furnished: '',
    parking: '',
    petFriendly: '',
    country: '',
    city: '',
    specificArea: '',
    maxBudget: '',
    moveInDate: '',
    minimumLeaseTerm: '',
    amenities: {
      balcony: false,
      concierge: false,
      garden: false,
      elevator: false,
      gym: false,
      gatedCommunity: false,
      nearbyPublicTransport: false,
      supermarketNearby: false,
      highSpeedInternet: false
    },
    additionalRequirements: '',
    moveInAssistance: false,
    confirmAccuracy: false
  })

  useEffect(() => {
    const getUserData = () => {
      clientProfileService
        .getClientProfile(user?.id)
        .then(data => {
          setSearchForm(prev => ({
            ...prev,
            fullName: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber
          }))
          setScheduleForm(prev => ({
            ...prev,
            firstName: data.name,
            phoneNumber: data.phoneNumber,
            preferredCountry: data?.address?.country,
            preferredCity: data?.address?.city
          }))
        })
        .catch(error => {
          console.error('Error fetching user data:', error)
        })
    }
    if (user) {
      getUserData()
    }
  }, [user])

  const handleScheduleChange = e => {
    const { name, value, type, checked } = e.target
    setScheduleForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSearchChange = e => {
    const { name, value, type, checked } = e.target

    if (name.includes('amenities.')) {
      const amenityName = name.split('.')[1]
      setSearchForm(prev => ({
        ...prev,
        amenities: {
          ...prev.amenities,
          [amenityName]: checked
        }
      }))
    } else {
      setSearchForm(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
  }

  const handleScheduleSubmit = e => {
    e.preventDefault()
    console.log('Schedule form submitted:', scheduleForm)
    // Add submission logic here
  }

  const formatSearchFormData = () => {
    // Convert amenities to array of selected options
    const additionalPreferences = Object.entries(searchForm.amenities)
      .filter(([_, value]) => value)
      .map(([key]) => {
        // Convert camelCase to normal words
        return key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase())
      })

    return {
      phoneNumber: searchForm.phoneNumber,
      fullName: searchForm.fullName,
      email: searchForm.email,
      preferredContactMethod: searchForm.preferredContactMethod
        ? searchForm.preferredContactMethod.charAt(0).toUpperCase() +
          searchForm.preferredContactMethod.slice(1)
        : '',
      propertyPreferences: [
        {
          propertyType:
            searchForm.otherPropertyType ||
            (searchForm.propertyType
              ? searchForm.propertyType.charAt(0).toUpperCase() +
                searchForm.propertyType.slice(1)
              : ''),
          numBedrooms: parseInt(searchForm.bedrooms) || 0,
          numBathrooms: parseInt(searchForm.bathrooms) || 0,
          furnished: searchForm.furnished === 'furnished',
          parkingRequired: searchForm.parking
            ? searchForm.parking.charAt(0).toUpperCase() +
              searchForm.parking.slice(1)
            : '',
          petFriendly: searchForm.petFriendly
            ? searchForm.petFriendly.charAt(0).toUpperCase() +
              searchForm.petFriendly.slice(1)
            : ''
        }
      ],
      locationAndBudget: [
        {
          country: searchForm.country.toUpperCase(),
          city: searchForm.city,
          townOrArea: searchForm.specificArea,
          budget: parseInt(searchForm.maxBudget) || 0,
          moveInDate: searchForm.moveInDate,
          minimumLeaseTerm: searchForm.minimumLeaseTerm
            ? `${searchForm.minimumLeaseTerm} Months`
            : '',
          additionalPreferences,
          specificRequirements: searchForm.additionalRequirements
        }
      ],
      moveInAssistance: searchForm.moveInAssistance
    }
  }

  const handleSearchSubmit = async e => {
    e.preventDefault()

    if (!searchForm.confirmAccuracy) {
      alert('Please confirm the accuracy of your details')
      return
    }

    const formattedData = formatSearchFormData()
    console.log('Formatted search data:', formattedData)

    try {
      setLoading(true)
      // Here you would typically make an API call
      serviceHub
        .addPropertySearch(formattedData)
        .then(response => {
          console.log('Property search submitted successfully:', response)
        })
        .catch(error => {
          console.error('Error submitting property search:', error)
        })
        .finally(() => {
          setLoading(false)
          close()
        })
      // Optionally show success message
    } catch (error) {
      console.error('Submission error:', error)
      // Handle error (show error message, etc.)
    }
  }

  return (
    <div className='p-3 lg:p-7 w-full max-h-[90vh] overflow-y-auto'>
      <div className='flex justify-between items-center mb-2'>
        <h2 className='text-2xl font-semibold text-primary'>
          Property Search Service
        </h2>
      </div>
      <div className='text-gray-600 mb-4'>
        Let our expert agents find the perfect property for you. Choose how
        you'd like to proceed:
      </div>

      <div className='bg-white rounded-lg br flex mb-6 p-2 overflow-x-auto whitespace-nowrap'>
        <button
          className={`flex items-center justify-center flex-1 py-1 rounded-sm px-6 text-sm font-medium transition-colors duration-200 ${
            tab === 0
              ? 'bg-accent text-gray-900'
              : 'bg-transparent text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setTab(0)}
        >
          Schedule a Call
        </button>
        <button
          className={`flex items-center justify-center flex-1 py-1 rounded-sm px-6 text-sm font-medium transition-colors duration-200 ${
            tab === 1
              ? 'bg-accent text-gray-900'
              : 'bg-transparent text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => setTab(1)}
        >
          Fill in the form
        </button>
      </div>

      {tab === 0 ? (
        <form onSubmit={handleScheduleSubmit}>
          <h3 className='font-medium text-primary mb-4'>
            Schedule a Call with Our Agent
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block mb-1 text-sm text-primary font-medium'>
                First Name
              </label>
              <input
                name='firstName'
                value={scheduleForm.firstName}
                onChange={handleScheduleChange}
                className='w-full border rounded-lg px-3 py-2'
                placeholder='Enter your first name'
              />
            </div>
            <div>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Second Name
              </label>
              <input
                name='secondName'
                value={scheduleForm.secondName}
                onChange={handleScheduleChange}
                className='w-full border rounded-lg px-3 py-2'
                placeholder='Enter your second name'
              />
            </div>
          </div>

          <div className='mb-4'>
            <label className='block mb-1 text-sm text-primary font-medium'>
              Phone Number
            </label>
            <input
              name='phoneNumber'
              value={scheduleForm.phoneNumber}
              onChange={handleScheduleChange}
              className='w-full border rounded-lg px-3 py-2'
              placeholder='Enter your phone number'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Preferred Country
              </label>
              <input
                name='preferredCountry'
                value={scheduleForm.preferredCountry}
                onChange={handleScheduleChange}
                className='w-full border rounded-lg px-3 py-2'
                placeholder='Enter your preferred country'
              />
            </div>
            <div>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Preferred City
              </label>

              <input
                name='preferredCity'
                value={scheduleForm.preferredCity}
                onChange={handleScheduleChange}
                className='w-full border rounded-lg px-3 py-2'
                placeholder='Enter your preferred city'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-5'>
            <div>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Call Scheduling Calendar
              </label>
              <input
                type='date'
                name='callDate'
                value={scheduleForm.callDate}
                onChange={handleScheduleChange}
                className='w-full border rounded-lg px-3 py-2'
              />
            </div>
            <div>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Time
              </label>
              <input
                type='time'
                name='callTime'
                value={scheduleForm.callTime}
                onChange={handleScheduleChange}
                className='w-full border rounded-lg px-3 py-2'
              />
            </div>
          </div>

          <div className='mb-5'>
            <label className='flex items-start'>
              <input
                type='checkbox'
                name='agreeToTerms'
                checked={scheduleForm.agreeToTerms}
                onChange={handleScheduleChange}
                className='mt-1 accent-primary'
              />
              <span className='ml-2 text-sm font-medium'>
                By submitting this form, you agree to be contacted by a Proppa
                House expert regarding your property search request. I agree to
                be contacted by Proppa House.
              </span>
            </label>
          </div>

          <div className='flex gap-4 flex-wrap'>
            <button
              type='button'
              onClick={close}
              className='border rounded-lg flex-1 px-7 py-2 text-primary font-medium'
            >
              Cancel
            </button>
            <button
              type='submit'
              disabled={loading}
              className='bg-[#131e47] flex-1 rounded-lg disabled:bg-opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 px-7 py-2 text-white font-medium'
            >
              {loading && <Loader variants='sm' />}
              Submit Request
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSearchSubmit}>
          <div className='border-b-2  border-b-[#b8b8b8b7] py-6 flex flex-col'>
            <h3 className='font-medium text-primary mb-4'>
              1. Personal Information
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Full Name
                </label>
                <input
                  name='fullName'
                  value={searchForm.fullName}
                  onChange={handleSearchChange}
                  className='w-full border rounded-lg px-3 py-2'
                  placeholder='Enter your full name'
                />
              </div>
              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  value={searchForm.email}
                  onChange={handleSearchChange}
                  className='w-full border rounded-lg px-3 py-2'
                  placeholder='Enter your email address'
                />
              </div>
            </div>

            <div className='mb-4'>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Phone Number
              </label>
              <input
                name='phoneNumber'
                value={searchForm.phoneNumber}
                onChange={handleSearchChange}
                className='w-full border rounded-lg px-3 py-2'
                placeholder='Enter your phone number'
              />
            </div>

            <div className='mb-4'>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Preferred Contact Method
              </label>
              <div className='flex gap-6 mt-1 font-medium text-sm'>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='preferredContactMethod'
                    value='call'
                    checked={searchForm.preferredContactMethod === 'call'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>Call</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='preferredContactMethod'
                    value='whatsapp'
                    checked={searchForm.preferredContactMethod === 'whatsapp'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>WhatsApp</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='preferredContactMethod'
                    value='email'
                    checked={searchForm.preferredContactMethod === 'email'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>Email</span>
                </label>
              </div>
              <p className='text-xs text-gray-500 mt-2'>
                Please note that all updates will be sent to your messages tab
                in your portal, that will be an ideal and preferred method of
                communication.
              </p>
            </div>
          </div>
          <div className='border-b-2  border-b-[#b8b8b8b7] py-6 flex flex-col'>
            <h3 className='font-medium text-primary mb-4 mt-6'>
              2. Property Preferences
            </h3>

            <div className='mb-4'>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Property Type
              </label>
              <div className='flex flex-wrap gap-6 mt-1 font-medium text-sm'>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='propertyType'
                    value='apartment'
                    checked={searchForm.propertyType === 'apartment'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>Apartment</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='propertyType'
                    value='house'
                    checked={searchForm.propertyType === 'house'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>House</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='propertyType'
                    value='studio'
                    checked={searchForm.propertyType === 'studio'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>Studio</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='propertyType'
                    value='other'
                    checked={searchForm.propertyType === 'other'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>Other</span>
                </label>
              </div>
            </div>

            {searchForm.propertyType === 'other' && (
              <div className='mb-4'>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Please specify property type
                </label>
                <input
                  name='otherPropertyType'
                  value={searchForm.otherPropertyType}
                  onChange={handleSearchChange}
                  className='w-full border rounded-lg px-3 py-2'
                  placeholder='Enter the specific property type'
                />
              </div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>
              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Number of Bedrooms
                </label>
                <div className='flex flex-wrap gap-4 mt-1'>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='bedrooms'
                      value='1'
                      checked={searchForm.bedrooms === '1'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>1</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='bedrooms'
                      value='2'
                      checked={searchForm.bedrooms === '2'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>2</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='bedrooms'
                      value='3'
                      checked={searchForm.bedrooms === '3'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>3</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='bedrooms'
                      value='4+'
                      checked={searchForm.bedrooms === '4+'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>4+</span>
                  </label>
                </div>
              </div>

              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Number of Bathrooms
                </label>
                <div className='flex flex-wrap gap-4 mt-1'>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='bathrooms'
                      value='1'
                      checked={searchForm.bathrooms === '1'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>1</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='bathrooms'
                      value='2'
                      checked={searchForm.bathrooms === '2'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>2</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='bathrooms'
                      value='3'
                      checked={searchForm.bathrooms === '3'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>3</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='bathrooms'
                      value='4+'
                      checked={searchForm.bathrooms === '4+'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>4+</span>
                  </label>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Furnished or Unfurnished?
                </label>
                <div className='flex flex-col gap-1 font-medium text-sm mt-1'>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='furnished'
                      value='furnished'
                      checked={searchForm.furnished === 'furnished'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>Furnished</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='furnished'
                      value='unfurnished'
                      checked={searchForm.furnished === 'unfurnished'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>Unfurnished</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='furnished'
                      value='no-preference'
                      checked={searchForm.furnished === 'no-preference'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>No Preference</span>
                  </label>
                </div>
              </div>

              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Parking Required?
                </label>
                <div className='flex flex-col gap-1 font-medium text-sm mt-1'>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='parking'
                      value='yes'
                      checked={searchForm.parking === 'yes'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>Yes</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='parking'
                      value='no'
                      checked={searchForm.parking === 'no'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>No</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='parking'
                      value='no-preference'
                      checked={searchForm.parking === 'no-preference'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>No Preference</span>
                  </label>
                </div>
              </div>

              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Pet-Friendly?
                </label>
                <div className='flex flex-col gap-1 font-medium text-sm mt-1'>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='petFriendly'
                      value='yes'
                      checked={searchForm.petFriendly === 'yes'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>Yes</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='petFriendly'
                      value='no'
                      checked={searchForm.petFriendly === 'no'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>No</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='petFriendly'
                      value='no-preference'
                      checked={searchForm.petFriendly === 'no-preference'}
                      onChange={handleSearchChange}
                      className='accent-primary'
                    />
                    <span className='ml-2'>No Preference</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='border-b-2  border-b-[#b8b8b8b7] py-6 flex flex-col'>
            <h3 className='font-medium text-primary mb-4'>
              3. Location & Budget
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Country
                </label>
                <select
                  name='country'
                  value={searchForm.country}
                  onChange={handleSearchChange}
                  className='w-full border rounded-lg px-3 py-2 appearance-none bg-white'
                >
                  <option value=''>Select Country</option>
                  <option value='uk'>United Kingdom</option>
                  <option value='us'>United States</option>
                  <option value='ca'>Canada</option>
                  <option value='au'>Australia</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  City
                </label>
                <select
                  name='city'
                  value={searchForm.city}
                  onChange={handleSearchChange}
                  className='w-full border rounded-lg px-3 py-2 appearance-none bg-white'
                  disabled={!searchForm.country}
                >
                  <option value=''>Select Country first</option>
                  {searchForm.country && (
                    <>
                      <option value='city1'>City 1</option>
                      <option value='city2'>City 2</option>
                      <option value='city3'>City 3</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className='mb-4'>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Specific Town or Area Name
              </label>
              <input
                name='specificArea'
                value={searchForm.specificArea}
                onChange={handleSearchChange}
                className='w-full border rounded-lg px-3 py-2'
                placeholder='Enter specific town or area name'
              />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Maximum Budget (£ per month)
                </label>
                <input
                  type='number'
                  name='maxBudget'
                  value={searchForm.maxBudget}
                  onChange={handleSearchChange}
                  className='w-full border rounded-lg px-3 py-2'
                  placeholder='Enter your maximum budget'
                />
              </div>
              <div>
                <label className='block mb-1 text-sm text-primary font-medium'>
                  Move-in Date
                </label>
                <input
                  type='date'
                  name='moveInDate'
                  value={searchForm.moveInDate}
                  onChange={handleSearchChange}
                  className='w-full border rounded-lg px-3 py-2'
                />
              </div>
            </div>

            <div className='mb-6'>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Minimum Lease Term
              </label>
              <div className='flex gap-6 font-medium text-sm mt-1'>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='minimumLeaseTerm'
                    value='6'
                    checked={searchForm.minimumLeaseTerm === '6'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>6 months</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='minimumLeaseTerm'
                    value='12'
                    checked={searchForm.minimumLeaseTerm === '12'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>12 months</span>
                </label>
                <label className='inline-flex items-center'>
                  <input
                    type='radio'
                    name='minimumLeaseTerm'
                    value='flexible'
                    checked={searchForm.minimumLeaseTerm === 'flexible'}
                    onChange={handleSearchChange}
                    className='accent-primary'
                  />
                  <span className='ml-2'>Flexible</span>
                </label>
              </div>
            </div>
          </div>
          <div className='border-b-2  border-b-[#b8b8b8b7] py-6 flex flex-col'>
            <h3 className='font-medium text-primary mb-4'>
              4. Additional Preferences
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2 mb-4 font-medium text-sm'>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='amenities.balcony'
                  checked={searchForm.amenities.balcony}
                  onChange={handleSearchChange}
                  className='accent-primary'
                />
                <span className='ml-2'>Balcony</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='amenities.garden'
                  checked={searchForm.amenities.garden}
                  onChange={handleSearchChange}
                  className='accent-primary'
                />
                <span className='ml-2'>Garden</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='amenities.gym'
                  checked={searchForm.amenities.gym}
                  onChange={handleSearchChange}
                  className='accent-primary'
                />
                <span className='ml-2'>Gym</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='amenities.concierge'
                  checked={searchForm.amenities.concierge}
                  onChange={handleSearchChange}
                  className='accent-primary'
                />
                <span className='ml-2'>Concierge</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='amenities.elevator'
                  checked={searchForm.amenities.elevator}
                  onChange={handleSearchChange}
                  className='accent-primary'
                />
                <span className='ml-2'>Elevator</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='amenities.gatedCommunity'
                  checked={searchForm.amenities.gatedCommunity}
                  onChange={handleSearchChange}
                  className='accent-primary'
                />
                <span className='ml-2'>Gated Community</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='amenities.nearbyPublicTransport'
                  checked={searchForm.amenities.nearbyPublicTransport}
                  onChange={handleSearchChange}
                  className='accent-primary'
                />
                <span className='ml-2'>Nearby Public Transport</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='amenities.supermarketNearby'
                  checked={searchForm.amenities.supermarketNearby}
                  onChange={handleSearchChange}
                  className='accent-primary'
                />
                <span className='ml-2'>Supermarket Nearby</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='checkbox'
                  name='amenities.highSpeedInternet'
                  checked={searchForm.amenities.highSpeedInternet}
                  onChange={handleSearchChange}
                  className='accent-primary'
                />
                <span className='ml-2'>High-Speed Internet</span>
              </label>
            </div>

            <div className='mb-6'>
              <label className='block mb-1 text-sm text-primary font-medium'>
                Any Other Specific Requirements? (Max. 2500 words)
              </label>
              <textarea
                name='additionalRequirements'
                value={searchForm.additionalRequirements}
                onChange={handleSearchChange}
                className='w-full border rounded-lg px-3 py-2 min-h-[100px]'
                placeholder='Please describe your specific requirements.'
              ></textarea>
            </div>
          </div>
          <div className='border-b-2  border-b-[#b8b8b8b7] py-6 flex flex-col'>
            <div className='mb-6'>
              <h3 className='font-medium text-primary mb-2'>
                Move-in Assistance (Optional)
              </h3>
              <p className='text-sm text-gray-600 mb-2'>
                We can help you get set up with utility set up and council tax
                (bills consolidation: an all-in-one payment plan) and local
                services to make your move smooth and stress-free.
              </p>
              <div className='mt-2'>
                <p className='text-sm text-primary mb-1'>
                  Is this something you would like?
                </p>
                <div className='flex gap-6'>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='moveInAssistance'
                      value='yes'
                      checked={searchForm.moveInAssistance === true}
                      onChange={() =>
                        setSearchForm(prev => ({
                          ...prev,
                          moveInAssistance: true
                        }))
                      }
                      className='accent-primary'
                    />
                    <span className='ml-2'>Yes</span>
                  </label>
                  <label className='inline-flex items-center'>
                    <input
                      type='radio'
                      name='moveInAssistance'
                      value='no'
                      checked={searchForm.moveInAssistance === false}
                      onChange={() =>
                        setSearchForm(prev => ({
                          ...prev,
                          moveInAssistance: false
                        }))
                      }
                      className='accent-primary'
                    />
                    <span className='ml-2'>No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='my-6'>
            <label className='flex items-start'>
              <input
                type='checkbox'
                name='confirmAccuracy'
                checked={searchForm.confirmAccuracy}
                onChange={handleSearchChange}
                className='relative mr-2 appearance-none size-4 border-2 border-[#131e47] rounded-full checked:bg-white focus:outline-none focus:ring-0 transition-colors duration-200'
                style={{
                  backgroundImage: searchForm.confirmAccuracy
                    ? 'radial-gradient(circle, #131e47 0%, #131e47 40%, white 40%, white 100%)'
                    : 'none'
                }}
              />
              <span className='ml-2 text-sm font-medium text-primary'>
                I confirm that the details provided are accurate, and I would
                like Proppa House to assist me in finding a property
              </span>
            </label>
          </div>

          <div className='flex items-center gap-4 mb-6'>
            <button
              type='button'
              className='text-[#2B4BB4] font-medium'
              onClick={e => {
                e.preventDefault()
                openModal('refundPolicy')
              }}
            >
              View Refund Policy
            </button>
          </div>

          <div className='flex gap-4 flex-wrap'>
            <button
              type='button'
              onClick={close}
              className='border flex-1 rounded-lg px-7 py-2 text-primary font-medium'
            >
              Cancel
            </button>
            <button
              type='submit'
              disabled={loading}
              className='bg-primary flex-1 flex items-center gap-2 justify-center disabled:cursor-not-allowed disabled:bg-opacity-60 rounded-lg px-7 py-2 text-white font-medium'
            >
              {loading && <Loader variants='sm' />}
              Make Payment
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export function RefundPolicyModal ({ close }) {
  const [confirmed, setConfirmed] = React.useState(false)

  const handleSubmit = () => {
    console.log('Refund policy confirmed:', confirmed)
    close()
  }

  return (
    <div className='w-full p-4 lg:p-10 max-h-[90vh] overflow-y-auto'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-semibold text-primary'>
          Proppa House – Property Search Refund Policy
        </h2>
      </div>

      <p className='mb-4 text-gray-700'>
        At Proppa House, we are committed to helping you find the perfect
        property. Our expert team works diligently to match you with a home that
        meets your needs. However, we understand that sometimes, despite our
        best efforts, a suitable property may not be found within the agreed
        timeframe.
      </p>

      <p className='mb-4 text-gray-700'>
        To ensure fairness and transparency, we offer a 65% partial refund if we
        are unable to find a property that meets your stated preferences within
        28 days
      </p>

      <h3 className='font-medium text-primary mb-2 mt-6'>How It Works:</h3>
      <ol className='list-decimal pl-5 mb-4 space-y-2 text-gray-700'>
        <li>
          <strong>Upfront Payment</strong> – A one-time fee is paid before the
          property search begins.
        </li>
        <li>
          <strong>Dedicated Search</strong> – Our team actively searches for
          properties that match your criteria, providing updates throughout the
          process.
        </li>
        <li>
          <strong>Timeframe Guarantee</strong> – If no suitable property is
          found within 28 days, you will be eligible for a 65% refund of your
          payment.
        </li>
        <li>
          <strong>Refund Processing</strong> – If a refund is due, it will be
          processed within 5-7 business days from the date of request.
        </li>
      </ol>

      <h3 className='font-medium text-primary mb-2 mt-6'>Key Terms:</h3>
      <ul className='list-disc pl-5 mb-4 space-y-2 text-gray-700'>
        <li>
          A property is considered 'suitable' if it meets the criteria you
          provided in your search request:
          <ol className='list-decimal pl-5 mt-1'>
            <li>Property Preferences</li>
            <li>Location Budget</li>
            <li>Additional Preferences</li>
          </ol>
        </li>
        <li>
          If you reject properties that meet your criteria, the refund policy
          will not apply.
        </li>
        <li>
          If you decide to pause or cancel the search for personal reasons, the
          refund policy will not apply
        </li>
      </ul>

      <h3 className='font-medium text-primary mb-2 mt-6'>
        Client Responsibilities
      </h3>
      <ul className='list-disc pl-5 mb-4 space-y-2 text-gray-700'>
        <li>
          The Client must provide accurate and complete property search
          criteria.
        </li>
        <li>
          The Client must be responsive and available for property updates and
          viewings.
        </li>
        <li>
          Any modifications to the search criteria after the process has begun
          may impact the outcome and the eligibility for a refund.
        </li>
      </ul>

      <h3 className='font-medium text-primary mb-2 mt-6'>Refund Process</h3>
      <ul className='list-disc pl-5 mb-4 space-y-2 text-gray-700'>
        <li>
          If a refund is due, it will be processed within 5-7 business days via
          the original payment method.
        </li>
        <li>
          Refunds will not be issued if the Client decides to cancel, pause, or
          delay the search for personal reasons.
        </li>
      </ul>

      <h3 className='font-medium text-primary mb-2 mt-6'>
        Agreement Termination
      </h3>
      <p className='mb-4 text-gray-700'>
        Proppa House reserves the right to terminate the search service if the
        Client becomes unresponsive for 7 working days or if unreasonable
        demands are made outside of the agreed search criteria. No refund will
        be issued in such cases.
      </p>

      <h3 className='font-medium text-primary mb-2 mt-6'>
        Legal Considerations
      </h3>
      <ul className='list-disc pl-5 mb-4 space-y-2 text-gray-700'>
        <li>
          This Agreement is legally binding and governed by the laws of United
          Kingdom.
        </li>
        <li>
          Any disputes will first be resolved through negotiation. If
          unresolved, legal proceedings may be initiated in the appropriate
          courts.
        </li>
      </ul>

      <p className='mb-4 text-gray-700'>
        We are dedicated to providing a trusted and results-driven service, and
        this policy ensures a fair balance between your investment and our
        efforts.
      </p>

      <p className='mb-4 text-gray-700'>
        A copy of this refund policy will also be in your email after payment is
        made.
      </p>

      <p className='mb-4 text-gray-700'>
        For any questions, feel free to contact our support team at
        support@proppahouse.com.
      </p>

      <div className='flex items-center mt-7 gap-4'>
        <input
          type='checkbox'
          checked={confirmed}
          onChange={() => setConfirmed(!confirmed)}
          className='accent-primary'
        />
        <span className='text-sm text-primary font-medium'>
          I confirm that I have read the refund policy
        </span>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!confirmed}
        className={`mt-7 w-full rounded-lg py-2 text-white font-medium ${
          confirmed ? 'bg-primary' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Submit Request
      </button>
    </div>
  )
}
