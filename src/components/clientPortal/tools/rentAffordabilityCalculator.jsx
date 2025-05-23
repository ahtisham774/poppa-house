import React, { useState } from 'react'
import CalculatorInput from './calculatorInput'
import CalculateButton from './calculateButton'
import clientTools from '../../../api/services/clientTools'
import { showToast } from '../../../utils/toast'

const RentAffordabilityCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [affordableRent, setAffordableRent] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCalculate = () => {
    if (!monthlyIncome) {
      setAffordableRent(null)
      return
    }

    // Calculate 30% of income as affordable rent
    const income = parseFloat(monthlyIncome)
    if (isNaN(income) || income <= 0) {
      setAffordableRent(null)
      return
    }
    setLoading(true)

    clientTools
      .affordableRentCalculator({ income })
      .then(response => {
        const rent = response?.affordableRent
        setAffordableRent(rent)
        showToast('success', 'Calculation successful!')
      })
      .catch(error => {
        console.error('Error calculating affordable rent:', error)
        setAffordableRent(null)
        showToast(
          'error',
          'Failed to calculate affordable rent. Please try again.'
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <p className='text-gray-500 mb-6'>
        Find out how much rent you can afford based on your income, using the
        industry standard of allocating 30% of your gross monthly earnings.
      </p>

      <CalculatorInput
        label='Enter monthly income (£)'
        value={monthlyIncome}
        onChange={e => setMonthlyIncome(e.target.value)}
        type='number'
        placeholder='Enter monthly income'
        className='mb-4'
      />

      <CalculateButton loading={loading} onClick={handleCalculate} />

      {affordableRent !== null && (
        <div className='mt-8 text-center'>
          <p className='text-gray-600 mb-2'>
            Recommended Maximum Rent (30% of income):
          </p>
          <p className='text-4xl font-bold text-navy-900'>£{affordableRent}</p>
        </div>
      )}
    </div>
  )
}

export default RentAffordabilityCalculator
