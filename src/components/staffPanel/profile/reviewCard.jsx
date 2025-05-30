import React from 'react'

const ReviewCard = ({ review }) => {
  return (
    <div className='p-4 border-2 rounded-lg border-[#b1b1b171] '>
      <div className='flex items-start'>
        <div className='flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-medium'>
          {review.initials}
        </div>
        <div className='ml-4 flex-1'>
          <div className='flex items-center justify-between'>
            <h3 className='text-base font-semibold text-gray-900'>
              {review.reviewer}
            </h3>
            <span className='text-sm text-gray-500 flex items-center gap-2'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.8346 3.33464H14.168V2.5013C14.168 2.28029 14.0802 2.06833 13.9239 1.91205C13.7676 1.75577 13.5556 1.66797 13.3346 1.66797C13.1136 1.66797 12.9017 1.75577 12.7454 1.91205C12.5891 2.06833 12.5013 2.28029 12.5013 2.5013V3.33464H7.5013V2.5013C7.5013 2.28029 7.4135 2.06833 7.25722 1.91205C7.10094 1.75577 6.88898 1.66797 6.66797 1.66797C6.44695 1.66797 6.23499 1.75577 6.07871 1.91205C5.92243 2.06833 5.83464 2.28029 5.83464 2.5013V3.33464H4.16797C3.50493 3.33464 2.86904 3.59803 2.4002 4.06687C1.93136 4.53571 1.66797 5.17159 1.66797 5.83464V15.8346C1.66797 16.4977 1.93136 17.1336 2.4002 17.6024C2.86904 18.0712 3.50493 18.3346 4.16797 18.3346H15.8346C16.4977 18.3346 17.1336 18.0712 17.6024 17.6024C18.0712 17.1336 18.3346 16.4977 18.3346 15.8346V5.83464C18.3346 5.17159 18.0712 4.53571 17.6024 4.06687C17.1336 3.59803 16.4977 3.33464 15.8346 3.33464ZM16.668 15.8346C16.668 16.0556 16.5802 16.2676 16.4239 16.4239C16.2676 16.5802 16.0556 16.668 15.8346 16.668H4.16797C3.94695 16.668 3.73499 16.5802 3.57871 16.4239C3.42243 16.2676 3.33464 16.0556 3.33464 15.8346V10.0013H16.668V15.8346ZM16.668 8.33464H3.33464V5.83464C3.33464 5.61362 3.42243 5.40166 3.57871 5.24538C3.73499 5.0891 3.94695 5.0013 4.16797 5.0013H5.83464V5.83464C5.83464 6.05565 5.92243 6.26761 6.07871 6.42389C6.23499 6.58017 6.44695 6.66797 6.66797 6.66797C6.88898 6.66797 7.10094 6.58017 7.25722 6.42389C7.4135 6.26761 7.5013 6.05565 7.5013 5.83464V5.0013H12.5013V5.83464C12.5013 6.05565 12.5891 6.26761 12.7454 6.42389C12.9017 6.58017 13.1136 6.66797 13.3346 6.66797C13.5556 6.66797 13.7676 6.58017 13.9239 6.42389C14.0802 6.26761 14.168 6.05565 14.168 5.83464V5.0013H15.8346C16.0556 5.0013 16.2676 5.0891 16.4239 5.24538C16.5802 5.40166 16.668 5.61362 16.668 5.83464V8.33464Z'
                  fill='#888888'
                />
              </svg>

              {review.date}
            </span>
          </div>
          <div className='flex items-center gap-2 mb-2'>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map(star => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${
                    star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
              <span className='text-sm'>
                {
                  review?.rating
                }
              </span>
          </div>
          <div className='flex space-x-2 mb-3'>
            <span className='inline-block px-2 py-1 bg-[#E9E9E9] text-xs rounded-md'>
              {review.service}
            </span>
            <span className='inline-block px-2 py-1 bg-[#E9E9E9] text-xs rounded-md'>
              {review.location}
            </span>
          </div>
          <p className='text-[#1A1A1A] text-sm'>{review.comment}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
