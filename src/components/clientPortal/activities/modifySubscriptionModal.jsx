import { useState } from 'react'
import { Modal } from 'antd'
import { CheckCircleFilled } from '@ant-design/icons'

const ModifySubscriptionModal = ({ isOpen, onClose }) => {
  // Configuration for subscription options
  const subscriptionOptions = {
    frequencies: [
      { id: 'monthly', name: 'Monthly' },
      { id: 'quarterly', name: 'Quarterly' },
      { id: 'biannually', name: 'Biannually' },
      { id: 'annually', name: 'Annually' }
    ],
    serviceTypes: {
      monthly: [
        { id: 'cleaning', name: 'Cleaning' },
        { id: 'garden', name: 'Garden & Lawn Maintenance' },
        { id: 'repairs', name: 'Repairs & Maintenance' }
      ],
      quarterly: [
        { id: 'cleaning', name: 'Deep Cleaning' },
        { id: 'garden', name: 'Seasonal Garden Maintenance' },
        { id: 'repairs', name: 'Quarterly Maintenance Check' }
      ],
      biannually: [
        { id: 'cleaning', name: 'Biannual Deep Cleaning' },
        { id: 'garden', name: 'Biannual Landscape Service' },
        { id: 'repairs', name: 'Biannual Property Inspection' }
      ],
      annually: [
        { id: 'cleaning', name: 'Annual Deep Cleaning' },
        { id: 'garden', name: 'Annual Landscape Service' },
        { id: 'repairs', name: 'Annual Property Inspection' }
      ]
    }
  }

  const [selectedFrequency, setSelectedFrequency] = useState(null)
  const [selectedServiceType, setSelectedServiceType] = useState(null)
  const [showServiceType, setShowServiceType] = useState(false)

  const handleFrequencyChange = frequencyId => {
    setSelectedFrequency(frequencyId)
    setShowServiceType(true)
    // Reset service type to the first option when frequency changes
    setSelectedServiceType(subscriptionOptions.serviceTypes[frequencyId][0].id)
  }

  return (
    <Modal open={isOpen} footer={null} onCancel={onClose} width={600}>
      <div className='pt-12 pb-6 px-6'>
        <h2 className='text-2xl font-medium text-primary'>
          Modify Subscription
        </h2>
        <p className='text-[#888888] mt-2'>
          Update your subscription frequency or service type.
        </p>

        <div className='mt-8'>
          <h3 className='text-lg font-medium text-primary mb-4'>
            Subscription Frequency
          </h3>
          <div className='grid grid-cols-2 gap-4'>
            {subscriptionOptions.frequencies.map(frequency => (
              <button
                key={frequency.id}
                className={`px-4 py-3 rounded-lg flex items-center ${
                  selectedFrequency === frequency.id
                    ? 'bg-primary text-white'
                    : 'border border-gray-300'
                }`}
                onClick={() => handleFrequencyChange(frequency.id)}
              >
                {selectedFrequency === frequency.id && (
                  <span className='mr-2'>
                    <svg
                      width='21'
                      height='21'
                      viewBox='0 0 21 21'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9.625 7H11.375V12.25H9.625V7ZM13.125 0.875H7.875V2.625H13.125V0.875ZM10.5 17.5C7.11375 17.5 4.375 14.7612 4.375 11.375C4.375 7.98875 7.11375 5.25 10.5 5.25C13.8862 5.25 16.625 7.98875 16.625 11.375C17.2375 11.375 17.815 11.4888 18.375 11.6813V11.375C18.375 9.52 17.7275 7.81375 16.6513 6.46625L17.8938 5.22375C17.5 4.7775 17.1063 4.375 16.66 3.99L15.4175 5.25C14.0613 4.1475 12.355 3.5 10.5 3.5C8.41142 3.5 6.40838 4.32968 4.93153 5.80653C3.45469 7.28338 2.625 9.28642 2.625 11.375C2.625 13.4636 3.45469 15.4666 4.93153 16.9435C6.40838 18.4203 8.41142 19.25 10.5 19.25C11.0162 19.25 11.515 19.1975 11.9963 19.1012C11.725 18.5938 11.5325 18.025 11.445 17.4212C11.13 17.465 10.8237 17.5 10.5 17.5ZM18.6725 13.86L15.5312 17.0013L14.14 15.61L13.125 16.625L15.5312 19.25L19.6875 15.0938L18.6725 13.86Z'
                        fill='white'
                      />
                    </svg>
                  </span>
                )}
                <span className=' font-medium'>{frequency.name}</span>
              </button>
            ))}
          </div>
        </div>

        {showServiceType && (
          <div className='mt-8'>
            <h3 className='text-lg font-medium text-primary mb-4'>
              Service Type
            </h3>
            <div className='flex flex-col gap-4'>
              {subscriptionOptions.serviceTypes[selectedFrequency].map(
                service => (
                  <button
                    key={service.id}
                    className={`px-4 py-3 rounded-lg flex items-center ${
                      selectedServiceType === service.id
                        ? 'bg-primary text-white'
                        : 'border border-gray-300'
                    }`}
                    onClick={() => setSelectedServiceType(service.id)}
                  >
                    {selectedServiceType === service.id && (
                      <div className='w-6 h-6 rounded-full mr-2 bg-primary border-2 border-white flex items-center justify-center'>
                        <CheckCircleFilled style={{ color: 'white' }} />
                      </div>
                    )}
                    <span className=' font-medium'>{service.name}</span>
                  </button>
                )
              )}
            </div>
          </div>
        )}

        <div className='mt-8 flex justify-end gap-4'>
          <button
            className='px-6 py-2 br rounded-lg font-medium'
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className='px-6 py-2 bg-primary text-white rounded-lg font-medium'
            onClick={() => {
              // Here you would typically handle the save action
              const selectedFrequencyObj = subscriptionOptions.frequencies.find(
                f => f.id === selectedFrequency
              )
              const selectedServiceTypeObj = subscriptionOptions.serviceTypes[
                selectedFrequency
              ].find(s => s.id === selectedServiceType)

              console.log('Saved:', {
                frequency: selectedFrequencyObj,
                serviceType: selectedServiceTypeObj
              })
              onClose()
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModifySubscriptionModal
