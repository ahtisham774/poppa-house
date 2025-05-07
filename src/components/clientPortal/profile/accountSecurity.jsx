

import { useState } from "react"
import { FiLock, FiAlertTriangle } from "react-icons/fi"

const AccountSecurity = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false)
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [deleteConfirmation, setDeleteConfirmation] = useState("")

  // Handle two-factor authentication toggle
  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled(!twoFactorEnabled)
    // In a real application, this would trigger the setup process for 2FA
  }

  // Handle reset password
  const handleResetPassword = (e) => {
    e.preventDefault()
    // Validate passwords
    if (newPassword !== confirmPassword) {
      alert("New passwords don't match")
      return
    }

    // In a real application, this would call an API to reset the password
    console.log("Password reset requested")

    // Reset form and close modal
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    setShowResetPasswordModal(false)
  }

  // Handle delete account
  const handleDeleteAccount = (e) => {
    e.preventDefault()
    // In a real application, this would call an API to delete the account
    console.log("Account deletion requested")

    // Reset form and close modal
    setDeleteConfirmation("")
    setShowDeleteAccountModal(false)
  }

  return (
    <div className='  mb-6 flex flex-col '>

      {/* Account Security Section */}
      <div className='bg-white rounded-lg br p-6 mb-6 flex flex-col gap-8'>
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <FiLock className="mr-2" /> Account Security
        </h2>

        <div className="bg-white rounded-lg w-fit p-4 br">
          <button
            onClick={() => setShowResetPasswordModal(true)}
            className="flex items-center text-gray-700 font-medium"
          >
            <FiLock className="mr-2" /> Reset Password
          </button>
        </div>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className="bg-white rounded-lg p-6 mb-8 br">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
            <p className="text-gray-500">
              Add an extra layer of security to your account. Protect your account with an additional security layer
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={twoFactorEnabled}
              onChange={handleTwoFactorToggle}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/* Delete Account Section */}
      <div className="bg-white rounded-lg p-6 br">
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Account</h3>
            <p className="text-gray-500">
              These actions are irreversible. Permanently delete your account and all associated data
            </p>
          </div>
          <button
            onClick={() => setShowDeleteAccountModal(true)}
            className="px-4 self-end py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Reset Password Modal */}
      {showResetPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Reset Password</h3>
              <button onClick={() => setShowResetPasswordModal(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleResetPassword} className="p-6">
              <div className="mb-4">
                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowResetPasswordModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-primary/95 text-white rounded-md hover:bg-primary">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteAccountModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium text-red-600 flex items-center">
                <FiAlertTriangle className="mr-2" /> Delete Account
              </h3>
              <button onClick={() => setShowDeleteAccountModal(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <div className="flex">
                  <FiAlertTriangle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-red-800">Warning: This action cannot be undone</h4>
                    <p className="mt-1 text-sm text-red-700">
                      Deleting your account will permanently remove all your data, including profile information,
                      preferences, and activity history.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleDeleteAccount}>
                <div className="mb-6">
                  <label htmlFor="delete-confirmation" className="block text-sm font-medium text-gray-700 mb-1">
                    Type "DELETE" to confirm
                  </label>
                  <input
                    type="text"
                    id="delete-confirmation"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={deleteConfirmation}
                    onChange={(e) => setDeleteConfirmation(e.target.value)}
                    required
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowDeleteAccountModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={deleteConfirmation !== "DELETE"}
                    className={`px-4 py-2 rounded-md text-white ${
                      deleteConfirmation === "DELETE" ? "bg-red-600 hover:bg-red-700" : "bg-red-300 cursor-not-allowed"
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
