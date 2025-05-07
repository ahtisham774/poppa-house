// import { EnvironmentOutlined } from '@ant-design/icons'
// import { Card, Tag } from 'antd'
// import { BathIcon, BedIcon, GarageIcon } from '../../pages/propertyDetail'
// import { useNavigate } from 'react-router-dom'

// const PropertyCard = ({ property }) => {
//   const navigate = useNavigate()

//   return (
//     <Card
//       onClick={() => navigate(`/property/${property.id}`)}
//       cover={
//         <img
//           alt={property.title}
//           src={property.image || '/placeholder.svg'}
//           className='h-72  object-cover '
//         />
//       }
//       className='hover:shadow-lg cursor-pointer border-2 flex flex-col h-fit rounded-xl transition-shadow p-3'
//       styles={{
//         cover: { borderRadius: '1rem', overflow: 'hidden' },
//         body: { padding: '1rem' }
//       }}
//     >
//       <div className='absolute top-8 left-5 flex gap-1'>
//         <Tag
//           className={`font-medium px-3 py-1 flex items-center border-0 rounded-full bg-secondary`}
//         >
//           {property.type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
//         </Tag>
//         {/* {property.featured && (
//           <Tag
//             className={`font-medium px-3 py-1 border-0 rounded-full bg-accent`}
//           >
//             FEATURED
//           </Tag>
//         )} */}
//       </div>

//       <div className='flex items-center w-full justify-between gap-5 flex-wrap mb-2'>
//         <h3 className='text-xl font-medium '>{property.title}</h3>
//         <p className='text-xl font-semibold text-[#EB664E]'>
//           £{property.price}
//         </p>
//       </div>
//       <p className='flex items-start text-base font-normal text-muted-foreground mb-4'>
//         <EnvironmentOutlined className='mr-1 mt-1' />
//         {property.location}
//       </p>
//       <div className='w-full border-t grid grid-cols-2 gap-4 border-[#E3E3E3] py-4'>
//         <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
//           <svg
//             width='26'
//             height='23'
//             viewBox='0 0 26 23'
//             className={'size-5'}
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               d='M4.2168 10.0611C4.0096 10.0611 3.81088 9.98534 3.66437 9.85055C3.51786 9.71575 3.43555 9.53294 3.43555 9.34231V3.59375C3.43555 3.40313 3.51786 3.22031 3.66437 3.08552C3.81088 2.95073 4.0096 2.875 4.2168 2.875H10.4668C10.674 2.875 10.8727 2.95073 11.0192 3.08552C11.1657 3.22031 11.248 3.40313 11.248 3.59375V9.34231C11.248 9.53294 11.1657 9.71575 11.0192 9.85055C10.8727 9.98534 10.674 10.0611 10.4668 10.0611H4.2168ZM15.1543 10.0611C14.9471 10.0611 14.7484 9.98534 14.6019 9.85055C14.4554 9.71575 14.373 9.53294 14.373 9.34231V3.59375C14.373 3.40313 14.4554 3.22031 14.6019 3.08552C14.7484 2.95073 14.9471 2.875 15.1543 2.875H21.4027C21.6099 2.875 21.8086 2.95073 21.9552 3.08552C22.1017 3.22031 22.184 3.40313 22.184 3.59375V9.34231C22.184 9.53294 22.1017 9.71575 21.9552 9.85055C21.8086 9.98534 21.6099 10.0611 21.4027 10.0611H15.1543ZM4.2168 20.1236C4.0096 20.1236 3.81088 20.0478 3.66437 19.913C3.51786 19.7783 3.43555 19.5954 3.43555 19.4048V13.6548C3.43555 13.4642 3.51786 13.2814 3.66437 13.1466C3.81088 13.0118 4.0096 12.9361 4.2168 12.9361H10.4668C10.674 12.9361 10.8727 13.0118 11.0192 13.1466C11.1657 13.2814 11.248 13.4642 11.248 13.6548V19.4048C11.248 19.5954 11.1657 19.7783 11.0192 19.913C10.8727 20.0478 10.674 20.1236 10.4668 20.1236H4.2168ZM15.1543 20.1236C14.9471 20.1236 14.7484 20.0478 14.6019 19.913C14.4554 19.7783 14.373 19.5954 14.373 19.4048V13.6548C14.373 13.4642 14.4554 13.2814 14.6019 13.1466C14.7484 13.0118 14.9471 12.9361 15.1543 12.9361H21.4027C21.6099 12.9361 21.8086 13.0118 21.9552 13.1466C22.1017 13.2814 22.184 13.4642 22.184 13.6548V19.4048C22.184 19.5954 22.1017 19.7783 21.9552 19.913C21.8086 20.0478 21.6099 20.1236 21.4027 20.1236H15.1543Z'
//               fill='#44CCFF'
//             />
//           </svg>
//           {property.area} Square Feet
//         </div>
//         <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
//           <GarageIcon className={'size-5'} />
//           {property.garage} Garage
//         </div>
//         <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
//           <BedIcon className={'size-5'} />
//           {property.beds} Bedrooms
//         </div>
//         <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
//           <BathIcon className={'size-5'} />
//           {property.baths} Bathrooms
//         </div>
//       </div>
//     </Card>
//   )
// }

// export default PropertyCard

import { Card, Tag } from 'antd'
import {
  EnvironmentOutlined,
  HeartOutlined,
  HeartFilled
} from '@ant-design/icons'

import { useNavigate } from 'react-router-dom'

const PropertyCard = ({
  property,
  onToggleLike,
  redirectTo = '/property',
  showActions = true
}) => {
  const navigate = useNavigate()
  const isLiked = property.isLiked || false

  const handleLikeClick = e => {
    e.stopPropagation()
    if (onToggleLike) {
      onToggleLike(property.id)
    }
  }

  const handleCardClick = () => {
    navigate(`${redirectTo}/${property.id}`)
  }

  const formatPrice = price => {
    if (typeof price === 'string') {
      if (price.includes('/mo')) {
        return `£${price.replace('/mo', '')}/mo`
      }
      return `£${price}`
    }
    return `£${price}`
  }

  return (
    <Card
      onClick={handleCardClick}
      cover={
        <div className='relative'>
          <img
            alt={property.title}
            src={property.image || '/placeholder.svg'}
            className='h-72 w-full object-cover'
          />
          <div className='absolute top-4 left-4 flex gap-1'>
            <Tag className='font-medium px-3 py-1 flex items-center border-0 rounded-full bg-[#44CCFF] text-white uppercase text-xs'>
              {property.type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
            </Tag>
            {property.featured && (
              <Tag className='font-medium px-3 py-1 border-0 rounded-full bg-[#FACC15] text-black uppercase text-xs'>
                FEATURED
              </Tag>
            )}
          </div>
          {showActions && (
            <div className='absolute top-4 right-4'>
              <button
                onClick={handleLikeClick}
                className='bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors'
              >
                {isLiked ? (
                  <HeartFilled className='text-red-500 text-lg' />
                ) : (
                  <HeartOutlined className='text-gray-500 text-lg' />
                )}
              </button>
            </div>
          )}
          {showActions && property.type === 'sale' && (
            <div className='absolute bottom-4 right-4'>
              <button
                onClick={e => {
                  e.stopPropagation()
                  navigate(`/property/${property.id}/make-offer`)
                }}
                className='bg-[#1e293b] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#334155] transition-colors'
              >
                Make An Offer
              </button>
            </div>
          )}
          {showActions && property.type === 'rent' && (
            <div className='absolute bottom-4 right-4'>
              <button
                onClick={e => {
                  e.stopPropagation()
                  navigate(`/property/${property.id}/express-interest`)
                }}
                className='bg-[#1e293b] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#334155] transition-colors'
              >
                Express Interest
              </button>
            </div>
          )}
        </div>
      }
      className='hover:shadow-lg cursor-pointer border-2 flex flex-col h-full rounded-xl transition-shadow overflow-hidden'
      bodyStyle={{ padding: '1rem' }}
    >
      <div className='flex items-center w-full justify-between gap-5 flex-wrap mb-2'>
        <h3 className='text-xl font-medium'>{property.title}</h3>
        <p className='text-xl font-semibold text-[#EB664E]'>
          {formatPrice(property.price)}
        </p>
      </div>
      <p className='flex items-start text-base font-normal text-[#64748b] mb-4'>
        <EnvironmentOutlined className='mr-1 mt-1' />
        {property.location}
      </p>
      <div className='w-full border-t grid grid-cols-2 gap-4 border-[#E3E3E3] py-4'>
        <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
          <svg
            width='26'
            height='23'
            viewBox='0 0 26 23'
            className='size-5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.2168 10.0611C4.0096 10.0611 3.81088 9.98534 3.66437 9.85055C3.51786 9.71575 3.43555 9.53294 3.43555 9.34231V3.59375C3.43555 3.40313 3.51786 3.22031 3.66437 3.08552C3.81088 2.95073 4.0096 2.875 4.2168 2.875H10.4668C10.674 2.875 10.8727 2.95073 11.0192 3.08552C11.1657 3.22031 11.248 3.40313 11.248 3.59375V9.34231C11.248 9.53294 11.1657 9.71575 11.0192 9.85055C10.8727 9.98534 10.674 10.0611 10.4668 10.0611H4.2168ZM15.1543 10.0611C14.9471 10.0611 14.7484 9.98534 14.6019 9.85055C14.4554 9.71575 14.373 9.53294 14.373 9.34231V3.59375C14.373 3.40313 14.4554 3.22031 14.6019 3.08552C14.7484 2.95073 14.9471 2.875 15.1543 2.875H21.4027C21.6099 2.875 21.8086 2.95073 21.9552 3.08552C22.1017 3.22031 22.184 3.40313 22.184 3.59375V9.34231C22.184 9.53294 22.1017 9.71575 21.9552 9.85055C21.8086 9.98534 21.6099 10.0611 21.4027 10.0611H15.1543ZM4.2168 20.1236C4.0096 20.1236 3.81088 20.0478 3.66437 19.913C3.51786 19.7783 3.43555 19.5954 3.43555 19.4048V13.6548C3.43555 13.4642 3.51786 13.2814 3.66437 13.1466C3.81088 13.0118 4.0096 12.9361 4.2168 12.9361H10.4668C10.674 12.9361 10.8727 13.0118 11.0192 13.1466C11.1657 13.2814 11.248 13.4642 11.248 13.6548V19.4048C11.248 19.5954 11.1657 19.7783 11.0192 19.913C10.8727 20.0478 10.674 20.1236 10.4668 20.1236H4.2168ZM15.1543 20.1236C14.9471 20.1236 14.7484 20.0478 14.6019 19.913C14.4554 19.7783 14.373 19.5954 14.373 19.4048V13.6548C14.373 13.4642 14.4554 13.2814 14.6019 13.1466C14.7484 13.0118 14.9471 12.9361 15.1543 12.9361H21.4027C21.6099 12.9361 21.8086 13.0118 21.9552 13.1466C22.1017 13.2814 22.184 13.4642 22.184 13.6548V19.4048C22.184 19.5954 22.1017 19.7783 21.9552 19.913C21.8086 20.0478 21.6099 20.1236 21.4027 20.1236H15.1543Z'
              fill='#44CCFF'
            />
          </svg>
          {property.area} Square Feet
        </div>
        <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='size-5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.5 12.5V10C19.5 9.17157 18.8284 8.5 18 8.5H6C5.17157 8.5 4.5 9.17157 4.5 10V12.5M19.5 12.5V19.5H4.5V12.5M19.5 12.5H4.5M8 8.5V4.5M16 8.5V4.5'
              stroke='#44CCFF'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {property.garage} Garage
        </div>
        <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='size-5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15 19.5H9M15 19.5C15 18.5 16.5 17.5 16.5 17.5V9C16.5 7.89543 15.6046 7 14.5 7H9.5C8.39543 7 7.5 7.89543 7.5 9V17.5C7.5 17.5 9 18.5 9 19.5M15 19.5C15 20.5 14 21.5 12 21.5C10 21.5 9 20.5 9 19.5M12 7V5.5C12 4.39543 11.1046 3.5 10 3.5H6C4.89543 3.5 4 4.39543 4 5.5V7.5C4 7.5 5.5 8.5 5.5 9.5C5.5 10.5 4.5 11.5 4 11.5C3.5 11.5 2.5 10.5 2.5 9.5C2.5 8.5 4 7.5 4 7.5M18 7V5.5C18 4.39543 18.8954 3.5 20 3.5H20.5C21.6046 3.5 22.5 4.39543 22.5 5.5V7.5C22.5 7.5 21 8.5 21 9.5C21 10.5 22 11.5 22.5 11.5C23 11.5 24 10.5 24 9.5C24 8.5 22.5 7.5 22.5 7.5'
              stroke='#44CCFF'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {property.beds} Bedrooms
        </div>
        <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='size-5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9 10.5H7M17 10.5H15M12 10.5H10M7 10.5C5.34315 10.5 4 11.8431 4 13.5V16.5H20V13.5C20 11.8431 18.6569 10.5 17 10.5M7 10.5C7 8.84315 8.34315 7.5 10 7.5H14C15.6569 7.5 17 8.84315 17 10.5M4 19.5V18.5C4 17.3954 4.89543 16.5 6 16.5H18C19.1046 16.5 20 17.3954 20 18.5V19.5C20 20.0523 19.5523 20.5 19 20.5H5C4.44772 20.5 4 20.0523 4 19.5Z'
              stroke='#44CCFF'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
          {property.baths} Bathrooms
        </div>
      </div>
    </Card>
  )
}

export default PropertyCard
