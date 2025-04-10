const FilterBar = ({
  filters,
  onFilterChange,
  onClearFilters,
  onApplyFilters,
  viewMode,
  setViewMode
}) => {
  return (
    <div className='bg-white rounded-lg shadow p-4'>
      {/* Search Bar */}
      <div className='relative flex items-center mb-4'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 text-gray-400'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </div>
        <input
          type='text'
          className='pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Search by Location, Name, or Date...'
          value={filters.search}
          onChange={e => onFilterChange('search', e.target.value)}
        />
        <div className=' flex ml-3'>
          <button
            className={`mx-1 p-2 rounded flex items-center justify-center w-[50px] border ${
              viewMode === 'grid' ? 'bg-accent' : 'bg-white'
            }`}
            onClick={() => setViewMode('grid')}
            aria-label='Grid View'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.9992 2.39922H9.59922V8.39922H15.5992V2.99922C15.5992 2.84009 15.536 2.68748 15.4235 2.57495C15.311 2.46243 15.1583 2.39922 14.9992 2.39922ZM15.5992 9.59922H9.59922V15.5992H14.9992C15.1583 15.5992 15.311 15.536 15.4235 15.4235C15.536 15.311 15.5992 15.1583 15.5992 14.9992V9.59922ZM8.39922 8.39922V2.39922H2.99922C2.84009 2.39922 2.68748 2.46243 2.57495 2.57495C2.46243 2.68748 2.39922 2.84009 2.39922 2.99922V8.39922H8.39922ZM2.39922 9.59922V14.9992C2.39922 15.1583 2.46243 15.311 2.57495 15.4235C2.68748 15.536 2.84009 15.5992 2.99922 15.5992H8.39922V9.59922H2.39922ZM2.99922 1.19922C2.52183 1.19922 2.06399 1.38886 1.72643 1.72643C1.38886 2.06399 1.19922 2.52183 1.19922 2.99922V14.9992C1.19922 15.4766 1.38886 15.9344 1.72643 16.272C2.06399 16.6096 2.52183 16.7992 2.99922 16.7992H14.9992C15.4766 16.7992 15.9344 16.6096 16.272 16.272C16.6096 15.9344 16.7992 15.4766 16.7992 14.9992V2.99922C16.7992 2.52183 16.6096 2.06399 16.272 1.72643C15.9344 1.38886 15.4766 1.19922 14.9992 1.19922H2.99922Z'
                fill='black'
              />
            </svg>
          </button>
          <button
            className={`mx-1 p-2 rounded border  flex items-center justify-center w-[50px] ${
              viewMode === 'list' ? 'bg-accent' : 'bg-white'
            }`}
            onClick={() => setViewMode('list')}
            aria-label='List View'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 9C7.71667 9 7.47934 8.904 7.288 8.712C7.09667 8.52 7.00067 8.28267 7 8C6.99934 7.71733 7.09534 7.48 7.288 7.288C7.48067 7.096 7.718 7 8 7H20C20.2833 7 20.521 7.096 20.713 7.288C20.905 7.48 21.0007 7.71733 21 8C20.9993 8.28267 20.9033 8.52033 20.712 8.713C20.5207 8.90567 20.2833 9.00133 20 9H8ZM8 13C7.71667 13 7.47934 12.904 7.288 12.712C7.09667 12.52 7.00067 12.2827 7 12C6.99934 11.7173 7.09534 11.48 7.288 11.288C7.48067 11.096 7.718 11 8 11H20C20.2833 11 20.521 11.096 20.713 11.288C20.905 11.48 21.0007 11.7173 21 12C20.9993 12.2827 20.9033 12.5203 20.712 12.713C20.5207 12.9057 20.2833 13.0013 20 13H8ZM8 17C7.71667 17 7.47934 16.904 7.288 16.712C7.09667 16.52 7.00067 16.2827 7 16C6.99934 15.7173 7.09534 15.48 7.288 15.288C7.48067 15.096 7.718 15 8 15H20C20.2833 15 20.521 15.096 20.713 15.288C20.905 15.48 21.0007 15.7173 21 16C20.9993 16.2827 20.9033 16.5203 20.712 16.713C20.5207 16.9057 20.2833 17.0013 20 17H8ZM4 9C3.71667 9 3.47934 8.904 3.288 8.712C3.09667 8.52 3.00067 8.28267 3 8C2.99934 7.71733 3.09534 7.48 3.288 7.288C3.48067 7.096 3.718 7 4 7C4.282 7 4.51967 7.096 4.713 7.288C4.90634 7.48 5.002 7.71733 5 8C4.998 8.28267 4.902 8.52033 4.712 8.713C4.522 8.90567 4.28467 9.00133 4 9ZM4 13C3.71667 13 3.47934 12.904 3.288 12.712C3.09667 12.52 3.00067 12.2827 3 12C2.99934 11.7173 3.09534 11.48 3.288 11.288C3.48067 11.096 3.718 11 4 11C4.282 11 4.51967 11.096 4.713 11.288C4.90634 11.48 5.002 11.7173 5 12C4.998 12.2827 4.902 12.5203 4.712 12.713C4.522 12.9057 4.28467 13.0013 4 13ZM4 17C3.71667 17 3.47934 16.904 3.288 16.712C3.09667 16.52 3.00067 16.2827 3 16C2.99934 15.7173 3.09534 15.48 3.288 15.288C3.48067 15.096 3.718 15 4 15C4.282 15 4.51967 15.096 4.713 15.288C4.90634 15.48 5.002 15.7173 5 16C4.998 16.2827 4.902 16.5203 4.712 16.713C4.522 16.9057 4.28467 17.0013 4 17Z'
                fill='black'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
              />
            </svg>
          </div>
          <input
            type='text'
            className='pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Filter by client name'
            value={filters.clientName}
            onChange={e => onFilterChange('clientName', e.target.value)}
          />
        </div>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
              />
            </svg>
          </div>
          <input
            type='text'
            className='pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Filter by location'
            value={filters.location}
            onChange={e => onFilterChange('location', e.target.value)}
          />
        </div>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
              />
            </svg>
          </div>
          <input
            type='text'
            className='pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Filter by job number'
            value={filters.jobNumber}
            onChange={e => onFilterChange('jobNumber', e.target.value)}
          />
        </div>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9.75v7.5'
              />
            </svg>
          </div>
          <input
            type='text'
            className='pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='mm/dd/yyyy'
            value={filters.date}
            onChange={e => onFilterChange('date', e.target.value)}
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
          className='px-4 py-2 bg-accent rounded-md text-gray-900 font-medium focus:outline-none hover:bg-yellow-500'
        >
          Apply Filter
        </button>
      </div>
    </div>
  )
}

export default FilterBar
