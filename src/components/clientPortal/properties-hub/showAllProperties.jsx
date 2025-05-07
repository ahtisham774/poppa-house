import { useState } from 'react'
import Tabs from '../../common/tabs'
import PropertyCard from '../../common/propertyCard'
import Pagination from '../../common/pagination'
import MapUrl from '../../common/mapUrl'

const ShowAllProperties = ({ title, description, properties, filters }) => {
  const [viewMode, setViewMode] = useState('list')
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState('all')
  const itemsPerPage = 6
  const totalPages = Math.ceil(properties.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProperties = properties?.slice(startIndex, endIndex)
  const filteredProperties = currentProperties?.slice(0, 6)?.filter(property => {
    if (activeFilter === 'all') return true
    return property.type === activeFilter || (activeFilter === 'featured' && property.featured)
  })

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='flex flex-col gap-6 flex-1'>
          {title && (
            <div className=' mb-4'>
              <div className='flex w-full items-center justify-between mb-4 flex-wrap'>
                <div>
                  <h2 className='text-2xl font-medium mb-4'>{title}</h2>
                  <p className='text-muted-foreground text-base'>
                    {description}
                  </p>
                </div>
                <div className='flex rounded-full px-6 py-2 overflow-hidden border shadow-sm'>
                  <button
                    className={`px-6 py-1 rounded-lg font-medium ${
                      viewMode === 'list'
                        ? 'bg-accent text-blue-900'
                        : 'bg-white text-gray-700'
                    }`}
                    onClick={() => setViewMode('list')}
                  >
                    List
                  </button>
                  <div className='border-l h-8 mx-2'></div>
                  <button
                    className={`px-6 py-1 rounded-l font-medium ${
                      viewMode === 'map'
                        ? 'bg-accent text-blue-900'
                        : 'bg-white text-gray-700'
                    }`}
                    onClick={() => setViewMode('map')}
                  >
                    Map
                  </button>
                </div>
              </div>
            </div>
          )}

          <Tabs
            tabs={filters}
            activeTab={activeFilter}
            handleTabChange={setActiveFilter}
          />

          <div
            className={`grid gap-6 transition-all ${
              viewMode === 'map'
                ? 'grid-cols-1 md:grid-cols-2' // 2 columns in map view
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' // 3 columns in list view
            }`}
          >
            {filteredProperties?.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Pagination */}
          <div className='mt-12 flex justify-center'>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        {viewMode === 'map' && (
          <div className='flex-1 transition-all h-[600px] bg-gray-200 rounded-lg overflow-hidden sticky top-24 self-start'>
            <MapUrl />
          </div>
        )}
      </div>
    </div>
  )
}

export default ShowAllProperties
