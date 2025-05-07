import { useState } from 'react'
import Sidebar from '../components/staffPanel/dashboard/sidebar'
import Dashboard from '../components/staffPanel/dashboard/dashboard'
import Header from '../components/staffPanel/dashboard/header'

const StaffDashboard = () => {
 

  const [stats, setStats] = useState({
    weeklyEarnings: 450.0,
    currentJobs: 4,
    assignedJobs: 3,
    newMessages: 4
  })

  return (
  
        <Dashboard  stats={stats} />
     
  )
}

export default StaffDashboard
