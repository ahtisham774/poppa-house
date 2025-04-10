import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { trainingMaterials } from '../data/trainingData'
import { BiChevronRight } from 'react-icons/bi'
import TopTitle from '../components/topTitle'
import { announcements } from '../data/announcementData'
const InfoCenter = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('training')

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <TopTitle title='Proppa House Info Centre' subTitle='PH Info Centre' />

      <div className='bg-[#EFF6FF] border border-[#D3E6FF] p-5 py-8 rounded-lg mb-6'>
        <div className='flex'>
          <div className='bg-accent p-4 rounded-lg mr-4 h-16 w-16 flex items-center justify-center'>
            <svg
              width='35'
              height='35'
              viewBox='0 0 35 35'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_1989_9052)'>
                <path
                  d='M19.9519 6.38364C19.1863 6.02045 18.3494 5.83203 17.5019 5.83203C16.6545 5.83203 15.8176 6.02045 15.0519 6.38364L0.836109 13.1182C0.574462 13.2417 0.35544 13.4401 0.2069 13.6884C0.0583609 13.9366 -0.012983 14.2235 0.00194265 14.5124V23.3382C0.00194265 23.725 0.155588 24.0959 0.429079 24.3694C0.702569 24.6429 1.0735 24.7966 1.46028 24.7966C1.84705 24.7966 2.21798 24.6429 2.49147 24.3694C2.76496 24.0959 2.91861 23.725 2.91861 23.3382V16.7874L5.83528 18.2341V26.2549C5.83532 26.4467 5.87321 26.6367 5.94678 26.8139C6.02035 26.991 6.12816 27.152 6.26403 27.2874L6.33694 27.3574L6.51194 27.5178C6.65778 27.6578 6.86875 27.8406 7.14486 28.0661C7.69028 28.5124 8.47778 29.1016 9.46069 29.6936C11.4149 30.8632 14.2265 32.0853 17.5019 32.0853C20.7774 32.0853 23.5919 30.8632 25.5432 29.6936C26.5931 29.0625 27.5813 28.334 28.4949 27.5178L28.6699 27.3574L28.7369 27.2874H28.7428C28.8785 27.1514 28.9859 26.9899 29.059 26.8122C29.1321 26.6345 29.1693 26.4441 29.1686 26.252V18.2311L34.1911 15.7403C34.4366 15.6187 34.6429 15.4304 34.7864 15.197C34.9298 14.9636 35.0046 14.6945 35.0022 14.4205C34.9997 14.1465 34.9202 13.8788 34.7726 13.648C34.625 13.4171 34.4154 13.2325 34.1678 13.1153L19.9519 6.38364ZM20.0453 22.7607L26.2519 19.6807V25.6074L26.0128 25.8116C25.3889 26.316 24.7311 26.777 24.044 27.1911C22.3524 28.2061 20.0599 29.1716 17.5019 29.1716C14.944 29.1716 12.6544 28.2091 10.9599 27.1911C10.184 26.7212 9.44576 26.1917 8.75194 25.6074V19.6807L14.9586 22.7607C16.5628 23.5541 18.4411 23.5541 20.0453 22.7607ZM18.7036 9.02031L30.2011 14.4657L18.7474 20.1474C18.3603 20.3396 17.9341 20.4396 17.5019 20.4396C17.0698 20.4396 16.6436 20.3396 16.2565 20.1474L4.80278 14.4657L16.3003 9.02031C16.6757 8.8419 17.0862 8.74934 17.5019 8.74934C17.9176 8.74934 18.3281 8.8419 18.7036 9.02031Z'
                  fill='black'
                />
              </g>
              <defs>
                <clipPath id='clip0_1989_9052'>
                  <rect width='35' height='35' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <h2 className='text-xl font-bold mb-1'>
              Welcome to the Knowledge Hub
            </h2>
            <p className='text-[#888888] text-sm max-w-2xl'>
              Here you'll find all the training materials and company
              announcements you need to excel in your role. Complete courses,
              track your progress, and stay updated with the latest company
              news.
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Training Materials Section */}
        <div className='border border-[#b1b1b171]  rounded-lg p-5'>
          <div className='flex justify-between items-center mb-1'>
            <h2 className='text-2xl font-medium'>Training Materials</h2>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_1989_9086)'>
                <path
                  d='M0 2.73439C0 2.42359 0.123465 2.12551 0.343234 1.90575C0.563003 1.68598 0.861074 1.56251 1.17188 1.56251H7.81719C9.73438 1.56251 11.4375 2.48439 12.5047 3.90782C13.0499 3.17829 13.7582 2.5863 14.5728 2.17909C15.3875 1.77189 16.2861 1.56075 17.1969 1.56251H23.8297C24.1405 1.56251 24.4386 1.68598 24.6583 1.90575C24.8781 2.12551 25.0016 2.42359 25.0016 2.73439V19.1406C25.0016 19.4514 24.8781 19.7495 24.6583 19.9693C24.4386 20.189 24.1405 20.3125 23.8297 20.3125H16.7875C16.3258 20.3125 15.8687 20.4034 15.4421 20.5801C15.0156 20.7568 14.628 21.0157 14.3016 21.3422L13.3297 22.3125C13.11 22.532 12.8121 22.6552 12.5016 22.6552C12.191 22.6552 11.8932 22.532 11.6734 22.3125L10.7016 21.3422C10.3751 21.0157 9.98754 20.7568 9.561 20.5801C9.13447 20.4034 8.67731 20.3125 8.21562 20.3125H1.17188C0.861074 20.3125 0.563003 20.189 0.343234 19.9693C0.123465 19.7495 0 19.4514 0 19.1406L0 2.73439ZM11.3297 18.8656L11.3359 10.9391L11.3328 7.41876C11.332 6.4869 10.9612 5.59349 10.302 4.93486C9.64279 4.27623 8.74905 3.90626 7.81719 3.90626H2.34375V17.9688H8.21406C9.31629 17.9687 10.3962 18.2796 11.3297 18.8656ZM13.6797 7.42189L13.6734 18.8625C14.6064 18.2781 15.6851 17.9684 16.7859 17.9688H22.6562V3.90626H17.1953C16.2629 3.90626 15.3687 4.27666 14.7094 4.93596C14.0501 5.59527 13.6797 6.48948 13.6797 7.42189Z'
                  fill='#44CCFF'
                />
              </g>
              <defs>
                <clipPath id='clip0_1989_9086'>
                  <rect width='25' height='25' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className='text-[#888888] text-sm mb-5'>
            Access and complete training modules
          </p>

          <div className='space-y-3'>
            {trainingMaterials.slice(0, 3).map(material => (
              <div
                key={material.id}
                className='border border-[#b1b1b171] rounded-lg p-4 cursor-pointer'
                onClick={() => navigate(`/staff/training/${material.id}`)}
              >
                <div className='flex justify-between items-center mb-2'>
                  <div className='flex gap-3 items-center '>
                    <h3 className='font-semibold'>{material.title}</h3>
                    <div className='flex items-center'>
                      {material.completed && (
                        <div className='flex text-xs items-center px-2 py-1 rounded-md bg-[#DCFCE7]  text-[#166534] font-medium'>
                          Completed
                        </div>
                      )}
                      {material.progress > 0 && !material.completed  && (
                        <div className='flex text-xs items-center gap-1 px-2 py-1 rounded-md bg-[#E9E9E9] font-medium'>
                          {material.progress}%
                        </div>
                      )}
                    </div>
                  </div>
                  <BiChevronRight size={20} />
                </div>
                <p className='text-[#505050] max-w-sm text-sm mb-2'>
                  {material.description}
                </p>
                <div className='w-full bg-[#E9E9E9] mb-4 rounded-full h-2 relative'>
                  <div
                    className='bg-secondary h-2 rounded-full transition-all'
                    style={{ width: `${material.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-4 text-center flex items-center justify-end w-full '>
            <button
              className='text-[#2B4BB4] flex items-center justify-end self-end '
              onClick={() => navigate('/staff/training-materials')}
            >
              View all training materials
              <BiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Announcements Section */}
        <div className='border border-[#b1b1b171] rounded-lg p-5'>
          <div className='flex justify-between items-center mb-2'>
            <h2 className='text-2xl font-medium'>Announcements</h2>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2 21.4V19H4.25V10.6C4.25 8.94 4.71875 7.4652 5.65625 6.1756C6.59375 4.886 7.8125 4.0408 9.3125 3.64V2.8C9.3125 2.3 9.47675 1.8752 9.80525 1.5256C10.1337 1.176 10.532 1.0008 11 1C11.468 0.999203 11.8666 1.1744 12.1959 1.5256C12.5251 1.8768 12.689 2.3016 12.6875 2.8V3.64C14.1875 4.04 15.4062 4.8852 16.3438 6.1756C17.2812 7.466 17.75 8.9408 17.75 10.6V19H20V21.4H2ZM11 25C10.3813 25 9.85175 24.7652 9.4115 24.2956C8.97125 23.826 8.75075 23.2608 8.75 22.6H13.25C13.25 23.26 13.0299 23.8252 12.5896 24.2956C12.1494 24.766 11.6195 25.0008 11 25ZM6.5 19H15.5V10.6C15.5 9.28 15.0594 8.15 14.1781 7.21C13.2969 6.27 12.2375 5.8 11 5.8C9.7625 5.8 8.70313 6.27 7.82188 7.21C6.94063 8.15 6.5 9.28 6.5 10.6V19Z'
                fill='#44CCFF'
              />
            </svg>
          </div>
          <p className='text-[#888888] text-sm mb-5'>
            Latest Company News & Updates
          </p>

          <div className='space-y-3'>
            {announcements.slice(0, 2).map(announcement => (
              <div
                key={announcement.id}
                className='border border-[#b1b1b171] rounded-lg p-4 cursor-pointer'
                onClick={() => navigate(`/staff/announcements`)}
              >
                <div className='flex items-start mb-2'>
                  <div className='mr-3'>
                    {announcement.category === 'Company Update' ? (
                      <div className='w-10 h-10 bg-[#F5F7FA] border border-[#d8e6fc] rounded-full flex items-center justify-center'>
                        <svg
                          width='25'
                          height='25'
                          viewBox='0 0 25 25'
                          className='size-5 ml-1'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2 21.4V19H4.25V10.6C4.25 8.94 4.71875 7.4652 5.65625 6.1756C6.59375 4.886 7.8125 4.0408 9.3125 3.64V2.8C9.3125 2.3 9.47675 1.8752 9.80525 1.5256C10.1337 1.176 10.532 1.0008 11 1C11.468 0.999203 11.8666 1.1744 12.1959 1.5256C12.5251 1.8768 12.689 2.3016 12.6875 2.8V3.64C14.1875 4.04 15.4062 4.8852 16.3438 6.1756C17.2812 7.466 17.75 8.9408 17.75 10.6V19H20V21.4H2ZM11 25C10.3813 25 9.85175 24.7652 9.4115 24.2956C8.97125 23.826 8.75075 23.2608 8.75 22.6H13.25C13.25 23.26 13.0299 23.8252 12.5896 24.2956C12.1494 24.766 11.6195 25.0008 11 25ZM6.5 19H15.5V10.6C15.5 9.28 15.0594 8.15 14.1781 7.21C13.2969 6.27 12.2375 5.8 11 5.8C9.7625 5.8 8.70313 6.27 7.82188 7.21C6.94063 8.15 6.5 9.28 6.5 10.6V19Z'
                            fill='#44CCFF'
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className='w-10 h-10 bg-[#FEFAD2] border border-[#f3eda9] rounded-full flex items-center justify-center'>
                        <svg
                          width='19'
                          height='20'
                          viewBox='0 0 19 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.5 2.08594V3.33594C11.5 4.51427 11.5 5.10344 11.8667 5.46927C12.2317 5.83594 12.8208 5.83594 14 5.83594H15.25'
                            stroke='#FFE601'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M5.66927 9.16797H12.3359M5.66927 11.668H12.3359M5.66927 14.168H9.14427M2.33594 13.3346V6.66797C2.33594 4.3113 2.33594 3.13214 3.06844 2.40047C3.8001 1.66797 4.97927 1.66797 7.33594 1.66797H10.8126C11.1526 1.66797 11.3234 1.66797 11.4768 1.7313C11.6293 1.79464 11.7501 1.91464 11.9909 2.1563L15.1809 5.3463C15.4226 5.58797 15.5426 5.70797 15.6059 5.8613C15.6693 6.0138 15.6693 6.18464 15.6693 6.52464V13.3346C15.6693 15.6913 15.6693 16.8705 14.9368 17.6021C14.2051 18.3346 13.0259 18.3346 10.6693 18.3346H7.33594C4.97927 18.3346 3.8001 18.3346 3.06844 17.6021C2.33594 16.8705 2.33594 15.6913 2.33594 13.3346Z'
                            stroke='#FFE601'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className='flex-1'>
                    <div className='flex gap-1 items-start'>
                      <h3 className='font-semibold'>{announcement.title.slice(0,20)}</h3>
                      {announcement.isNew && (
                        <span className='ml-2 text-xs px-4 py-1 rounded bg-[#EFF6FF] text-[#2B4BB4] font-bold '>New</span>
                      )}
                    </div>

                    <div className='flex items-center text-sm mb-2 gap-1'>
                      <span className='text-[#888888] text-xs'>{announcement.date}</span>
                      <span className='px-2 py-1 rounded-lg border font-medium border-[#B1B1B1] text-xs'>
                        {announcement.category}
                      </span>
                     
                    </div>

                    <p className='text-gray-600 max-w-xs text-sm'>
                      {announcement.snippet}
                    </p>
                  </div>
                  <BiChevronRight size={30} className='ml-auto self-center' />
                </div>
              </div>
            ))}
          </div>

          <div className='mt-4 text-right'>
            <button
              className='text-[#2B4BB4] flex items-center ml-auto'
              onClick={() => navigate('/staff/announcements')}
            >
              View all announcments
              <BiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCenter
