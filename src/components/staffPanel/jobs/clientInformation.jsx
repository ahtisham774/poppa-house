import React from 'react'

const ClientInformation = ({ isAssigned,client = {} }) => {
  return (
    <>
      <div className='grid grid-cols-1 gap-y-6'>
        <div>
          <p className='text-sm text-gray-500 mb-1'>Name</p>
          <p className='font-medium'>{client.name || 'John Doe'}</p>
        </div>

        <div>
          <p className='text-sm text-gray-500 mb-1'>Email</p>
          <p className='font-medium'>
            {client.email || 'john.doe@example.com'}
          </p>
        </div>

        <div>
          <p className='text-sm text-gray-500 mb-1'>Phone</p>
          <p className='font-medium'>{client.phone || '+44 7123 456789'}</p>
        </div>

        <div>
          <p className='text-sm text-gray-500 mb-1'>Preferred Communication</p>
          <div className='flex items-center'>
            <p className='font-medium mr-3'>
              {client.preferredCommunication || 'Message'}
            </p>
          
          </div>
        </div>

        <div>
          <p className='text-sm text-gray-500 mb-1'>
            Prior Communication with Agent/Landlord
          </p>
          <p className='font-medium'>
            {client.priorCommunication ||
              'I spoke with John about the property yesterday. He mentioned that there are already 2 other interested parties.'}
          </p>
        </div>
      </div>

   { !isAssigned &&  <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <button className='py-2 px-4 border border-gray-300 rounded flex items-center justify-center font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
            />
          </svg>
          Call Client
        </button>

        <button className='py-2 px-4 bg-[#131E47] text-white rounded flex items-center justify-center font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
            />
          </svg>
          Message Client
        </button>

        <button className='py-2 px-4 border border-gray-300 rounded flex items-center justify-center font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
            />
          </svg>
          Email Client
        </button>
      </div>}
    </>
  )
}

export default ClientInformation
