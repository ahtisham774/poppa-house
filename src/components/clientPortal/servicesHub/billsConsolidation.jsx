import { useState } from 'react'
import { billsConsolidationSteps } from '../../../data/billsConsolidationSteps'
import RenderFields from './maintainence/renderFields'

const BillsConsolidation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: '',
    estateAgentName: '',
    tenancyStartDate: '',
    baselineUtility: {
      gas: false,
      electricity: false
    },
    additionalBills: {
      water: false,
      tvLicense: false,
      broadbandTv: false,
      councilTax: false,
      other: false
    },
    otherBillsDetails: '',
    consolidationStartDate: '',

    assistanceRequired: {
      yes: false,
      no: false
    },
    specialRequests: '',
    termsAgreed: false
  })

  const handleFormChange = newData => {
    setFormData({ ...formData, ...newData })
  }

  const handleSubmitForm = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className='p-8 w-full max-h-[90vh] overflow-y-auto'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <h2 className='text-2xl font-semibold text-[#131e47] mb-1'>
            Bills Consolidation Service Form
          </h2>
          <div className='text-gray-600 mb-6'>
            Simplify your household bills with one convenient monthly payment!
            Select the essential utilities and add-ons that best suit your
            needs.
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-8'>
        {billsConsolidationSteps.map((step, index) => (
          <div key={index} className='flex flex-col gap-4 border-b'>
            <h3 className='text-lg font-semibold text-[#131e47]'>
              {index + 1}.{step.title}
            </h3>
            <div
              className={`grid grid-cols-1 ${
                step.inline ? 'sm:grid-cols-2' : ''
              } gap-4 mb-4`}
            >
              {step.fields?.map((field, fieldIndex) => {
                return (
                  <RenderFields
                    key={fieldIndex}
                    step={step}
                    formData={formData}
                    index={fieldIndex}
                    onChange={handleFormChange}
                    field={field}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-4 mt-8 justify-between'>
        <button
          type='button'
          className='border rounded-lg flex-1 px-7 py-2 justify-center text-[#131e47] font-medium flex items-center gap-1'
        >
          Cancel
        </button>

        <button
          type='button'
          className='bg-[#131e47] flex-1 rounded-lg px-7 py-2 text-white font-medium'
          onClick={handleSubmitForm}
        >
          Submit Request
        </button>
      </div>
    </div>
  )
}

export default BillsConsolidation
