import { useState } from 'react'
import { useAuth } from '../../../context/useAuth'
import VerifiedBadge from './verifiedBadge'

const PersonalInfo = () => {
  const { user, setUser } = useAuth()

  const [isVerified, setIsVerified] = useState({
    email: true,
    phone: true
  })

  const [formData, setFormData] = useState({
    fullName: user?.name || 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+44 7700 900123',
    dateOfBirth: '03/04/1999',

    gender: 'Male',
    presentAddress: 'San Jose, California, UK',
    permanentAddress: 'San Jose, California, UK',
    city: 'San Jose',
    state: 'California',
    postalCode: '45962',
    country: 'United States'
  })

  const [showAccountSecurity, setShowAccountSecurity] = useState(true)
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false)
  const [passwordUpdated, setPasswordUpdated] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Update user info
    setUser(prev => ({
      ...prev,
      name: formData.fullName
    }))
    // Show success message or handle form submission logic
  }

  const handleResetPassword = () => {
    setShowResetPasswordModal(true)
  }

  const handleUpdatePassword = () => {
    setShowResetPasswordModal(false)
    setPasswordUpdated(true)

    // Hide success message after 3 seconds
    setTimeout(() => {
      setPasswordUpdated(false)
    }, 3000)
  }

  const closeModal = () => {
    setShowResetPasswordModal(false)
    setPasswordUpdated(false)
  }

  return (
    <>
      <div className='bg-white rounded-lg br p-6 mb-6 flex flex-col gap-8'>
        <div className='flex items-center mb-6'>
          <svg
            className='h-6 w-6 mr-2 text-gray-700'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />
          </svg>
          <h2 className='text-xl font-semibold text-gray-900'>
            Edit Profile Information
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Full Name
              </label>
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <label className='block text-sm font-medium text-gray-700 '>
                  Email Address
                </label>
                {isVerified.email && <VerifiedBadge />}
              </div>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <label className='block text-sm font-medium text-gray-700 '>
                  Phone Number
                </label>
                {isVerified.phone && <VerifiedBadge />}
              </div>
              <input
                type='text'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Date of Birth
              </label>
              <div className='relative'>
                <input
                  type='text'
                  name='dateOfBirth'
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                  required
                />
                <svg
                  className='absolute right-3 top-3 h-6 w-6 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Residential Address Line 1
              </label>
              <input
                type='text'
                name='presentAddress'
                value={formData.presentAddress}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Residential Address Line 2
              </label>
              <input
                type='text'
                name='permanentAddress'
                value={formData.permanentAddress}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
          </div>
          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Gender
              </label>
              <div className='relative'>
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={handleChange}
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none'
                  required
                >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                  <option value='Prefer not to say'>Prefer not to say</option>
                </select>
                <svg
                  className='absolute right-3 top-3 h-6 w-6 text-gray-400 pointer-events-none'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>
          </div> */}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                City
              </label>
              <input
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                State
              </label>
              <input
                type='text'
                name='state'
                value={formData.state}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Postal Code
              </label>
              <input
                type='text'
                name='postalCode'
                value={formData.postalCode}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Country
              </label>
              <input
                type='text'
                name='country'
                value={formData.country}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
          </div>

          <div className='flex justify-end gap-5'>
            <button className='border rounded-lg px-8 py-1 text-primary font-medium'>
              Cancel
            </button>
            <button
              type='submit'
              className='bg-primary text-white px-8 py-1 rounded-md font-medium hover:bg-primary/95 transition duration-200'
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default PersonalInfo
