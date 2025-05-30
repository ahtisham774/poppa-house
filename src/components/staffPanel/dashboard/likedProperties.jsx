import { Link } from 'react-router-dom'
import { properties } from '../../../data'
import PropertyCard from '../../common/propertyCard'

const LikedPropertiesSection = () => {
  const likedProperties = properties

  return (
    <div className='flex flex-col gap-5 w-full'>
      <div className='flex items-center gap-2 flex-wrap justify-between w-full'>
        <div className='flex items-center gap-2'>
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.5 24.5V15.1667C17.5 14.8572 17.3771 14.5605 17.1583 14.3417C16.9395 14.1229 16.6428 14 16.3333 14H11.6667C11.3572 14 11.0605 14.1229 10.8417 14.3417C10.6229 14.5605 10.5 14.8572 10.5 15.1667V24.5'
              stroke='#131E47'
              strokeWidth='2.66667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M3.5 11.6667C3.49992 11.3273 3.57389 10.9919 3.71675 10.684C3.85962 10.3762 4.06793 10.1031 4.32717 9.88404L12.4938 2.88521C12.915 2.52927 13.4486 2.33398 14 2.33398C14.5514 2.33398 15.085 2.52927 15.5062 2.88521L23.6728 9.88404C23.9321 10.1031 24.1404 10.3762 24.2832 10.684C24.4261 10.9919 24.5001 11.3273 24.5 11.6667V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V11.6667Z'
              stroke='#131E47'
              strokeWidth='2.66667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <h2 className='text-2xl font-medium text-primary'>
            Liked Properties
          </h2>
        </div>
        <Link
          to='/client/properties-hub/liked-properties'
          className='text-sm text-[#2B4BB4] flex font-medium items-center gap-1'
        >
          View All
          <svg
            className='h-4 w-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 5l7 7-7 7'
            />
          </svg>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {likedProperties?.slice(0, 3)?.map(property => (
          <PropertyCard
            property={property}
            key={property?.id}
            redirectTo='/client/properties-hub/liked-properties'
          />
        ))}
      </div>
    </div>
  )
}

export default LikedPropertiesSection
