import React from 'react'

const JobDetailsTabs = ({ filters,activeTab, onTabChange }) => {
  

  return (
    <div className='bg-white w-full rounded-lg br flex mb-6 p-3 justify-center'>
      {filters.map(filter => (
        <button
          key={filter.name}
          onClick={() => {
            onTabChange(filter.name)
          }}
          className={`flex items-center justify-center  flex-1 py-2 rounded-sm px-6 text-sm font-medium transition-colors duration-200 ${
            activeTab === filter.name
              ? 'bg-accent text-gray-900'
              : 'bg-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          {filter.label}
        </button>
      ))}
    
    </div>
  )
}

export default JobDetailsTabs
