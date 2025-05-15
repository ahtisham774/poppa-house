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
      style={{
        boxShadow: '0px 4px 4px 0px #00000040',
        borderRadius: '1rem'
      }}
      onClick={handleCardClick}
      cover={
        <div className='relative'>
          <div className='w-full h-fit p-3 '>
            <img
              alt={property.title}
              src={property.image || '/placeholder.svg'}
              className='h-72 w-full object-cover rounded-xl'
            />
          </div>

          <div className='absolute top-6 left-6 flex gap-1'>
            <Tag className='font-medium px-3 py-1 flex items-center border-0 rounded-full bg-[#44CCFF] text-black uppercase text-xs'>
              {property.type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
            </Tag>
            {property.featured && (
              <Tag className='font-medium px-3 py-1 border-0 rounded-full bg-[#FACC15] text-black uppercase text-xs'>
                FEATURED
              </Tag>
            )}
          </div>
          {showActions && (
            <div className='absolute top-6 right-6'>
              <button
                onClick={handleLikeClick}
                className='bg-white size-8 flex items-center justify-center shrink-0 rounded-full shadow-md hover:bg-gray-100 transition-colors'
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
            <div className='absolute bottom-6 right-6'>
              <button
                onClick={e => {
                  e.stopPropagation()
                  navigate(`/property/${property.id}/make-offer`)
                }}
                className='bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#334155] transition-colors'
              >
                Make An Offer
              </button>
            </div>
          )}
          {showActions && property.type === 'rent' && (
            <div className='absolute bottom-6 right-6'>
              <button
                onClick={e => {
                  e.stopPropagation()
                  navigate(`/property/${property.id}/express-interest`)
                }}
                className='bg-primary  text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#334155] transition-colors'
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
            width='17'
            height='18'
            viewBox='0 0 17 18'
            className='size-5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.9021 7.29629L15.5187 6.59205C15.5015 6.561 15.4732 6.53839 15.4402 6.52915C15.4072 6.51991 15.372 6.52478 15.3424 6.54272L14.5221 7.04623L13.2554 3.36855C13.1885 3.1491 13.0571 2.95768 12.88 2.82193C12.7029 2.68617 12.4894 2.61311 12.2702 2.61328H5.26038C4.69901 2.61328 4.20074 2.99432 4.02763 3.55737L2.82077 7.04793L1.99894 6.54442C1.96931 6.52649 1.93414 6.52161 1.9011 6.53085C1.86806 6.54009 1.83984 6.56271 1.82261 6.59375L1.43919 7.29629C1.4036 7.36093 1.42463 7.44258 1.48611 7.48L2.46325 8.07877L2.22867 8.75919C2.20925 8.81363 2.19955 8.87146 2.19955 8.9293V14.8524C2.19955 15.1194 2.39045 15.3355 2.62502 15.3355H3.71864C3.91763 15.3355 4.09073 15.1773 4.13279 14.9561L4.25736 14.3148H13.0839L13.2085 14.9561C13.2522 15.1773 13.4237 15.3355 13.6227 15.3355H14.7163C14.9509 15.3355 15.1418 15.1194 15.1418 14.8524V8.9293C15.1418 8.87146 15.132 8.81363 15.1126 8.75919L14.8781 8.07877L15.8536 7.48C15.8829 7.46217 15.9045 7.43293 15.9136 7.39857C15.9226 7.36422 15.9185 7.32749 15.9021 7.29629ZM4.65857 10.8277C4.30104 10.8277 4.01146 10.5232 4.01146 10.1473C4.01146 9.77132 4.30104 9.46683 4.65857 9.46683C5.0161 9.46683 5.30568 9.77132 5.30568 10.1473C5.30568 10.5232 5.0161 10.8277 4.65857 10.8277ZM10.9355 12.1035C10.9355 12.1783 10.8773 12.2396 10.8061 12.2396H6.53519C6.464 12.2396 6.40577 12.1783 6.40577 12.1035V10.6746C6.40577 10.5997 6.464 10.5385 6.53519 10.5385H7.1823C7.25348 10.5385 7.31172 10.5997 7.31172 10.6746V11.287H10.0296V10.6746C10.0296 10.5997 10.0878 10.5385 10.159 10.5385H10.8061C10.8773 10.5385 10.9355 10.5997 10.9355 10.6746V12.1035ZM12.6827 10.8277C12.3252 10.8277 12.0356 10.5232 12.0356 10.1473C12.0356 9.77132 12.3252 9.46683 12.6827 9.46683C13.0403 9.46683 13.3298 9.77132 13.3298 10.1473C13.3298 10.5232 13.0403 10.8277 12.6827 10.8277ZM3.94675 7.37454L5.12287 3.97413L5.13096 3.95201L5.13743 3.9299C5.15522 3.87376 5.20376 3.83634 5.26038 3.83634H12.178L13.3978 7.37454H3.94675Z'
              fill='#44CCFF'
            />
          </svg>
          {property.garage} Garage
        </div>
        <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
          <svg
            width='17'
            height='18'
            viewBox='0 0 17 18'
            className='size-5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_3717_36548)'>
              <path
                d='M4.55566 9.16486C5.69742 9.16486 6.62641 7.94385 6.62641 6.44318C6.62641 4.94251 5.69742 3.72149 4.55566 3.72149C3.4139 3.72149 2.4849 4.94251 2.4849 6.44318C2.4849 7.94385 3.4139 9.16486 4.55566 9.16486ZM13.667 4.81016H7.86886C7.64004 4.81016 7.45471 5.05375 7.45471 5.3545V10.2535H1.6566V3.17715C1.6566 2.8764 1.47127 2.63281 1.24245 2.63281H0.414151C0.185332 2.63281 0 2.8764 0 3.17715V15.1526C0 15.4533 0.185332 15.6969 0.414151 15.6969H1.24245C1.47127 15.6969 1.6566 15.4533 1.6566 15.1526V13.5196H14.9094V15.1526C14.9094 15.4533 15.0948 15.6969 15.3236 15.6969H16.1519C16.3807 15.6969 16.566 15.4533 16.566 15.1526V8.62053C16.566 6.51598 15.2682 4.81016 13.667 4.81016Z'
                fill='#44CCFF'
              />
            </g>
            <defs>
              <clipPath id='clip0_3717_36548'>
                <rect
                  width='16.566'
                  height='17.4188'
                  fill='white'
                  transform='translate(0 0.457031)'
                />
              </clipPath>
            </defs>
          </svg>
          {property.beds} Bedrooms
        </div>
        <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
          <svg
            width='17'
            height='18'
            viewBox='0 0 17 18'
            className='size-5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_3717_36552)'>
              <path
                d='M1.426 13.5213C1.42689 13.9784 1.51958 14.4301 1.69801 14.8469C1.87643 15.2637 2.13657 15.6361 2.46138 15.9399V17.3317C2.46138 17.4761 2.51592 17.6145 2.61301 17.7166C2.71009 17.8187 2.84177 17.876 2.97907 17.876H4.01444C4.15174 17.876 4.28342 17.8187 4.3805 17.7166C4.47759 17.6145 4.53213 17.4761 4.53213 17.3317V16.7874H12.8151V17.3317C12.8151 17.4761 12.8697 17.6145 12.9668 17.7166C13.0639 17.8187 13.1955 17.876 13.3328 17.876H14.3682C14.5055 17.876 14.6372 17.8187 14.7343 17.7166C14.8314 17.6145 14.8859 17.4761 14.8859 17.3317V15.9399C15.2107 15.6361 15.4708 15.2637 15.6493 14.8469C15.8277 14.4301 15.9204 13.9784 15.9213 13.5213V11.8883H1.426V13.5213ZM16.439 9.16663H2.97907V2.81319C2.97936 2.67032 3.01989 2.53075 3.09553 2.41207C3.17118 2.2934 3.27855 2.20093 3.40412 2.14635C3.52968 2.09176 3.6678 2.07749 3.80107 2.10535C3.93433 2.13321 4.05677 2.20194 4.15292 2.30287L4.77642 2.95812C4.35159 3.97467 4.53019 4.96911 5.05532 5.67062L5.04982 5.6764C4.9531 5.77844 4.8988 5.91662 4.8988 6.06067C4.8988 6.20473 4.9531 6.34291 5.04982 6.44494L5.41576 6.82972C5.46383 6.88028 5.52091 6.92039 5.58372 6.94775C5.64654 6.97511 5.71387 6.9892 5.78186 6.9892C5.84986 6.9892 5.91718 6.97511 5.98 6.94775C6.04282 6.92039 6.09989 6.88028 6.14797 6.82972L9.55727 3.24492C9.60535 3.19437 9.64349 3.13436 9.66952 3.06831C9.69554 3.00225 9.70894 2.93146 9.70894 2.85997C9.70894 2.78847 9.69554 2.71768 9.66952 2.65163C9.64349 2.58558 9.60535 2.52557 9.55727 2.47502L9.19133 2.09024C9.09425 1.98823 8.96263 1.93093 8.82539 1.93093C8.68814 1.93093 8.55652 1.98823 8.45944 2.09024L8.45394 2.09602C7.78677 1.54386 6.84167 1.35606 5.87424 1.80276L5.25107 1.14717C4.93771 0.817648 4.53846 0.593233 4.1038 0.502312C3.66913 0.411391 3.21859 0.458047 2.80915 0.63638C2.39971 0.814713 2.04976 1.11671 1.80356 1.50418C1.55736 1.89166 1.42596 2.34719 1.426 2.81319V9.16663H0.908313C0.771014 9.16663 0.639338 9.22398 0.542252 9.32606C0.445167 9.42815 0.390625 9.5666 0.390625 9.71097L0.390625 10.2553C0.390625 10.3997 0.445167 10.5381 0.542252 10.6402C0.639338 10.7423 0.771014 10.7996 0.908313 10.7996H16.439C16.5763 10.7996 16.7079 10.7423 16.805 10.6402C16.9021 10.5381 16.9566 10.3997 16.9566 10.2553V9.71097C16.9566 9.5666 16.9021 9.42815 16.805 9.32606C16.7079 9.22398 16.5763 9.16663 16.439 9.16663Z'
                fill='#44CCFF'
              />
            </g>
            <defs>
              <clipPath id='clip0_3717_36552'>
                <rect
                  width='16.566'
                  height='17.4188'
                  fill='white'
                  transform='translate(0.390625 0.457031)'
                />
              </clipPath>
            </defs>
          </svg>
          {property.baths} Bathrooms
        </div>
      </div>
    </Card>
  )
}

export default PropertyCard
