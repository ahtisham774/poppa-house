import { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import AuthLayout from '../components/AuthLayout'

import { css } from './register'
import SocialLogin from '../components/SocialLogin'
import { useLogin } from '../hooks/useLogin'
import { showToast } from '../utils/toast'


const Login = () => {
  const [form] = Form.useForm()
  const { login, loading, error } = useLogin()
  

  const onFinish = async values => {
    try {
      await login(values.email, values.password)
      showToast('success', 'Login successful!')
    } catch (err) {
      console.error('Login error:', err, error)
      showToast('error', err.message || 'Invalid Credentials')
    }
  }

  return (
    <AuthLayout
      title='Welcome back!'
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
            <Input
              placeholder='Enter your Email Address..'
              className={css + ' dp'}
            />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            className='font-medium'
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password
              placeholder='Enter your Password..'
              className={css + ' dp'}
            />
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
              disabled={loading}
              loading={loading}
              className='w-full bg-accent text-black border-none hover:!bg-accent hover:!text-black py-5 disabled:cursor-not-allowed font-medium text-base'
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className='text-center mb-4 w-full relative isolate bg-white'>
          Or
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
