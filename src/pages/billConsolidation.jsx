import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ongoingActivities } from './clientActivities'
import PropertyViewBanner from '../components/common/propertyViewBanner'
import Tabs from '../components/common/tabs'
import BillingDetail from '../components/clientPortal/activities/billingDetail'
import BundleDetail from '../components/clientPortal/activities/bundleDetail'
import YourBundleDetail from './yourBundleDetail'
import BundleSwitching from '../components/clientPortal/activities/bundleSwitching'

const BillConsolidation = () => {
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
      title: 'Bundle Details',
      name: 'bundleDetails'
    },
    {
      title: 'Your Details',
      name: 'yourDetails'
    },
    {
      title: 'Bundle Switching',
      name: 'bundleSwitching'
    }
  ]
  const contents = {
    billingDetails: <BillingDetail />,
    bundleDetails: <BundleDetail />,
    yourDetails: <YourBundleDetail />,
    bundleSwitching: <BundleSwitching />
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

export default BillConsolidation
