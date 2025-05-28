import { Form, Input, Button, Checkbox, Select, DatePicker, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import AuthLayout from '../components/AuthLayout'
import { useRegisterForm } from '../hooks/useRegisterForm'

import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

export const css = `flex-1 w-full px-0 py-2 bg-transparent border-0 border-b-2 !border-[#adadad]  !outline-none rounded-none ring-0 focus:ring-0 focus:outline-none`
const { Option } = Select

const RegisterPage = () => {
  const [form] = Form.useForm()
  const { handleRegister, loading, error } = useRegisterForm({ form })

  const roles = [
    'Property Viewing',
    'Property Search Consultant',
    'Property Cleaning ',
    'Garden and Lawn Maintenance',
    'Repair & Maintenance'
  ]

  const onFinish = async values => {
    console.log('Form values:', values)
    try {
      await handleRegister(values, values.profilePicture.file, values.cv.file)
    } catch (err) {
      console.error('Registration error:', err)
    }
  }

  // Optional: Handle before upload
  const beforeUpload = file => {
    const isValidType =
      file.type === 'application/pdf' || file.type.startsWith('image/')
    if (!isValidType) {
      alert('Only PDFs and images are allowed!')
    }
    return isValidType
  }

  return (
    <AuthLayout title='Register Now!'>
      <Form
        form={form}
        name='register'
        onFinish={onFinish}
        layout='vertical'
        requiredMark={false}
      >
        <div className='grid grid-cols-2 gap-24'>
          <Form.Item
            name='firstName'
            className='font-medium'
            label={<p className='font-medium'>First Name</p>}
            rules={[
              { required: true, message: 'Please enter your first name' },
              {
                min: 3,
                message: 'Your name must be at least 3 characters long'
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: 'Your name must not contain numbers'
              }
            ]}
          >
            <Input
              placeholder='Enter your First Name..'
              className={css + ' dp'}
            />
          </Form.Item>
          <Form.Item
            name='lastName'
            label={<p className='font-medium'>Last Name</p>}
            rules={[
              { required: true, message: 'Please enter your last name' },
              {
                min: 3,
                message: 'Your name must be at least 3 characters long'
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: 'Your name must not contain numbers'
              }
            ]}
          >
            <Input
              placeholder='Enter your Last Name..'
              className={css + ' dp'}
            />
          </Form.Item>
        </div>
        <div className='grid grid-cols-2 gap-24'>
          <Form.Item
            name='email'
            label={<p className='font-medium'>Email</p>}
            rules={[
              { required: true, message: 'Please enter your email address' },
              { type: 'email', message: 'Please enter a valid email address' }
            ]}
          >
            <Input
              placeholder='Enter your Email Address..'
              className={css + ' dp'}
            />
          </Form.Item>
          <Form.Item
            name='phoneNumber'
            className='font-medium'
            label={<p className='font-medium'>Phone Number</p>}
            rules={[
              { required: true, message: 'Please enter your phone number' }
            ]}
          >
            <PhoneInput placeholder='Enter phone number' className='border_b' />
          </Form.Item>
        </div>
        <Form.Item
          name='password'
          label='Password'
          className='font-medium'
          rules={[
            { required: true, message: 'Please enter your password' },
            {
              min: 8,
              message: 'The password must be at least 8 characters long'
            },
            {
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              message:
                'Please choose a strong password that includes at least 1 lowercase and uppercase letter, a number, as well as a special character (!@#$%^&*)'
            }
          ]}
        >
          <Input.Password
            placeholder='Enter your Password..'
            className={css + ' dp'}
          />
        </Form.Item>
        <Form.Item
          name='profilePicture'
          className='!w-full'
          label={<p className='font-medium'>Profile Picture</p>}
        >
          <Upload
            name='avatar'
            className={
              css + '  !w-full flex flex-col items-start overflow-auto'
            }
            style={{
              borderRadius: '0px',
              border: 'none',
              background: '#fff',
              width: '100%'
            }}
            accept='.png, .jpg, .jpeg'
            multiple={false}
            maxCount={1}
            listType='picture'
            showUploadList={true}
            beforeUpload={beforeUpload}
            customRequest={({ onSuccess }) => {
              setTimeout(() => {
                onSuccess('ok')
              }, 0)
            }}
          >
            <Button
              htmlType='button'
              className='border-none rounded-none outline-none !w-full'
              icon={<UploadOutlined />}
            >
              Click to upload
            </Button>
          </Upload>
        </Form.Item>
        <div className='grid grid-cols-2 gap-24'>
          <Form.Item
            name='gender'
            label={<p className='font-medium'>Gender</p>}
          >
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
              <Option value='male'>Male</Option>
              <Option value='female'>Female</Option>
              <Option value='other'>Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='dob'
            label={<p className='font-medium'>Date of Birth</p>}
          >
            <DatePicker className={css} format='MM/DD/YYYY' />
          </Form.Item>
        </div>
        <div className='grid grid-cols-2 gap-24'>
          <Form.Item
            name='experienceLevel'
            label={<p className='font-medium'>Experience Level</p>}
          >
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
              placeholder='Select Experience'
            >
              <Option value='beginner'>Beginner</Option>
              <Option value='intermediate'>Intermediate</Option>
              <Option value='expert'>Expert</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name='availability'
            label={<p className='font-medium'>Availability</p>}
          >
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
              placeholder='Select Availability'
            >
              <Option value='fullTime'>Full Time</Option>
              <Option value='partTime'>Part Time</Option>
              <Option value='freelance'>Freelance</Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item
          name='role'
          label={<p className='font-medium'>Role Selection</p>}
        >
          <Select
            suffixIcon={
              <svg
                width='10'
                height='6'
                viewBox='0 0 10 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 0.207031L5 5.20703L10 0.207031H0Z' fill='#242426' />
              </svg>
            }
            className={css + ' dp'}
            placeholder='Select the Role you want to Apply for'
          >
            {roles.map(role => (
              <Option key={role} value={role}>
                {role}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name='cv' label={<p className='font-medium'>Your CV</p>}>
          <Upload
            className={
              css + '  !w-full flex flex-col items-start overflow-auto'
            }
            style={{
              borderRadius: '0px',
              border: 'none',
              background: '#fff',
              width: '100%'
            }}
            name='cv'
            showUploadList={true}
            accept='.pdf'
            multiple={false}
            maxCount={1}
            listType='picture'
            beforeUpload={beforeUpload}
            customRequest={({ onSuccess }) => {
              setTimeout(() => {
                onSuccess('ok')
              }, 0)
            }}
          >
            <Button
              htmlType='button'
              className='border-none rounded-none outline-none !w-full'
              icon={<UploadOutlined />}
            >
              Click to upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name='agreement'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Should accept agreement'))
            }
          ]}
        >
          <Checkbox className='font-medium'>
            I agree to the terms & policy
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            disabled={loading}
            loading={loading}
            className='w-full bg-accent font-bold text-base py-6 text-black border-none hover:!bg-accent hover:!text-primary'
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  )
}

export default RegisterPage
