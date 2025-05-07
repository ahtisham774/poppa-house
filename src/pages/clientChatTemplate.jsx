import { useState } from 'react'
import { GoAlert } from 'react-icons/go'
import { Outlet } from 'react-router-dom'
import ContactAdminModal from '../components/clientPortal/messages/contactAdminModal'

const ClientChatTemplate = () => {
  const [showContactAdmin, setShowContactAdmin] = useState(false)

  const handleContactAdmin = () => {
    setShowContactAdmin(true)
  }
  const handleCloseContactAdmin = () => {
    setShowContactAdmin(false)
  }
  return (
    <div className='flex flex-col min-h-screen '>
      {/* Header */}
      <header className='flex justify-between items-center px-6 py-4'>
        <h1 className='text-2xl font-medium'>Chats</h1>
        <button
          onClick={handleContactAdmin}
          className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 text-sm'
        >
          <GoAlert />
          Contact Admin
        </button>
      </header>
      {<Outlet />}
      {showContactAdmin && (
        <ContactAdminModal onClose={handleCloseContactAdmin} />
      )}
    </div>
  )
}

export default ClientChatTemplate
