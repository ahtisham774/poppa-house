import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileTab from '../components/staffPanel/profile/profileTab'
import EditProfileForm from '../components/staffPanel/profile/editProfileForm'
import VerificationsTab from '../components/staffPanel/profile/verificationsTab'
import RatingsReviewsTab from '../components/staffPanel/profile/ratingsReviewsTab'
import { useAuth } from '../context/useAuth'
import staffProfileService from '../api/services/staffProfileService'
import ProfileHeader from '../components/staffPanel/profile/profileHeader'
import Reviews from '../components/clientPortal/profile/reviews'
import { mockReviews } from '../data/review'

const Profile = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('edit')
  const [staffProfile, setStaffProfile] = useState({})
  const [loading, setLoading] = useState(false)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getUserData = () => {
      setLoading(true)
      staffProfileService
        .getStaffProfile(user?.userId || user?.id)
        .then(response => {
          const { data } = response
          setStaffProfile(data)
        })
        .catch(error => {
          console.error('Error fetching client profile:', error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    if (user?.userId || user?.id) {
      getUserData()
    }
  }, [user])

useEffect(() => {
    const getReviews = () => {
      staffProfileService
        .getStaffReviews(user?.userId || user?.id)
        .then(response => {
          const { data } = response
          const reviewsData = data?.map(review => ({
            id: review.jobId,
            rating: review.rating,
            comment: review.comment,
            date: new Date(review.ratedAt).toLocaleDateString(),
            serviceType: review.serviceType,
            location: review.city,
            reviewer: {
              name: review.client.name,
              profile: review.client.profilePicture,
              initials: review.client.name.split(' ').map(n => n[0]).join('')
            }
          }))
          setReviews(reviewsData)
        })
        .catch(error => {
          console.error('Error fetching client profile:', error)
        })
    }
    if (user?.userId || user?.id) {
      getReviews()
    }
  }, [user])

  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  const handleSubmit = async profilePicture => {
    return staffProfileService.uploadProfileImage(user?.userId, profilePicture)
  }

  const handleAvailabilityChange = async availability => {
    return staffProfileService.updateProfile(user?.userId, {
      available: availability
    })
  }

  return (
    <div className='p-3 md:p-6'>
      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h1 className='text-2xl font-semibold text-gray-900'>Profile</h1>
          <div className='flex items-center text-sm text-gray-500'>
            <Link to='/' className='hover:text-blue-500'>
              You
            </Link>
            <span className='mx-2'>›</span>
            <span className='text-blue-400'>Profile</span>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      {/* <div className='bg-white rounded-lg border-2 border-[#b1b1b171]  p-6 mb-6'>
        <div className='flex items-center'>
          <div className='relative'>
            {user?.profilePicture ? (
              <img
                src={user?.profilePicture}
                alt='User Avatar'
                className='h-36 w-36 rounded-full object-cover border-4 border-white shadow-lg'
              />
            ) : (
              <div className='h-36 w-36 rounded-full bg-gray-300 flex items-center text-5xl justify-center border-4 border-white shadow-lg'>
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <button className='absolute bottom-2 right-2 bg-accent p-2 rounded-full'>
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
          <div className='ml-8'>
            <h2 className='text-3xl font-semibold text-gray-900'>
              {user.name}
            </h2>
            <p className='text-lg text-gray-600 mb-2'>Property Specialist ID: {user?.id || user?.userId}</p>
            <div className='flex items-center mb-4'>
              <div className='w-14 h-7 bg-gray-300 rounded-full flex items-center p-1'>
                <div className='w-5 h-5 rounded-full bg-white'></div>
              </div>
              <span className='ml-2 text-gray-700'>Unavailable</span>
            </div>
            <p className='text-gray-700'>
              Experienced property professional with 5+ years in property
              viewing and maintenance.
            </p>
          </div>
        </div>
      </div> */}
      <ProfileHeader
        name={staffProfile?.name}
        available={staffProfile?.available}
        title={`${staffProfile?.professionalTitle} ID: ${staffProfile?.id || user?.userId}`}
        bio={staffProfile?.about}
        avatar={staffProfile?.profilePicture}
        handleUpdateAvailability={handleAvailabilityChange}
        handleSubmit={handleSubmit}
      />

      {/* Tabs */}
      <div className='bg-white rounded-lg  border-2 border-[#b1b1b171] flex items-center gap-3  mb-6 p-3 snap-mandatory overflow-x-auto'>
     
          <ProfileTab
            isActive={activeTab === 'edit'}
            onClick={() => handleTabChange('edit')}
            icon={
              <svg
                className='h-5 w-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                />
              </svg>
            }
            label='Edit Profile'
          />
          <ProfileTab
            isActive={activeTab === 'verifications'}
            onClick={() => handleTabChange('verifications')}
            icon={
              <svg
                className='h-5 w-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            }
            label='Verifications'
          />
          <ProfileTab
            isActive={activeTab === 'ratings'}
            onClick={() => handleTabChange('ratings')}
            icon={
              <svg
                width='13'
                height='11'
                className='h-4 w-4 mr-2'
                viewBox='0 0 13 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.0667 5.66667L13 6.60667L8.64667 11L6.33333 8.66667L7.26667 7.72667L8.64667 9.11333L12.0667 5.66667ZM5.33333 0C6.04058 0 6.71885 0.280951 7.21895 0.781048C7.71905 1.28115 8 1.95942 8 2.66667C8 3.37391 7.71905 4.05219 7.21895 4.55229C6.71885 5.05238 6.04058 5.33333 5.33333 5.33333C4.62609 5.33333 3.94781 5.05238 3.44772 4.55229C2.94762 4.05219 2.66667 3.37391 2.66667 2.66667C2.66667 1.95942 2.94762 1.28115 3.44772 0.781048C3.94781 0.280951 4.62609 0 5.33333 0ZM5.33333 1.33333C4.97971 1.33333 4.64057 1.47381 4.39052 1.72386C4.14048 1.97391 4 2.31304 4 2.66667C4 3.02029 4.14048 3.35943 4.39052 3.60948C4.64057 3.85952 4.97971 4 5.33333 4C5.68696 4 6.02609 3.85952 6.27614 3.60948C6.52619 3.35943 6.66667 3.02029 6.66667 2.66667C6.66667 2.31304 6.52619 1.97391 6.27614 1.72386C6.02609 1.47381 5.68696 1.33333 5.33333 1.33333ZM5.33333 6C5.78667 6 6.33333 6.06 6.94 6.17333L5.82667 7.28667L5.33333 7.26667C3.35333 7.26667 1.26667 8.24 1.26667 8.66667V9.4H5.4L6.66667 10.6667H0V8.66667C0 6.89333 3.55333 6 5.33333 6Z'
                  fill='black'
                />
              </svg>
            }
            label='Ratings & reviews'
          />
        
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'edit' && <EditProfileForm userData={staffProfile} />}
        {activeTab === 'verifications' && <VerificationsTab uploadedDocuments={staffProfile?.verificationDocuments}/>}
        {activeTab === 'ratings' && <Reviews data={null} />}
      </div>
    </div>
  )
}

export default Profile
