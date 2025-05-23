import { useState, useEffect } from 'react'
import {
  FiUser,
  FiCalendar,
  FiChevronDown,
  FiChevronRight,
  FiChevronLeft
} from 'react-icons/fi'

const Reviews = ({ data }) => {
  // State for reviews data
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(5)
  const [averageRating, setAverageRating] = useState(0)
  const [totalReviews, setTotalReviews] = useState(0)
  const [showLoadMore, setShowLoadMore] = useState(true)
  const [visibleReviews, setVisibleReviews] = useState([])
  const reviewsPerPage = 3

  // Mock data for reviews

  // Load reviews data
  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll use the mock data
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setReviews(data)

      // Calculate average rating
      const total = data?.reduce((sum, review) => sum + review?.rating, 0)
      setAverageRating(total / data?.length)
      setTotalReviews(data?.length)

      setTotalPages(Math.ceil(data?.length / reviewsPerPage))
      setLoading(false)
    }, 500)
  }, [])

  // Update visible reviews when page changes
  useEffect(() => {
    if (reviews?.length > 0) {
      const startIndex = (currentPage - 1) * reviewsPerPage
      const endIndex = startIndex + reviewsPerPage
      setVisibleReviews(reviews?.slice(startIndex, endIndex))
    }
  }, [currentPage, reviews])

  // Handle page change
  const handlePageChange = page => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Handle load more
  const handleLoadMore = () => {
    const nextReviews = reviews.slice(0, visibleReviews?.length + reviewsPerPage)
    setVisibleReviews(nextReviews)

    if (nextReviews?.length >= reviews?.length) {
      setShowLoadMore(false)
    }
  }

  // Render star rating
  const renderStarRating = rating => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className='w-5 h-5 text-yellow-400'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
      )
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg
          key='half'
          className='w-5 h-5 text-yellow-400'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <defs>
            <linearGradient
              id='half-gradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='0%'
            >
              <stop offset='50%' stopColor='currentColor' />
              <stop offset='50%' stopColor='#D1D5DB' />
            </linearGradient>
          </defs>
          <path
            fill='url(#half-gradient)'
            d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
          />
        </svg>
      )
    }

    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className='w-5 h-5 text-gray-300'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
      )
    }

    return <div className='flex'>{stars}</div>
  }

  // Generate pagination items
  const renderPaginationItems = () => {
    const items = []

    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 flex items-center border border-gray-300 rounded-md justify-center ${
            currentPage === i
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      )
    }

    return items
  }

  if (loading) {
    return (
      <div className='bg-gray-50 rounded-lg p-6 flex justify-center'>
        <div className='animate-pulse flex flex-col w-full'>
          <div className='h-8 bg-gray-200 rounded w-1/4 mb-6'></div>
          <div className='h-40 bg-gray-200 rounded mb-4'></div>
          <div className='h-40 bg-gray-200 rounded mb-4'></div>
          <div className='h-40 bg-gray-200 rounded mb-4'></div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-white rounded-lg br p-6 mb-6 flex flex-col gap-8'>
      {/* Header */}
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold flex items-center'>
          <FiUser className='mr-2' /> Ratings & Reviews
        </h2>
        <div className='flex items-center'>
          {renderStarRating(averageRating)}
          {averageRating ? (
            <>
              <span className='ml-2 font-semibold'>
                {averageRating ? averageRating?.toFixed(1) : 0}
              </span>
              <span className='ml-2 text-gray-500'>
                ({totalReviews} reviews)
              </span>
            </>
          ) : (
            <span className='ml-2 text-gray-500'>No Review Yet</span>
          )}
        </div>
      </div>

      {/* Reviews List */}
      {visibleReviews.length === 0 ? (
        <div className='bg-white rounded-lg p-8 text-center flex flex-col items-center justify-center gap-5'>
          <svg
            width='125'
            height='116'
            viewBox='0 0 125 116'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <ellipse cx='62.5' cy='58' rx='62.5' ry='58' fill='#F6FAFF' />
            <path
              d='M38 80.9757V38.5495C38 37.0777 38.5847 35.6662 39.6254 34.6254C40.6662 33.5847 42.0777 33 43.5495 33H82.3963C83.8681 33 85.2797 33.5847 86.3204 34.6254C87.3611 35.6662 87.9458 37.0777 87.9458 38.5495V66.2972C87.9458 67.769 87.3611 69.1806 86.3204 70.2213C85.2797 71.2621 83.8681 71.8468 82.3963 71.8468H51.7656C50.9338 71.8469 50.1127 72.0339 49.363 72.3942C48.6133 72.7544 47.9541 73.2785 47.4342 73.9278L40.9662 82.0135C40.751 82.2833 40.4572 82.4795 40.1256 82.575C39.7939 82.6705 39.4408 82.6606 39.1151 82.5466C38.7893 82.4326 38.507 82.2202 38.3073 81.9388C38.1075 81.6574 38.0001 81.3209 38 80.9757Z'
              stroke='#888888'
              strokeWidth='3'
            />
          </svg>
          <h1 className='text-2xl font-medium'>No reviews yet</h1>
          <p className='text-[#888] max-w-xl'>{`You haven't received any ratings or reviews yet. Complete jobs to get feedback from clients.`}</p>
        </div>
      ) : (
        <>
          {visibleReviews?.map(review => (
            <div
              key={review.id}
              className='bg-white br rounded-lg p-6 mb-4 shadow-sm'
            >
              <div className='flex justify-between items-start'>
                <div className='flex items-start'>
                  <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold mr-4'>
                    {review?.reviewer?.profile ? (
                      <img
                        src={review?.reviewer?.profile}
                        alt='Reviewer'
                        className='w-full h-full rounded-full'
                      />
                    ) : (
                      review.reviewer.initials
                    )}
                  </div>
                  <div>
                    <h3 className='font-medium text-gray-900'>
                      {review.reviewer.name}
                    </h3>
                    <div className='flex items-center mt-1'>
                      {renderStarRating(review.rating)}
                      <span className='ml-2 text-gray-600'>
                        {review.rating}
                      </span>
                    </div>
                    <div className='flex flex-wrap mt-2'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2 mb-2'>
                        {review.serviceType}
                      </span>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-2'>
                        {review.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center text-gray-500 text-sm'>
                  <FiCalendar className='mr-1' />
                  {review.date}
                </div>
              </div>
              <div className='mt-4 text-gray-700'>{review.comment}</div>
            </div>
          ))}

          {/* Load More Button */}
          {showLoadMore && visibleReviews?.length < reviews?.length && (
            <button
              onClick={handleLoadMore}
              className='w-full py-3 border border-gray-300 rounded-lg text-gray-700 font-medium flex items-center justify-center hover:bg-gray-50 transition-colors mb-6'
            >
              Load More Reviews <FiChevronDown className='ml-2' />
            </button>
          )}

          {/* Pagination */}
          <div className='flex justify-center mt-6'>
            <div className='flex  gap-4  overflow-hidden'>
              <button
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                disabled={currentPage === 1}
                className={`w-10 h-10 flex items-center border border-gray-300 rounded-md justify-center ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FiChevronLeft />
              </button>

              {renderPaginationItems()}

              <button
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                className={`w-10 h-10 flex items-center border border-gray-300 rounded-md justify-center ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Reviews
