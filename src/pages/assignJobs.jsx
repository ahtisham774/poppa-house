import { useState, useEffect } from 'react'
import { jobs } from '../data/jobs'
import Pagination from '../components/common/pagination'
import FilterBar from '../components/staffPanel/jobs/filterBar'
import JobCard from '../components/staffPanel/jobs/jobCard'
import JobRow from '../components/staffPanel/jobs/jobRow'
import TopTitle from '../components/topTitle'
import { useNavigate } from 'react-router-dom'

const AssignJobs = ({ onJobSelect }) => {
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [filteredJobs, setFilteredJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    search: '',
    clientName: '',
    location: '',
    jobNumber: '',
    date: ''
  })

  const jobsPerPage = 6

  // Apply filters
  useEffect(() => {
    let results = [...jobs]

    // Apply search filter across all fields
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      results = results.filter(
        job =>
          job.title.toLowerCase().includes(searchTerm) ||
          job.client.toLowerCase().includes(searchTerm) ||
          job.address.toLowerCase().includes(searchTerm) ||
          job.id.toLowerCase().includes(searchTerm)
      )
    }

    // Apply specific filters
    if (filters.clientName) {
      results = results.filter(job =>
        job.client.toLowerCase().includes(filters.clientName.toLowerCase())
      )
    }

    if (filters.location) {
      results = results.filter(job =>
        job.address.toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    if (filters.jobNumber) {
      results = results.filter(job => job.id.includes(filters.jobNumber))
    }

    // Date filter would need a proper date comparison
    if (filters.date) {
      // This is a simplified version - you would need proper date formatting and comparison
      // For now, we'll just filter by the date string
      results = results.filter(job =>
        job.progress_timeline.some(
          timeline => timeline.date && timeline.date.includes(filters.date)
        )
      )
    }

    setFilteredJobs(results)
    setCurrentPage(1) // Reset to first page when filters change
  }, [filters])

  // Get current jobs for pagination
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  // Handle filter change
  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      search: '',
      clientName: '',
      location: '',
      jobNumber: '',
      date: ''
    })
  }

  // Apply all filters
  const applyFilters = () => {
    // We're already applying filters in the useEffect
    // This is a placeholder for any additional logic if needed
    console.log('Filters applied')
  }

  // Handle job click
  const handleGo = id => {
    navigate(`/staff/jobs/assign/${id}`)
    onJobSelect(id) // Call the parent function to handle job selection
  }

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <TopTitle title='Assign Jobs' />
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
        onApplyFilters={applyFilters}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <div className='mt-6'>
        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {currentJobs.map(job => (
              <JobCard
                key={job.id}
                job={job}
                isAssigned={true}
                onClick={() => handleGo(job.id)}
              />
            ))}
          </div>
        ) : (
          <div className='flex flex-col space-y-4'>
            {currentJobs.map(job => (
              <JobRow key={job.id} job={job} isAssigned={true} onClick={() => handleGo(job.id)} />
            ))}
          </div>
        )}
      </div>

      <div className='mt-8 w-full flex items-center justify-center'>
        <Pagination
          currentPage={currentPage}
          totalPages={
            Math.ceil(filteredJobs.length / jobsPerPage)
          }
          onPageChange={paginate}
        />
      </div>
    </div>
  )
}

export default AssignJobs
