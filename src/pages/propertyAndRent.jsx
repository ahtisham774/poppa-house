import { useState } from 'react'
import PropertyViewBanner from '../components/common/propertyViewBanner'
import Tabs from '../components/common/tabs'
import { ongoingActivities } from './clientActivities'
import { useParams } from 'react-router-dom'
import RentPropertyDetail from '../components/clientPortal/activities/rentPropertyDetail'
import PolicyDetail from '../components/clientPortal/activities/policyDetail'
import RentPropertyClientInfo from '../components/clientPortal/activities/rentPropertyClientInfo'
import PolicyManagement from '../components/clientPortal/activities/policyManagement'

const PropertyAndRent = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('billingDetails')
  const job = ongoingActivities.find((_, i) => i == id)
  if (!job) {
    return <div className='text-center text-red-500'>Job not found</div>
  }

  const tabs = [
    {
      name: 'billingDetails',
      title: 'Billing Details'
    },
    {
      title: 'Policy Details',
      name: 'policyDetails'
    },
    {
      title: 'Your Details',
      name: 'yourDetails'
    },
    {
      title: 'Policy Management',
      name: 'policyManagement'
    }
  ]
  const contents = {
    billingDetails: <RentPropertyDetail/>,
    policyDetails: <PolicyDetail/>,
    yourDetails: <RentPropertyClientInfo/>,
    policyManagement: <PolicyManagement/>
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

export default PropertyAndRent
