import { useState } from 'react'

const Intentions = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [consent, setConsent] = useState(null)  // Changed to null for unset state
  const [willingToBuy, setWillingToBuy] = useState(null)  // Changed to null for unset state

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

  const isWillingToBuy = selectedOption === 'Buy'
  const isConsent = selectedOption === 'Rent'

  return (
    <div className='bg-white rounded-lg br p-6 mb-6 flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-lg font-medium'>Intentions</h1>
        <p className='text-sm text-[#888888]'>
          Let us know what you're looking for so we can tailor our services
          accordingly
        </p>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='residency' className='text-lg font-medium'>
            Do you want to:
          </label>
          <div className='flex flex-col gap-1'>
            {options.map(option => (
              <div key={option.value}>
                <label className='flex items-center gap-2'>
                  <input
                    type='radio'
                    name='residency'
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
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='willingToBuy'
                          checked={willingToBuy === true}
                          onChange={() => setWillingToBuy(true)}
                          className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                        />
                        <span className='text-sm font-medium'>Yes</span>
                      </label>
                      <label className='flex items-center gap-2'>
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
                  <label className='flex items-center gap-2'>
                    <input
                      type='radio'
                      name='consent'
                      checked={consent === true}
                      onChange={() => setConsent(true)}
                      className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                    />
                    <span className='text-sm font-medium'>Yes</span>
                  </label>
                  <label className='flex items-center gap-2'>
                    <input
                      type='radio'
                      name='consent'
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
        <button
          type='submit'
          className='bg-primary text-white px-8 py-1 rounded-md font-medium hover:bg-primary/95 transition duration-200'
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Intentions