import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { trainingMaterials } from '../data/trainingData'
import { BiChevronLeft, BiChevronRight, BiSync } from 'react-icons/bi'
import TopTitle from '../components/topTitle'
import { CgArrowLongLeft } from 'react-icons/cg'

// Constants
const ITEMS_PER_PAGE = 6

const TrainingMaterialsPage = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredMaterials, setFilteredMaterials] = useState([])
  const [totalPages, setTotalPages] = useState(1)

  // Apply filters and pagination
  useEffect(() => {
    let materials = [...trainingMaterials]
    
    // Apply search filter
    if (searchQuery) {
      materials = materials.filter(material =>
        material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        material.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Apply status filter
    switch (activeFilter) {
      case 'inProgress':
        materials = materials.filter(material => 
          material.progress > 0 && material.progress < 100
        )
        break
      case 'completed':
        materials = materials.filter(material => material.completed)
        break
      default:
        // 'all' - no filter needed
        break
    }

    // Calculate pagination
    const totalItems = materials.length
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
    setTotalPages(totalPages)

    // Ensure current page is valid
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages)
    }

    // Apply pagination
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedMaterials = materials.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    setFilteredMaterials(paginatedMaterials)
  }, [activeFilter, searchQuery, currentPage])

  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1) // Reset to first page when searching
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const renderPagination = () => {
    if (totalPages <= 1) return null

    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center border mr-1 ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
        }`}
      >
        <BiChevronLeft size={18} />
      </button>
    )

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-10 h-10 flex items-center justify-center border mr-1 ${
            currentPage === i
              ? 'bg-gray-900 text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {i}
        </button>
      )
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center border ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
        }`}
      >
        <BiChevronRight size={18} />
      </button>
    )

    return pages
  }

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <TopTitle title='Proppa House Info Centre' subTitle='PH Info Centre' />

      <div className='bg-[#EFF6FF] border border-[#D3E6FF] p-5 py-8 rounded-lg mb-6'>
        <div className='flex items-center mb-2'>
          <button
            className='flex items-center font-medium mr-4 gap-2 border-2 border-[#b1b1b19a] rounded-lg px-3 py-1'
            onClick={() => navigate('/staff/info')}
          >
            <CgArrowLongLeft size={20} />
            <span>Back</span>
          </button>

          <div className='border-l-2 border-[#b1b1b19a] pl-4 flex-1'>
            <h2 className='text-xl font-bold'>Training Materials</h2>
            <p className='text-gray-600'>
              Browse and complete training modules to enhance your skills
            </p>
          </div>

          <div className='flex items-center gap-1'>
            <svg
              width='33'
              height='33'
              viewBox='0 0 33 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='16.5' cy='16.5' r='16.5' fill='#DEE9FF' />
              <path
                d='M17.9203 6.85938V8.71104C21.9445 9.20604 24.7953 12.8635 24.3003 16.8877C23.8786 20.2244 21.257 22.8735 17.9203 23.2677V25.101C22.962 24.5969 26.6286 20.1235 26.1245 15.0819C25.712 10.7277 22.2561 7.29021 17.9203 6.85938ZM16.087 6.88687C14.2995 7.06104 12.5945 7.74854 11.2011 8.90354L12.512 10.2602C13.5386 9.43521 14.7761 8.90354 16.087 8.72021V6.88687ZM9.90865 10.196C8.76322 11.5874 8.05798 13.2882 7.88281 15.0819H9.71615C9.89031 13.7802 10.4036 12.5427 11.2195 11.5069L9.90865 10.196ZM20.212 12.7902L15.7386 17.2635L13.7953 15.3202L12.8236 16.2919L15.7386 19.2069L21.1836 13.7619L20.212 12.7902ZM7.89198 16.9152C8.07531 18.7119 8.78115 20.4077 9.91781 21.801L11.2195 20.4902C10.4099 19.4541 9.89385 18.2193 9.72531 16.9152H7.89198ZM12.512 21.8377L11.2011 23.0935C12.5899 24.2507 14.2897 24.9715 16.087 25.1652V23.3319C14.7829 23.1633 13.5481 22.6473 12.512 21.8377Z'
                fill='black'
              />
            </svg>

            <div className='ml-2'>
              <div className='font-medium'>Your progress</div>
              <div>
                <span className='text-2xl font-bold'>
                  {trainingMaterials.filter(m => m.completed).length}/{trainingMaterials.length}
                </span>
                <span className='text-[#888888] ml-1 text-sm'>completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className='br rounded-lg p-5 mb-6'>
        <div className='flex'>
          <div className='relative flex-1'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <svg
                className='h-5 w-5 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
            <input
              type='text'
              className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg'
              placeholder='Search training materials...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <button 
            type='submit'
            className='ml-2 px-6 py-2 bg-accent text-black font-medium rounded-lg hover:bg-accent-dark'
          >
            Search
          </button>
        </div>
      </form>

      {/* Filters */}
      <div className='bg-white rounded-lg br flex mb-6 p-3'>
        {['all', 'inProgress', 'completed'].map(filter => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter)
              setCurrentPage(1)
            }}
            className={`flex items-center justify-center flex-1 py-2 rounded-sm px-6 text-sm font-medium transition-colors duration-200 ${
              activeFilter === filter
                ? 'bg-accent text-gray-900'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {filter === 'all' && 'All'}
            {filter === 'inProgress' && 'In Progress'}
            {filter === 'completed' && 'Completed'}
          </button>
        ))}
      </div>

      {/* Training Materials Grid */}
      {filteredMaterials.length > 0 ? (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            {filteredMaterials.map(material => (
              <div key={material.id} className='border rounded-lg p-5 hover:shadow-md transition-shadow'>
                <div className='flex justify-between items-start mb-1'>
                  <div className='badge border-2 text-[#2F2F2F] text-xs font-medium px-3 py-1'>
                    {material.level}
                  </div>

                  {material.completed ? (
                    <div className='badge badge-completed !py-1 border border-[#f1e3e3] flex items-center'>
                      <Check size={12} className='mr-1' />
                      <span>Completed</span>
                    </div>
                  ) : material.progress > 0 ? (
                    <div className='badge badge-progress'>
                      {material.progress}%
                    </div>
                  ) : null}
                </div>

                <h3 className='text-lg font-bold mb-1'>{material.title}</h3>
                <p className='text-gray-600 text-sm mb-4'>{material.description}</p>

                <div className='mb-3'>
                  <div className='flex items-center justify-between gap-2 flex-wrap mb-2'>
                    <div className='text-xs text-[#656464] mb-1'>
                      Current progress: {material.progress}%
                    </div>
                    <div className='flex justify-end'>
                      <button
                        className='flex items-center text-[#2B4BB4] text-xs hover:text-[#1a3a9d]'
                        onClick={() => navigate(`/staff/training/${material.id}`)}
                      >
                        <span>
                          {material.completed
                            ? ' Review'
                            : material.progress > 0
                            ? ' Continue'
                            : 'Start'}
                        </span>
                        <BiChevronRight size={18} className='mt-0.5' />
                      </button>
                    </div>
                  </div>
                  <div className='progress-bar !h-1.5'>
                    <div
                      className='progress-bar-fill transition-all'
                      style={{ width: `${material.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className='flex justify-center'>
            {renderPagination()}
          </div>
        </>
      ) : (
        <div className='text-center py-10'>
          <p className='text-gray-500'>No training materials found matching your criteria</p>
          <button 
            onClick={() => {
              setSearchQuery('')
              setActiveFilter('all')
              setCurrentPage(1)
            }}
            className='mt-4 px-4 py-2 bg-accent text-black rounded-lg hover:bg-accent-dark'
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  )
}

// Check icon component
const Check = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox='0 0 11 11'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_2080_7939)'>
      <path
        d='M2.93385 5.50052L5.13385 7.33385L8.06719 3.66719M5.50052 10.6339C4.8264 10.6339 4.15888 10.5011 3.53608 10.2431C2.91327 9.98513 2.34738 9.60701 1.87071 9.13033C1.39403 8.65366 1.01591 8.08777 0.757939 7.46496C0.499965 6.84216 0.367188 6.17464 0.367188 5.50052C0.367188 4.8264 0.499965 4.15888 0.757939 3.53608C1.01591 2.91327 1.39403 2.34738 1.87071 1.87071C2.34738 1.39403 2.91327 1.01591 3.53608 0.757939C4.15888 0.499965 4.8264 0.367187 5.50052 0.367188C6.86197 0.367188 8.16765 0.908019 9.13033 1.87071C10.093 2.83339 10.6339 4.13908 10.6339 5.50052C10.6339 6.86197 10.093 8.16765 9.13033 9.13033C8.16765 10.093 6.86197 10.6339 5.50052 10.6339Z'
        stroke='#04910C'
      />
    </g>
    <defs>
      <clipPath id='clip0_2080_7939'>
        <rect width='11' height='11' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

export default TrainingMaterialsPage