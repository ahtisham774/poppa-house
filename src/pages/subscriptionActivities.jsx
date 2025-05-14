import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ongoingActivities } from './clientActivities'
import JobInfo from '../components/clientPortal/activities/jobInfo'
import UploadedFiles from '../components/staffPanel/jobs/uploadedFiles'
import ClientInfo from '../components/clientPortal/activities/clientInfo'
import PropertyViewBanner from '../components/common/propertyViewBanner'
import Tabs from '../components/common/tabs'
import SubscriptionDetail from '../components/clientPortal/activities/subscriptionDetail'
import Management from '../components/clientPortal/activities/management'

const SubscriptionActivities = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('jobDetails')
  const job = ongoingActivities.find((_, i) => i == id)
  if (!job) {
    return <div className='text-center text-red-500'>Job not found</div>
  }

  const tabs = [
    {
      name: 'jobDetails',
      title: 'Job Details'
    },
    {
      title: 'Subscription Details',
      name: 'subscriptionDetails'
    },

    {
      title: 'Your Details',
      name: 'yourDetails'
    },
    {
      title: 'Management',
      name: 'management'
    }
  ]
  const files = [
    {
      name: 'Living Room Photos.zip',
      type: 'Image',
      size: '12.5 MB',
      uploaded: 'Oct 18, 2025'
    },
    {
      name: 'Kitchen Inspection.pdf',
      type: 'Document',
      size: '12.5 MB',
      uploaded: 'Oct 18, 2025'
    },
    {
      name: 'Bathroom Issues.jpg',
      type: 'Image',
      size: '12.5 MB',
      uploaded: 'Oct 18, 2025'
    },
    {
      name: 'Property Overview Video.mp4',
      type: 'Video',
      size: '12.5 MB',
      uploaded: 'Oct 18, 2025'
    }
  ]

  const contents = {
    jobDetails: (
      <>
        <JobInfo />{' '}
        <UploadedFiles files={files} allowEdit={false} showEdit={false} />
      </>
    ),
    subscriptionDetails: <SubscriptionDetail />,
    yourDetails: <ClientInfo />,
    management: <Management />
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

export default SubscriptionActivities
