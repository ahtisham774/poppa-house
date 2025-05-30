import { InfoCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'

import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import contactService from '../../api/services/contactService'
import { showToast } from '../../utils/toast'
import { Button } from 'antd'

export default function ContactForm () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)

  // Validation patterns
  const patterns = {
    name: /^[A-Za-z\s]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneNumber: /^\+?[1-9]\d{1,14}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
  }

  const validateField = (name, value) => {
    let error = ''

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value) {
          error = `Please enter your ${
            name === 'firstName' ? 'first' : 'last'
          } name`
        } else if (!patterns.name.test(value)) {
          error =
            'Name must be at least 3 characters long and contain no numbers'
        }
        break

      case 'email':
        if (!value) {
          error = 'Please enter your email address'
        } else if (!patterns.email.test(value)) {
          error = 'Please enter a valid email address'
        }
        break

      case 'phoneNumber':
        if (!value) {
          error = 'Please enter your phone number'
        }
        break

      case 'password':
        if (!value) {
          error = 'Please enter your password'
        } else if (!patterns.password.test(value)) {
          error =
            'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character'
        }
        break

      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password'
        } else if (value !== formData.password) {
          error = 'The passwords do not match'
        }
        break

      case 'message':
        if (!value.trim()) {
          error = 'The message field must not be empty'
        }
        break

      default:
        break
    }

    return error
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }))
    }
  }

  const handleBlur = e => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // Validate all fields
    setLoading(true)
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key])
    })
    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).every(error => !error)) {
      console.log('Form submitted:', formData)
      contactService
        .sendMessage(formData)
        .then(response => {
          console.log('Message sent successfully:', response)
          showToast('success', 'Message sent successfully!')
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: ''
          })
          setTouched({})
          setErrors({})
        })
        .catch(error => {
          console.error('Error sending message:', error)
          showToast('error', 'Error sending message. Please try again later.')
        })
        .finally(() => {
          setLoading(false)
        })

      // Add your form submission logic here
    }
  }

  const getInputClasses = fieldName => {
    return `flex-1 w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-400  focus:ring-0 focus:outline-none 
    ${
      touched[fieldName] && errors[fieldName]
        ? 'border-red-500 focus:ring-red-200'
        : 'border-gray-300 focus:ring-blue-200'
    }`
  }

  return (
    <div className='grid grid-cols-1  lg:grid-cols-[45%_55%] place-items-center'>
      {/* Image Section */}
      <div className='block '>
        <img
          src='/assets/contactUs.jpg'
          alt='Contact us'
          className='w-full h-auto block object-cover'
        />
      </div>

      {/* Form Section */}
      <div className='p-8 '>
        <h1 className='text-[32px] font-bold text-[#1a1a4b] mb-2'>
          Let's Get In Touch
        </h1>
        <p className='text-gray-600 mb-8'>
          Have questions or need assistance? At Proppa House, we're here to
          help. Get in touch with us today, and our team will respond promptly.
        </p>

        <form onSubmit={handleSubmit} className='space-y-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* First Name */}
            <div className='relative'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                First Name
              </label>
              <div className='relative'>
                <input
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Enter your First Name..'
                  className={getInputClasses('firstName')}
                />
                <InfoCircleOutlined className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-400' />
              </div>
              {touched.firstName && errors.firstName && (
                <p className='mt-1 text-sm text-red-500'>
                  • {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className='relative'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Last Name
              </label>
              <div className='relative'>
                <input
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Enter your Last Name..'
                  className={getInputClasses('lastName')}
                />
                <InfoCircleOutlined className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-400' />
              </div>
              {touched.lastName && errors.lastName && (
                <p className='mt-1 text-sm text-red-500'>• {errors.lastName}</p>
              )}
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Email */}
            <div className='relative'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Email
              </label>
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Enter your Email Address..'
                  className={getInputClasses('email')}
                />
                <InfoCircleOutlined className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-400' />
              </div>
              {touched.email && errors.email && (
                <p className='mt-1 text-sm text-red-500'>• {errors.email}</p>
              )}
            </div>

            {/* Phone Number */}

            <div className='relative mt-1'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Phone Number
              </label>
              <PhoneInput
                placeholder='Enter phone number'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={value => {
                  setFormData(prev => ({ ...prev, phoneNumber: value }))
                  if (touched.phoneNumber) {
                    setErrors(prev => ({
                      ...prev,
                      phoneNumber: validateField('phoneNumber', value)
                    }))
                  }
                }}
                onBlur={() => {
                  setTouched(prev => ({ ...prev, phoneNumber: true }))
                  setErrors(prev => ({
                    ...prev,
                    phoneNumber: validateField(
                      'phoneNumber',
                      formData.phoneNumber
                    )
                  }))
                }}
              />
            </div>
          </div>
          {/* Message */}
          <div className='relative md:col-span-2 pb-8'>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Message
            </label>
            <div className='relative'>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Write your message..'
                rows='3'
                className={getInputClasses('message')}
              />
              <InfoCircleOutlined className='absolute right-2 top-4 text-gray-400' />
            </div>
            {touched.message && errors.message && (
              <p className='mt-1 text-sm text-red-500'>• {errors.message}</p>
            )}
          </div>
          <Button
            type='primary'
            htmlType='submit'
            loading={loading}
            disabled={loading}
            className='w-full bg-accent text-black border-none disabled:cursor-not-allowed hover:!bg-accent hover:!text-black py-5 font-medium text-base'
          >
           Send Message
          </Button>
         
        </form>
      </div>
    </div>
  )
}
