import { Modal } from 'antd'
import { useState } from 'react'

const MarkAsCompleted = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type='button'
        onClick={() => setOpen(true)}
        className='bg-primary text-white px-4 py-2 flex items-center gap-2 justify-center flex-1 rounded-md hover:bg-blue-950 transition duration-200'
      >
        <svg
          width='21'
          height='21'
          viewBox='0 0 21 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_3470_15610)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M10.5 2.625C9.46584 2.625 8.44181 2.82869 7.48637 3.22445C6.53093 3.6202 5.6628 4.20027 4.93153 4.93153C4.20027 5.6628 3.6202 6.53093 3.22445 7.48637C2.82869 8.44181 2.625 9.46584 2.625 10.5C2.625 11.5342 2.82869 12.5582 3.22445 13.5136C3.6202 14.4691 4.20027 15.3372 4.93153 16.0685C5.6628 16.7997 6.53093 17.3798 7.48637 17.7756C8.44181 18.1713 9.46584 18.375 10.5 18.375C12.5886 18.375 14.5916 17.5453 16.0685 16.0685C17.5453 14.5916 18.375 12.5886 18.375 10.5C18.375 8.41142 17.5453 6.40838 16.0685 4.93153C14.5916 3.45468 12.5886 2.625 10.5 2.625ZM0.875 10.5C0.875 5.18438 5.18438 0.875 10.5 0.875C15.8156 0.875 20.125 5.18438 20.125 10.5C20.125 15.8156 15.8156 20.125 10.5 20.125C5.18438 20.125 0.875 15.8156 0.875 10.5Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.407 7.87397L8.64675 14.6342L5.25 10.5803L6.57213 9.43409L8.73863 12.0678L14.1698 6.63672L15.407 7.87397Z'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_3470_15610'>
              <rect width='21' height='21' fill='white' />
            </clipPath>
          </defs>
        </svg>
        Mark Job as Complete
      </button>
      <Modal
        title='Mark Job as Complete'
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        okText='Confirm'
        okButtonProps={{
          className: 'bg-primary text-white hover:bg-blue-950'
        }}
        cancelText='Cancel'
        width={500}
        centered
        className='rounded-lg'
      >
        <div className='flex flex-col gap-4'>
          <p className=' text-[#88888] text-sm'>
            Are you sure you want to mark this job as complete? This action
            cannot be undone
          </p>
          <p className=' text-[#88888] text-sm'>By marking this job as complete, you confirm that:</p>
          <ul className='list-disc list-outside ml-5 text-[#88888] text-sm'>
            <li>The job was completed to your satisfaction</li>
            <li>You have received all required documentation</li>
            <li>Any remaining payment (if applicable) will be processed</li>
          </ul>
        </div>
      </Modal>
    </>
  )
}

export default MarkAsCompleted
