import { Button, Form, Input, Modal, Tooltip } from 'antd'
import { useEffect, useState } from 'react'
import { FiLock, FiAlertTriangle } from 'react-icons/fi'
import clientProfileService from '../../../api/services/clientProfileService'
import { useAuth } from '../../../context/useAuth'
import { showToast } from '../../../utils/toast'
import { MdQrCode } from 'react-icons/md'
import { SiFusionauth } from 'react-icons/si'

const AccountSecurity = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false)
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false)
  const { user } = useAuth()
  const [deleteConfirmation, setDeleteConfirmation] = useState('')
  const [showQr, setShowQr] = useState(false)
  const [showVerify, setShowVerify] = useState(false)
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [qrCode, setQrCode] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    // Check if two-factor authentication is enabled
    clientProfileService
      .getTwoFactor(user?.id)
      .then(response => {
        setQrCode(response?.qrCode)
        setTwoFactorEnabled(response?.isEnabled)
      })
      .catch(error => {
        console.error('Error fetching two-factor authentication status:', error)
        showToast('error', 'Error fetching two-factor authentication status')
        setTwoFactorEnabled(false)
        setQrCode(null)
      })
  }, [user?.id])

  const handleSet2FA = () => {
    clientProfileService
      .addTwoFactor(user?.id)
      .then(response => {
        console.log('Two-factor authentication setup successful:', response)
        setQrCode(response?.qrCode) // Assuming the response contains the QR code
        showToast('success', 'Two-factor authentication setup successful')
      })
      .catch(error => {
        console.error('Error setting up two-factor authentication:', error)
        showToast('error', 'Error setting up two-factor authentication')
        setTwoFactorEnabled(prev => !prev) // Revert the toggle state on error
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleDisable2FA = () => {
    clientProfileService
      .disableTwoFactor(user?.id)
      .then(response => {
        console.log(
          'Two-factor authentication disabled successfully:',
          response
        )
        showToast('success', 'Two-factor authentication disabled successfully')
        setTwoFactorEnabled(false)
        setQrCode(null) // Clear the QR code
      })
      .catch(error => {
        console.error('Error disabling two-factor authentication:', error)
        showToast('error', 'Error disabling two-factor authentication')
        setTwoFactorEnabled(prev => !prev) // Revert the toggle state on error
      })
      .finally(() => {
        setLoading(false)
      })
  }

  // Handle two-factor authentication toggle
  const handleTwoFactorToggle = () => {
    setLoading(true)
    if (twoFactorEnabled) {
      handleDisable2FA()
    } else {
      handleSet2FA()
    }
    setTwoFactorEnabled(prev => !prev)
  }

  const handleVerifyToken = () => {
    setLoading(true)
    const data = {
      token
    }

    clientProfileService
      .verifyTwoFactor(user?.id, data)
      .then(response => {
        console.log('Token verification successful:', response)
        showToast('success', 'Token verification successful')
        setShowVerify(false)
      })
      .catch(error => {
        console.error('Error verifying token:', error)
        showToast('error', 'Error verifying token')
      })
      .finally(() => {
        setLoading(false)
        setToken('')
      })
  }

  // Handle reset password
  const handleResetPassword = values => {
    // Validate passwords
    if (values.new_password !== values.confirmPassword) {
      alert('New password and confirm password do not match')
      return
    }
    setLoading(true)
    const data = {
      oldPassword: values.current_password,
      newPassword: values.new_password
    }

    clientProfileService
      .changePassword(user?.id, data)
      .then(response => {
        console.log('Password reset successful:', response)
        showToast('success', 'Password reset successful')
      })
      .catch(error => {
        console.error('Error resetting password:', error)
        showToast('error', 'Error resetting password')
      })
      .finally(() => {
        setLoading(false)
        form.resetFields()
        setShowResetPasswordModal(false)
      })
  }

  // Handle delete account
  const handleDeleteAccount = e => {
    e.preventDefault()
    // In a real application, this would call an API to delete the account
    console.log('Account deletion requested')

    // Reset form and close modal
    setDeleteConfirmation('')
    setShowDeleteAccountModal(false)
  }

  return (
    <div className='  mb-6 flex flex-col '>
      {/* Account Security Section */}
      <div className='bg-white rounded-lg br p-6 mb-6 flex flex-col gap-8'>
        <h2 className='text-xl font-semibold mb-6 flex items-center'>
          <FiLock className='mr-2' /> Account Security
        </h2>

        <div className='bg-white rounded-lg w-fit p-4 br'>
          <button
            onClick={() => setShowResetPasswordModal(true)}
            className='flex items-center text-gray-700 font-medium'
          >
            <FiLock className='mr-2' /> Reset Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className='bg-white rounded-lg p-6 mb-8 br'>
        <div className='flex w-full justify-between items-center flex-wrap-reverse gap-5'>
          <div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              Two-Factor Authentication
            </h3>
            <p className='text-gray-500'>
              Add an extra layer of security to your account. Protect your
              account with an additional security layer
            </p>
          </div>
          <div className='self-end flex items-center justify-end flex-1'>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                className='sr-only peer'
                checked={twoFactorEnabled}
                onChange={handleTwoFactorToggle}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            {qrCode && (
              <>
                <Tooltip placement='bottomRight' title='Show QR Code'>
                  <button
                    onClick={() => setShowQr(true)}
                    className='ml-4 text-gray-700 font-medium'
                  >
                    <MdQrCode size={25} />
                  </button>
                </Tooltip>
                <Tooltip
                  placement='bottomLeft'
                  title='Verify Two-Factor Authentication'
                >
                  <button
                    onClick={() => setShowVerify(true)}
                    className='ml-4 text-gray-700 font-medium'
                  >
                    <SiFusionauth size={25} />
                  </button>
                </Tooltip>
              </>
            )}
          </div>
        </div>
      </div>
      {showQr && (
        <Modal
          title='QR Code'
          open={showQr}
          onCancel={() => setShowQr(false)}
          footer={null}
          centered
          width={300}
          className='rounded-lg'
        >
          <div className='flex flex-col items-center'>
            <img src={qrCode} alt='QR Code' className='size-48 rounded-lg' />
            <p className='text-gray-500 mt-4 text-center'>
              Scan this QR code with your authentication app
            </p>
          </div>
        </Modal>
      )}

      {showVerify && (
        <Modal
          title={<h1 className='mr-4'>Verify Two-Factor Authentication</h1>}
          open={showVerify}
          onCancel={() => setShowVerify(false)}
          footer={null}
          width={350}
          centered
          className='rounded-lg'
        >
          <div className='flex flex-col items-center'>
            <p className='text-gray-500 mb-4 text-center text-sm'>
              Enter the verification code from your authentication app
            </p>
            <Input
              type='number'
              max={999999}
              min={0}
              placeholder='Enter verification code'
              value={token}
              onChange={e => setToken(e.target.value)}
              className='w-full mb-4'
            />
            <Button
              type='primary'
              loading={loading}
              disabled={!token || loading}
              onClick={handleVerifyToken}
              className='w-full bg-primary text-white border-none hover:!bg-primary/95 hover:!text-white py-5 font-medium text-base'
            >
              Verify
            </Button>
          </div>
        </Modal>
      )}

      {/* Delete Account Section */}
      <div className='bg-white rounded-lg p-6 br'>
        <div className='flex flex-col gap-3'>
          <div>
            <h3 className='text-lg font-medium text-gray-900 mb-2'>
              Delete Account
            </h3>
            <p className='text-gray-500'>
              These actions are irreversible. Permanently delete your account
              and all associated data
            </p>
          </div>
          <button
            onClick={() => setShowDeleteAccountModal(true)}
            className='px-4 self-end py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors'
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Reset Password Modal */}
      {showResetPasswordModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg max-w-md w-full mx-4'>
            <div className='flex justify-between items-center p-4 border-b'>
              <h3 className='text-lg font-medium'>Reset Password</h3>
              <button
                onClick={() => setShowResetPasswordModal(false)}
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

            <Form
              form={form}
              name='signup'
              className='signup-form p-6'
              onFinish={handleResetPassword}
              layout='vertical'
              requiredMark={false}
            >
              <Form.Item
                name='current_password'
                label='Current Password'
                className='font-medium'
                rules={[
                  {
                    required: true,
                    message: 'Please enter your current password'
                  },
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
                  placeholder='Enter your current Password..'
                  className='py-2'
                />
              </Form.Item>
              <Form.Item
                name='new_password'
                label='New Password'
                className='font-medium'
                rules={[
                  { required: true, message: 'Please enter your new password' },
                  {
                    min: 8,
                    message: 'The password must be at least 8 characters long'
                  },
                  {
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                    message:
                      'Please choose a strong password that includes at least 1 lowercase and uppercase letter, a number, as well as a special character (!@#$%^&*)'
                  },
                  ({ getFieldValue }) => ({
                    validator: (_, value) => {
                      if (
                        value &&
                        value === getFieldValue('current_password')
                      ) {
                        return Promise.reject(
                          new Error(
                            'New password cannot be the same as current password'
                          )
                        )
                      }
                      return Promise.resolve()
                    }
                  })
                ]}
              >
                <Input.Password
                  placeholder='Enter your new Password..'
                  className='py-2'
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
                      if (!value || getFieldValue('new_password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(
                        new Error('The passwords do not match')
                      )
                    }
                  })
                ]}
              >
                <Input.Password
                  placeholder='Enter your confirm Password..'
                  className='py-2'
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  loading={loading}
                  className='w-full bg-primary text-white border-none hover:!bg-primary/95 hover:!text-white py-5 font-medium text-base'
                >
                  Reset Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteAccountModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg max-w-md w-full mx-4'>
            <div className='flex justify-between items-center p-4 border-b'>
              <h3 className='text-lg font-medium text-red-600 flex items-center'>
                <FiAlertTriangle className='mr-2' /> Delete Account
              </h3>
              <button
                onClick={() => setShowDeleteAccountModal(false)}
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

            <div className='p-6'>
              <div className='bg-red-50 p-4 rounded-lg mb-6'>
                <div className='flex'>
                  <FiAlertTriangle className='h-5 w-5 text-red-600 mr-2 flex-shrink-0' />
                  <div>
                    <h4 className='text-sm font-medium text-red-800'>
                      Warning: This action cannot be undone
                    </h4>
                    <p className='mt-1 text-sm text-red-700'>
                      Deleting your account will permanently remove all your
                      data, including profile information, preferences, and
                      activity history.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleDeleteAccount}>
                <div className='mb-6'>
                  <label
                    htmlFor='delete-confirmation'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Type "DELETE" to confirm
                  </label>
                  <input
                    type='text'
                    id='delete-confirmation'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                    value={deleteConfirmation}
                    onChange={e => setDeleteConfirmation(e.target.value)}
                    required
                  />
                </div>

                <div className='flex justify-end space-x-3'>
                  <button
                    type='button'
                    onClick={() => setShowDeleteAccountModal(false)}
                    className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    disabled={deleteConfirmation !== 'DELETE'}
                    className={`px-4 py-2 rounded-md text-white ${
                      deleteConfirmation === 'DELETE'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-red-300 cursor-not-allowed'
                    }`}
                  >
                    Delete Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountSecurity
