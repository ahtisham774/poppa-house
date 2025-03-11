import { Tabs, Card, Tag } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import RightArrow from '../svg/rightArrow'
import { useState } from 'react'

const properties = [
  {
    id: 1,
    title: 'Elite Haven',
    location: '123 Kensington Avenue, London, UK',
    price: 2000,
    type: 'rent',
    featured: true,
    image: '/assets/f1.jpg'
  },
  {
    id: 2,
    title: 'Prestige Manor',
    location: '45 Mayfair Street, London, UK',
    price: 5000,
    type: 'sale',
    featured: true,
    image: '/assets/f2.jpg'
  },
  {
    id: 3,
    title: 'Royal Heights',
    location: '78 Belgravia Road, London, UK',
    price: 5000,
    type: 'rent',
    featured: false,
    image: '/assets/f3.jpg'
  },
  {
    id: 4,
    title: 'Elite Haven',
    location: '123 Kensington Avenue, London, UK',
    price: 2000,
    type: 'rent',
    featured: true,
    image: '/assets/f1.jpg'
  },
  {
    id: 5,
    title: 'Prestige Manor',
    location: '45 Mayfair Street, London, UK',
    price: 5000,
    type: 'sale',
    featured: true,
    image: '/assets/f2.jpg'
  },
  {
    id: 6,
    title: 'Royal Heights',
    location: '78 Belgravia Road, London, UK',
    price: 5000,
    type: 'rent',
    featured: false,
    image: '/assets/f3.jpg'
  },
  
  
]
const filters = [
  { key: 'all', label: 'All Properties' },
  { key: 'sale', label: 'For Sale' },
  { key: 'rent', label: 'For Rent' }
];
export function FeaturedListings () {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProperties = properties.filter(property => {
    if (activeFilter === 'all') return true;
    return property.type === activeFilter;
  });

  return (
    <section className='py-24 '>
      <div className='container'>
        <div className='text-center mb-4'>
          <h2 className='text-3xl lg:text-5xl  font-medium mb-4'>
            Featured Listings
          </h2>
          <p className='text-muted-foreground text-base'>
            Explore top properties available for sale and rent in your area.
          </p>
        </div>

        <div className='flex w-full items-center justify-end'>
          <Link className='flex items-center gap-2 text-base font-medium'>
            View All <RightArrow />
          </Link>
        </div>

        <div className='overflow-x-auto'>
          <div className='flex justify-center min-w-full gap-4 my-4'>
            {filters.map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-lg font-medium text-foreground whitespace-nowrap transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-accent border-2 border-foreground'
                    : '  hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>


        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {filteredProperties?.map(property => (
            <Card
              key={property.id}
              cover={
                <img
                  alt={property.title}
                  src={property.image || '/placeholder.svg'}
                  className='h-72 object-cover '
                />
              }
              className='hover:shadow-lg border-2 flex flex-col h-fit rounded-xl transition-shadow p-3'
              styles={{
                cover: { borderRadius: '1rem' },
                body: { padding: '1rem 0 0 0' }
              }}
            >
              <div className='absolute top-8 left-5 flex gap-1'>
                <Tag
                  className={`font-medium px-3 py-1 border-0 rounded-full bg-secondary`}
                >
                  {property.type === 'rent' ? 'FOR RENT' : 'FOR SALE'}
                </Tag>
                {property.featured && (
                  <Tag
                    className={`font-medium px-3 py-1 border-0 rounded-full bg-accent`}
                  >
                    FEATURED
                  </Tag>
                )}
              </div>

              <div className='flex items-center w-full justify-between gap-5 flex-wrap mb-2'>
                <h3 className='text-xl font-medium '>{property.title}</h3>
                <p className='text-xl font-semibold text-[#EB664E]'>
                  ${property.price.toLocaleString()}
                </p>
              </div>
              <p className='flex items-start text-base font-normal text-muted-foreground mb-4'>
                <EnvironmentOutlined className='mr-1 mt-1' />
                {property.location}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
