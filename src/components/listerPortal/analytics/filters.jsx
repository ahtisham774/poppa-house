import { Input, Select } from 'antd'
import CardContainer from '../commission/cardContainer'

const Filters = ({ onClearFilters, onApplyFilters }) => {
  const time_periods = [
    { label: 'Last 7 Days', value: 'last_7_days' },
    { label: 'Last 30 Days', value: 'last_30_days' },
    { label: 'Last 90 Days', value: 'last_90_days' },
    { label: 'This Month', value: 'this_month' },
    { label: 'Last Month', value: 'last_month' },
    { label: 'This Year', value: 'this_year' },
    { label: 'Last Year', value: 'last_year' }
  ]
  const property_types = [
    {
      label: 'All Types',
      value: 'all_types'
    },
    { 'For Sale': 'for_sale' },
    { 'For Rent': 'for_rent' },
    { Commercial: 'commercial' },
    { Land: 'land' },
    { Industrial: 'industrial' },
    { Residential: 'residential' }
  ]

  const listing_statuses = [
    { label: 'All Statuses', value: 'all_statuses' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' },
    { label: 'Sold', value: 'sold' }
  ]

  const listing_types = [
    { label: 'All Types', value: 'all_types' },
    { label: 'For Sale', value: 'for_sale' },
    { label: 'For Rent', value: 'for_rent' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Land', value: 'land' },
    { label: 'Industrial', value: 'industrial' },
    { label: 'Residential', value: 'residential' }
  ]
  return (
    <CardContainer >
      {/* Filters */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-sm font-medium text-primary'>Time Period</h3>
          <Select
            options={time_periods}
            defaultValue='last_30_days'
            className='w-full'
            style={{ width: '100%' }}
            dropdownStyle={{ zIndex: 1000 }}
            onChange={value => console.log('Selected Time Period:', value)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-sm font-medium text-primary'>Property Type</h3>
          <Select
            options={property_types}
            defaultValue='all_types'
            className='w-full'
            style={{ width: '100%' }}
            dropdownStyle={{ zIndex: 1000 }}
            onChange={value => console.log('Selected Property Type:', value)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-sm font-medium text-primary'>Listing Status</h3>
          <Select
            options={listing_statuses}
            defaultValue='all_statuses'
            className='w-full'
            style={{ width: '100%' }}
            dropdownStyle={{ zIndex: 1000 }}
            onChange={value => console.log('Selected Listing Status:', value)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-sm font-medium text-primary'>Location</h3>
          <Input
            placeholder='Enter location'
            className='w-full'
            onChange={e => console.log('Location:', e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-sm font-medium text-primary'>Listing Type</h3>
          <Select
            options={listing_types}
            defaultValue='all_types'
            className='w-full'
            style={{ width: '100%' }}
            dropdownStyle={{ zIndex: 1000 }}
            onChange={value => console.log('Selected Listing Type:', value)}
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className='flex justify-between mt-4'>
        <button
          onClick={onClearFilters}
          className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 flex items-center focus:outline-none hover:bg-gray-50'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 mr-1'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
          Clear Filter
        </button>
        <button
          onClick={onApplyFilters}
          className='px-4 py-2 bg-accent rounded-md text-gray-900 font-medium focus:outline-none hover:bg-yellow-300'
        >
          Apply Filter
        </button>
      </div>
    </CardContainer>
  )
}

export default Filters
