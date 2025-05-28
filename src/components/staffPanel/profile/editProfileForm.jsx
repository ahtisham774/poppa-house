import { DatePicker, Form } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import Address from '../../common/address'
import { useAuth } from '../../../context/useAuth'
import { PhoneInput } from 'react-international-phone'
import staffProfileService from '../../../api/services/staffProfileService'
import Loader from '../../common/loader'
import Certificates from './certificates'

const EditProfileForm = ({ userData }) => {
  const { user, handleUserUpdate } = useAuth()
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const [formData, setFormData] = useState({
    fullName: '',
    professionalTitle: '',
    email: '',
    phoneNumber: '',
    dob: '',
    gender: '',
    specialties: '',
    about: '',
    certificates: []
  })

  useEffect(() => {
    if (userData && Object.keys(userData).length > 0) {
      setFormData({
        fullName: userData?.name,
        professionalTitle: userData?.professionalTitle,
        email: userData?.email,
        phoneNumber: userData?.phoneNumber,
        dob: userData?.dob,
        gender: userData.gender,
        specialties: userData?.specialties,
        about: userData?.about,
        certificates: userData?.certificates || []
      })
    }
  }, [userData])

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

  const handleSubmit = values => {
    const updatedData = {
      ...formData,
      ...values
    }
    setLoading(true)
    console.log('Updated Data:', updatedData)

    staffProfileService
      .updateProfile(user?.userId, updatedData)
      .then(response => {
        console.log('Profile updated successfully:', response)
        handleUserUpdate({
          ...user,
          name: updatedData.fullName,
          email: updatedData.email,
          phoneNumber: updatedData.phoneNumber
        })
      })
      .catch(error => {
        console.error('Error updating profile:', error)
      })
      .finally(() => {
        setLoading(false)
      })
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
      <div className='bg-white rounded-lg shadow border border-gray-100 p-3 md:p-6 mb-6'>
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

        <Form form={form} onFinish={handleSubmit}>
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
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Professional Title
              </label>
              <input
                type='text'
                name='professionalTitle'
                value={formData.professionalTitle}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-end'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>
            <div className='w-full '>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Phone Number
              </label>
              <PhoneInput
                placeholder='Enter phone number'
                value={formData.phoneNumber}
                onChange={phone => {
                  setFormData(prev => ({
                    ...prev,
                    phoneNumber: phone
                  }))
                }}
              />
              {/* <input
                type='text'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                
              /> */}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Date of Birth
              </label>
              <div className='relative'>
                <DatePicker
                  name='dob'
                  className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                  value={
                    formData.dob && formData.dob._seconds
                      ? dayjs(new Date(formData.dob._seconds * 1000))
                      : null
                  }
                  onChange={(date, dateString) => {
                    setFormData(prev => ({
                      ...prev,
                      dob: {
                        _seconds: Math.floor(
                          new Date(dateString).getTime() / 1000
                        ),
                        _nanoseconds: 0
                      }
                    }))
                  }}
                  format='YYYY-MM-DD'
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Gender
              </label>
              <div className='relative'>
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={handleChange}
                  className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none'
                >
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                  <option value='Prefer not to say'>Prefer not to say</option>
                </select>
                <svg
                  className='absolute right-3 top-1 px-3 h-6 w-6 text-gray-400 pointer-events-none'
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
          </div>

          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Present Address
              </label>
              <input
                type='text'
                name='presentAddress'
                value={formData.presentAddress}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Permanent Address
              </label>
              <input
                type='text'
                name='permanentAddress'
                value={formData.permanentAddress}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                
              />
            </div>
          </div> */}

          {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                City
              </label>
              <input
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Postal Code
              </label>
              <input
                type='text'
                name='postalCode'
                value={formData.postalCode}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                
              />
            </div>
          </div> */}
          {/* 
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Country
              </label>
              <input
                type='text'
                name='country'
                value={formData.country}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Specialties
              </label>
              <input
                type='text'
                name='specialties'
                value={formData.specialties}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                
              />
            </div>
          </div> */}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            <Address
              form={form}
              allowExpand={true}
              initialValues={userData?.address || {}}
            />

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Specialties
              </label>
              <input
                type='text'
                name='specialties'
                value={formData.specialties}
                onChange={handleChange}
                className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>
          </div>
          <div className='my-6'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              About
            </label>
            <textarea
              name='about'
              value={formData.about}
              onChange={handleChange}
              rows={5}
              className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
            />
          </div>

          <div className='mb-6'>
            <Certificates
              uploadedCertificates={formData?.certificates || []}
              handleUpdateCertificates={files => {
                setFormData(prev => ({
                  ...prev,
                  certificates: files
                }))
              }}
            />
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              disabled={loading}
              className='bg-primary disabled:cursor-not-allowed disabled:bg-opacity-60 flex items-center justify-center gap-2 text-white px-6 py-3 rounded-md font-medium hover:bg-primary/95 transition duration-200'
            >
              {loading && <Loader variants='sm' />}
              Save Changes
            </button>
          </div>
        </Form>
      </div>

      {showAccountSecurity && (
        <div className='bg-white rounded-lg shadow border border-gray-100 p-6 mb-6'>
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
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              />
            </svg>
            <h2 className='text-xl font-semibold text-gray-900'>
              Account Security
            </h2>
          </div>

          <div>
            <button
              onClick={handleResetPassword}
              className='flex items-center px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200'
            >
              <svg
                className='h-5 w-5 mr-2 text-gray-700'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z'
                />
              </svg>
              Reset Password
            </button>
          </div>
        </div>
      )}

      {/* Reset Password Modal */}
      {showResetPasswordModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-lg w-full max-w-md mx-4'>
            <div className='p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-semibold text-gray-900'>
                  Reset your password
                </h2>
                <button
                  onClick={closeModal}
                  className='text-gray-500 hover:text-gray-700'
                >
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              <p className='text-gray-600 mb-6'>
                Enter your current password and a new password to update your
                credentials.
              </p>

              <div className='mb-6'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Current Password
                </label>
                <input
                  type='password'
                  className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>

              <div className='mb-6'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  New Password
                </label>
                <input
                  type='password'
                  className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>

              <div className='mb-6'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Confirm New Password
                </label>
                <input
                  type='password'
                  className='w-full p-1 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>

              <div className='flex justify-end space-x-3'>
                <button
                  onClick={closeModal}
                  className='px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200'
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdatePassword}
                  className='bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/95 transition duration-200'
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Password Updated Success Message */}
      {passwordUpdated && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-lg w-full max-w-md mx-4'>
            <div className='p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-semibold text-gray-900'>
                  Password Updated
                </h2>
                <button
                  onClick={closeModal}
                  className='text-gray-500 hover:text-gray-700'
                >
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              <p className='text-gray-600'>
                Your password has been updated successfully!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditProfileForm
