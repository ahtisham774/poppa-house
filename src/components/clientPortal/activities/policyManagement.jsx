import { useState } from "react"
import CardLayout from "./cardLayout"
import ActionButton from "./actionButton"
import MapLists from "./mapLists"
import { Modal } from "antd"
import RadioGroup from "../servicesHub/maintainence/radioGroup"
import WarningNotification, { InfoNotification } from "./warningNotification"


const ModifyCoverageModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
    coverage: ''
  })
  const options = [
    {
      label: 'Buildings Insurance',
      value: 'buildingsInsurance'
    },
    {
      label: 'Contents Insurance',
      value: 'contentsInsurance'
    },
    {
      label: 'Rent Guarantee Insurance',
      value: 'rentGuaranteeInsurance'
    },
    {
        label: 'Liability Insurance',
        value: 'liabilityInsurance'
    },
    {
      label: 'Other',
      value: 'other'
    }
  ]

  return (
    <Modal open={isOpen} footer={null} onCancel={onClose} width={600}>
      <div className=' p-4'>
        <h2 className='text-2xl font-medium text-primary'>Modify Coverage</h2>
        <div className='mt-5'>
          <div className='flex flex-col gap-4'>
            <RadioGroup
              field={{
                name: 'coverage',
                options: options,
                type: 'radio-group',
                label: 'Available Coverage Services to Add'
              }}
              formData={formData}
              onChange={(name, value) => {
                setFormData(prevState => ({
                  ...prevState,
                  [name]: value
                }))
              }}
            />
            {formData.coverage === 'other' && (
              <div className='flex flex-col gap-2 mb-4'>
                <label className='text-sm font-medium text-primary'>
                  Please specify the other bills
                </label>
                <input
                  type='text'
                  className='border border-gray-300 rounded-lg p-2'
                  placeholder='Enter the specific other bills...'
                />
              </div>
            )}
          </div>
          <InfoNotification
          text="Adding services to your bundle may change your monthly cost. Our representative will contact you with details about the updated pricing."
          />
        </div>

        <div className='mt-8 flex justify-end gap-4'>
          <button
            className='px-6 py-2 br rounded-lg font-medium'
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className='px-10 py-2 bg-primary text-white rounded-lg font-medium'
            onClick={() => {
              onClose()
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </Modal>
  )
}

const CancelPolicyModal = ({ isOpen, onClose }) => {
     const [cancelOption, setCancelOption] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleCancel = () => {
    if (cancelOption && termsAccepted) {
      // Process cancellation
      console.log('Subscription cancelled with option:', cancelOption)
      onClose()
    } else {
      // Show validation error
      console.log('Please select an option and accept terms')
    }
  }

  return (
    <Modal open={isOpen} footer={null} onCancel={onClose} width={600}>
      <div className='pt-12 pb-6 px-6'>
        <h2 className='text-2xl font-medium text-primary'>Cancel Policy</h2>

        <div className='mt-8'>
          <WarningNotification text='There may be penalties if cancellation is made outside the notice period.' />

          <div className='flex items-center mb-8'>
            <div
              className={`w-6 h-6 rounded-full border ${
                termsAccepted ? 'border-primary' : 'border-gray-300'
              } flex items-center justify-center cursor-pointer`}
              onClick={() => setTermsAccepted(!termsAccepted)}
            >
              {termsAccepted && (
                <div className='w-3 h-3 rounded-full bg-primary'></div>
              )}
            </div>
            <label
              className='ml-3 text-lg font-medium cursor-pointer'
              onClick={() => setTermsAccepted(!termsAccepted)}
            >
               I understand the terms and conditions of cancellation
            </label>
          </div>
        </div>

        <div className='mt-8 flex justify-end gap-4'>
          <button
            className='px-6 py-3 border border-gray-300 rounded-lg font-medium'
            onClick={onClose}
          >
            Go Back
          </button>
          <button
            className={`px-6 py-3 bg-primary text-white rounded-lg font-medium ${
              !termsAccepted ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            onClick={handleCancel}
            disabled={!termsAccepted}
          >
            Cancel Contract
          </button>
        </div>
      </div>
    </Modal>
  )
}


const PolicyManagement = () => {
 const [isModifyCoverage, setIsModifyCoverage] = useState(false)
  const [isCancelPolicy, setIsCancelPolicy] = useState(false)
  const header = 'Bundle Switching Options'
  const list = [
    {
      label: 'Switching Window',
      value: 'Anytime'
    },
    {
      label: 'Upgrade Option',
      value: 'Available at any time '
    },
    {
      label: 'Policy',
      value: 'Downgrades are not permitted'
    },
    {
      label: 'Notice Period',
      value: '14 days after contract initiation',
      text: 'text-[#EB3741]'
    }
  ]
  return (
    <>
      <CardLayout
        title={header}
        children1={
          <div className='flex justify-start flex-wrap gap-3 border-t-2 p-4 sm:p-6'>
            <ActionButton
              text='Modify Coverage'
              variant='outline'
              onClick={() => setIsModifyCoverage(true)}
            />
            <ActionButton
              text='Cancel Policy'
              variant='primary'
              onClick={() => setIsCancelPolicy(true)}
            />
          </div>
        }
      >
        <MapLists list={list} />
      </CardLayout>
      <ModifyCoverageModal
        isOpen={isModifyCoverage}
        onClose={() => setIsModifyCoverage(false)}
      />
      <CancelPolicyModal
        isOpen={isCancelPolicy}
        onClose={() => setIsCancelPolicy(false)}
      />
    </>
  )
}

export default PolicyManagement