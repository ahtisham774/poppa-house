import { useState } from 'react'
import StatCard from '../components/staffPanel/dashboard/statCard'
import { useAuth } from '../context/useAuth'
import CurrentJobsPreview from '../components/clientPortal/dashboard/currentJobsPreview'
import NotificationsCard from '../components/staffPanel/dashboard/notificationsCard'

const ClientDashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    weeklyEarnings: 450.0,
    currentJobs: 4,
    assignedJobs: 3,
    newMessages: 4
  })

  return (
    <div className='p-6'>
      <div className='flex flex-col mb-5'>
        <h1 className='text-2xl font-semibold text-gray-900'>Dashboard</h1>
        <p className='text-sm text-gray-500'>Welcome back, {user.name}</p>
      </div>
      {/* Stat Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4'>
        <StatCard
          title='Weekly Earnings'
          value={`£ ${stats.weeklyEarnings.toFixed(2)}`}
          icon='money'
        />
        <StatCard title='Current jobs' value={stats.currentJobs} icon='list' />
        <StatCard
          title='Assigned Jobs'
          value={stats.assignedJobs}
          icon='clipboard'
        />
        <StatCard
          title='New Messages'
          value={stats.newMessages}
          icon='message'
        />
      </div>

      {/* Job History and Notifications */}
      <div className='grid grid-cols-1 lg:grid-cols-2 h-48 gap-6'>
        <CurrentJobsPreview />
        <NotificationsCard />
      </div>
    </div>
  )
}

export default ClientDashboard
