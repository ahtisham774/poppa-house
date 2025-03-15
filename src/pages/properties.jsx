import { useState } from 'react'
import MapUrl from '../components/common/mapUrl'
import Pagination from '../components/common/pagination'
import PropertyCard from '../components/common/propertyCard'
import { properties } from '../data'
import { Button, Select } from 'antd'
import { FilterModal } from '../components/landingPage/filter-modal'
import Filter from '../components/svg/filter'

const Properties = () => {
  const [viewMode, setViewMode] = useState('list')
  const [currentPage, setCurrentPage] = useState(1)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const itemsPerPage = 6
  const totalPages = Math.ceil(properties.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProperties = properties.slice(startIndex, endIndex)

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Search Bar */}
      <div className='sticky top-0 bg-white border-b z-10'>
        <div className='container mx-auto py-3 px-4'>
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
            <div className='flex-1 w-full md:w-auto'>
              <div className='relative flex items-center max-w-2xl p-2 pr-4 bg-white rounded-full border shadow-sm'>
                <input
                  type='text'
                  placeholder='Search by Location, Price, or Property Type...'
                  className='max-w-sm w-full py-2 px-4 rounded-l-md outline-none'
                />
                <div className='border-l h-8 mx-1'></div>
                <div className='relative px-3'>
                  <Select
                    defaultValue='For Both'
                    className='!border-none !outline-none'
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
                  >
                    <Select.Option value='For Both'>For Both</Select.Option>
                    <Select.Option value='For Sale'>For Sale</Select.Option>
                    <Select.Option value='For Rent'>For Rent</Select.Option>
                  </Select>
                </div>
                <div className='border-l h-8 mx-1'></div>
                <Button
                  onClick={() => setIsFilterOpen(true)}
                  icon={<Filter />}
                  size='large'
                  className='text-foreground py-1 mx-2 font-medium'
                >
                  Filter
                </Button>
                {isFilterOpen && (
                  <FilterModal onClose={() => setIsFilterOpen(false)} />
                )}
                <button className='bg-accent text-blue-900 font-medium px-6 py-1.5 rounded-lg border border-[#E7C873]'>
                  Search
                </button>
              </div>
            </div>

            {/* View Toggle */}
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
      </div>

      {/* Content */}
      <div className='container mx-auto py-8 px-4'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex flex-col gap-6 flex-1'>
            <div
              className={`grid gap-6 transition-all ${
                viewMode === 'map'
                  ? 'grid-cols-1 md:grid-cols-2' // 2 columns in map view
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' // 3 columns in list view
              }`}
            >
              {currentProperties.map(property => (
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
    </div>
  )
}

export default Properties
