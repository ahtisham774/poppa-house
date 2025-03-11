import React, { useState } from 'react'
import {
  Card,
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Collapse,
  Tabs,
  Radio
} from 'antd'
import {
  HeartOutlined,
  EnvironmentOutlined,
  AreaChartOutlined,
  DownOutlined,
  PlusOutlined,
  MinusOutlined,
  VideoCameraOutlined,
  PictureOutlined,
  CalendarOutlined,
  HeartFilled
} from '@ant-design/icons'
import { FaBath, FaBed, FaCar } from 'react-icons/fa'
import ArrowDown from '../components/svg/arrowDown'
import { css } from './register'
import Like from '../components/common/like'

// Custom icons to match the design
const BedIcon = () => (
  <span className='text-secondary'>
    <FaBed size={25} />
  </span>
)

const BathIcon = () => (
  <span className='text-secondary'>
    <FaBath size={25} />
  </span>
)

const GarageIcon = () => (
  <span className='text-secondary'>
    <FaCar size={25} />
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
const { TabPane } = Tabs

const PropertyDetailPage = () => {
  const [form] = Form.useForm()
  const [activeTab, setActiveTab] = useState('1')
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const onFinish = values => {
    console.log('Form values:', values)
  }
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

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
          
            <div  className="absolute bottom-4 right-4 bg-white border-none rounded-full size-10 flex items-center justify-center p-0 transition-all duration-300">
                <Like className={"size-6"} isLiked={isFavorite} setIsLiked={setIsFavorite}/>
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
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
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
                  <Tabs defaultActiveKey='1' className='property-details-tabs'>
                    <TabPane tab='Interior' key='1'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
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
                        <div>
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
                    </TabPane>
                    <TabPane tab='Exterior' key='2'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
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
                        <div>
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
                    </TabPane>
                  </Tabs>
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
                      <img
                        src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WtawUhQlxBP6mVy9T97K9wquhP1dqe.png'
                        alt='Map'
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute right-2 top-2 flex flex-col'>
                        <Button
                          className='bg-white mb-2 flex items-center justify-center h-8 w-8 p-0'
                          icon={<PlusOutlined />}
                        />
                        <Button
                          className='bg-white flex items-center justify-center h-8 w-8 p-0'
                          icon={<MinusOutlined />}
                        />
                      </div>
                    </div>

                    <Radio.Group
                      defaultValue='restaurants'
                      buttonStyle='solid'
                      className='mb-4 flex flex-wrap gap-2'
                    >
                      <Radio.Button value='shopping' className='rounded-full'>
                        Shopping & Groceries
                      </Radio.Button>
                      <Radio.Button
                        value='restaurants'
                        className='rounded-full bg-accent hover:!bg-accent hover:!text-black text-black border-accent hover:!bg-accent hover:!text-black'
                      >
                        Restaurants & Cafes
                      </Radio.Button>
                      <Radio.Button value='healthcare' className='rounded-full'>
                        Healthcare Facilities
                      </Radio.Button>
                      <Radio.Button value='parks' className='rounded-full'>
                        Parks & Recreation
                      </Radio.Button>
                      <Radio.Button value='services' className='rounded-full'>
                        Services
                      </Radio.Button>
                      <Radio.Button value='education' className='rounded-full'>
                        Educational Institutes
                      </Radio.Button>
                      <Radio.Button value='transit' className='rounded-full'>
                        Transit
                      </Radio.Button>
                    </Radio.Group>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {nearbyPlaces.map((place, index) => (
                        <div
                          key={index}
                          className='flex items-center border-b pb-4'
                        >
                          {place.type === 'restaurant' ? (
                            <RestaurantIcon />
                          ) : (
                            <CafeIcon />
                          )}
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
        <div className='lg:col-span-1'>
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
                <Input placeholder='Enter your First Name..' className={css+" dp"} />
              </Form.Item>

              <Form.Item
                name='email'
                label='Email'
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder='Enter your Email Address..' className={css+" dp"} />
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
                <Input.TextArea rows={1} placeholder='Enter your Message' className={css+" dp"}  />
              </Form.Item>

              <Form.Item
                name='date'
                label='Date'
                rules={[{ required: true, message: 'Please select a date' }]}
              >
                <DatePicker
                  className={css+" dp"} 
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
                placeholder='9:00 am' className={css+" dp"} >
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
