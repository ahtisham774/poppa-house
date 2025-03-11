import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import AuthLayout from '../components/AuthLayout'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { css } from './register'
import SocialLogin from '../components/SocialLogin'

const Login = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = values => {
    setLoading(true)
    // Handle form submission
    console.log('Success:', values)
    setLoading(false)
  }

  return (
    <AuthLayout
      title='Register Now!'
      subTitle={'Enter your Credentials to access your account'}
    >
      <>
        <Form
          form={form}
          name='login'
          onFinish={onFinish}
          layout='vertical'
          requiredMark={false}
        >
          <Form.Item
            name='email'
            label='Email'
            className='font-medium'
            rules={[
              { required: true, message: 'Please enter your email address' },
              { type: 'email', message: 'Please enter a valid email address' }
            ]}
          >
            <Input placeholder='Enter your Email Address..' className={css+" dp"} />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
             className='font-medium'
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder='Enter your Password..' className={css+" dp"} />
          </Form.Item>
          <div className='text-left mb-4'>
            <a href='/forgot-password' className='text-primary font-medium'>
              Forgot your password?
            </a>
          </div>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              loading={loading}
              className='w-full bg-accent text-black border-none hover:!bg-accent hover:!text-black py-5 font-medium text-base'
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className='text-center mb-4 w-full relative isolate bg-white'>Or
            <span className='w-full max-w-xs top-1/2 left-1/2 -z-[1] -translate-x-1/2 absolute  border border-[#F5F5F5]' />

        </div>
        <SocialLogin />
        <div className='text-center mt-4'>
          Don't have an account?{' '}
          <a href='/signup' className='text-secondary font-medium'>
            Sign Up
          </a>
        </div>
      </>
    </AuthLayout>
  )
}

export default Login
