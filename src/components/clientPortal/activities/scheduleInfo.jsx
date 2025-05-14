import { FaCheck, FaX } from 'react-icons/fa6'
import CardLayout from './cardLayout'
import MapLists from './mapLists'
import ActionButton from './actionButton'
import { useState } from 'react'

export const getStatus = status => {
  let bgColor = 'bg-gray-200'
  let textColor = 'text-gray-700'

  if (status === 'Intial Offer') {
    bgColor = 'bg-white'
    textColor = 'text-primary'
  } else if (status === 'Assigned') {
    bgColor = 'bg-blue-100'
    textColor = 'text-blue-700'
  } else if (status === 'Pending Confirmation' || status === 'Pending Response') {
    bgColor = 'bg-[#FEF9C3]'
    textColor = 'text-[#92400E]'
  } else if (status === 'Date & Time Confirmed') {
    bgColor = 'bg-[#DFF5E6]'
    textColor = 'text-[#166534]'
  } else if (status === 'Counter Offer') {
    bgColor = 'bg-[#FFD3CB]'
    textColor = 'text-[#D50000]'
  } else if (status === 'Closed') {
    bgColor = 'bg-[#bcbcbc]'
    textColor = 'text-[#2F2F2F]'
  }
  return (
    <div
      className={`inline-block ${bgColor} br font-medium rounded-md px-2 py-1 text-xs ${textColor} mb-3`}
    >
      {status}
    </div>
  )
}

const HistoryCard = ({ entry, index }) => {
  return (
    <div
      key={index}
      className={` rounded-lg ${
        entry.from === 'you' ? 'bg-[#EFF6FF]' : 'bg-white br'
      }`}
    >
      <div className='flex justify-between p-4 border-b w-full flex-wrap border-b-[#737373] items-center mb-2'>
        <span className='font-medium text-[#1E293B] mr-2'>
          {entry.from === 'you' ? 'You' : 'Lister'}
        </span>
        {getStatus(entry.status)}
      </div>
      <div className='p-4 w-full flex flex-col justify-between'>
        {entry.amount && (
          <div className='mb-2 flex max-w-sm w-full justify-between flex-wrap gap-5'>
            <span className='font-medium text-sm'>Offer Amount:</span>
            <span className='font-bold text-[#1E293B] '>
              £{entry.amount.toLocaleString()}
            </span>
          </div>
        )}
        {entry.message && (
          <div className='mt-2'>
            <span className='font-medium text-sm'>Message:</span>
            <p className='text-[#1E293B] mt-1'>{entry.message}</p>
          </div>
        )}
        {entry.status === 'Intial Offer' && (
          <div className='flex max-w-sm w-full justify-between flex-wrap gap-5'>
            {entry.proposedDate && (
              <div className='mt-2'>
                <span className='font-medium text-sm text-[#8888]'>Proposed Date</span>
                <p className='text-[#1E293B] mt-1'>{entry.proposedDate}</p>
              </div>
            )}
            {entry.proposedTime && (
              <div className='mt-2'>
                <span className='font-medium text-sm text-[#8888]'>Proposed Time</span>
                <p className='text-[#1E293B] mt-1'>{entry.proposedTime}</p>
              </div>
            )}
          </div>
        )}
        <span className='text-[10px] mt-2 text-[#888888] self-end'>
          {entry.date}
        </span>
      </div>
    </div>
  )
}

const ScheduleInfo = () => {
  const [status, setStatus] = useState('Intial Offer')

  const list = [
    {
      label: 'Status',
      value: getStatus(status),
      isFullWidth: true
    },
    {
      label: 'Proposed Date',
      value: 'April 18, 2025'
    },
    {
      label: 'Proposed Time',
      value: '9:00 PM'
    }
  ]
  const history = [
    {
      from: 'you',
      amount: 196000,
      message:
        'We love the location and would like to schedule a visit before finalizing.',
      date: '5/2/2025, 9:07 PM',
      status: 'Pending Response'
    },
    {
      from: 'Lister',
      amount: 195000,
      message: 'I can accept your proposal with some adjustments.',
      date: '5/2/2025, 9:07 PM',
      status: 'Counter Offer'
    },
    {
      from: 'you',
      proposedDate: 'April 18, 2025',
      proposedTime: '9:00 PM',
      date: '5/2/2025, 9:07 PM',
      status: 'Intial Offer'
    }
  ]

  return (
    <>
      <CardLayout
        title={'Schedule Information'}
        children1={
          <div className='flex items-center gap-2 p-4 sm:p-6 border-t-2'>
            <ActionButton
              text='Message '
              variant='primary'
              className='flex items-center'
              icon={
                <svg
                  width='18'
                  height='19'
                  viewBox='0 0 18 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2.25 15.5144V4.04688C2.25 3.64905 2.40804 3.26752 2.68934 2.98621C2.97064 2.70491 3.35218 2.54688 3.75 2.54688H14.25C14.6478 2.54688 15.0294 2.70491 15.3107 2.98621C15.592 3.26752 15.75 3.64905 15.75 4.04688V11.5469C15.75 11.9447 15.592 12.3262 15.3107 12.6075C15.0294 12.8888 14.6478 13.0469 14.25 13.0469H5.97075C5.74593 13.0469 5.52398 13.0975 5.32133 13.1948C5.11869 13.2922 4.94052 13.4339 4.8 13.6094L3.05175 15.7949C2.99357 15.8678 2.91417 15.9208 2.82453 15.9466C2.73489 15.9725 2.63944 15.9698 2.5514 15.939C2.46335 15.9082 2.38705 15.8508 2.33305 15.7747C2.27906 15.6986 2.25003 15.6077 2.25 15.5144Z'
                    stroke='white'
                    strokeWidth='2'
                  />
                </svg>
              }
            />
          </div>
        }
      >
        <MapLists list={list} />
        <div className=' flex flex-wrap gap-5 mt-4'>
          <button className='bg-[#4CAF50] text-white px-4 py-1 rounded-md flex items-center gap-2'>
            <FaCheck />
            Accept Offer
          </button>
          <button className='bg-[#D50000] text-white px-8 py-1 rounded-md flex items-center gap-2'>
            <FaX />
            Cancel
          </button>
          <button className='bg-white br text-primary px-4 py-1 rounded-md flex items-center gap-2'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3.5 13.5V1.5H8V4.25C8 5.216 8.784 6 9.75 6H13.125L13.188 5.997C13.2913 6.00557 13.3953 5.99263 13.4934 5.95898C13.5914 5.92534 13.6815 5.87173 13.7578 5.80153C13.8341 5.73133 13.895 5.64608 13.9367 5.55115C13.9784 5.45622 13.9999 5.35368 14 5.25V4.476C13.9997 4.21652 13.8986 3.96731 13.718 3.781L10.363 0.305C10.2696 0.208404 10.1578 0.131612 10.034 0.0792094C9.91034 0.0268066 9.77735 -0.000132485 9.643 4.89892e-07H3C2.73478 4.89892e-07 2.48043 0.105357 2.29289 0.292894C2.10536 0.48043 2 0.734784 2 1V14C2 14.2652 2.10536 14.5196 2.29289 14.7071C2.48043 14.8946 2.73478 15 3 15H7.25C7.44891 15 7.63968 14.921 7.78033 14.7803C7.92098 14.6397 8 14.4489 8 14.25C8 14.0511 7.92098 13.8603 7.78033 13.7197C7.63968 13.579 7.44891 13.5 7.25 13.5H3.5ZM12.328 4.5L9.5 1.57V4.25C9.5 4.388 9.612 4.5 9.75 4.5H12.328ZM10 15.25C10 15.0511 10.079 14.8603 10.2197 14.7197C10.3603 14.579 10.5511 14.5 10.75 14.5H15.25C15.4489 14.5 15.6397 14.579 15.7803 14.7197C15.921 14.8603 16 15.0511 16 15.25C16 15.4489 15.921 15.6397 15.7803 15.7803C15.6397 15.921 15.4489 16 15.25 16H10.75C10.5511 16 10.3603 15.921 10.2197 15.7803C10.079 15.6397 10 15.4489 10 15.25ZM13 13.25C12.8011 13.25 12.6103 13.171 12.4697 13.0303C12.329 12.8897 12.25 12.6989 12.25 12.5V11H10.75C10.5511 11 10.3603 10.921 10.2197 10.7803C10.079 10.6397 10 10.4489 10 10.25C10 10.0511 10.079 9.86032 10.2197 9.71967C10.3603 9.57902 10.5511 9.5 10.75 9.5H12.25V8C12.25 7.80109 12.329 7.61032 12.4697 7.46967C12.6103 7.32902 12.8011 7.25 13 7.25C13.1989 7.25 13.3897 7.32902 13.5303 7.46967C13.671 7.61032 13.75 7.80109 13.75 8V9.5H15.25C15.4489 9.5 15.6397 9.57902 15.7803 9.71967C15.921 9.86032 16 10.0511 16 10.25C16 10.4489 15.921 10.6397 15.7803 10.7803C15.6397 10.921 15.4489 11 15.25 11H13.75V12.5C13.75 12.6989 13.671 12.8897 13.5303 13.0303C13.3897 13.171 13.1989 13.25 13 13.25Z'
                fill='#131E47'
              />
            </svg>
            Counter Offer
          </button>
        </div>
      </CardLayout>
      <CardLayout title={'Update History'}>
        <div className='space-y-6 max-w-2xl'>
          {history.map((entry, index) => (
            <HistoryCard entry={entry} index={index} key={index} />
          ))}
        </div>
      </CardLayout>
    </>
  )
}

export default ScheduleInfo
