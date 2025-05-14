import ProgressLog from '../../staffPanel/jobs/progressLog'
import ScheduleDateTime from '../../staffPanel/jobs/scheduleDateTime'
import CardLayout from './cardLayout'
import MarkAsCompleted from './markAsCompleted'

const ProgressSection = () => {
  const timeline = [
    { task: 'Agent Assigned', completed: true, date: 'Mar 22, 2025 10:30 AM' },
    { task: 'Contacted property owner/agent', completed: false },
    { task: 'Schedule A Property viewing date', completed: false },
    { task: 'Visiting the Property', completed: false },
    { task: 'Property Viewing done', completed: false },
    { task: 'Files uploaded/sent', completed: false },
    { task: 'Request Job Marked Complete', completed: false },
    { task: 'Request Close', completed: false }
  ]
  return (
    <>
      <CardLayout title='Job Progress Timeline'>
        <ProgressLog timeline={timeline} />
      </CardLayout>

      <ScheduleDateTime />
      <CardLayout title='Mark Job'>
        <div className='flex  justify-between flex-wrap gap-5 w-full'>
          <MarkAsCompleted />
          <button className='bg-primary text-white px-4 py-2 flex items-center gap-2 justify-center flex-1 rounded-md hover:bg-blue-950 transition duration-200'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z'
                fill='white'
              />
            </svg>
            Dispute
          </button>
        </div>
      </CardLayout>
    </>
  )
}

export default ProgressSection
