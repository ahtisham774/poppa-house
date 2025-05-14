import { useState } from 'react'
import Availability from './availability'
import Reviews from '../profile/reviews'

const AgentInfo = ({ showInsights = false }) => {
  const [agentStatus, setAgentStatus] = useState(true)

  const userData = {
    id: 'Employee-2025-001',
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: 'Property Specialist',
    employeeId: 'Employee-2025-001',
    isAvailable: true,
    bio: 'Experienced property professional with 5+ years in property viewing and maintenance.',
    certificates: [
      { id: 1, name: 'Certified Real Estate Viewer' },
      { id: 2, name: 'Certified Real Estate Viewer' }
    ],
    ratings: {
      average: 4,
      count: 8,
      reviews: [
        {
          id: 1,
          reviewer: {
            name: 'Sarah Johnson',
            initials: 'SJ'
          },
          rating: 3.5,
          date: 'January 15, 2025',
          serviceType: 'Property Viewing',
          location: 'Manchester',
          comment:
            'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'
        },
        {
          id: 2,
          reviewer: {
            name: 'Sarah Johnson',
            initials: 'SJ'
          },
          rating: 3.5,
          date: 'January 15, 2025',
          serviceType: 'Property Viewing',
          location: 'Manchester',
          comment:
            'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'
        },
        {
          id: 3,
          reviewer: {
            name: 'Sarah Johnson',
            initials: 'SJ'
          },
          rating: 3.5,
          date: 'January 15, 2025',
          serviceType: 'Property Viewing',
          location: 'Manchester',
          comment:
            'John was very professional and thorough with the property viewing. He took excellent photos and provided detailed information about the neighborhood. Would definitely recommend!'
        },
        {
          id: 4,
          reviewer: {
            name: 'Michael Brown',
            initials: 'MB'
          },
          rating: 4.5,
          date: 'January 10, 2025',
          serviceType: 'Property Viewing',
          location: 'London',
          comment:
            "Very impressed with John's knowledge of the area. He was punctual and answered all my questions thoroughly. The property was exactly as described."
        },
        {
          id: 5,
          reviewer: {
            name: 'Emma Wilson',
            initials: 'EW'
          },
          rating: 5,
          date: 'January 5, 2025',
          serviceType: 'Property Maintenance',
          location: 'Birmingham',
          comment:
            'John handled the maintenance request promptly. He was courteous and professional. The issue was resolved completely on the first visit.'
        },
        {
          id: 6,
          reviewer: {
            name: 'David Thompson',
            initials: 'DT'
          },
          rating: 4,
          date: 'December 28, 2024',
          serviceType: 'Property Viewing',
          location: 'Manchester',
          comment:
            'Good experience overall. John was knowledgeable about the property and surrounding area. Would use his services again.'
        },
        {
          id: 7,
          reviewer: {
            name: 'Lisa Parker',
            initials: 'LP'
          },
          rating: 3,
          date: 'December 20, 2024',
          serviceType: 'Property Maintenance',
          location: 'Leeds',
          comment:
            'John was helpful but the maintenance took longer than expected. Communication could have been better throughout the process.'
        },
        {
          id: 8,
          reviewer: {
            name: 'James Wilson',
            initials: 'JW'
          },
          rating: 4.5,
          date: 'December 15, 2024',
          serviceType: 'Property Viewing',
          location: 'Liverpool',
          comment:
            'Excellent service from John. He was very thorough in showing the property and provided great insights about the neighborhood.'
        }
      ]
    }
  }

  const insights = [
    {
      id: 1,
      title: 'Properties with Proppa House',
      value: '38',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.5 8H21.5M11 17H17M7 17H8M11 13H17M7 13H8M2.5 12C2.5 7.522 2.5 5.282 3.891 3.891C5.282 2.5 7.521 2.5 12.001 2.5C16.479 2.5 18.718 2.5 20.109 3.891C21.5 5.282 21.5 7.521 21.5 12C21.5 16.478 21.5 18.718 20.109 20.109C18.718 21.5 16.479 21.5 12 21.5C7.522 21.5 5.283 21.5 3.891 20.109C2.501 18.717 2.5 16.479 2.5 12Z'
            stroke='#131E47'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      ),
      subTitle: '15 active listings'
    },
    {
      id: 2,
      title: 'Rating',
      value: '4.8/5',
      icon: (
        <svg
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_3856_15290)'>
            <path
              d='M8.76925 5.18006C9.98345 3.00273 10.5901 1.91406 11.4976 1.91406C12.4052 1.91406 13.0118 3.00273 14.226 5.18006L14.5403 5.74356C14.8853 6.36265 15.0578 6.67219 15.3262 6.87631C15.5945 7.08044 15.9299 7.15615 16.6007 7.30756L17.2102 7.44556C19.5677 7.97935 20.7455 8.24577 21.0263 9.14756C21.3062 10.0484 20.5031 10.9885 18.896 12.8678L18.48 13.3537C18.0239 13.8875 17.7948 14.1549 17.6923 14.4845C17.5897 14.8151 17.6242 15.1716 17.6932 15.8837L17.7565 16.5325C17.999 19.0404 18.1207 20.2939 17.3866 20.8507C16.6525 21.4075 15.5485 20.8996 13.3424 19.8838L12.7703 19.6212C12.1435 19.3318 11.8302 19.188 11.4976 19.188C11.1651 19.188 10.8517 19.3318 10.225 19.6212L9.65379 19.8838C7.44675 20.8996 6.34275 21.4075 5.60962 20.8517C4.87458 20.2939 4.99629 19.0404 5.23875 16.5325L5.302 15.8846C5.371 15.1716 5.4055 14.8151 5.302 14.4855C5.20041 14.1549 4.97137 13.8875 4.5152 13.3546L4.09929 12.8678C2.49216 10.9895 1.68908 10.0494 1.96891 9.14756C2.24875 8.24577 3.42845 7.9784 5.78595 7.44556L6.39545 7.30756C7.06533 7.15615 7.39979 7.08044 7.66908 6.87631C7.93837 6.67219 8.10991 6.36265 8.45491 5.74356L8.76925 5.18006Z'
              stroke='#131E47'
              stroke-width='2'
            />
          </g>
          <defs>
            <clipPath id='clip0_3856_15290'>
              <rect width='23' height='23' fill='white' />
            </clipPath>
          </defs>
        </svg>
      ),
      subTitle: 'Based on 8 reviews'
    },
    {
      id: 3,
      title: 'Experience',
      value: '10+ yrs',
      icon: (
        <svg
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.7036 9.76445L12.5161 2.57695C12.2466 2.30757 11.8811 2.15625 11.5 2.15625C11.1189 2.15625 10.7534 2.30757 10.4839 2.57695L3.29638 9.76445C3.16224 9.89759 3.05592 10.0561 2.98358 10.2307C2.91124 10.4053 2.87434 10.5925 2.87501 10.7815V19.4065C2.87501 19.5971 2.95073 19.7799 3.08553 19.9147C3.22032 20.0495 3.40313 20.1252 3.59376 20.1252H9.34376C9.53438 20.1252 9.7172 20.0495 9.85199 19.9147C9.98678 19.7799 10.0625 19.5971 10.0625 19.4065V14.3752H12.9375V19.4065C12.9375 19.5971 13.0132 19.7799 13.148 19.9147C13.2828 20.0495 13.4656 20.1252 13.6563 20.1252H19.4063C19.5969 20.1252 19.7797 20.0495 19.9145 19.9147C20.0493 19.7799 20.125 19.5971 20.125 19.4065V10.7815C20.1257 10.5925 20.0888 10.4053 20.0164 10.2307C19.9441 10.0561 19.8378 9.89759 19.7036 9.76445ZM18.6875 18.6877H14.375V13.6565C14.375 13.4659 14.2993 13.283 14.1645 13.1482C14.0297 13.0135 13.8469 12.9377 13.6563 12.9377H9.34376C9.15313 12.9377 8.97032 13.0135 8.83553 13.1482C8.70073 13.283 8.62501 13.4659 8.62501 13.6565V18.6877H4.31251V10.7815L11.5 3.59398L18.6875 10.7815V18.6877Z'
            fill='#131E47'
          />
        </svg>
      ),
      subTitle: 'Real Estate Agency'
    }
  ]

  return (
    <>
      <div className='flex-1 p-6 space-y-6'>
        {/* Profile Section */}
        <div className='bg-white rounded-lg br p-6'>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-6'>
            <div className='w-24 h-24 rounded-full overflow-hidden'>
              <img
                src={userData.avatar || '/placeholder.svg'}
                alt={userData.name}
                className='w-full h-full object-cover'
              />
            </div>

            <div className='flex-1 text-center md:text-left'>
              <h2 className='text-2xl font-semibold'>{userData.name}</h2>
              <p className='text-[#888888] text-sm mt-1'>
                {userData.title} | ID: {userData.employeeId}
              </p>

              <div className='mt-2'>
                <Availability
                  setAgentStatus={setAgentStatus}
                  agentStatus={agentStatus}
                />
              </div>

              <p className='mt-4 text-primary'>{userData.bio}</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className='bg-white rounded-lg br p-6'>
          <h3 className='text-lg font-semibold mb-4 gap-2 flex items-center'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H17M6 7H18M6 10.5H9M6 14H8'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M15 16.5C15.7956 16.5 16.5587 16.1839 17.1213 15.6213C17.6839 15.0587 18 14.2956 18 13.5C18 12.7044 17.6839 11.9413 17.1213 11.3787C16.5587 10.8161 15.7956 10.5 15 10.5C14.2044 10.5 13.4413 10.8161 12.8787 11.3787C12.3161 11.9413 12 12.7044 12 13.5C12 14.2956 12.3161 15.0587 12.8787 15.6213C13.4413 16.1839 14.2044 16.5 15 16.5Z'
                stroke='black'
                strokeWidth='2'
              />
              <path
                d='M15 20.0003L17 21.0003V15.7363C17 15.7363 16.43 16.5003 15 16.5003C13.57 16.5003 13 15.7503 13 15.7503V21.0003L15 20.0003Z'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Certificates
          </h3>

          <div className='flex flex-wrap gap-3'>
            {userData.certificates.map(cert => (
              <div
                key={cert.id}
                className='bg-primary text-white px-4 py-2 rounded-lg text-sm'
              >
                {cert.name}
              </div>
            ))}
          </div>
        </div>
        {showInsights && (
          <div className='bg-white rounded-lg flex flex-col gap-5 br p-6'>
            <h1 className='flex items-center gap-2 text-xl font-medium'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M13.3307 9.81667L16.8641 3.70833L18.3057 4.54167L13.9474 12.0833L8.5224 8.95833L4.5474 15.8333H18.3307V17.5H1.66406V2.5H3.33073V14.6167L7.91406 6.66667L13.3307 9.81667Z'
                  fill='#131E47'
                />
              </svg>
              Insights
            </h1>
            <div className='flex flex-wrap w-full gap-4'>
              {insights.map(insight => (
                <div
                  key={insight.id}
                  className='flex flex-col  gap-2 bg-[#F9FAFB] p-4 br rounded-lg flex-1'
                >
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center justify-center'>
                      {insight.icon}
                    </div>
                    <h2 className='font-medium'>{insight.title}</h2>
                  </div>

                  <p className='text-3xl text-primary font-medium'>
                    {insight.value}
                  </p>
                  <p className='text-sm text-[#888888]'>{insight.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <Reviews data={userData?.ratings?.reviews} />
      </div>
    </>
  )
}

export default AgentInfo
