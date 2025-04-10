import React from 'react'

const ProgressLog = ({ timeline = [] }) => {
  // Default timeline if none provided
  const defaultTimeline = [
    {
      id: 1,
      task: 'Agent Assigned',
      completed: true,
      date: 'Mar 22, 2025 - 10:30 AM'
    },
    { id: 2, task: 'Contacted property owner/agent', completed: false },
    { id: 3, task: 'Schedule A Property viewing date', completed: false },
    { id: 4, task: 'Visiting the Property', completed: false },
    { id: 5, task: 'Property Viewing done', completed: false },
    { id: 6, task: 'Files uploaded/sent', completed: false },
    { id: 7, task: 'Request Job Marked Complete', completed: false },
    { id: 8, task: 'Request Close', completed: false }
  ]

  const timelineItems = timeline.length > 0 ? timeline : defaultTimeline

  return (
    <>
      <div className='space-y-5'>
        {timelineItems.map(item => (
          <div key={item.id} className='flex items-center'>
            <div className='flex-shrink-0 mr-3'>
              {item.completed ? (
                <svg
                  width='41'
                  height='41'
                  viewBox='0 0 41 41'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='20.5' cy='20.5' r='20.5' fill='#F8FAFC' />
                  <g clipPath='url(#clip0_2485_5963)'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9 20C9 16.8174 10.2643 13.7652 12.5147 11.5147C14.7652 9.26428 17.8174 8 21 8C24.1826 8 27.2348 9.26428 29.4853 11.5147C31.7357 13.7652 33 16.8174 33 20C33 23.1826 31.7357 26.2348 29.4853 28.4853C27.2348 30.7357 24.1826 32 21 32C17.8174 32 14.7652 30.7357 12.5147 28.4853C10.2643 26.2348 9 23.1826 9 20ZM20.3152 25.136L27.224 16.4992L25.976 15.5008L20.0848 22.8624L15.912 19.3856L14.888 20.6144L20.3152 25.136Z'
                      fill='#0080FF'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_2485_5963'>
                      <rect
                        width='24'
                        height='24'
                        fill='white'
                        transform='translate(9 8)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  width='41'
                  height='41'
                  viewBox='0 0 41 41'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='20.5' cy='20.5' r='20.5' fill='#F8FAFC' />
                  <path
                    d='M21 28C23.1217 28 25.1566 27.1571 26.6569 25.6569C28.1571 24.1566 29 22.1217 29 20C29 17.8783 28.1571 15.8434 26.6569 14.3431C25.1566 12.8429 23.1217 12 21 12C18.8783 12 16.8434 12.8429 15.3431 14.3431C13.8429 15.8434 13 17.8783 13 20C13 22.1217 13.8429 24.1566 15.3431 25.6569C16.8434 27.1571 18.8783 28 21 28ZM21 10C22.3132 10 23.6136 10.2587 24.8268 10.7612C26.0401 11.2638 27.1425 12.0003 28.0711 12.9289C28.9997 13.8575 29.7362 14.9599 30.2388 16.1732C30.7413 17.3864 31 18.6868 31 20C31 22.6522 29.9464 25.1957 28.0711 27.0711C26.1957 28.9464 23.6522 30 21 30C15.47 30 11 25.5 11 20C11 17.3478 12.0536 14.8043 13.9289 12.9289C15.8043 11.0536 18.3478 10 21 10ZM21.5 15V20.25L26 22.92L25.25 24.15L20 21V15H21.5Z'
                    fill='#888888'
                  />
                </svg>
              )}
            </div>
            <div className='flex-grow'>
              <div className='flex  items-center'>
                <div>
                  <p
                    className={`font-medium ${
                      item.completed ? 'text-primary' : 'text-[#888888]'
                    }`}
                  >
                    {item.task}
                  </p>
                  {item.date && (
                    <p className='text-xs text-gray-500'>{item.date}</p>
                  )}
                </div>
                {!item.completed && (
                  <button className='text-xs text-[#0080FF] font-medium  ml-4'>
                    Mark as completed
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProgressLog
