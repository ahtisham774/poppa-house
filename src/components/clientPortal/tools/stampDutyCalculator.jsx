import React, { useState } from 'react'
import CalculatorInput from './calculatorInput'
import CalculateButton from './calculateButton'
import clientTools from '../../../api/services/clientTools'
import { showToast } from '../../../utils/toast'

const StampDutyCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState('')
  const [buyerType, setBuyerType] = useState('standard')
  const [stampDuty, setStampDuty] = useState(null)
  const [loading, setLoading] = useState(false)

  // Tax bands for standard rates
  const standardRates = [
    { threshold: 0, rate: 0 },
    { threshold: 125000, rate: 0.02 },
    { threshold: 250000, rate: 0.05 },
    { threshold: 925000, rate: 0.1 },
    { threshold: 1500000, rate: 0.12 }
  ]

  // First-time buyer rates
  const firstTimeBuyerRates = [
    { threshold: 0, rate: 0 },
    { threshold: 300000, rate: 0 },
    { threshold: 500000, rate: 0.05 },
    { threshold: 925000, rate: 0.1 },
    { threshold: 1500000, rate: 0.12 }
  ]

  const calculateStampDuty = (price, type) => {
    if (!price) return 0

    const rates = type === '"firstTime"' ? firstTimeBuyerRates : standardRates
    let tax = 0
    let remainingAmount = price

    // Calculate tax for each band
    for (let i = rates.length - 1; i >= 0; i--) {
      const band = rates[i]
      const prevThreshold = i > 0 ? rates[i - 1].threshold : 0

      if (price > band.threshold) {
        const taxableInBand = Math.min(remainingAmount, price - band.threshold)
        tax += taxableInBand * band.rate
        remainingAmount -= taxableInBand
      }
    }

    // Apply surcharges
    if (type === 'additional') {
      tax += price * 0.03 // 3% surcharge
    }

    if (type === 'nonUK') {
      tax += price * 0.02 // 2% surcharge

      // If it's also an additional property, add that surcharge too
      if (type === 'additional') {
        tax += price * 0.03
      }
    }

    return tax.toFixed(2)
  }

  const handleCalculate = () => {
    if (!propertyPrice) {
      setStampDuty(null)
      return
    }

    const price = parseFloat(propertyPrice)
    // validate price
    if (isNaN(price) || price <= 0) {
      setStampDuty(null)
      return
    }

    setLoading(true)

    clientTools
      .stampDutyCalculator({
        price: price,
        isFirstTimeBuyer: buyerType == 'firstTime',
        isAdditionalProperty: buyerType == 'additional',
        isNonUKResident: buyerType == 'nonUK'
      })
      .then(response => {
        const stampDuty = response?.stampDuty
        setStampDuty(stampDuty)
        showToast('success', 'Calculation successful!')
      })
      .catch(error => {
        console.error('Error calculating stamp duty:', error)
        setStampDuty(null)
        showToast('error', 'Failed to calculate stamp duty. Please try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <p className='text-gray-500 mb-6'>
        Calculate the Stamp Duty Land Tax (SDLT) for your property purchase in
        England or Northern Ireland.
      </p>

      <div className='bg-blue-50 p-4 rounded-lg mb-6'>
        <h3 className='text-primary font-semibold mb-2'>
          Surcharges Applied Based on Buyer Type
        </h3>
        <ul className='text-primary text-sm space-y-1'>
          <li>• Additional Property Buyers: +3% surcharge on each band</li>
          <li>
            • Non-UK Residents: +2% surcharge on each band (applies on top of
            the additional property surcharge, if applicable)
          </li>
          <li>• First-Time Buyers Relief:</li>
          <li className='ml-4'>– 0% on the first £300,000</li>
          <li className='ml-4'>
            – 5% on the portion between £300,001 and £500,000
          </li>
          <li className='ml-4'>
            – Standard rates apply if the purchase exceeds £500,000
          </li>
        </ul>

        <h3 className='text-primary font-semibold mt-4 mb-2'>
          Residential Property Tax Bands
        </h3>
        <div className='grid grid-cols-2 gap-2 text-primary text-sm'>
          <div>£0 - £125,000</div>
          <div>0%</div>
          <div>£125,001 - £250,000</div>
          <div>2%</div>
          <div>£250,001 - £925,000</div>
          <div>5%</div>
          <div>£925,001 - £1.5M</div>
          <div>10%</div>
          <div>Over £1.5M</div>
          <div>12%</div>
        </div>
      </div>

      <CalculatorInput
        label='Enter Property Price (£)'
        value={propertyPrice}
        onChange={e => setPropertyPrice(e.target.value)}
        type='number'
        placeholder='Enter property price'
        className='mb-4'
      />

      <div className='space-y-3 mb-6'>
        <div className='flex items-center'>
          <input
            type='radio'
            id='firstTime'
            name='buyerType'
            value='firstTime'
            checked={buyerType === 'firstTime'}
            onChange={() => setBuyerType('firstTime')}
            className='h-5 w-5 text-primary accent-primary'
          />
          <label htmlFor='firstTime' className='ml-2 text-navy-900'>
            First-Time Buyer
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='radio'
            id='additional'
            name='buyerType'
            value='additional'
            checked={buyerType === 'additional'}
            onChange={() => setBuyerType('additional')}
            className='h-5 w-5 text-primary accent-primary'
          />
          <label htmlFor='additional' className='ml-2 text-navy-900'>
            Additional Property (+3%)
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type='radio'
            id='nonUK'
            name='buyerType'
            value='nonUK'
            checked={buyerType === 'nonUK'}
            onChange={() => setBuyerType('nonUK')}
            className='h-5 w-5 text-primary accent-primary'
          />
          <label htmlFor='nonUK' className='ml-2 text-navy-900'>
            Non-UK Resident (+2%)
          </label>
        </div>
      </div>

      <CalculateButton loading={loading} onClick={handleCalculate} />

      {stampDuty !== null && (
        <div className='mt-8 text-center'>
          <p className='text-gray-600 mb-2'>Stamp Duty to Pay:</p>
          <p className='text-4xl font-bold text-navy-900'>£{stampDuty}</p>
        </div>
      )}
    </div>
  )
}

export default StampDutyCalculator
