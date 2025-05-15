import { useState } from 'react'
import StatCard from '../components/staffPanel/dashboard/statCard'
import { useAuth } from '../context/useAuth'
import CurrentJobsPreview from '../components/clientPortal/dashboard/currentJobsPreview'
import NotificationsCard from '../components/staffPanel/dashboard/notificationsCard'
import NewMessages from '../components/staffPanel/dashboard/newMessages'
import LikedPropertiesSection from '../components/staffPanel/dashboard/likedProperties'
import CurrentActivities from '../components/staffPanel/dashboard/currentActivities'

const ClientDashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    weeklyEarnings: 450.0,
    currentJobs: 4,
    assignedJobs: 3,
    newMessages: 4
  })

  return (
    <div className='p-6 flex flex-col w-full  gap-6 '>
      <div className='flex flex-col '>
        <h1 className='text-2xl font-semibold text-gray-900'>Dashboard</h1>
        <p className='text-sm text-gray-500'>Welcome back, {user.name}</p>
      </div>

      <CurrentActivities />
      <LikedPropertiesSection />

      <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6'>
        <NewMessages />
        <NotificationsCard />
      </div>
    </div>
  )
}

export default ClientDashboard
