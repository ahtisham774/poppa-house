import { useParams } from 'react-router-dom'
import PropertyViewBanner from '../components/common/propertyViewBanner'
import { ongoingActivities } from './clientActivities'
import { useState } from 'react'
import Tabs from '../components/common/tabs'
import JobInfo from '../components/clientPortal/activities/jobInfo'
import ClientInfo from '../components/clientPortal/activities/clientInfo'
import UploadedFiles from '../components/staffPanel/jobs/uploadedFiles'
import AgentInfo from '../components/clientPortal/activities/agentInfo'
import ProgressSection from '../components/clientPortal/activities/progress'
import JobCompletion from '../components/clientPortal/activities/jobCompletion'
import Quote from '../components/clientPortal/activities/quote'
import SubscriptionActivities from './subscriptionActivities'
import PropertyTour from './propertyTour'
import BillConsolidation from './billConsolidation'
import PropertyAndRent from './propertyAndRent'

const ViewClientActivity = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('jobDetails')
  const job = ongoingActivities.find((_, i) => i == id)
  if (!job) {
    return <div className='text-center text-red-500'>Job not found</div>
  }
  if (job.type === 'subscription') {
    return <SubscriptionActivities />
  }

  if (job.type === 'property_tour') {
    return <PropertyTour />
  }
  if (job.type === 'bill_consolidation') {
    return <BillConsolidation />
  }
  if (job.type === 'property_insurance') {
    return <PropertyAndRent />
  }

  const tabs = [
    {
      name: 'jobDetails',
      title: 'Job Details'
    },
    {
      title: 'Your Details',
      name: 'yourDetails'
    },
    {
      title: 'Agent Details',
      name: 'agentDetails'
    },
    {
      title: 'Job Progress',
      name: 'jobProgress'
    },
    {
      title: 'Quote',
      name: 'quote'
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
        <JobCompletion /> <JobInfo />{' '}
        <UploadedFiles files={files} allowEdit={false} />
      </>
    ),
    yourDetails: <ClientInfo />,
    agentDetails: <AgentInfo />,
    jobProgress: <ProgressSection />,
    quote: <Quote />
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

export default ViewClientActivity
