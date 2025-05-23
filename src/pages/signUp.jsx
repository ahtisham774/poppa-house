
import { Form, Input, Button, Checkbox, message } from 'antd'

import SocialLogin from '../components/SocialLogin'
import AuthLayout from '../components/AuthLayout'
import { css } from './register'
import { useLogin } from '../hooks/useLogin'
import { showToast } from '../utils/toast'

const SignUp = () => {
  const [form] = Form.useForm()
  const { registerBasic, loading, error } = useLogin()

  const onFinish = async values => {
    try {
      await registerBasic(values)
      showToast('success', 'Registration successful')
    } catch (err) {
      if (error) {
        showToast('error', error)
      } else {
        showToast('error', err.message || 'Registration failed')
      }
    }
  }
  return (
    <AuthLayout title='Get Started Now'>
      <>
        <Form
          form={form}
          name='signup'
          onFinish={onFinish}
          layout='vertical'
          requiredMark={false}
        >
          <Form.Item
            name='name'
            label='Name'
            className='font-medium'
            rules={[
              { required: true, message: 'Please enter your name' },
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
            <Input placeholder='Enter your Name..' className={css + ' dp'} />
          </Form.Item>
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
            name='confirmPassword'
            label='Confirm Password'
            dependencies={['password']}
            className='font-medium'
            rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator (_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('The passwords do not match'))
                }
              })
            ]}
          >
            <Input.Password
              placeholder='Enter your Password..'
              className={css + ' dp'}
            />
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
              loading={loading}
              className='w-full bg-accent text-black border-none hover:!bg-accent hover:!text-black py-5 font-medium text-base'
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className='text-center mb-4'>Or</div>
        <SocialLogin />
        <div className='text-center mt-4'>
          Have an account?{' '}
          <a href='/login' className='text-secondary font-medium'>
            Login
          </a>
        </div>
      </>
    </AuthLayout>
  )
}

export default SignUp
