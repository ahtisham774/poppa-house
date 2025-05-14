import { useParams } from 'react-router-dom'
import PropertyViewBanner from '../components/common/propertyViewBanner'
import { useState } from 'react'
import { ongoingActivities } from './clientActivities'

import ClientInfo from '../components/clientPortal/activities/clientInfo'
import AgentInfo from '../components/clientPortal/activities/agentInfo'
import Tabs from '../components/common/tabs'
import ScheduleInfo from '../components/clientPortal/activities/scheduleInfo'
import PropertyDetail from '../components/clientPortal/activities/propertyDetail'

const PropertyTour = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('propertyDetails')
  const job = ongoingActivities.find((_, i) => i == id)
  if (!job) {
    return <div className='text-center text-red-500'>Job not found</div>
  }

  const tabs = [
    {
      name: 'propertyDetails',
      title: 'Property details'
    },
    {
      title: 'Your Details',
      name: 'yourDetails'
    },
    {
      title: 'Lister Details',
      name: 'listerDetails'
    },
    {
      title: 'Update Date & Time',
      name: 'updateDateTime'
    }
  ]
  const contents = {
    propertyDetails: <PropertyDetail />,
    yourDetails: <ClientInfo />,
    listerDetails: <AgentInfo showInsights={true} />,
    updateDateTime: <ScheduleInfo />
  }
  return (
    <div className='flex flex-col gap-5'>
      <PropertyViewBanner job={job} />
      <Tabs tabs={tabs} activeTab={activeTab} handleTabChange={setActiveTab} />
      {contents[activeTab] ? (
        contents[activeTab]
      ) : (
        <div className='text-center text-red-500'>Content not found</div>
      )}
    </div>
  )
}

export default PropertyTour
