import { useEffect, useState } from 'react'
import CalculateButton from '../tools/calculateButton'
import clientPreferenceService from '../../../api/services/clientPreferenceService'
import { useAuth } from '../../../context/useAuth'
import { showToast } from '../../../utils/toast'

const Intentions = ({intentions}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [consent, setConsent] = useState(null) // Changed to null for unset state
  const [willingToBuy, setWillingToBuy] = useState(null) // Changed to null for unset state
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const options = [
    {
      label: 'Buy',
      value: 'Buy'
    },
    {
      label: 'Rent',
      value: 'Rent'
    }
  ]

  useEffect(()=>{
    if(intentions){
      setSelectedOption(intentions?.buy?.selected ? 'Buy' : 'Rent')
      setWillingToBuy(intentions?.buy?.proofOfFundsConsent)
      setConsent(intentions?.rent?.rentConsent)
    }
  },[intentions])



  const isWillingToBuy = selectedOption === 'Buy'
  const isConsent = selectedOption === 'Rent'

  const handleIntentions = () => {
    const data = {
      intendsToBuy: isWillingToBuy,
      proofOfFundsConsent: isWillingToBuy && willingToBuy,
      intendsToRent: isConsent,
      rentDocumentConsent: isConsent && consent
    }
    setLoading(true)
    clientPreferenceService
      .updateIntentions(user?.id, data)
      .then(() => {
        showToast('success', 'Intentions updated successfully!')
      })
      .catch(error => {
        console.error('Error updating intentions:', error)
        showToast('error', 'Failed to update intentions. Please try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className='bg-white rounded-lg br p-6 mb-6 flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-lg font-medium'>Intentions</h1>
        <p className='text-sm text-[#888888]'>
          Let us know what you&apos;re looking for so we can tailor our services
          accordingly
        </p>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <label  className='text-lg font-medium'>
            Do you want to:
          </label>
          <div className='flex flex-col gap-1'>
            {options.map(option => (
              <div key={option.value}>
                <label className='flex items-center gap-2'>
                  <input
                    type='radio'
                    name='intentions'
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={e => setSelectedOption(e.target.value)}
                    className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                  />
                  <span className='text-sm font-medium'>{option.label}</span>
                </label>
                {isWillingToBuy && option.value === 'Buy' && (
                  <div className='flex flex-col gap-2 ml-5 mb-3'>
                    <label className='text-sm text-[#888888]'>
                      Are you willing to show proof of funds?
                    </label>
                    <div className='flex gap-4'>
                      <label  className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='willingToBuy'
                          checked={willingToBuy === true}
                          onChange={() => setWillingToBuy(true)}
                          className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                        />
                        <span className='text-sm font-medium'>Yes</span>
                      </label>
                      <label  className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='willingToBuy'
                          checked={willingToBuy === false}
                          onChange={() => setWillingToBuy(false)}
                          className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                        />
                        <span className='text-sm font-medium'>No</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {isConsent && (
              <div className='flex flex-col gap-2 ml-5'>
                <div className='p-3 rounded-lg border max-w-xs flex flex-col gap-2 border-[#B1B1B1] bg-[#F1F5F9] mb-2'>
                  <h3 className='text-sm font-medium'>
                    You will be required to provide:
                  </h3>
                  <ul className='list-disc ml-4 list-inside text-sm text-[#888888]'>
                    <li>Proof of funds</li>
                    <li> Proof of employment and/or guarantor</li>
                  </ul>
                </div>
                <label className='text-sm text-[#888888]'>
                  Do you consent?
                </label>
                <div className='flex gap-4'>
                  <label htmlFor='consentYes' className='flex items-center gap-2'>
                    <input
                      type='radio'
                      name='consentYes'
                      checked={consent === true}
                      onChange={() => setConsent(true)}
                      className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                    />
                    <span className='text-sm font-medium'>Yes</span>
                  </label>
                  <label htmlFor='consentNo' className='flex items-center gap-2'>
                    <input
                      type='radio'
                      name='consentNo'
                      checked={consent === false}
                      onChange={() => setConsent(false)}
                      className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                    />
                    <span className='text-sm font-medium'>No</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='flex justify-end gap-5'>
        <button className='border rounded-lg px-8 py-1 text-primary font-medium'>
          Cancel
        </button>
        <CalculateButton
          text='Save Changes'
          className='!w-fit px-10 !py-2'
          onClick={handleIntentions}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default Intentions
