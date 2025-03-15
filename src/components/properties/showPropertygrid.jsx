import { useState } from 'react'
import PropertyCard from '../common/propertyCard'
import RightArrow from '../svg/rightArrow'
import { Link } from 'react-router-dom'

const filters = [
  { key: 'all', label: 'All Properties' },
  { key: 'sale', label: 'For Sale' },
  { key: 'rent', label: 'For Rent' }
]

const ShowPropertyGrid = ({ title, description, properties }) => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProperties = properties?.slice(0,6)?.filter(property => {
    if (activeFilter === 'all') return true
    return property.type === activeFilter
  })

  return (
    <section className='py-24 '>
      <div className='container'>
        <div className='text-center mb-4'>
          <h2 className='text-3xl lg:text-5xl  font-medium mb-4'>{title}</h2>
          <p className='text-muted-foreground text-base'>{description}</p>
        </div>

        <div className='flex w-full items-center justify-end'>
          <Link
            to='/properties'
            className='flex items-center gap-2 text-base font-medium'
          >
            View All Properties <RightArrow />
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
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowPropertyGrid
