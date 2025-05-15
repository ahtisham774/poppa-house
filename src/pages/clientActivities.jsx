import { useEffect, useState } from 'react'
import { Progress } from 'antd'
import { StarFilled, StarOutlined } from '@ant-design/icons'
import Tabs from '../components/common/tabs'
import StatusBadge from '../components/clientPortal/activities/statusBadge'
import FilterBar from '../components/staffPanel/jobs/filterBar'
import {
  Address,
  Assignee,
  EmergencyStatus,
  ProgressHelper,
  ServiceDate
} from '../components/clientPortal/activities/showPropertiesList'
import { useNavigate } from 'react-router-dom'

export const DetailButton = ({ text, onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 px-4 bg-white flex justify-center items-center br font-medium rounded-md text-sm text-gray-700 hover:bg-gray-50 ${className}`}
    >
      {text}
      {icon && <span className='ml-2'>{icon}</span>}
    </button>
  )
}

export const ongoingActivities = [
  {
    id: '#PV0001',
    title: 'Property Viewing',
    subtitle: 'Pro Property Viewing',
    status: 'Awaiting Assignment',
    location: 'Camden, London, United Kingdom',
    requestStatus: 'Request Submitted',
    assignee: null,
    progress: 99
  },
  {
    id: '#PV0002',
    title: 'Property Viewing',
    subtitle: 'Basic Property Viewing',
    status: 'Assigned',
    location: 'Camden, London, United Kingdom',
    requestStatus: 'Request Submitted',
    assignee: null,
    progress: 99
  },
  {
    id: '#PS0001',
    title: 'Property Search',
    subtitle: 'Property Search',
    status: 'In Progress',
    location: 'Camden, London, United Kingdom',
    requestStatus: 'Searching for Properties',
    assignee: 'Daniel Mensah',
    progress: 99
  },
  {
    id: '#PC0001',
    title: 'Cleaning Service',
    subtitle: 'One Off Service - Property Maintenance',
    status: 'Awaiting Assignment',
    isEmergency: true,
    requestStatus: 'Assessment & Quote in Progress',
    assignee: null,
    progress: 99
  },
  {
    id: '#PGL0001',
    title: 'Gardening & Lawn Maintenance',
    subtitle: 'One Off Service - Property Maintenance',
    status: 'Awaiting Assignment',
    isEmergency: true,
    requestStatus: 'Assessment & Quote in Progress',
    assignee: null,
    progress: 99
  },
  {
    id: '#PR0001',
    title: 'Repairs & Maintenance',
    subtitle: 'One Off Service - Property Maintenance',
    status: 'Awaiting Assignment',
    isEmergency: true,
    requestStatus: 'Assessment & Quote in Progress',
    assignee: null,
    progress: 99
  },
  {
    id: '#PC0001',
    title: 'Cleaning Service',
    type: 'subscription',
    subtitle: 'Monthly Subscription - Property Maintenance',
    status: 'Awaiting Assignment',
    nextServiceDate: 'Next Service Date: 01 June 2025',
    nextServiceDue: 'Next Service Due',
    assignee: null,
    progress: 99,
    buttons: ['View Plan', 'Cancel plan']
  },
  {
    id: '#PGL0001',
    title: 'Gardening & Lawn Maintenance',
    type: 'subscription',
    subtitle: 'Monthly Subscription - Property Maintenance',
    status: 'Awaiting Assignment',
    nextServiceDate: 'Next Service Date: 01 June 2025',
    nextServiceDue: 'Next Service Due',
    assignee: null,
    progress: 99,
    buttons: ['View Plan', 'Cancel plan']
  },
  {
    id: '#PR0001',
    title: 'Repairs & Maintenance',
    type: 'subscription',
    subtitle: 'Monthly Subscription - Property Maintenance',
    status: 'Awaiting Assignment',
    nextServiceDate: 'Next Service Date: 01 June 2025',
    nextServiceDue: 'Next Service Due',
    assignee: null,
    progress: 99,
    buttons: ['View Plan', 'Cancel plan']
  },
  {
    id: '#PBC0001',
    title: 'Bills Consolidation',
    type: 'bill_consolidation',
    subtitle: 'Essential Plan - Bills Consolidation',
    status: 'Awaiting Assignment',
    nextPaymentDate: 'Next Payment Date: 01 June 2025',
    bundleStatus: 'Bundle Active',
    assignee: 'SparkUtility Ltd',
    progress: 99,
    buttons: ['View Details', 'Message Support']
  },
  {
    id: '#PRI0001',
    title: 'Property & Rent Insurance',
    type: 'property_insurance',
    subtitle: 'Essential Plan - Property & Rent Insurance',
    status: 'Awaiting Assignment',
    nextPaymentDate: 'Next Payment Date: 01 June 2025',
    activeStatus: 'Active',
    assignee: 'Daniel Mensah',
    progress: 99,
    buttons: ['View Policy', 'Message Provider']
  },
  {
    id: '#PTS0001',
    title: 'Property Tour',
    type: 'property_tour',
    subtitle: 'Property Tour Scheduled',
    status: 'Awaiting Assignment',
    tourDate: '09 May 2025 – 2:00PM',
    viewingStatus: 'Viewing Date Accepted',
    assignee: 'Sarah Kamara',
    progress: 99,
    buttons: ['View Details', 'Update Time']
  }
]

export const RenderOngoingActivityCard = ({activity, i}) => {
  const navigate = useNavigate()
  const handleViewDetail = id => {
    navigate(`/client/activities/${id}`)
  }
  return (
    <div key={i} className='bg-white rounded-lg br p-5 mb-4'>
      <div className='flex flex-col w-full gap-2 mb-2'>
        <span className='text-sm text-[#888888] self-end'>{activity.id}</span>
        <div>
          <h3 className='text-xl font-medium text-gray-900'>
            {activity.title}
          </h3>
          <p className='text-sm text-[#888888]'>{activity.subtitle}</p>
        </div>
      </div>

      <StatusBadge status={activity.status} />

      <div className='space-y-2 mb-3 '>
        {activity.location && <Address text={activity.location} />}

        {activity.isEmergency ? <EmergencyStatus /> : null}

        {activity.requestStatus && (
          <ProgressHelper text={activity.requestStatus} />
        )}

        {activity.nextServiceDate && (
          <ServiceDate text={activity.nextServiceDate} />
        )}

        {activity.nextServiceDue && (
          <ProgressHelper text={activity.nextServiceDue} />
        )}

        {activity.nextPaymentDate && (
          <ServiceDate text={activity.nextPaymentDate} />
        )}

        {activity.bundleStatus && (
          <ProgressHelper text={activity.bundleStatus} />
        )}

        {activity.activeStatus && (
          <ProgressHelper text={activity.activeStatus} />
        )}

        {activity.tourDate && <ServiceDate text={activity.tourDate} />}

        {activity.viewingStatus && (
          <ProgressHelper text={activity.viewingStatus} />
        )}

        <Assignee text={activity.assignee} />
      </div>

      <div className='mb-4'>
        <div className='flex justify-between text-sm mb-1'>
          <span>Progress</span>
          <span>{activity.progress}%</span>
        </div>
        <Progress
          percent={activity.progress}
          showInfo={false}
          strokeColor='#00BFFF'
          trailColor='#e6e6e6'
          strokeWidth={8}
        />
      </div>

      <div className='flex space-x-2'>
        {activity.buttons ? (
          <>
            <DetailButton
              text={activity.buttons[0]}
              onClick={() => {
                handleViewDetail(i)
              }}
            />
            <DetailButton text={activity.buttons[1]} onClick={() => {}} />
          </>
        ) : activity?.title?.includes('Property Viewing') ||
          activity?.title?.includes('Property Search') ? (
          <>
            <DetailButton
              text={'View Details'}
              onClick={() => {
                handleViewDetail(i)
              }}
            />
            <DetailButton text={'Message Agent'} onClick={() => {}} />
          </>
        ) : activity?.title?.includes('Cleaning') ||
          activity?.title?.includes('Gardening') ||
          activity?.title?.includes('Repairs') ? (
          <>
            <DetailButton text={'View Quote'} onClick={() => {}} />
            <DetailButton text={'Message Staff'} onClick={() => {}} />
          </>
        ) : null}
      </div>
    </div>
  )
}
const ActivitiesPage = () => {
  const [activeTab, setActiveTab] = useState('ongoing')
  const [viewMode, setViewMode] = useState('grid')

  const [filteredActivities, setFilteredActivities] = useState([])
  const [filters, setFilters] = useState({
    search: '',
    clientName: '',
    location: '',
    jobNumber: '',
    date: ''
  })
  const tabs = [
    { name: 'ongoing', title: 'Ongoing Activities' },
    { name: 'history', title: 'History' }
  ]

  // Mock data for ongoing activities

  // Mock data for history activities
  const historyActivities = [
    {
      id: '#PV0001',
      title: 'Property Viewing',
      subtitle: 'Pro Property Viewing',
      status: 'Closed',
      location: 'Camden, London, United Kingdom',
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    },
    {
      id: '#PV0001',
      title: 'Property Viewing',
      subtitle: 'Basic Property Viewing',
      status: 'Closed',
      location: 'Camden, London, United Kingdom',
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    },
    {
      id: '#PS0001',
      title: 'Property Search',
      subtitle: 'Property Search',
      status: 'Closed',
      location: 'Camden, London, United Kingdom',
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    },
    {
      id: '#PC0001',
      title: 'Cleaning Service',
      subtitle: 'One Off Service - Property Maintenance',
      status: 'Closed',
      isEmergency: true,
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    },
    {
      id: '#PGL0001',
      title: 'Gardening & Lawn Maintenance',
      subtitle: 'One Off Service - Property Maintenance',
      status: 'Closed',
      isEmergency: true,
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    },
    {
      id: '#PR0001',
      title: 'Repairs & Maintenance',
      subtitle: 'One Off Service - Property Maintenance',
      status: 'Awaiting Assignment',
      isEmergency: true,
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: null,
      rating: 3.5
    },
    {
      id: '#PC0001',
      title: 'Cleaning Service',
      subtitle: 'Monthly Subscription - Property Maintenance',
      status: 'Closed',
      nextServiceDate: 'Next Service Date: 01 June 2025',
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5,
      hasCalendarIcon: true
    },
    {
      id: '#PGL0001',
      title: 'Gardening & Lawn Maintenance',
      subtitle: 'Monthly Subscription - Property Maintenance',
      status: 'Closed',
      nextServiceDate: 'Next Service Date: 01 June 2025',
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    },
    {
      id: '#PR0001',
      title: 'Repairs & Maintenance',
      subtitle: 'Monthly Subscription - Property Maintenance',
      status: 'Closed',
      nextServiceDate: 'Next Service Date: 01 June 2025',
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    },
    {
      id: '#PBC0001',
      title: 'Bills Consolidation',
      subtitle: 'Essential Plan - Bills Consolidation',
      status: 'Closed',
      nextPaymentDate: 'Next Payment Date: 01 June 2025',
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    },
    {
      id: '#PRI0001',
      title: 'Property & Rent Insurance',
      subtitle: 'Essential Plan - Property & Rent Insurance',
      status: 'Closed',
      nextPaymentDate: 'Next Payment Date: 01 June 2025',
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    },
    {
      id: '#PTS0001',
      title: 'Property Tour',
      subtitle: 'Property Tour Scheduled',
      status: 'Closed',
      tourDate: '09 May 2025 – 2:00PM',
      completionDate: 'Service Completion: Oct 18, 2025',
      assignee: 'John dave',
      rating: 3.5
    }
  ]

  useEffect(() => {
    const jobs = activeTab === 'ongoing' ? ongoingActivities : historyActivities
    let results = [...jobs]
    console.log('Filters changed:', filters, activeTab, results)

    // Apply search filter across all fields
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      results = results.filter(
        job =>
          job?.title?.toLowerCase().includes(searchTerm) ||
          job?.client?.toLowerCase().includes(searchTerm) ||
          job?.address?.toLowerCase().includes(searchTerm) ||
          job?.id?.toLowerCase().includes(searchTerm)
      )
    }

    // Apply specific filters
    if (filters.clientName) {
      results = results.filter(job =>
        job?.title?.toLowerCase().includes(filters?.clientName?.toLowerCase())
      )
    }

    if (filters.location) {
      results = results.filter(job =>
        job?.address?.toLowerCase().includes(filters?.location?.toLowerCase())
      )
    }

    if (filters.jobNumber) {
      results = results?.filter(job => job?.id?.includes(filters?.jobNumber))
    }

    // Date filter would need a proper date comparison
    if (filters.date) {
      // This is a simplified version - you would need proper date formatting and comparison
      // For now, we'll just filter by the date string
      results = results.filter(job =>
        job?.progress_timeline?.some(
          timeline => timeline.date && timeline.date.includes(filters.date)
        )
      )
    }

    setFilteredActivities(results)
  }, [filters, activeTab])

  // Render star rating
  const renderStarRating = rating => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarFilled key={i} className='text-yellow-400' />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarFilled key={i} className='text-yellow-400' />)
      } else {
        stars.push(<StarOutlined key={i} className='text-yellow-400' />)
      }
    }

    return (
      <div className='flex items-center'>
        {stars}
        <span className='ml-1 text-gray-700'>{rating}</span>
      </div>
    )
  }

  const handleFilterChange = (name, value) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }
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
  // Render ongoing activity card

  // Render history activity card
  const renderHistoryActivityCard = (activity, i) => (
    <div key={i} className='bg-white rounded-lg br p-5 mb-4'>
      <div className='flex flex-col w-full gap-2 mb-2'>
        <span className='text-sm text-[#888888] self-end'>{activity.id}</span>
        <div>
          <h3 className='text-xl font-medium text-gray-900'>
            {activity.title}
          </h3>
          <p className='text-sm text-[#888888]'>{activity.subtitle}</p>
        </div>
      </div>

      <StatusBadge status={activity.status} />

      <div className='space-y-2 mb-3'>
        {activity.location && <Address text={activity.location} />}

        {activity.isEmergency && <EmergencyStatus text={'Emergency Service'} />}

        {activity.completionDate && (
          <ServiceDate text={activity.completionDate} />
        )}

        {activity.nextServiceDate && (
          <ServiceDate text={activity.nextServiceDate} />
        )}

        {activity.nextPaymentDate && (
          <ServiceDate text={activity.nextPaymentDate} />
        )}

        {activity.tourDate && <ServiceDate text={activity.tourDate} />}

        <Assignee text={activity.assignee} />
      </div>

      <div className='mb-4'>{renderStarRating(activity.rating)}</div>

      <div className='flex items-center'>
        <DetailButton text={'View Details'} onClick={() => {}} />

        <span className='ml-2 flex items-center justify-center w-8 h-8'>
          <svg
            width='12'
            height='17'
            viewBox='0 0 12 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.34798 8.5L0.435583 14.935C-0.152837 15.4136 -0.143975 16.1824 0.455378 16.6522C1.05473 17.122 2.01761 17.115 2.60603 16.6364L11.5644 9.35069C12.1452 8.87836 12.1452 8.12164 11.5644 7.64931L2.60603 0.363594C2.01761 -0.114958 1.05473 -0.122034 0.455378 0.34779C-0.143975 0.817614 -0.152837 1.58642 0.435583 2.06497L8.34798 8.5Z'
              fill='#131E47'
            />
          </svg>
        </span>
      </div>
    </div>
  )

  return (
    <>
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
        onApplyFilters={applyFilters}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      {/* Tabs Section */}
      <Tabs tabs={tabs} activeTab={activeTab} handleTabChange={setActiveTab} />

      {/* Activities Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {activeTab === 'ongoing' ? (
          // Render ongoing activities
          <>
            {filteredActivities?.map((activity, i) =>
            ( <RenderOngoingActivityCard key={i} activity={activity} i={i} />)
            )}
          </>
        ) : (
          // Render history activities
          <>
            {filteredActivities?.map((activity, i) =>
              renderHistoryActivityCard(activity, i)
            )}
          </>
        )}
      </div>
    </>
  )
}

export default ActivitiesPage
