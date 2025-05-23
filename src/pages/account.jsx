import { Button, Input, Select, DatePicker, Form } from 'antd'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { css } from './register'

import { useEffect } from 'react'
import { useAuth } from '../context/useAuth'
import clientProfileService from '../api/services/clientProfileService'
import staffProfileService from '../api/services/staffProfileService'
import { PhoneInput } from 'react-international-phone'
import dayjs from 'dayjs'
import { useLogin } from '../hooks/useLogin'
import ShowProfile from '../components/common/showProfile'

const AccountPage = () => {
  const { user } = useAuth()
  const { logout } = useLogin()
  const [form] = Form.useForm()

  useEffect(() => {
    // Initialize form values
    const getUserDataFun =
      user?.role?.toLowerCase() === 'client'
        ? clientProfileService.getClientProfile(user?.id)
        : staffProfileService.getStaffProfile(user?.userId)

    getUserDataFun
      .then(response => {
        const { data } = response
        const { name, email, phoneNumber, profilePicture, gender, dob } =
          data || response

        form.setFieldsValue({
          firstName: name,
          email: email,
          phoneNumber: phoneNumber,
          gender: gender,
          profilePicture: profilePicture,
          dateOfBirth: dob?._seconds
            ? dayjs(new Date(dob._seconds * 1000))
            : dayjs(dob)
        })
      })
      .catch(error => {
        console.error('Error fetching user data:', error)
      })
  }, [user, form])

  const handleLogout = async () => {
    await logout()
  }

  const onFinish = values => {
    // Handle form submission
    console.log('Updated user information:', values)
    // You would typically send this to your backend
  }

  return (
    <div className='min-h-screen bg-gray-50 pb-16'>
      <div className='container flex flex-col gap-16 py-12'>
        {/* Profile Banner Section */}
        <div className='relative w-full rounded-xl overflow-hidden border'>
          {/* Banner Image */}
          <div className='w-full h-[300px] '>
            <img
              src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
              alt='Profile Banner'
              className='w-full h-full object-cover'
            />
          </div>
          {/* Profile Info */}
          <div className='container mx-auto px-4 h-full flex-col items-center justify-center '>
            <div className='relative -mt-16 flex flex-col items-center lg:flex-row lg:items-end lg:mb-8'>
              {/* Profile Image */}
              <div className='relative z-10'>
                <ShowProfile image={form.getFieldValue("profilePicture")} custom='w-32 h-32 rounded-full bg-yellow-400 border-4 border-white flex items-center justify-center text-black text-6xl font-bold' />
              </div>
              {/* User Info */}
              <div className='lg:ml-6 lg:-mb-4'>
                <h1 className='text-2xl font-bold text-gray-800'>
                  {user?.name}
                </h1>
                <p className='text-gray-600'>{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Account Form Section */}
        <div className='px-4 py-8 rounded-xl border'>
          <div className=' p-8 lg:px-12'>
            <Form
              form={form}
              layout='vertical'
              onFinish={onFinish}
              className='grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16'
            >
              {/* First Name */}
              <Form.Item
                label='First Name'
                name='firstName'
                className='font-medium'
                rules={[
                  { required: true, message: 'Please enter your first name' }
                ]}
              >
                <Input placeholder='First Name' className={css + ' dp'} />
              </Form.Item>
              {/* Last Name */}
              <Form.Item
                label='Last Name'
                name='lastName'
                className='font-medium'
                rules={[
                  { required: true, message: 'Please enter your last name' }
                ]}
              >
                <Input placeholder='Last Name' className={css + ' dp'} />
              </Form.Item>
              {/* Email */}
              <Form.Item
                label='Email Address'
                name='email'
                className='font-medium'
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder='Email' className={css + ' dp'} />
              </Form.Item>
              {/* Phone */}
              <Form.Item
                name='phoneNumber'
                className='font-medium'
                label={<p className='font-medium'>Phone Number</p>}
              >
                <PhoneInput
                  placeholder='Phone Number'
                  className={'  border_b'}
                />
              </Form.Item>
              {/* Gender */}
              <Form.Item className='font-medium' label='Gender' name='gender'>
                <Select
                  variant='underlined'
                  className='mt-2 border-b border-b-[#adadad]'
                  suffixIcon={
                    <svg
                      width='10'
                      height='6'
                      viewBox='0 0 10 6'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 0.207031L5 5.20703L10 0.207031H0Z'
                        fill='#242426'
                      />
                    </svg>
                  }
                  placeholder='Select Gender'
                >
                  <Select.Option value='male'>Male</Select.Option>
                  <Select.Option value='female'>Female</Select.Option>
                  <Select.Option value='other'>Other</Select.Option>
                </Select>
              </Form.Item>
              {/* Date of Birth */}
              <Form.Item
                className='font-medium'
                label='Date of Birth'
                name='dateOfBirth'
              >
                <DatePicker
                  format='YYYY-MM-DD'
                  className={css}
                  suffixIcon={<IoCalendarClearOutline />}
                />
              </Form.Item>
              {/* Log Out Button */}
              <div className='col-span-1 md:col-span-2 mt-8'>
                <Button
                  type='primary'
                  onClick={handleLogout}
                  className='bg-secondary hover:!bg-secondary  text-primary border-none h-12 px-10 text-base font-medium rounded-md'
                >
                  Log out
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage
