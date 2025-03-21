import { EnvironmentOutlined } from '@ant-design/icons'
import { Card, Tag } from 'antd'
import { BathIcon, BedIcon, GarageIcon } from '../../pages/propertyDetail'
import { useNavigate } from 'react-router-dom'

const PropertyCard = ({ property }) => {
  const navigate = useNavigate()

  return (
    <Card
      onClick={() => navigate(`/property/${property.id}`)}
      cover={
        <img
          alt={property.title}
          src={property.image || '/placeholder.svg'}
          className='h-72  object-cover '
        />
      }
      className='hover:shadow-lg cursor-pointer border-2 flex flex-col h-fit rounded-xl transition-shadow p-3'
      styles={{
        cover: { borderRadius: '1rem', overflow: 'hidden' },
        body: { padding: '1rem' }
      }}
    >
      <div className='absolute top-8 left-5 flex gap-1'>
        <Tag
          className={`font-medium px-3 py-1 flex items-center border-0 rounded-full bg-secondary`}
        >
          {property.type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
        </Tag>
        {/* {property.featured && (
          <Tag
            className={`font-medium px-3 py-1 border-0 rounded-full bg-accent`}
          >
            FEATURED
          </Tag>
        )} */}
      </div>

      <div className='flex items-center w-full justify-between gap-5 flex-wrap mb-2'>
        <h3 className='text-xl font-medium '>{property.title}</h3>
        <p className='text-xl font-semibold text-[#EB664E]'>
          £{property.price}
        </p>
      </div>
      <p className='flex items-start text-base font-normal text-muted-foreground mb-4'>
        <EnvironmentOutlined className='mr-1 mt-1' />
        {property.location}
      </p>
      <div className='w-full border-t grid grid-cols-2 gap-4 border-[#E3E3E3] py-4'>
        <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
          <svg
            width='26'
            height='23'
            viewBox='0 0 26 23'
            className={'size-5'}
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
          <GarageIcon className={'size-5'} />
          {property.garage} Garage
        </div>
        <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
          <BedIcon className={'size-5'} />
          {property.beds} Bedrooms
        </div>
        <div className='flex items-start gap-2 text-[#7C8893] text-xs'>
          <BathIcon className={'size-5'} />
          {property.baths} Bathrooms
        </div>
      </div>
    </Card>
  )
}

export default PropertyCard
