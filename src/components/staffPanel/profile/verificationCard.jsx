import React from 'react'

const VerificationCard = ({
  type,
  icon,
  status,
  label,
  description,
  submittedDate,
  verifiedDate,
  documentUrl,
  onClick
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'required':
      case 'not submitted':
        return (
          <div className='flex items-center gap-1 px-2 py-1 rounded-md bg-[#E9E9E9]'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.0013 12.8346C3.77955 12.8346 1.16797 10.2231 1.16797 7.0013C1.16797 3.77955 3.77955 1.16797 7.0013 1.16797C10.2231 1.16797 12.8346 3.77955 12.8346 7.0013C12.8346 10.2231 10.2231 12.8346 7.0013 12.8346ZM7.0013 11.668C8.23898 11.668 9.42596 11.1763 10.3011 10.3011C11.1763 9.42596 11.668 8.23898 11.668 7.0013C11.668 5.76363 11.1763 4.57664 10.3011 3.70147C9.42596 2.8263 8.23898 2.33464 7.0013 2.33464C5.76363 2.33464 4.57664 2.8263 3.70147 3.70147C2.8263 4.57664 2.33464 5.76363 2.33464 7.0013C2.33464 8.23898 2.8263 9.42596 3.70147 10.3011C4.57664 11.1763 5.76363 11.668 7.0013 11.668ZM7.0013 4.08464C7.15601 4.08464 7.30439 4.14609 7.41378 4.25549C7.52318 4.36489 7.58464 4.51326 7.58464 4.66797V7.58464C7.58464 7.73935 7.52318 7.88772 7.41378 7.99711C7.30439 8.10651 7.15601 8.16797 7.0013 8.16797C6.84659 8.16797 6.69822 8.10651 6.58882 7.99711C6.47943 7.88772 6.41797 7.73935 6.41797 7.58464V4.66797C6.41797 4.51326 6.47943 4.36489 6.58882 4.25549C6.69822 4.14609 6.84659 4.08464 7.0013 4.08464ZM7.0013 9.91797C6.84659 9.91797 6.69822 9.85651 6.58882 9.74712C6.47943 9.63772 6.41797 9.48935 6.41797 9.33464C6.41797 9.17993 6.47943 9.03155 6.58882 8.92216C6.69822 8.81276 6.84659 8.7513 7.0013 8.7513C7.15601 8.7513 7.30439 8.81276 7.41378 8.92216C7.52318 9.03155 7.58464 9.17993 7.58464 9.33464C7.58464 9.48935 7.52318 9.63772 7.41378 9.74712C7.30439 9.85651 7.15601 9.91797 7.0013 9.91797Z'
                fill='black'
              />
            </svg>

            <span className='text-xs font-medium text-gray-800'>Required</span>
          </div>
        )
      case 'pending':
        return (
          <div className='flex items-center px-2 py-1 rounded-md bg-[#FEF9C3]'>
            <svg
              className='h-4 w-4 mr-1 text-[#854D0E]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span className='text-xs font-medium text-[#854D0E]'>Pending</span>
          </div>
        )
      case 'verified':
        return (
          <div className='flex items-center px-2 py-1 rounded-md bg-[#DCFCE7]'>
            <svg
              className='h-4 w-4 mr-1 text-[#166534]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-xs font-medium text-[#166534]'>Locked</span>
          </div>
        )
      default:
        return null
    }
  }
  const handleViewDocument = url => {
    if (url) {
      window.open(url, '_blank')
    }
  }
  return (
    <div
      onClick={onClick}
      className='bg-white border-2 cursor-pointer border-[#b1b1b171] rounded-lg p-4 relative hover:shadow-md transition-shadow'
    >
      <div className='flex justify-between flex-wrap-reverse  gap-5 items-end mb-2'>
        <div className='flex items-start flex-wrap gap-3'>
          <span className='shrink-0'>{icon}</span>
          <div className='-mt-1'>
            <h3 className='text-base font-semibold text-gray-900'>{label}</h3>
            <p className='text-sm text-[#888888]'>{description}</p>
            {(status === 'pending' || status === 'verified') && submittedDate && (
              <div className='text-sm text-gray-500'>
                {status === 'verified' ? 'Verified' : 'Submitted'} on{' '}
                {submittedDate}
              </div>
            )}
          </div>
        </div>
        <div className='ml-auto'>{getStatusBadge()}</div>
      </div>

      {documentUrl && typeof documentUrl === 'string' && (
        <button
          onClick={(e) => {e.stopPropagation();handleViewDocument(documentUrl)}}
          type='button'
          className='mt-2 w-full text-center py-1.5 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors'
        >
          View Document
        </button>
      )}
      {documentUrl && Array.isArray(documentUrl) && (
        <div className='flex flex-col gap-2 mt-2'>
          {documentUrl.map((url, index) => (
            <button
              key={index}
              onClick={(e) => {e.stopPropagation(); handleViewDocument(url)}}
              type='button'
              className='w-full text-center py-1.5 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors'
            >
              View Document {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default VerificationCard
