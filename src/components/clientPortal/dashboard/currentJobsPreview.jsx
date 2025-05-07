import { useState } from 'react'

const CurrentJobsPreview = () => {
  const [jobHistory] = useState([
    {
      id: 1,
      title: 'Property Inspection - 123 Main St',
      location: '221B Baker Street, London, NW1 6XE, United Kingdom',

      completedDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString(),
      status: 'In progress'
    },
    {
      id: 2,
      title: 'Property Inspection - 123 Main St',
      location: '221B Baker Street, London, NW1 6XE, United Kingdom',
      completedDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString(),
      status: 'In progress'
    },
    {
      id: 3,
      title: 'Property Inspection - 123 Main St',
      location: '221B Baker Street, London, NW1 6XE, United Kingdom',
      completedDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString(),
      status: 'In progress'
    }
  ])

  const expeditedLeft = job => {
    const left = job.completedDate.split('/')[1] - new Date().getDate()
    return left < 0 ? 0 : left
  }

  return (
    <div className='bg-white rounded-lg shadow border border-gray-100 p-6'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-medium text-gray-900'>
          Current Job Preview
        </h2>
        <a href='#' className='flex items-center text-sm '>
          View All
          <svg
            className='ml-1 h-4 w-4'
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
        </a>
      </div>

      <div className='space-y-4'>
        {jobHistory.map(job => (
          <div
            key={job.id}
            className='border-b border-[#D5D5D5] pb-4 mb-2 last:border-b-0 last:pb-0 last:mb-0'
          >
            <div className='flex justify-between items-start mb-1'>
              <div className='flex flex-col gap-1'>
                <h3 className='text-base font-medium text-gray-900'>
                  {job.title}
                </h3>
                <p className='text-xs text-[#D50000]'>
                  Expedited - {expeditedLeft(job)} working days
                </p>
                <p className='text-xs text-gray-500'>{job.location}</p>
              </div>
              <span className='px-4 py-1 text-xs rounded-lg  font-medium border-2 '>
                {job.status}
              </span>
            </div>
            {}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrentJobsPreview
