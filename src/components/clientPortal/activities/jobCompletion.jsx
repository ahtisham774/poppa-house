import Rating from '../../staffPanel/jobs/rating'
import CardLayout from './cardLayout'

const JobCompletion = () => {
  return (
    <CardLayout title='Job Completion Summary'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div>
          <p className='text-xs sm:text-sm text-[#888888] mb-1'>Completed On</p>
          <p
            className={`text-sm sm:text-base text-primary
                font-medium break-words`}
          >
            Oct 18, 2025
          </p>
        </div>
        <div>
          <p className='text-xs sm:text-sm text-[#888888] mb-1'>
            Completion Time
          </p>
          <p
            className={`text-sm sm:text-base text-primary
                font-medium break-words`}
          >
            10:00 AM
          </p>
        </div>
        <div className='sm:col-span-2'>
          <p className='text-xs sm:text-sm text-[#888888] mb-1'>
            Agent Rating & Review
          </p>
          <div className='flex flex-col gap-2'>
                  <Rating rating={3.5}/>
                   <div className='w-full border-2 border-[#b1b1b171] rounded-lg mt-2'>
                  <div className='flex items-center justify-between p-3'>
                    <p className='text-sm sm:text-base  break-words'>
                      {'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'}
                    </p>
                  </div>

                </div>

          </div>
          </div>
      </div>
    </CardLayout>
  )
}

export default JobCompletion
