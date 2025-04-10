import { useState } from 'react'
import Sidebar from '../components/staffPanel/dashboard/sidebar'
import Dashboard from '../components/staffPanel/dashboard/dashboard'
import Header from '../components/staffPanel/dashboard/header'

const StaffDashboard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  })

  const [stats, setStats] = useState({
    weeklyEarnings: 450.0,
    currentJobs: 4,
    assignedJobs: 3,
    newMessages: 4
  })

  return (
  
        <Dashboard user={user} stats={stats} />
     
  )
}

export default StaffDashboard
