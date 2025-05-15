import { Link } from 'react-router-dom'
import {
  ongoingActivities,
  RenderOngoingActivityCard
} from '../../../pages/clientActivities'

const CurrentActivities = () => {
  const currentActivities = ongoingActivities?.slice(0, 3)

  return (
    <div className='flex flex-col gap-5 w-full'>
      <div className='flex items-center gap-2 flex-wrap justify-between w-full'>
        <div className='flex items-center gap-2'>
          <svg
            width='29'
            height='29'
            viewBox='0 0 29 29'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.2523 25.3743H6.04167C5.40073 25.3743 4.78604 25.1197 4.33283 24.6665C3.87961 24.2133 3.625 23.5986 3.625 22.9577V8.45768C3.625 7.81674 3.87961 7.20205 4.33283 6.74884C4.78604 6.29563 5.40073 6.04102 6.04167 6.04102H20.5417C21.1826 6.04102 21.7973 6.29563 22.2505 6.74884C22.7037 7.20205 22.9583 7.81674 22.9583 8.45768V13.291'
              stroke='#131E47'
              strokeWidth='2.66667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M18.125 3.625V8.45833M8.45833 3.625V8.45833M3.625 13.2917H22.9583M16.9167 21.75C16.9167 23.0319 17.4259 24.2613 18.3323 25.1677C19.2387 26.0741 20.4681 26.5833 21.75 26.5833C23.0319 26.5833 24.2613 26.0741 25.1677 25.1677C26.0741 24.2613 26.5833 23.0319 26.5833 21.75C26.5833 20.4681 26.0741 19.2387 25.1677 18.3323C24.2613 17.4259 23.0319 16.9167 21.75 16.9167C20.4681 16.9167 19.2387 17.4259 18.3323 18.3323C17.4259 19.2387 16.9167 20.4681 16.9167 21.75Z'
              stroke='#131E47'
              strokeWidth='2.66667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M21.75 19.9336V21.7509L22.9583 22.9593'
              stroke='#131E47'
              strokeWidth='2.66667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <h2 className='text-2xl font-medium text-primary'>
            Current Activities
          </h2>
        </div>
        <Link
          to='/client/activities'
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
        {currentActivities
          ?.slice(0, 3)
          ?.map((activity, i) =>  <RenderOngoingActivityCard key={i} activity={activity} i={i} />)}
      </div>
    </div>
  )
}

export default CurrentActivities
