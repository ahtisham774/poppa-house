import { useState, useEffect } from 'react'
import {
  FaStar,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
  FaIdCard
} from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import Reviews from '../components/clientPortal/profile/reviews'
import { mockReviews } from '../data/review'
import ProfileHeader from '../components/staffPanel/profile/profileHeader'

const UserProfile = () => {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 3
  const { id: userId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    // In a real app, this would fetch user data from an API
    // For now, we'll simulate loading data
    setLoading(true)

    setTimeout(() => {
      // Mock user data
      const mockUser = {
        id: userId || 'emp-2025-001',
        name: 'John Doe',
        profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
        title: 'Property Specialist',
        employeeId: 'Employee-2025-001',
        isAvailable: true,
        bio: 'Experienced property professional with 5+ years in property viewing and maintenance.',
        certificates: [
          { id: 1, name: 'Certified Real Estate Viewer' },
          { id: 2, name: 'Certified Real Estate Viewer' }
        ],
        ratings: {
          average: 4,
          count: 8,
          reviews: [
            {
              id: 1,
              reviewer: {
                name: 'Sarah Johnson',
                initials: 'SJ'
              },
              rating: 3.5,
              date: 'January 15, 2025',
              serviceType: 'Property Viewing',
              location: 'Manchester',
              comment:
                'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'
            },
            {
              id: 2,
              reviewer: {
                name: 'Sarah Johnson',
                initials: 'SJ'
              },
              rating: 3.5,
              date: 'January 15, 2025',
              serviceType: 'Property Viewing',
              location: 'Manchester',
              comment:
                'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'
            },
            {
              id: 3,
              reviewer: {
                name: 'Sarah Johnson',
                initials: 'SJ'
              },
              rating: 3.5,
              date: 'January 15, 2025',
              serviceType: 'Property Viewing',
              location: 'Manchester',
              comment:
                'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'
            },
            {
              id: 4,
              reviewer: {
                name: 'Michael Brown',
                initials: 'MB'
              },
              rating: 4.5,
              date: 'January 10, 2025',
              serviceType: 'Property Viewing',
              location: 'London',
              comment:
                "Very impressed with John's knowledge of the area. He was punctual and answered all my questions thoroughly. The property was exactly as described."
            },
            {
              id: 5,
              reviewer: {
                name: 'Emma Wilson',
                initials: 'EW'
              },
              rating: 5,
              date: 'January 5, 2025',
              serviceType: 'Property Maintenance',
              location: 'Birmingham',
              comment:
                'John handled the maintenance request promptly. He was courteous and professional. The issue was resolved completely on the first visit.'
            },
            {
              id: 6,
              reviewer: {
                name: 'David Thompson',
                initials: 'DT'
              },
              rating: 4,
              date: 'December 28, 2024',
              serviceType: 'Property Viewing',
              location: 'Manchester',
              comment:
                'Good experience overall. John was knowledgeable about the property and surrounding area. Would use his services again.'
            },
            {
              id: 7,
              reviewer: {
                name: 'Lisa Parker',
                initials: 'LP'
              },
              rating: 3,
              date: 'December 20, 2024',
              serviceType: 'Property Maintenance',
              location: 'Leeds',
              comment:
                'John was helpful but the maintenance took longer than expected. Communication could have been better throughout the process.'
            },
            {
              id: 8,
              reviewer: {
                name: 'James Wilson',
                initials: 'JW'
              },
              rating: 4.5,
              date: 'December 15, 2024',
              serviceType: 'Property Viewing',
              location: 'Liverpool',
              comment:
                'Excellent service from John. He was very thorough in showing the property and provided great insights about the neighborhood.'
            }
          ]
        }
      }

      setUserData(mockUser)
      setLoading(false)
    }, 1000)
  }, [userId])

  const goBack = () => {
    navigate(-1)
  }
  // Calculate pagination
  const totalPages = userData?.ratings?.reviews
    ? Math.ceil(userData.ratings.reviews.length / reviewsPerPage)
    : 0

  const indexOfLastReview = currentPage * reviewsPerPage
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage
  const currentReviews = userData?.ratings?.reviews
    ? userData.ratings.reviews.slice(indexOfFirstReview, indexOfLastReview)
    : []

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  // Render star rating
  const renderStarRating = rating => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className='text-yellow-400' />)
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key='half' className='relative'>
          <FaRegStar className='text-yellow-400' />
          <div className='absolute top-0 left-0 overflow-hidden w-1/2'>
            <FaStar className='text-yellow-400' />
          </div>
        </div>
      )
    }

    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className='text-yellow-400' />)
    }

    return <div className='flex'>{stars}</div>
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <button
        onClick={goBack}
        className='flex items-center gap-1 ml-5 text-[#254EF0] text-sm'
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          className='size-3'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.6667 14.6667L4 8.00004L10.6667 1.33337'
            stroke='#254EF0'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        Back to Chat
      </button>

      {/* Content */}
      <div className='flex-1 p-6 space-y-6'>
        {/* Profile Section */}
       <ProfileHeader
        name={userData?.name}
        title={`${userData?.title || 'Property Specialist'} ID:(${userData?.employeeId})`}
        avatar={userData?.profilePicture}
        available={userData?.isAvailable}
        allow_update_profile={false}
        allow_update_availability={false}
        bio={userData?.bio}
        handleUpdateAvailability={newAvailability => {
          setUserData(prev => ({ ...prev, isAvailable: newAvailability }))
        }}
        handleSubmit={() => {}}

       />

        {/* Certificates Section */}
        <div className='bg-white rounded-lg br p-6'>
          <h3 className='text-lg font-semibold mb-4 gap-2 flex items-center'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H17M6 7H18M6 10.5H9M6 14H8'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15 16.5C15.7956 16.5 16.5587 16.1839 17.1213 15.6213C17.6839 15.0587 18 14.2956 18 13.5C18 12.7044 17.6839 11.9413 17.1213 11.3787C16.5587 10.8161 15.7956 10.5 15 10.5C14.2044 10.5 13.4413 10.8161 12.8787 11.3787C12.3161 11.9413 12 12.7044 12 13.5C12 14.2956 12.3161 15.0587 12.8787 15.6213C13.4413 16.1839 14.2044 16.5 15 16.5Z'
                stroke='black'
                strokeWidth='2'
              />
              <path
                d='M15 20.0003L17 21.0003V15.7363C17 15.7363 16.43 16.5003 15 16.5003C13.57 16.5003 13 15.7503 13 15.7503V21.0003L15 20.0003Z'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Certificates
          </h3>

          <div className='flex flex-wrap gap-3'>
            {userData?.certificates?.map(cert => (
              <div
                key={cert?.id}
                className='bg-primary text-white px-4 py-2 rounded-lg text-sm'
              >
                {cert?.name}
              </div>
            ))}
          </div>
        </div>

       <Reviews data={mockReviews}/>
      </div>
    </div>
  )
}

export default UserProfile
