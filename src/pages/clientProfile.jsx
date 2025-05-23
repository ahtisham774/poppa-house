import { useEffect, useState } from 'react'
import { useAuth } from '../context/useAuth'
import VerifiedBadge from '../components/clientPortal/profile/verifiedBadge'
import { BiEnvelope, BiPhone } from 'react-icons/bi'
import Tabs from '../components/common/tabs'
import ProgressBar from '../components/common/progressBar'
import PersonalInfo from '../components/clientPortal/profile/personalInfo'
import Preferences from '../components/clientPortal/profile/preferences'
import Documents from '../components/clientPortal/profile/documents'
import AccountSecurity from '../components/clientPortal/profile/accountSecurity'
import UpdateProfileModal from '../components/common/updateProfileModal'
import clientProfileService from '../api/services/clientProfileService'
import ClientReviews from '../components/clientPortal/profile/clientReviews'

const ClientProfile = () => {
  const { user, handleUserUpdate } = useAuth()
  const [activeTab, setActiveTab] = useState('info')
  const [profileCompeletion, setProfileCompletion] = useState(0)
  const [openUpdateProfileModal, setOpenUpdateProfileModal] = useState(false)
  const [formData, setFormData] = useState(null)
  const [status, setStatus] = useState('')
  const [consent, setContent] = useState(null)
  const [category, setCategory] = useState(null)

  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  useEffect(() => {
    const fetchData = async () => {
      clientProfileService
        .getClientProfile(user?.id)
        .then(response => {
          setStatus(response?.kycStatus)
          setFormData({
            name: response?.name,
            email: response?.email,
            phoneNumber: response?.phoneNumber,
            dob: response?.dob,
            address: response?.address
          })
          setContent(response?.consent)
          setCategory({
            userType: response?.userType,
            category: response?.category,
            universityName: response?.universityName
          })
        })
        .catch(error => {
          console.error('Error fetching client profile:', error)
        })
    }

    if (user) {
      fetchData()
    }
  }, [user])

  const tabs = [
    {
      name: 'info',
      title: 'Personal Info',
      content: <PersonalInfo userData={formData} />
    },
    {
      name: 'preferences',
      title: 'Preferences',
      content: <Preferences consent={consent} category={category} />
    },
    {
      name: 'documents',
      title: 'Documents',
      content: <Documents />
    },
    {
      name: 'reviews',
      title: 'Ratings & Reviews',
      content: <ClientReviews />
    },
    {
      name: 'security',
      title: 'Account & Security',
      content: <AccountSecurity />
    }
  ]

  useEffect(() => {
    const getProfileCompletion = () => {
      clientProfileService
        .profileCompletion(user?.id)
        .then(res => {
          if (res) {
            setProfileCompletion(res?.completionPercentage)
          }
        })
        .catch(err => {
          console.error('Error fetching profile completion:', err)
        })
    }
    if (user?.id) {
      getProfileCompletion()
    }
  }, [user])

  const handleSubmit = async profilePicture => {
    return clientProfileService.uploadProfileImage(user?.id, profilePicture)
  }

  return (
    <>
      <div className='p-6'>
        {/* Header */}
        <div className='flex justify-between items-center mb-6'>
          <div>
            <h1 className='text-2xl font-semibold text-gray-900'>Profile</h1>
          </div>
        </div>

        {/* Profile Card */}
        <div className='bg-white rounded-lg border-2 border-[#b1b1b171]  p-6 mb-6'>
          <div className='flex flex-wrap justify-center sm:justify-start items-center'>
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
            <div className='ml-8 flex flex-col items-center sm:items-start'>
              <h2 className='text-3xl font-semibold text-gray-900'>
                {user.name}
              </h2>
              <p className='text-sm text-[#888888] mb-2'>ID: {user?.id}</p>
              {status === 'verified' && <VerifiedBadge />}
              <div className='flex items-center justify-center sm:justify-start flex-wrap my-2 gap-5'>
                <div className='flex items-center gap-2'>
                  <BiEnvelope className='mt-1' />
                  <span className=''>{user.email}</span>
                </div>
                <div className='w-0.5 hidden md:block h-5 border bg-black ' />
                <div className='flex items-center gap-2'>
                  <BiPhone className='mt-1' />
                  <span className=''>{user.phoneNumber}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 w-full mt-4'>
            <div className='flex justify-between items-center gap-3 flex-wrap'>
              <h2>Profile Completion</h2>
              <span className='text-sm text-[#888888] ml-auto text-end'>
                {profileCompeletion}% Complete
              </span>
            </div>
            <ProgressBar progress={profileCompeletion} className={'mb-0'} />
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />

        {tabs.map(
          tab =>
            activeTab === tab.name && (
              <div key={tab.name} className=''>
                {tab.content}
              </div>
            )
        )}
      </div>
      <UpdateProfileModal
        open={openUpdateProfileModal}
        handleClose={() => setOpenUpdateProfileModal(false)}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default ClientProfile
