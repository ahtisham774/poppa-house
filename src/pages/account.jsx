
import { Button, Input, Select, DatePicker, Form } from 'antd'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { css} from './register'
import { user } from '../data'
import { useEffect } from 'react'

const AccountPage = () => {
  

  const [form] = Form.useForm()

  useEffect(() => {
    // Initialize form values
    form.setFieldsValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      dateOfBirth: new Date(user.dateOfBirth).getMilliseconds
    })
  }, [user, form])

  const handleLogout = () => {
    // Implement logout functionality
    localStorage.removeItem('userLoggedIn')
    window.location.href = '/'
  }

  const onFinish = values => {
    // Handle form submission
    console.log('Updated user information:', values)
    // You would typically send this to your backend
  }

  return (
    <div className='min-h-screen bg-gray-50 pb-16'>
      <div className="container flex flex-col gap-16 py-12">
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
                  <div className='w-32 h-32 rounded-full bg-yellow-400 border-4 border-white flex items-center justify-center text-black text-6xl font-bold'>
                    {user.firstName[0]}
                  </div>
                </div>
                {/* User Info */}
                <div className='lg:ml-6 lg:-mb-4'>
                  <h1 className='text-2xl font-bold text-gray-800'>
                    {user.firstName} {user.lastName}
                  </h1>
                  <p className='text-gray-600'>{user.email}</p>
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
                  <Input placeholder='First Name' className={css+" dp"} />
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
                  <Input placeholder='Last Name' className={css+" dp"} />
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
                  <Input placeholder='Email' className={css+" dp"} />
                </Form.Item>
                {/* Phone */}
                <Form.Item
                name='phone'
                 className='font-medium'
                label={<p className='font-medium'>Phone Number</p>}
          
                rules={[
                  { required: true, message: 'Please enter your phone number' },
                  {
                    pattern: /^[0-9]+$/,
                    message: 'The phone number must not contain any letters'
                  }
                ]}
              >
                <Input
                  style={{
                    borderRadius: '0px',
                    border: 'none',
                    background: '#fff'
                  }}
                  className={"dp"}
                  styles={{
                    input: {
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      borderRadius: '0px',
                      marginLeft: '1rem',
                      width: '95%'
                    }
                  }}
                  addonBefore={
                    <Select
                      className='dp'
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
                      defaultValue='+1'
                      style={{
                        width: 70,
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        borderRadius: '0px',
                        background: '#fff'
                      }}
                    >
                      <Select.Option value='+1'>+1</Select.Option>
                      <Select.Option value='+44'>+44</Select.Option>
                    </Select>
                  }
                  placeholder='(000) 000 0000'
                />
              </Form.Item>
                {/* Gender */}
                <Form.Item  className='font-medium' label='Gender' name='gender'>
                <Select
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
                  className={css + ' dp'}
                  placeholder='Select Gender'
                >
                  <Select.Option value='male'>Male</Select.Option>
                  <Select.Option value='female'>Female</Select.Option>
                  <Select.Option value='other'>Other</Select.Option>
                </Select>
                </Form.Item>
                {/* Date of Birth */}
                <Form.Item  className='font-medium' label='Date of Birth' name='dateOfBirth'>
                  <DatePicker
                    format='DD/MM/YYYY'
                    className={css}
                    suffixIcon={<IoCalendarClearOutline />}
                  />
                </Form.Item>
                {/* Log Out Button */}
                <div className='col-span-1 md:col-span-2 mt-8'>
                  <Button
                    type='primary'
                    onClick={handleLogout}
                    className='bg-secondary  text-primary border-none h-12 px-10 text-base font-medium rounded-md'
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
