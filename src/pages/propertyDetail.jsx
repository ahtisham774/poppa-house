import React, { useState } from 'react'
import {
  Card,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Collapse,
  Radio
} from 'antd'
import {
  EnvironmentOutlined,
  AreaChartOutlined,
  VideoCameraOutlined,
  PictureOutlined,
  CalendarOutlined
} from '@ant-design/icons'
import { FaBath, FaBed, FaCar } from 'react-icons/fa'
import ArrowDown from '../components/svg/arrowDown'
import { css } from './register'
import Like from '../components/common/like'
import MapUrl from '../components/common/mapUrl'

// Custom icons to match the design
export const BedIcon = ({ className }) => (
  <span className='text-secondary'>
    <FaBed size={25} className={className} />
  </span>
)

export const BathIcon = ({ className }) => (
  <span className='text-secondary'>
    <FaBath size={25} className={className} />
  </span>
)

export const GarageIcon = ({ className }) => (
  <span className='text-secondary'>
    <FaCar size={25} className={className} />
  </span>
)

const AreaIcon = () => (
  <span className='text-secondary'>
    <AreaChartOutlined />
  </span>
)

const RestaurantIcon = () => (
  <div className='bg-yellow-300 p-2 rounded'>
    <span className='text-black font-bold'>🍴</span>
  </div>
)

const CafeIcon = () => (
  <div className='bg-yellow-300 p-2 rounded'>
    <span className='text-black font-bold'>☕</span>
  </div>
)

const { Panel } = Collapse
const { Option } = Select

const PropertyDetailPage = () => {
  const [form] = Form.useForm()
  const [currentFilter, setCurrentFilter] = useState('restaurants')
  const [isFavorite, setIsFavorite] = useState(false)
  const onFinish = values => {
    console.log('Form values:', values)
  }

  const propertyDetails = {
    interior: {
      bedrooms: {
        total: 5,
        primarySize: '25 X 16'
      },
      bathrooms: {
        total: 2,
        primarySize: '25 X 16'
      },
      appliances: {
        kitchen: 'Convection oven, dishwasher, microwave, refrigerator',
        laundry: 'Washer and dryer hookups'
      },
      heating: {
        airConditioning: 'Central Air, Electric',
        heating: 'Central, Gas',
        fireplaces: 2
      },
      rooms: {
        total: 15,
        details: [
          { name: 'Kitchen', size: '16 x 15', floor: 'First Floor' },
          { name: 'Living Room', size: '17 x 25', floor: 'First Floor' },
          { name: 'Office/Study', size: '15 x 13', floor: 'First Floor' },
          { name: 'Dining Room', size: '16 x 13', floor: 'First Floor' },
          { name: 'Breakfast Room', size: '15 x 12', floor: 'First Floor' },
          { name: 'Media Room', size: '16 x 14', floor: 'Second Floor' },
          { name: 'Game Room', size: '30 x 15', floor: 'Second Floor' }
        ]
      },
      features: {
        luxury: 'High ceilings, granite counters',
        kitchen: 'Spacious island, modern cabinetry, walk-in pantry',
        bathrooms: 'Soaking tub, separate shower, elegant fixtures',
        flooring: 'Hardwood, Tile'
      }
    },
    exterior: {
      parking: {
        garage: 1,
        garageSize: '25 X 16'
      },
      outdoorFeatures: {
        spaces: 'Covered patio, landscaped backyard',
        fencing: 'Fully fenced',
        garden: 'Maintained front and backyard'
      }
    }
  }

  const nearbyPlaces = [
    {
      type: 'restaurant',
      name: 'Rica Arepa Restaurant',
      distance: '0.3 miles away'
    },
    {
      type: 'restaurant',
      name: 'Rica Arepa Restaurant',
      distance: '0.3 miles away'
    },
    { type: 'cafe', name: 'Rica Arepa Cafe', distance: '0.5 miles away' },
    {
      type: 'restaurant',
      name: 'Rica Arepa Restaurant',
      distance: '0.3 miles away'
    },
    { type: 'cafe', name: 'Rica Arepa Cafe', distance: '0.5 miles away' },
    {
      type: 'restaurant',
      name: 'Rica Arepa Restaurant',
      distance: '0.5 miles away'
    }
  ]

  const filters = [
    'Shopping & Groceries',
    'Restaurants & Cafés',
    'Healthcare Facilities',
    'Parks & Recreation',
    'Services',
    'Educational Institutes',
    'Transit'
  ]

  return (
    <div className='max-w-7xl mx-auto p-4 bg-white'>
      {/* Property Images Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        <div className='md:col-span-2 relative rounded-lg overflow-hidden'>
          <img
            src='/assets/rm1.jpg'
            alt='Living Room'
            className='w-full h-[480px] object-cover'
          />
          <Button
            className='absolute bottom-4 left-4 bg-accent hover:!bg-accent hover:!text-black text-black border-none flex items-center font-medium'
            icon={<VideoCameraOutlined />}
          >
            Video
          </Button>

          <div className='absolute bottom-4 right-4 bg-white border-none rounded-full size-10 flex items-center justify-center p-0 transition-all duration-300'>
            <Like
              className={'size-6'}
              isLiked={isFavorite}
              setIsLiked={setIsFavorite}
            />
          </div>
        </div>
        <div className='grid grid-rows-2 gap-4'>
          <div className='rounded-lg overflow-hidden'>
            <img
              src='/assets/rm2.png'
              alt='Bathroom'
              className='w-full h-[230px] object-cover'
            />
          </div>
          <div className='rounded-lg overflow-hidden relative'>
            <img
              src='/assets/rm3.png'
              alt='Kitchen'
              className='w-full h-[230px] object-cover'
            />
            <Button
              className='absolute bottom-4 right-4 bg-accent hover:!bg-accent hover:!text-black text-black border-none flex items-center font-medium'
              icon={<PictureOutlined />}
            >
              See All Photos
            </Button>
          </div>
        </div>
      </div>

      {/* Property Features */}
      <Card className='mb-6 border border-[#E0E0E0] '>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='flex items-center'>
            <BedIcon />
            <span className='ml-2 text-lg font-medium'>5 Bedrooms</span>
          </div>
          <div className='flex items-center font-medium'>
            <BathIcon />
            <span className='ml-2 text-lg'>2 Bathrooms</span>
          </div>
          <div className='flex items-center font-medium'>
            <GarageIcon />
            <span className='ml-2 text-lg'>1 Garage</span>
          </div>
          <div className='flex items-center font-medium'>
            <svg
              width='26'
              height='23'
              viewBox='0 0 26 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.2168 10.0611C4.0096 10.0611 3.81088 9.98534 3.66437 9.85055C3.51786 9.71575 3.43555 9.53294 3.43555 9.34231V3.59375C3.43555 3.40313 3.51786 3.22031 3.66437 3.08552C3.81088 2.95073 4.0096 2.875 4.2168 2.875H10.4668C10.674 2.875 10.8727 2.95073 11.0192 3.08552C11.1657 3.22031 11.248 3.40313 11.248 3.59375V9.34231C11.248 9.53294 11.1657 9.71575 11.0192 9.85055C10.8727 9.98534 10.674 10.0611 10.4668 10.0611H4.2168ZM15.1543 10.0611C14.9471 10.0611 14.7484 9.98534 14.6019 9.85055C14.4554 9.71575 14.373 9.53294 14.373 9.34231V3.59375C14.373 3.40313 14.4554 3.22031 14.6019 3.08552C14.7484 2.95073 14.9471 2.875 15.1543 2.875H21.4027C21.6099 2.875 21.8086 2.95073 21.9552 3.08552C22.1017 3.22031 22.184 3.40313 22.184 3.59375V9.34231C22.184 9.53294 22.1017 9.71575 21.9552 9.85055C21.8086 9.98534 21.6099 10.0611 21.4027 10.0611H15.1543ZM4.2168 20.1236C4.0096 20.1236 3.81088 20.0478 3.66437 19.913C3.51786 19.7783 3.43555 19.5954 3.43555 19.4048V13.6548C3.43555 13.4642 3.51786 13.2814 3.66437 13.1466C3.81088 13.0118 4.0096 12.9361 4.2168 12.9361H10.4668C10.674 12.9361 10.8727 13.0118 11.0192 13.1466C11.1657 13.2814 11.248 13.4642 11.248 13.6548V19.4048C11.248 19.5954 11.1657 19.7783 11.0192 19.913C10.8727 20.0478 10.674 20.1236 10.4668 20.1236H4.2168ZM15.1543 20.1236C14.9471 20.1236 14.7484 20.0478 14.6019 19.913C14.4554 19.7783 14.373 19.5954 14.373 19.4048V13.6548C14.373 13.4642 14.4554 13.2814 14.6019 13.1466C14.7484 13.0118 14.9471 12.9361 15.1543 12.9361H21.4027C21.6099 12.9361 21.8086 13.0118 21.9552 13.1466C22.1017 13.2814 22.184 13.4642 22.184 13.6548V19.4048C22.184 19.5954 22.1017 19.7783 21.9552 19.913C21.8086 20.0478 21.6099 20.1236 21.4027 20.1236H15.1543Z'
                fill='#44CCFF'
              />
            </svg>

            <span className='ml-2 text-lg'>2400 Square Feet</span>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <div className='grid grid-cols-1 lg:grid-cols-3  gap-6 '>
        {/* Left Column - Property Info */}
        <div className='lg:col-span-2 '>
          <Card className='mb-6  border border-[#E0E0E0]  shadow-[0px_4px_4px_0px_#00000040]'>
            <h1 className='text-3xl font-bold text-center mb-6'>
              About this Property
            </h1>

            <div className='mb-6 p-4'>
              <h2 className='text-2xl font-bold text-gray-800'>Elite Haven</h2>
              <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center text-gray-600'>
                  <EnvironmentOutlined />
                  <span className='ml-2'>
                    123 Kensington Avenue, London, UK
                  </span>
                </div>
                <div className='text-red-500 font-bold text-xl'>£2,000</div>
              </div>
            </div>

            <div className='border-t-2 p-4 border-b-2 py-6 my-6'>
              <h3 className='text-xl font-bold mb-4'>Description</h3>
              <p className='text-gray-700 leading-relaxed'>
                Located at 123 Kensington Avenue, London, UK, Elite Haven is a
                spacious 2,400 sq. ft. home available for $2,000 per month. The
                property features five bedrooms and two bathrooms, providing
                ample space for families or professionals.
              </p>
              <p className='text-gray-700 leading-relaxed mt-4'>
                The home includes a large living area, a modern kitchen, and a
                private garage for secure parking. Situated in a prime location,
                it offers easy access to public transport, shopping centers, and
                local amenities. Elite Haven is a great choice for those looking
                for comfort and convenience in Kensington.
              </p>
              <Button type='link' className='p-0 mt-2 font-bold'>
                Read More...
              </Button>
            </div>

            {/* Property Details Collapse */}
            <div className='flex flex-col py-2  border-b-2'>
              <Collapse
                bordered={false}
                className='bg-white'
                expandIconPosition='end'
                expandIcon={({ isActive }) => (
                  <ArrowDown
                    style={{ transform: isActive ? 'rotate(180deg)' : '' }}
                  />
                )}
              >
                <Panel
                  header={
                    <h3 className='text-xl font-bold'>Property Details</h3>
                  }
                  key='1'
                  className='pb-0'
                >
                  <div className='flex flex-col gap-8'>
                    <div className='flex flex-col'>
                      <div className='px-4 py-1 border border[#8D8D8D] font-medium text-xl bg-[#F6F6F6]'>
                        Interior
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 '>
                        <div className='p-4 border-b-2'>
                          <h4 className='font-bold mb-2'>Bedrooms</h4>
                          <ul className='list-disc pl-5 space-y-1'>
                            <li>
                              Total Bedrooms:{' '}
                              {propertyDetails.interior.bedrooms.total}
                            </li>
                            <li>
                              Primary Bedroom Size:{' '}
                              {propertyDetails.interior.bedrooms.primarySize}
                            </li>
                          </ul>
                        </div>
                        <div className=' border-l-2 p-4 border-b-2'>
                          <h4 className='font-bold mb-2'>Bathrooms</h4>
                          <ul className='list-disc pl-5 space-y-1'>
                            <li>
                              Total Bathrooms:{' '}
                              {propertyDetails.interior.bathrooms.total}
                            </li>
                            <li>
                              Primary Bathroom Size:{' '}
                              {propertyDetails.interior.bathrooms.primarySize}
                            </li>
                          </ul>
                        </div>
                        <div className='px-4 border-b-2 pb-4'>
                          <h4 className='font-bold mt-4 mb-2'>Appliances</h4>
                          <ul className='list-disc pl-5 space-y-1'>
                            <li>
                              Kitchen:{' '}
                              {propertyDetails.interior.appliances.kitchen}
                            </li>
                            <li>
                              Laundry:{' '}
                              {propertyDetails.interior.appliances.laundry}
                            </li>
                          </ul>
                        </div>
                        <div className=' border-b-2 border-l-2 px-4 pb-4'>
                          <h4 className='font-bold mt-4 mb-2'>
                            Heating & Air Conditioning
                          </h4>
                          <ul className='list-disc pl-5 space-y-1'>
                            <li>
                              Air Conditioning:{' '}
                              {propertyDetails.interior.heating.airConditioning}
                            </li>
                            <li>
                              Heating:{' '}
                              {propertyDetails.interior.heating.heating}
                            </li>
                            <li>
                              Fireplaces:{' '}
                              {propertyDetails.interior.heating.fireplaces}
                            </li>
                          </ul>
                        </div>
                        <div className=' px-4 border-b-2 pb-4'>
                          <h4 className='font-bold mt-4 mb-2'>
                            Other Rooms & Layout
                          </h4>
                          <ul className='list-disc pl-5 space-y-1'>
                            <li>
                              Total Rooms:{' '}
                              {propertyDetails.interior.rooms.total}
                            </li>
                            {propertyDetails.interior.rooms.details.map(
                              (room, index) => (
                                <li key={index}>
                                  {room.name}: {room.size} ({room.floor})
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div className=' px-4 border-b-2 border-l-2 pb-4'>
                          <h4 className='font-bold mt-4 mb-2'>
                            Features & Amenities
                          </h4>
                          <ul className='list-disc pl-5 space-y-1'>
                            <li>
                              Luxury Features:{' '}
                              {propertyDetails.interior.features.luxury}
                            </li>
                            <li>
                              Kitchen:{' '}
                              {propertyDetails.interior.features.kitchen}
                            </li>
                            <li>
                              Bathrooms:{' '}
                              {propertyDetails.interior.features.bathrooms}
                            </li>
                            <li>
                              Flooring:{' '}
                              {propertyDetails.interior.features.flooring}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <div className='px-4 py-1 border border[#8D8D8D] font-medium text-xl bg-[#F6F6F6]'>
                        Exterior
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 '>
                      <div className='p-4'>
                          <h4 className='font-bold mb-2'>Parking</h4>
                          <ul className='list-disc pl-5 space-y-1'>
                            <li>
                              Attached Garage:{' '}
                              {propertyDetails.exterior.parking.garage}
                            </li>
                            <li>
                              Garage Size:{' '}
                              {propertyDetails.exterior.parking.garageSize}
                            </li>
                          </ul>
                        </div>
                        <div className='p-4 border-l-2'>
                          <h4 className='font-bold mb-2'>Outdoor Features</h4>
                          <ul className='list-disc pl-5 space-y-1'>
                            <li>
                              Outdoor Spaces:{' '}
                              {propertyDetails.exterior.outdoorFeatures.spaces}
                            </li>
                            <li>
                              Fencing:{' '}
                              {propertyDetails.exterior.outdoorFeatures.fencing}
                            </li>
                            <li>
                              Garden:{' '}
                              {propertyDetails.exterior.outdoorFeatures.garden}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Panel>
              </Collapse>
            </div>

            {/* Nearby Places Collapse */}
            <div className='flex flex-col py-2  border-b-2 mb-10'>
              <Collapse
                bordered={false}
                className='bg-white'
                expandIconPosition='end'
                expandIcon={({ isActive }) => (
                  <ArrowDown
                    style={{ transform: isActive ? 'rotate(180deg)' : '' }}
                  />
                )}
              >
                <Panel
                  header={<h3 className='text-xl font-bold'>Nearby Places</h3>}
                  key='1'
                  className='pb-0'
                >
                  <div className='mb-4'>
                    <div className='relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4'>
                      <MapUrl />
                    </div>

                    <Radio.Group
                      defaultValue='restaurants'
                      buttonStyle='solid'
                      value={currentFilter}
                      block
                      optionType='button'
                      onChange={e => setCurrentFilter(e.target.value)}
                      className='mb-4 flex flex-wrap gap-2 radio'
                      options={filters.map(filter => ({
                        label: (
                          <p className='whitespace-nowrap w-fit'>{filter}</p>
                        ),
                        value: filter,
                        style: {
                          borderRadius: '100px',
                          background: '#fff',
                          color: '#000'
                        }
                      }))}
                    />

                    <div className='grid grid-cols-1 md:grid-cols-2 border-t'>
                      {nearbyPlaces
                        ?.filter(place =>
                          currentFilter
                            ?.toLowerCase()
                            .indexOf(place?.type?.toLowerCase())
                        )
                        ?.map((place, index) => (
                          <div
                            key={index}
                            className='flex items-center border-b p-4 border-r '
                          >
                            <div className='flex items-center justify-evenly size-12 bg-accent rounded-lg'>
                              {place.type == 'restaurant' ? (
                                <svg
                                  width='29'
                                  height='29'
                                  viewBox='0 0 29 29'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <g clipPath='url(#clip0_1209_3854)'>
                                    <path
                                      d='M3.2553 2.70312L24.1234 23.5712C24.5194 23.9672 24.7418 24.5043 24.7418 25.0643C24.7418 25.6243 24.5194 26.1613 24.1234 26.5573C23.7273 26.9531 23.1903 27.1755 22.6304 27.1755C22.0704 27.1755 21.5334 26.9531 21.1373 26.5573L16.0397 21.3719C15.7061 21.0331 15.5189 20.5769 15.5186 20.1014V19.7882C15.5186 19.5481 15.471 19.3105 15.3784 19.089C15.2858 18.8675 15.1502 18.6666 14.9793 18.4979L14.3212 17.8902C14.0977 17.684 13.8261 17.5374 13.5311 17.4637C13.2361 17.3901 12.9274 17.3918 12.6333 17.4688C12.1695 17.5898 11.6821 17.5875 11.2195 17.462C10.7569 17.3365 10.3351 17.0922 9.9961 16.7534L5.15729 11.914C2.28674 9.04348 1.2304 4.70877 3.2553 2.70312Z'
                                      stroke='black'
                                      strokeWidth='2'
                                      strokeLinejoin='round'
                                    />
                                    <path
                                      d='M22.6558 1.8125L18.2803 6.18799C17.9436 6.52461 17.6765 6.92427 17.4943 7.36413C17.3121 7.80399 17.2183 8.27543 17.2183 8.75154V9.59322C17.2183 9.71231 17.1948 9.83023 17.1493 9.94025C17.1037 10.0503 17.0369 10.1502 16.9526 10.2344L16.312 10.875M18.1245 12.6875L18.7651 12.0469C18.8493 11.9627 18.9493 11.8958 19.0593 11.8503C19.1693 11.8047 19.2872 11.7812 19.4063 11.7812H20.248C20.7241 11.7813 21.1955 11.6875 21.6354 11.5052C22.0752 11.323 22.4749 11.0559 22.8115 10.7192L27.187 6.34375M24.9214 4.07812L20.3901 8.60938M11.3276 20.8438L5.67944 26.5237C5.25457 26.9484 4.6784 27.187 4.07764 27.187C3.47688 27.187 2.90071 26.9484 2.47584 26.5237C2.05111 26.0988 1.8125 25.5226 1.8125 24.9219C1.8125 24.3211 2.05111 23.7449 2.47584 23.3201L7.24952 18.5781'
                                      stroke='black'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id='clip0_1209_3854'>
                                      <rect
                                        width='29'
                                        height='29'
                                        fill='white'
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              ) : (
                                <svg
                                  width='32'
                                  height='32'
                                  viewBox='0 0 32 32'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M25.9844 8C26.8073 8 27.5833 8.15625 28.3125 8.46875C29.0417 8.78125 29.6771 9.20833 30.2188 9.75C30.7604 10.2917 31.1927 10.9323 31.5156 11.6719C31.8385 12.4115 31.9948 13.1875 31.9844 14C31.9844 14.8333 31.8281 15.6094 31.5156 16.3281C31.2031 17.0469 30.776 17.6823 30.2344 18.2344C29.6927 18.7865 29.0521 19.2188 28.3125 19.5312C27.5729 19.8438 26.7969 20 25.9844 20H24.375C23.9167 20.8021 23.3698 21.5417 22.7344 22.2188C22.099 22.8958 21.3958 23.4896 20.625 24H24.9844C25.2552 24 25.4896 24.099 25.6875 24.2969C25.8854 24.4948 25.9844 24.7292 25.9844 25C25.9844 25.2708 25.8854 25.5052 25.6875 25.7031C25.4896 25.901 25.2552 26 24.9844 26H2.98438C2.71354 26 2.47917 25.901 2.28125 25.7031C2.08333 25.5052 1.98438 25.2708 1.98438 25C1.98438 24.7292 2.08333 24.4948 2.28125 24.2969C2.47917 24.099 2.71354 24 2.98438 24H7.34375C6.5 23.4375 5.75 22.7917 5.09375 22.0625C4.4375 21.3333 3.875 20.5417 3.40625 19.6875C2.9375 18.8333 2.58854 17.9219 2.35938 16.9531C2.13021 15.9844 2.00521 15 1.98438 14V8H25.9844ZM13.9844 24C14.901 24 15.7865 23.8802 16.6406 23.6406C17.4948 23.401 18.2917 23.0677 19.0312 22.6406C19.7708 22.2135 20.4427 21.6927 21.0469 21.0781C21.651 20.4635 22.1719 19.7865 22.6094 19.0469C23.0469 18.3073 23.3854 17.5104 23.625 16.6562C23.8646 15.8021 23.9844 14.9167 23.9844 14V10H3.98438V14C3.98438 14.9167 4.10417 15.8021 4.34375 16.6562C4.58333 17.5104 4.91667 18.3073 5.34375 19.0469C5.77083 19.7865 6.29167 20.4583 6.90625 21.0625C7.52083 21.6667 8.19792 22.1875 8.9375 22.625C9.67708 23.0625 10.474 23.401 11.3281 23.6406C12.1823 23.8802 13.0677 24 13.9844 24ZM25.9844 18C26.5365 18 27.0521 17.8958 27.5312 17.6875C28.0104 17.4792 28.4375 17.1927 28.8125 16.8281C29.1875 16.4635 29.474 16.0417 29.6719 15.5625C29.8698 15.0833 29.974 14.5625 29.9844 14C29.9844 13.4479 29.8802 12.9323 29.6719 12.4531C29.4635 11.974 29.1771 11.5469 28.8125 11.1719C28.4479 10.7969 28.026 10.5104 27.5469 10.3125C27.0677 10.1146 26.5469 10.0104 25.9844 10C25.9844 10.6771 25.9896 11.3542 26 12.0312C26.0104 12.7083 26.0052 13.3802 25.9844 14.0469C25.9635 14.7135 25.901 15.375 25.7969 16.0312C25.6927 16.6875 25.526 17.3438 25.2969 18H25.9844Z'
                                    fill='black'
                                  />
                                </svg>
                              )}
                            </div>
                            <div className='ml-3'>
                              <div className='font-bold'>{place.name}</div>
                              <div className='text-gray-500 text-sm'>
                                {place.distance}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </Panel>
              </Collapse>
            </div>
          </Card>
        </div>

        {/* Right Column - Schedule Tour */}
        <div className='lg:col-span-1 sticky top-4 self-start'>
          <Card className='border border-[#E0E0E0]  shadow-[0px_4px_4px_0px_#00000040]'>
            <h2 className='text-2xl font-bold text-center mb-6'>
              Schedule a Tour
            </h2>

            <Form form={form} layout='vertical' onFinish={onFinish}>
              <Form.Item
                name='name'
                label='Name'
                className='font-medium'
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input
                  placeholder='Enter your First Name..'
                  className={css + ' dp'}
                />
              </Form.Item>

              <Form.Item
                name='email'
                label='Email'
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input
                  placeholder='Enter your Email Address..'
                  className={css + ' dp'}
                />
              </Form.Item>

              <Form.Item
                name='phone'
                label={<p className='font-medium'>Phone Number</p>}
                rules={[
                  { required: true, message: 'Please enter your phone number' },
                  {
                    pattern: /^[0-9]+$/,
                    message: 'The phone number must not contain any letters'
                  }
                ]}
              >
                <Input
                  style={{
                    borderRadius: '0px',
                    border: 'none',
                    background: '#fff'
                  }}
                  className='dp'
                  styles={{
                    input: {
                      borderTop: 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      borderRadius: '0px',
                      marginLeft: '1rem',
                      width: '90%'
                    }
                  }}
                  addonBefore={
                    <Select
                      className='dp'
                      suffixIcon={
                        <svg
                          width='10'
                          height='6'
                          viewBox='0 0 10 6'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M0 0.207031L5 5.20703L10 0.207031H0Z'
                            fill='#242426'
                          />
                        </svg>
                      }
                      defaultValue='+1'
                      style={{
                        width: 70,
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none',
                        borderRadius: '0px',
                        background: '#fff'
                      }}
                    >
                      <Option value='+1'>+1</Option>
                      <Option value='+44'>+44</Option>
                    </Select>
                  }
                  placeholder='(000) 000 0000'
                />
              </Form.Item>

              <Form.Item name='message' label='Message'>
                <Input.TextArea
                  rows={1}
                  placeholder='Enter your Message'
                  className={css + ' dp'}
                />
              </Form.Item>

              <Form.Item
                name='date'
                label='Date'
                rules={[{ required: true, message: 'Please select a date' }]}
              >
                <DatePicker
                  className={css + ' dp'}
                  format='MM/DD/YYYY'
                  placeholder='mm/dd/yy'
                  suffixIcon={<CalendarOutlined />}
                />
              </Form.Item>

              <Form.Item
                name='time'
                label='Time'
                rules={[{ required: true, message: 'Please select a time' }]}
              >
                <Select
                  suffixIcon={
                    <svg
                      width='10'
                      height='6'
                      viewBox='0 0 10 6'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 0.207031L5 5.20703L10 0.207031H0Z'
                        fill='#242426'
                      />
                    </svg>
                  }
                  placeholder='9:00 am'
                  className={css + ' dp'}
                >
                  <Option value='9:00'>9:00 am</Option>
                  <Option value='10:00'>10:00 am</Option>
                  <Option value='11:00'>11:00 am</Option>
                  <Option value='12:00'>12:00 pm</Option>
                  <Option value='13:00'>1:00 pm</Option>
                  <Option value='14:00'>2:00 pm</Option>
                  <Option value='15:00'>3:00 pm</Option>
                  <Option value='16:00'>4:00 pm</Option>
                  <Option value='17:00'>5:00 pm</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='w-full h-12 bg-accent hover:!bg-accent hover:!text-black text-black border-none font-medium'
                >
                  Submit Request
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailPage
