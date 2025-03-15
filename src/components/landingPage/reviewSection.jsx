import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'

export const ReviewSection = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewText, setReviewText] = useState('')

  const handleSubmitReview = e => {
    e.preventDefault()
    // Here you would send the review to your backend
    console.log('Review submitted:', { rating, reviewText })
    // Reset form after submission
    setRating(0)
    setReviewText('')
  }

  return (
    <section className='py-16 bg-white'>
      <div className='container '>
        <div className=' bg-white rounded-xl p-8 shadow-[0px_4px_4px_0px_#00000040] border border-[#e7e7e7]'>
          <h2 className='text-3xl font-bold text-center text-primary mb-8'>
            Leave a Review
          </h2>

          <div className='mb-6'>
            <p className='text-lg font-medium mb-3'>Ratings</p>
            <div className='flex'>
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1

                return (
                  <div
                    key={index}
                    className='cursor-pointer mr-2'
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <FaStar
                      size={24}
                      color={
                        ratingValue <= (hover || rating) ? '#FFD700' : '#e4e5e9'
                      }
                      className='transition-colors'
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <div className='mb-6'>
            <p className='text-lg font-medium mb-3'>Your Review</p>
            <div className='relative'>
              <textarea
                placeholder='Share your experience...'
                className='w-full border border-[#adadad] rounded-lg p-4 min-h-[100px] focus:outline-none focus:ring-1 focus:ring-blue-500'
                value={reviewText}
                rows={5}
                onChange={e => setReviewText(e.target.value)}
                maxLength={300}
              />

              <button
                onClick={handleSubmitReview}
                disabled={!rating || !reviewText.trim()}
                className='bg-primary text-white absolute bottom-8 right-5 rounded-full p-2  transition-colors'
              >
                <FiSend />
              </button>
              <div className='flex justify-end items-center'>
                <span className='text-xs text-gray-500'>
                  {reviewText.length} words (max 300 characters)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection
