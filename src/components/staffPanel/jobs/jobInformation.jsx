import React from 'react'

const JobInformation = ({ job }) => {
  return (
    <>
      <div className='grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8'>
        <div>
          <p className='text-xs sm:text-sm text-gray-500 mb-1'>Job Type</p>
          <p className='text-sm sm:text-base font-medium break-words'>
            {job.title || 'Basic Property Viewing'}
          </p>
        </div>

        <div>
          <p className='text-xs sm:text-sm text-gray-500 mb-1'>
            Priority Level
          </p>
          <p
            className={`text-sm sm:text-base font-medium ${
              job.expedited ? 'text-red-600' : ''
            }`}
          >
            {job.expedited ? 'Expedited' : ''} - {job.workingDays} working days
          </p>
        </div>

        <div>
          <p className='text-xs sm:text-sm text-gray-500 mb-1'>
            Property Source
          </p>
          <p className='text-sm sm:text-base font-medium break-words'>
            {job.propertySource || 'Known Address'}
          </p>
        </div>

        <div>
          <p className='text-xs sm:text-sm text-gray-500 mb-1'>
            Property Address
          </p>
          <p className='text-sm sm:text-base font-medium break-words'>
            {job.propertyAddress || job.address}
          </p>
        </div>

        <div>
          <p className='text-xs sm:text-sm text-gray-500 mb-1'>
            Agency/Landlord Name
          </p>
          <p className='text-sm sm:text-base font-medium break-words'>
            {job.agencyName || 'Central London Estates'}
          </p>
        </div>

        <div>
          <p className='text-xs sm:text-sm text-gray-500 mb-1'>
            Contact Details
          </p>
          <p className='text-sm sm:text-base font-medium break-words'>
            {job.contactDetails ||
              'John Smith, 020 7123 4567, john@primelondon.com'}
          </p>
        </div>

        <div className='sm:col-span-2'>
          <p className='text-xs sm:text-sm text-gray-500 mb-1'>
            Concerns About Property
          </p>
          <p className='text-sm sm:text-base font-medium break-words'>
            {job.concerns ||
              "I'm concerned about the proximity to the main road and potential noise issues."}
          </p>
        </div>
      </div>
      
    </>
  )
}

export default JobInformation
