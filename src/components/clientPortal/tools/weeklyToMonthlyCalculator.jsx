import React, { useState } from 'react'
import CalculatorInput from './calculatorInput'
import CalculateButton from './calculateButton'
import clientTools from '../../../api/services/clientTools'
import { showToast } from '../../../utils/toast'

const WeeklyToMonthlyCalculator = () => {
  const [weeklyRent, setWeeklyRent] = useState('')
  const [monthlyRent, setMonthlyRent] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCalculate = () => {
    if (!weeklyRent) {
      setMonthlyRent(null)
      return
    }

    // Validate weekly rent input

    const weekly = parseFloat(weeklyRent)
    if (isNaN(weekly) || weekly <= 0) {
      setMonthlyRent(null)
      return
    }

    setLoading(true)

    clientTools
      .monthlyRentCalculator({ weeklyRent: weekly })
      .then(response => {
        const rent = response?.monthlyRent
        setMonthlyRent(rent)
        showToast('success', 'Calculation successful!')
      })
      .catch(error => {
        console.error('Error calculating monthly rent:', error)
        setMonthlyRent(null)
        showToast(
          'error',
          'Failed to calculate monthly rent. Please try again.'
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <p className='text-gray-500 mb-6'>
        Easily convert your weekly rent into a monthly figure with our
        calculator. This helps you plan your budget more effectively and compare
        rental costs on a monthly basis
      </p>

      <CalculatorInput
        label='Enter weekly rent (£)'
        value={weeklyRent}
        onChange={e => setWeeklyRent(e.target.value)}
        type='number'
        className='mb-4'
        placeholder='Enter weekly rent'
      />

      <CalculateButton loading={loading} onClick={handleCalculate} />

      {monthlyRent !== null && (
        <div className='mt-8 text-center'>
          <p className='text-gray-600 mb-2'>Monthly Rent:</p>
          <p className='text-4xl font-bold text-navy-900'>£{monthlyRent}</p>
        </div>
      )}
    </div>
  )
}

export default WeeklyToMonthlyCalculator
