import React, { useState } from 'react'
import ReviewCard from './reviewCard'

const RatingsReviewsTab = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [ratings] = useState({
    average: 4,
    total: 8,
    reviews: [
      {
        id: 1,
        reviewer: 'Sarah Johnson',
        initials: 'SJ',
        rating: 4,
        date: 'January 15, 2025',
        service: 'Property Viewing',
        location: 'Manchester',
        comment:
          'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'
      },
      {
        id: 2,
        reviewer: 'Sarah Johnson',
        initials: 'SJ',
        rating: 4,
        date: 'January 15, 2025',
        service: 'Property Viewing',
        location: 'Manchester',
        comment:
          'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'
      },
      {
        id: 3,
        reviewer: 'Sarah Johnson',
        initials: 'SJ',
        rating: 4,
        date: 'January 15, 2025',
        service: 'Property Viewing',
        location: 'Manchester',
        comment:
          'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'
      },
      {
        id: 4,
        reviewer: 'Michael Thompson',
        initials: 'MT',
        rating: 5,
        date: 'December 10, 2024',
        service: 'Property Maintenance',
        location: 'London',
        comment:
          'John did an excellent job with the property maintenance work. He was punctual, professional, and completed the tasks efficiently. The property looks great now!'
      },
      {
        id: 5,
        reviewer: 'David Wilson',
        initials: 'DW',
        rating: 3,
        date: 'November 5, 2024',
        service: 'Property Viewing',
        location: 'Birmingham',
        comment:
          'The property viewing was okay. John provided some good information, but I felt he could have been more prepared with details about the local amenities and transportation options.'
      }
    ]
  })

  const reviewsPerPage = 3
  const totalPages = Math.ceil(ratings.reviews.length / reviewsPerPage)
  const displayedReviews = ratings.reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  )

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const loadMoreReviews = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Generate an array with page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className='bg-white rounded-lg shadow border border-gray-100 p-6'>
      <div className='flex items-center mb-4'>
        <svg
          className='h-6 w-6 mr-2 text-gray-700'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
          />
        </svg>
        <h2 className='text-xl font-semibold text-gray-900'>
          Ratings & Reviews
        </h2>
        <div className='ml-auto flex items-center'>
          <div className='flex'>
            {[1, 2, 3, 4, 5].map(star => (
              <svg
                key={star}
                className={`w-5 h-5 ${
                  star <= ratings.average ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
            ))}
          </div>
          <span className='ml-2 text-lg font-medium'>{ratings.average}</span>
          <span className='ml-1 text-sm text-gray-500'>
            ({ratings.total} reviews)
          </span>
        </div>
      </div>

      <div className='space-y-6'>
        {displayedReviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {ratings.reviews.length > reviewsPerPage && (
        <div className='mt-8'>
          <button
            onClick={loadMoreReviews}
            className='w-full py-3 border flex items-center gap-2 justify-center border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors'
          >
            Load More Reviews
            <svg
              width='18'
              height='19'
              viewBox='0 0 18 19'
              className='mt-1'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.1875 7.125L9 13.0625L2.8125 7.125'
                stroke='#131E47'
                strokeWidth='2'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>

          <div className='flex justify-center mt-6'>
            <button
              onClick={() =>
                handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
              }
              className='w-10 h-10 mx-1 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50'
              disabled={currentPage === 1}
            >
              <svg
                className='w-5 h-5 text-gray-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            {pageNumbers.map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 mx-1 flex items-center justify-center rounded-md ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() =>
                handlePageChange(
                  currentPage < totalPages ? currentPage + 1 : totalPages
                )
              }
              className='w-10 h-10 mx-1 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50'
              disabled={currentPage === totalPages}
            >
              <svg
                className='w-5 h-5 text-gray-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RatingsReviewsTab
