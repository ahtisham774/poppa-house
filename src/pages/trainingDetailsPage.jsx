import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { relatedCourses, trainingMaterials } from '../data/trainingData'
import { BiCheck, BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import TopTitle from '../components/topTitle'
import { CgArrowLongLeft } from 'react-icons/cg'
import KnowledgeCheck from '../components/staffPanel/info/knowledgeCheck'

const TrainingDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('content')
  const [selectedModule, setSelectedModule] = useState(null)
  const [module, setModule] = useState(null)
  const [isKnowledgeChecked, setIsKnowledgeChecked] = useState(false)
  const [isMarkedComplete, setIsMarkedComplete] = useState(false)
  // Find the training material with the matching ID
  const training =
    trainingMaterials.find(t => t.id === id) || trainingMaterials[0]

  const getIcon = type => {
    switch (type) {
      case 'reading':
        return (
          <svg
            width='78'
            height='80'
            viewBox='0 0 78 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M46.3867 9.42188V14.6142C46.3867 19.5088 46.3867 21.9561 47.9001 23.4757C49.4066 24.9988 51.8384 24.9988 56.7053 24.9988H61.8646'
              stroke='black'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M22.3089 38.8453H49.8251M22.3089 49.2299H49.8251M22.3089 59.6145H36.6517M8.55078 56.1529V28.4606C8.55078 18.6714 8.55078 13.7733 11.5741 10.7341C14.594 7.69141 19.4609 7.69141 29.1879 7.69141H43.5376C44.9409 7.69141 45.646 7.69141 46.2789 7.95448C46.9083 8.21756 47.4071 8.71602 48.4011 9.71987L61.5676 22.9706C62.5651 23.9745 63.0603 24.4729 63.3217 25.1099C63.5832 25.7433 63.5832 26.4529 63.5832 27.8653V56.1529C63.5832 65.9422 63.5832 70.8403 60.5598 73.8795C57.5399 76.9222 52.673 76.9222 42.946 76.9222H29.1879C19.4609 76.9222 14.594 76.9222 11.5741 73.8795C8.55078 70.8403 8.55078 65.9422 8.55078 56.1529Z'
              stroke='black'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )

      case 'video':
        return (
          <svg
            width='106'
            height='91'
            viewBox='0 0 106 91'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_2043_4841)'>
              <path
                d='M62.9546 38.4745L44.1761 27.3912C43.7046 27.1127 43.1566 26.9528 42.5905 26.9285C42.0244 26.9042 41.4615 27.0165 40.9619 27.2533C40.4622 27.4902 40.0446 27.8426 39.7535 28.2732C39.4625 28.7037 39.3089 29.1962 39.3093 29.6979V51.8646C39.3089 52.3663 39.4625 52.8588 39.7535 53.2893C40.0446 53.7199 40.4622 54.0723 40.9619 54.3092C41.4615 54.546 42.0244 54.6583 42.5905 54.634C43.1566 54.6097 43.7046 54.4498 44.1761 54.1713L62.9546 43.088C63.3839 42.835 63.736 42.4921 63.9795 42.0897C64.223 41.6873 64.3504 41.2378 64.3504 40.7813C64.3504 40.3247 64.223 39.8753 63.9795 39.4728C63.736 39.0704 63.3839 38.7275 62.9546 38.4745ZM45.5688 46.6866V34.8932L55.5762 40.7813L45.5688 46.6866ZM83.1259 15.8438H14.2712C12.6111 15.8438 11.019 16.4276 9.84509 17.4669C8.6712 18.5061 8.01172 19.9157 8.01172 21.3854V60.1771C8.01172 61.6468 8.6712 63.0564 9.84509 64.0956C11.019 65.1349 12.6111 65.7188 14.2712 65.7188H83.1259C84.7861 65.7188 86.3782 65.1349 87.5521 64.0956C88.726 63.0564 89.3855 61.6468 89.3855 60.1771V21.3854C89.3855 19.9157 88.726 18.5061 87.5521 17.4669C86.3782 16.4276 84.7861 15.8438 83.1259 15.8438ZM83.1259 60.1771H14.2712V21.3854H83.1259V60.1771ZM89.3855 74.0313C89.3855 74.7661 89.0557 75.4709 88.4688 75.9905C87.8818 76.5102 87.0858 76.8021 86.2557 76.8021H11.1415C10.3114 76.8021 9.51535 76.5102 8.9284 75.9905C8.34146 75.4709 8.01172 74.7661 8.01172 74.0313C8.01172 73.2964 8.34146 72.5916 8.9284 72.072C9.51535 71.5523 10.3114 71.2604 11.1415 71.2604H86.2557C87.0858 71.2604 87.8818 71.5523 88.4688 72.072C89.0557 72.5916 89.3855 73.2964 89.3855 74.0313Z'
                fill='black'
              />
            </g>
            <defs>
              <clipPath id='clip0_2043_4841'>
                <rect width='106' height='91' fill='white' />
              </clipPath>
            </defs>
          </svg>
        )

      case 'audio':
        return (
          <svg
            width='64'
            height='64'
            viewBox='0 0 64 64'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M61.3542 48.8994V31.6771C61.3542 23.8062 58.2275 16.2578 52.662 10.6922C47.0964 5.12668 39.5479 2 31.6771 2C23.8062 2 16.2578 5.12668 10.6922 10.6922C5.12668 16.2578 2 23.8062 2 31.6771V48.8994'
              stroke='black'
              strokeWidth='3.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M2 35.9141H14.8333C16.1097 35.9141 17.3338 36.4211 18.2363 37.3236C19.1388 38.2261 19.6458 39.4502 19.6458 40.7266V54.9363C19.6458 56.6381 18.9698 58.2702 17.7664 59.4735C16.5631 60.6769 14.931 61.3529 13.2292 61.3529H8.41667C6.71486 61.3529 5.08276 60.6769 3.8794 59.4735C2.67604 58.2702 2 56.6381 2 54.9363V35.9141ZM43.7083 40.7266C43.7083 39.4502 44.2154 38.2261 45.1179 37.3236C46.0204 36.4211 47.2445 35.9141 48.5208 35.9141H61.3542V54.9363C61.3542 56.6381 60.6781 58.2702 59.4748 59.4735C58.2714 60.6769 56.6393 61.3529 54.9375 61.3529H50.125C48.4232 61.3529 46.7911 60.6769 45.5877 59.4735C44.3844 58.2702 43.7083 56.6381 43.7083 54.9363V40.7266Z'
              stroke='black'
              strokeWidth='3.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )
    }
  }

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <TopTitle title='Proppa House Info Centre' subTitle='PH Info Centre' />

      <div className='bg-[#EFF6FF] border border-[#D3E6FF] p-5 py-8 rounded-lg mb-6'>
        <div className='flex items-center mb-2'>
          <button
            className='flex items-center font-medium mr-4 gap-2 border-2 border-[#b1b1b19a] rounded-lg px-3 py-1'
            onClick={() => navigate('/staff/info')}
          >
            <CgArrowLongLeft size={20} />
            <span>Back</span>
          </button>

          <div className='borderL-2 border-[#b1b1b19a] pl-4'>
            <h2 className='text-2xl font-semibold'>{training.title}</h2>
            <p className='text-[#888888]'>
              Complete this training to enhance your skills
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='md:col-span-2 border rounded-lg p-5'>
          <div className='flex justify-between items-center mb-3'>
            <div>
              <h2 className='text-2xl font-medium'>Course Content</h2>
              <p className='text-[#888888] text-sm'>
                Current Progress: {training.progress}%
              </p>
            </div>
            <div className='badge border-2  text-[#2F2F2F] text-xs font-medium px-3 py-1'>
              {training.level}
            </div>
          </div>

          <div className='progress-bar !h-1.5 mb-6'>
            <div
              className='progress-bar-fill transition-all'
              style={{ width: `${training.progress}%` }}
            ></div>
          </div>

          <div className='flex mb-6 bg-[#F1F5F9] p-2 w-fit rounded-lg'>
            <button
              className={`tab ${activeTab === 'content' ? 'active' : ''}`}
              onClick={() => setActiveTab('content')}
            >
              Content
            </button>
            <button
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
          </div>

          {activeTab === 'content' && (
            <div className='space-y-3'>
              {training.modules?.map(module => (
                <div
                  key={module.id}
                  className={`border-2 rounded-lg p-4 cursor-pointer flex items-start
                  ${
                    selectedModule === module.id
                      ? 'bg-[#F1F5F9] border-[#254ef071]'
                      : ''
                  }
                    
                    `}
                  onClick={() => {
                    console.log(module)

                    if (module) {
                      setModule(module)
                    } else {
                      setModule(training.modules[0])
                    }
                    setSelectedModule(module.id)
                  }}
                >
                  <div className='bg-green-100 p-2 rounded-full mr-4'>
                    <span className='size-5 flex items-center '>
                      {getIcon(module.type)}
                    </span>
                  </div>

                  <div className='flex items-center justify-between flex-1 pr-5'>
                    <div className=''>
                      <div className='flex justify-between items-center'>
                        <h3 className='font-semibold'>{module.title}</h3>
                      </div>
                      <p className='text-gray-500 text-sm'>
                        {module.duration} min • {module.type}
                      </p>
                    </div>
                    <div className='flex items-center'>
                      {module.completed && (
                        <svg
                          width='15'
                          height='15'
                          viewBox='0 0 15 15'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_1989_9281)'>
                            <path
                              d='M4 7.5L7 10L11 5M7.5 14.5C6.58075 14.5 5.6705 14.3189 4.82122 13.9672C3.97194 13.6154 3.20026 13.0998 2.55025 12.4497C1.90024 11.7997 1.38463 11.0281 1.03284 10.1788C0.68106 9.32951 0.5 8.41925 0.5 7.5C0.5 6.58075 0.68106 5.6705 1.03284 4.82122C1.38463 3.97194 1.90024 3.20026 2.55025 2.55025C3.20026 1.90024 3.97194 1.38463 4.82122 1.03284C5.6705 0.68106 6.58075 0.5 7.5 0.5C9.35652 0.5 11.137 1.2375 12.4497 2.55025C13.7625 3.86301 14.5 5.64348 14.5 7.5C14.5 9.35652 13.7625 11.137 12.4497 12.4497C11.137 13.7625 9.35652 14.5 7.5 14.5Z'
                              stroke='#44CCFF'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_1989_9281'>
                              <rect width='15' height='15' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>
                  </div>
                  <BiChevronRight size={25} className='self-center' />
                </div>
              ))}
            </div>
          )}
          {!isKnowledgeChecked && selectedModule && (
            <div className='mt-6'>
              <div className='grid grid-cols-1 gap-6'>
                <div className='border rounded-lg p-5'>
                  <h2 className='text-2xl font-medium mb-1'>Module Content</h2>
                  <p className='text-[#888888] text-sm mb-5'>
                    {training.title}
                  </p>

                  <div className='bg-[#F1F5F9] p-10 rounded-lg mb-8 flex flex-col items-center justify-center min-h-[300px]'>
                    <span className='size-8'>{getIcon(module.type)}</span>
                  </div>

                  <div className='flex justify-between'>
                    <button className='btn btn-secondary flex items-center'>
                      <BiChevronLeft size={18} />
                      <span>Previous</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsKnowledgeChecked(!isKnowledgeChecked)
                        setIsMarkedComplete(false)
                      }}
                      className='btn btn-secondary'
                    >
                      Check Knowledge
                    </button>

                    <button
                      onClick={() => {
                        setIsMarkedComplete(!isMarkedComplete)
                        setIsKnowledgeChecked(false)
                      }}
                      className='btn btn-secondary'
                    >
                      Marked as Complete
                    </button>

                    <button className='btn btn-secondary flex items-center'>
                      <span>Next</span>
                      <BiChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isKnowledgeChecked && (
            <KnowledgeCheck
              handleCancel={() => {
                setIsKnowledgeChecked(false)
              }}
            />
          )}
        </div>

        <div className='space-y-6'>
          <div className='border rounded-lg p-5'>
            <h2 className='text-2xl font-medium mb-2'>Your Progress</h2>
            <p className='text-[#888888] text-sm mb-6'>
              Latest Company News & Updates
            </p>

            <div className='flex justify-center mb-2'>
              <div className='progress-circular relative'>
                <svg viewBox='0 0 100 100' width='120' height='120'>
                  <circle
                    className='progress-circular-track'
                    cx='50'
                    cy='50'
                    r='40'
                  />
                  <circle
                    className='progress-circular-fill'
                    cx='50'
                    cy='50'
                    r='40'
                    strokeDasharray='251.2'
                    strokeDashoffset={251.2 - (251.2 * training.progress) / 100}
                  />
                </svg>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span className='text-2xl font-bold'>
                    {training.progress}%
                  </span>
                </div>
              </div>
            </div>

            <p className='text-center text-gray-500 mb-6'>Course Completion</p>

            <div className='space-y-4'>
              <div>
                <div className='flex justify-between text-sm mb-1'>
                  <span>Modules Completed</span>
                  <span>1 / 4</span>
                </div>
                <div className='progress-bar'>
                  <div
                    className='progress-bar-fill'
                    style={{ width: '25%' }}
                  ></div>
                </div>
              </div>

              <div>
                <div className='flex justify-between text-sm mb-1'>
                  <span>Quizzes Passed</span>
                  <span>0 / 4</span>
                </div>
                <div className='progress-bar'>
                  <div
                    className='progress-bar-fill'
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className='border rounded-lg p-5'>
            <h2 className='text-2xl font-medium mb-4'>Related Courses</h2>

            <div className='space-y-3'>
              {relatedCourses.map(course => (
                <div
                  key={course.id}
                  className='border rounded-lg p-4 cursor-pointer'
                >
                  <div className='flex items-start'>
                    <div className='bg-accent p-2 rounded-full mr-3 flex items-center justify-center w-10 h-10'>
                      {getIcon('reading')}
                    </div>

                    <div>
                      <h3 className='font-medium '>{course.title}</h3>
                      <p className='text-[#888888] text-xs'>
                        {course.level} • {course.modules} modules
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingDetailsPage
