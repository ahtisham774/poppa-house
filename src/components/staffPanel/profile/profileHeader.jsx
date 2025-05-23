import React, { useEffect, useState } from 'react'
import UpdateProfileModal from '../../common/updateProfileModal'

const ProfileHeader = ({
  name,
  title,
  available,
  bio,
  avatar,
  handleUpdateAvailability,
  handleSubmit
}) => {
  const [isAvailable, setIsAvailable] = useState(false)
  const [openUpdateProfileModal, setOpenUpdateProfileModal] = useState(false)


  useEffect(()=>{
    setIsAvailable(available)
  },[available])

  const handleAvailabilityChange = () => {
    setIsAvailable(!isAvailable)
    handleUpdateAvailability(!isAvailable)
      .then(() => {})
      .catch(error => {
        console.error('Error updating availability:', error)
        setIsAvailable(!isAvailable)
      })
  }

  return (
    <>
      <div className='bg-white p-6 rounded-lg shadow border border-gray-100 mb-6'>
        <div className='flex flex-col md:flex-row items-start md:items-center'>
          <div className='relative mb-4 md:mb-0 md:mr-6'>
            {avatar ? (
              <img
                src={avatar}
                alt='User Avatar'
                className='h-36 w-36 rounded-full object-cover border-4 border-white shadow-lg'
              />
            ) : (
              <div className='h-36 w-36 rounded-full bg-gray-300 flex items-center text-5xl justify-center border-4 border-white shadow-lg'>
                {name?.charAt(0).toUpperCase()}
              </div>
            )}

            <button
              onClick={() => {
                setOpenUpdateProfileModal(true)
              }}
              className='absolute bottom-2 right-2 bg-accent p-2 rounded-full'
            >
              <svg
                className='h-5 w-5 text-black'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-1'>
              {name}
            </h2>
            <p className='text-gray-600 mb-3'>{title}</p>

            <div className='flex items-center mb-4'>
              <div
                className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                  isAvailable ? 'bg-green-400' : 'bg-gray-400'
                }`}
                onClick={handleAvailabilityChange}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                    isAvailable ? 'translate-x-6' : 'translate-x-0'
                  }`}
                ></div>
              </div>
              <span className='ml-2 text-sm text-gray-600'>
                {isAvailable ? 'Available' : 'Unavailable'}
              </span>
            </div>

            <p className='text-gray-700'>{bio}</p>
          </div>
        </div>
      </div>
      <UpdateProfileModal
        open={openUpdateProfileModal}
        handleClose={() => setOpenUpdateProfileModal(false)}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default ProfileHeader
