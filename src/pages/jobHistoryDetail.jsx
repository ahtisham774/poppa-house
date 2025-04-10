import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TopTitle from '../components/topTitle'
import { jobs } from '../data/jobs'
import BackButton from '../components/common/backButton'
import JobDetailsTabs from '../components/staffPanel/jobs/jobDetailsTabs'
import JobInformation from '../components/staffPanel/jobs/jobInformation'
import ClientInformation from '../components/staffPanel/jobs/clientInformation'
import ProgressLog from '../components/staffPanel/jobs/progressLog'
import ScheduleDateTime from '../components/staffPanel/jobs/scheduleDateTime'
import UploadedFiles from '../components/staffPanel/jobs/uploadedFiles'
import FileUpload from '../components/staffPanel/jobs/fileUpload'
import RateClientModal from '../components/staffPanel/jobs/rateClientModal'
import Rating from '../components/staffPanel/jobs/rating'

const JobHistoryDetail = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('jobDetails') // 'jobDetails', 'clientDetails', 'progressLog'
  const [showRatingModal, setShowRatingModal] = useState(false)
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const navigate = useNavigate()

  const job = jobs?.find(job => job.id === id) || jobs[0]

  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  const handleRateClient = () => {
    setShowRatingModal(true)
  }

  const handleRatingSubmit = () => {
    console.log('Rating submitted:', { rating, feedback })
    setShowRatingModal(false)
  }

  const handleCloseModal = () => {
    setShowRatingModal(false)
  }

  const filters = [
    {
      name: 'jobDetails',
      label: 'Job Details',
      heading: 'Job Information'
    },
    {
      name: 'clientDetails',
      label: 'Client Details',
      heading: 'Client Information'
    },
    {
      name: 'progressLog',
      label: 'Progress Log',
      heading: 'Job Progress Timeline'
    }
  ]

  return (
    <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
      <TopTitle title='Job History' />

      {/* Header Section */}
      <div className='bg-[#EFF6FF] border border-[#D3E6FF] p-4 sm:p-5 py-6 sm:py-8 rounded-lg mb-4 sm:mb-6 relative'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-4 '>
          <BackButton onClick={() => navigate('/staff/jobs/history')} />
          <div className='border-l-2 border-[#b1b1b19a] '>
            <div className='ml-0 sm:ml-4 mt-3 sm:mt-0'>
              <h2 className='text-xl sm:text-2xl font-semibold'>{job.title}</h2>
              <div className='mt-2 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4'>
                {job.property_type && (
                  <div className='flex items-center  gap-2 text-[#131E47] text-sm'>
                    <svg
                      width='17'
                      height='17'
                      viewBox='0 0 17 17'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_2517_18015)'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M0.851857 9.35094C0.0698567 9.35094 -0.297343 8.38449 0.287457 7.86599L7.93746 1.06599C8.09301 0.927855 8.29382 0.851562 8.50186 0.851562C8.70989 0.851563 8.9107 0.927855 9.06626 1.06599L16.7163 7.86599C17.3011 8.38449 16.9339 9.35094 16.1519 9.35094H15.3019V15.3009C15.3019 15.5264 15.2123 15.7426 15.0529 15.902C14.8935 16.0614 14.6773 16.1509 14.4519 16.1509H2.55186C2.32642 16.1509 2.11022 16.0614 1.95082 15.902C1.79141 15.7426 1.70186 15.5264 1.70186 15.3009V9.35094H0.851857ZM5.95186 14.4509V10.2009C5.95186 9.97551 6.04141 9.75931 6.20082 9.5999C6.36022 9.44049 6.57642 9.35094 6.80186 9.35094H10.2019C10.4273 9.35094 10.6435 9.44049 10.8029 9.5999C10.9623 9.75931 11.0519 9.97551 11.0519 10.2009V14.4509H13.6019V8.50094C13.6018 8.34972 13.6421 8.20124 13.7186 8.0708C13.7952 7.94036 13.9051 7.83268 14.0371 7.75889L8.50186 2.83739L2.96666 7.75889C3.09865 7.83268 3.20856 7.94036 3.28506 8.0708C3.36156 8.20124 3.40188 8.34972 3.40186 8.50094V14.4509H5.95186ZM7.65186 14.4509V11.0509H9.35186V14.4509H7.65186Z'
                          fill='#131E47'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_2517_18015'>
                          <rect width='17' height='17' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>

                    <span>{job.property_type}</span>
                  </div>
                )}

                {job?.assignedAt && (
                  <div className='flex items-center gap-2 text-[#131E47] text-sm'>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14.25 3H12.75V2.25C12.75 2.05109 12.671 1.86032 12.5303 1.71967C12.3897 1.57902 12.1989 1.5 12 1.5C11.8011 1.5 11.6103 1.57902 11.4697 1.71967C11.329 1.86032 11.25 2.05109 11.25 2.25V3H6.75V2.25C6.75 2.05109 6.67098 1.86032 6.53033 1.71967C6.38968 1.57902 6.19891 1.5 6 1.5C5.80109 1.5 5.61032 1.57902 5.46967 1.71967C5.32902 1.86032 5.25 2.05109 5.25 2.25V3H3.75C3.15326 3 2.58097 3.23705 2.15901 3.65901C1.73705 4.08097 1.5 4.65326 1.5 5.25V14.25C1.5 14.8467 1.73705 15.419 2.15901 15.841C2.58097 16.2629 3.15326 16.5 3.75 16.5H14.25C14.8467 16.5 15.419 16.2629 15.841 15.841C16.2629 15.419 16.5 14.8467 16.5 14.25V5.25C16.5 4.65326 16.2629 4.08097 15.841 3.65901C15.419 3.23705 14.8467 3 14.25 3ZM15 14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15H3.75C3.55109 15 3.36032 14.921 3.21967 14.7803C3.07902 14.6397 3 14.4489 3 14.25V9H15V14.25ZM15 7.5H3V5.25C3 5.05109 3.07902 4.86032 3.21967 4.71967C3.36032 4.57902 3.55109 4.5 3.75 4.5H5.25V5.25C5.25 5.44891 5.32902 5.63968 5.46967 5.78033C5.61032 5.92098 5.80109 6 6 6C6.19891 6 6.38968 5.92098 6.53033 5.78033C6.67098 5.63968 6.75 5.44891 6.75 5.25V4.5H11.25V5.25C11.25 5.44891 11.329 5.63968 11.4697 5.78033C11.6103 5.92098 11.8011 6 12 6C12.1989 6 12.3897 5.92098 12.5303 5.78033C12.671 5.63968 12.75 5.44891 12.75 5.25V4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V7.5Z'
                        fill='#131E47'
                      />
                    </svg>

                    <span>Job Assigned: {job.assignedAt}</span>
                  </div>
                )}

                {job?.price && (
                  <div className='flex items-center gap-2 text-[#131E47] text-sm'>
                    <svg
                      width='17'
                      height='16'
                      viewBox='0 0 17 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1.41797 5.33073H15.5846M1.41797 3.9974C1.41797 3.64377 1.56722 3.30464 1.8329 3.05459C2.09858 2.80454 2.45891 2.66406 2.83464 2.66406H14.168C14.5437 2.66406 14.904 2.80454 15.1697 3.05459C15.4354 3.30464 15.5846 3.64377 15.5846 3.9974V11.9974C15.5846 12.351 15.4354 12.6902 15.1697 12.9402C14.904 13.1903 14.5437 13.3307 14.168 13.3307H2.83464C2.45891 13.3307 2.09858 13.1903 1.8329 12.9402C1.56722 12.6902 1.41797 12.351 1.41797 11.9974V3.9974Z'
                        stroke='#131E47'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M1.41797 8H6.3763C6.3763 8.66667 6.8013 10 8.5013 10C10.2013 10 10.6263 8.66667 10.6263 8H15.5846'
                        stroke='#131E47'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>

                    <span>£{job.price} / month</span>
                  </div>
                )}

                {job?.address && (
                  <div className='flex items-center gap-2 text-[#131E47] text-sm'>
                    <svg
                      width='15'
                      height='18'
                      viewBox='0 0 15 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.125 1.58413C5.65526 1.58413 4.24571 2.16798 3.20645 3.20724C2.16719 4.24651 1.58333 5.65605 1.58333 7.12579C1.58333 9.39154 2.99408 11.5773 4.54258 13.2707C5.33436 14.1333 6.1983 14.9268 7.125 15.6425C7.26328 15.5365 7.42557 15.4072 7.61188 15.2546C8.35589 14.6437 9.05612 13.9813 9.70742 13.2723C11.2559 11.5773 12.6667 9.39233 12.6667 7.12579C12.6667 5.65605 12.0828 4.24651 11.0436 3.20724C10.0043 2.16798 8.59474 1.58413 7.125 1.58413ZM7.125 17.5869L6.67613 17.2781L6.67375 17.2765L6.669 17.2726L6.65317 17.2615L6.59379 17.2195L6.38004 17.0636C5.29693 16.2496 4.29073 15.338 3.37408 14.3403C1.75592 12.5685 0 10.0043 0 7.125C2.81582e-08 5.23533 0.750667 3.42306 2.08686 2.08686C3.42306 0.750668 5.23533 0 7.125 0C9.01467 0 10.8269 0.750668 12.1631 2.08686C13.4993 3.42306 14.25 5.23533 14.25 7.125C14.25 10.0043 12.4941 12.5693 10.8759 14.3387C9.95952 15.3364 8.95358 16.248 7.87075 17.062C7.78054 17.1294 7.68949 17.1956 7.59763 17.2607L7.581 17.2718L7.57625 17.2757L7.57467 17.2765L7.125 17.5869ZM7.125 5.54246C6.70507 5.54246 6.30235 5.70927 6.00541 6.00621C5.70848 6.30314 5.54167 6.70587 5.54167 7.12579C5.54167 7.54572 5.70848 7.94844 6.00541 8.24538C6.30235 8.54231 6.70507 8.70912 7.125 8.70912C7.54493 8.70912 7.94765 8.54231 8.24459 8.24538C8.54152 7.94844 8.70833 7.54572 8.70833 7.12579C8.70833 6.70587 8.54152 6.30314 8.24459 6.00621C7.94765 5.70927 7.54493 5.54246 7.125 5.54246ZM3.95833 7.12579C3.95833 6.28594 4.29196 5.48049 4.88583 4.88662C5.47969 4.29276 6.28515 3.95913 7.125 3.95913C7.96485 3.95913 8.77031 4.29276 9.36417 4.88662C9.95804 5.48049 10.2917 6.28594 10.2917 7.12579C10.2917 7.96564 9.95804 8.7711 9.36417 9.36496C8.77031 9.95883 7.96485 10.2925 7.125 10.2925C6.28515 10.2925 5.47969 9.95883 4.88583 9.36496C4.29196 8.7711 3.95833 7.96564 3.95833 7.12579Z'
                        fill='#131E47'
                      />
                    </svg>

                    <span>{job.address}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='absolute top-3 right-3 sm:right-5 text-gray-600'>
            <span className='text-sm'>#{job.id}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <JobDetailsTabs
        filters={filters}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
       {activeTab === 'jobDetails' && 
        <div className='bg-white rounded-lg border border-gray-200  mb-4 sm:mb-6'>
          <div className='border-b border-gray-200 p-4'>
            <h3 className='text-xl font-medium'>Job Completion Summary</h3>
          </div>
          <div className='p-4 sm:p-6'>
            <div className='grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8'>
              <div>
                <p className='text-xs sm:text-sm text-gray-500 mb-1'>
                Completed On
                </p>
                <p className='text-sm sm:text-base font-medium break-words'>
                  {job.competedOn || 'Oct 18, 2025'}
                </p>
              </div>
              <div>
                <p className='text-xs sm:text-sm text-gray-500 mb-1'>
                Completion Time
                </p>
                <p className='text-sm sm:text-base font-medium break-words'>
                  {job.competedTime || '10:00 AM'}
                </p>
              </div>
              <div className='col-span-1 sm:col-span-2'>
                <p className='text-xs sm:text-sm text-gray-500 mb-1'>
                Client Rating & Review
                </p>
                <Rating rating={3.5}/>
                <div className='w-full border-2 border-[#b1b1b171] rounded-lg mt-2'>
                  <div className='flex items-center justify-between p-3'>
                    <p className='text-sm sm:text-base  break-words'>
                      {job.clientReview || 'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {/* Tab Content */}
      <div className='bg-white rounded-lg border border-gray-200  mb-4 sm:mb-6'>
        <div className='border-b border-gray-200 p-4'>
          <h3 className='text-xl font-medium'>
            {filters.find(filter => filter.name === activeTab)?.heading}
          </h3>
        </div>
        <div className='p-4 sm:p-6'>
          {activeTab === 'jobDetails' && <JobInformation job={job} />}
          {activeTab === 'clientDetails' && (
            <ClientInformation isAssigned={true} client={job.clientDetails} />
          )}
          {activeTab === 'progressLog' && (
            <>
              <ProgressLog timeline={job.progress_timeline} />
            </>
          )}
        </div>
      </div>

      {/* File Upload Section (shown on Job Details and Client Details tabs) */}
      {activeTab === 'jobDetails' && (
        <>
          <UploadedFiles files={job.files} />
        </>
      )}
      {activeTab === 'progressLog' && (
        <>
          <ScheduleDateTime />

          <div className='mt-4 sm:mt-6'>
            <button
              onClick={handleRateClient}
              className='w-full py-2 bg-[#131E47] text-white font-medium rounded flex items-center justify-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 mr-1'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                />
              </svg>
              Rate Client
            </button>
          </div>
        </>
      )}

      {/* Rating Modal */}
      {showRatingModal && (
        <RateClientModal
          rating={rating}
          setRating={setRating}
          feedback={feedback}
          setFeedback={setFeedback}
          onSubmit={handleRatingSubmit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default JobHistoryDetail
