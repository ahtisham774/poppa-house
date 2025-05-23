import { useState } from 'react'
import { FaTimes, FaPaperPlane } from 'react-icons/fa'
import { GoAlert } from 'react-icons/go'
import { useAuth } from '../../../context/useAuth'
import authService from '../../../api/services/authService'
import { showToast } from '../../../utils/toast'

const ContactAdminModal = ({ onClose }) => {
  const [message, setMessage] = useState('')
  const { user } = useAuth()

  const handleSubmit = e => {
    e.preventDefault()
    // Here you would handle sending the message to admin
    const data = {
      issue: message,
      username: user.name,
      useremail: user.email
    }
   authService.contactAdmin(data)
      .then(response => {
        console.log('Message sent successfully:', response)
        showToast('success', 'Message sent successfully!')
        setMessage('')
        onClose()
      })
      .catch(error => {
        console.error('Error sending message:', error)
        showToast('error', 'Failed to send message. Please try again.')
      })
      
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50'>
      <div className='bg-white rounded-lg p-6 w-full max-w-md mx-4 relative'>
        <button
          onClick={onClose}
          className='absolute right-4 top-4 text-gray-500 hover:text-gray-700'
        >
          <FaTimes />
        </button>

        <div className='flex items-center mb-4'>
          <span className=' mr-2'>
            <GoAlert />
          </span>
          <h2 className='text-xl font-bold text-gray-800'>
            Contact Admin Support
          </h2>
        </div>

        <p className='text-gray-600 mb-4'>
          Use this form to report issues or request assistance from the admin
          team.
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder='Describe your issue or request...'
            className='w-full border border-gray-300 rounded-lg p-3 mb-4 min-h-[120px] focus:outline-none focus:ring-1 focus:ring-blue-500'
            required
          />

          <button
            type='submit'
            className='w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center'
          >
            <FaPaperPlane className='mr-2' />
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactAdminModal
