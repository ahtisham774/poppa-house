import { FaCheck, FaX } from 'react-icons/fa6'
import InfoCard from '../../common/infoCard'
import CardLayout from './cardLayout'
import MapLists from './mapLists'
import { useState } from 'react'
import { Modal } from 'antd'
import FormField from '../servicesHub/maintainence/formField'
import UploadedFiles from '../../staffPanel/jobs/uploadedFiles'

const AcceptQuote = ({ onSubmit }) => {
  const [open, setOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    onSubmit()
    handleClose()
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className='bg-[#4CAF50] text-white px-4 py-2 rounded-md flex items-center gap-2'
      >
        <FaCheck />
        Accept Quote
      </button>
      <Modal
        open={open}
        onCancel={handleClose}
        footer={null}
        centered
        className='rounded-lg'
      >
        <div className='flex flex-col  p-4'>
          <h1 className='text-lg font-medium mb-1'>Accept Quote</h1>
          <p className='text-xs text-start text-[#888888] font-normal mb-4'>
            Please confirm that you want to accept the quote. If you accept, 30%
            of the accepted quote amount must be paid as a non-refundable
            deposit.
          </p>
          <FormField
            field={{
              type: 'checkbox',
              name: 'acceptQuote',
              label:
                'I confirm that I have read and understood the Non-Refundable Deposit Clause.',
              required: true,
              className: 'mb-4'
            }}
            value={isChecked}
            onChange={setIsChecked}
          />
          <div className='flex justify-end gap-2'>
            <button
              onClick={handleClose}
              className='bg-white br font-medium text-primary px-4 py-2 rounded-md'
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!isChecked}
              className={`bg-primary font-medium ${
                isChecked ? 'bg-opacity-100' : 'bg-opacity-70'
              } text-white px-4 py-2 rounded-md disabled:cursor-not-allowed`}
            >
              Proceed to Deposit Payment
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

const RejectQuote = ({ onSubmit }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = () => {
    onSubmit()
    handleClose()
  }
  return (
    <>
      <button
        onClick={handleOpen}
        className='bg-[#D50000] text-white px-4 py-2 rounded-md flex items-center gap-2'
      >
        <FaX />
        Reject Quote
      </button>
      <Modal
        open={open}
        onCancel={handleClose}
        footer={null}
        centered
        className='rounded-lg'
      >
        <div className='flex flex-col p-4'>
          <h1 className='text-lg font-medium mb-1'>Reject Quote</h1>
          <p className='text-xs text-start text-[#888888] font-normal mb-4'>
            Please choose how you would like to proceed.
          </p>
          <p className='font-medium mb-2'>
            Choose one of the following options:
          </p>
          <div className='flex justify-between flex-wrap w-full gap-2'>
            <button
              onClick={handleClose}
              className='bg-white br font-medium flex-1 text-primary px-4 py-2 rounded-md'
            >
              Cancel Job
            </button>
            <button
              onClick={handleSubmit}
              className='bg-primary font-medium flex-1 bg-opacity-100 text-white px-4 py-2 rounded-md'
            >
              Speak with an Advisor
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

const Quote = () => {
  const header = 'Quote Details'
  const [isShowButton, setIsShowButton] = useState(true)

  const handleClose = () => {
    setIsShowButton(false)
  }
  const list = [
    {
      label: 'Total  Amount',
      value: '£1800'
    },
    {
      label: 'Deposit Payment(30%)',
      value: '£540'
    },
    {
      label: 'Status',
      value: 'Pending Approval'
    },
    {
      label: 'Reason for update',
      value:
        'The quote has been adjusted as the initially provided room sizes were underestimated. Upon on-site assessment, we found additional areas requiring cleaning, increasing the overall workload and time needed to complete the job.',
      isFullWidth: true
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



  return (
    <>
      <CardLayout
        title={header}
        children1={
          isShowButton && (
            <div className='flex justify-start flex-wrap gap-3 border-t-2 p-4 sm:p-6'>
              <AcceptQuote onSubmit={handleClose} />
              <RejectQuote onSubmit={handleClose} />
            </div>
          )
        }
      >
        <MapLists list={list} />
      </CardLayout>
      <UploadedFiles title="Uploaded Files by Agent" files={files} showEdit={false} />
    </>
  )
}

export default Quote
