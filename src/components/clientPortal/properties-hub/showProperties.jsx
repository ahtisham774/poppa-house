import { useState } from 'react'
import { Link } from 'react-router-dom'
import RightArrow from '../../svg/rightArrow'
import PropertyCard from '../../common/propertyCard'
import Tabs from '../../common/tabs'

const ShowProperties = ({
  title,
  description,
  filters,
  handleToggleLike,
  properties,
  redirectTo
}) => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProperties = properties?.slice(0, 6)?.filter(property => {
    if (activeFilter === 'all') return true
    return property.type === activeFilter || (activeFilter === 'featured' && property.featured)
  })
  return (
    <section className=''>
      
      <div>
        {title && (
          <div className=' mb-4'>
            <h2 className='text-2xl font-medium mb-4'>{title}</h2>
            <div className='flex w-full items-center justify-between mb-4 flex-wrap'>
              <p className='text-muted-foreground text-base'>{description}</p>
              <Link
                to='/client/properties-hub/all'
                className='flex items-center gap-2 text-base font-medium'
              >
                View All Properties <RightArrow />
              </Link>
            </div>
          </div>
        )}

        <Tabs
          tabs={filters}
          activeTab={activeFilter}
          handleTabChange={setActiveFilter}
        />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {filteredProperties?.map(property => (
            <PropertyCard
              key={property.id}
              onToggleLike={handleToggleLike}
              redirectTo={redirectTo}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowProperties
