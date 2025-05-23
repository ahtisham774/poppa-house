import React, { useState } from 'react'
import CalculatorInput from './calculatorInput'
import CalculateButton from './calculateButton'
import clientTools from '../../../api/services/clientTools'
import { showToast } from '../../../utils/toast'

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [loanTerm, setLoanTerm] = useState('')
  const [monthlyPayment, setMonthlyPayment] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCalculate = () => {
    if (!loanAmount || !interestRate || !loanTerm) {
      setMonthlyPayment(null)
      return
    }

    setLoading(true)
    clientTools
      .mortgageCalculator({ loan: loanAmount, interestRate, years: loanTerm })
      .then(response => {
        const payment = response?.monthlyPayment
        setMonthlyPayment(payment)
        showToast('success', 'Calculation successful!')
      })
      .catch(error => {
        console.error('Error calculating monthly payment:', error)
        setMonthlyPayment(null)
        showToast(
          'error',
          'Failed to calculate monthly payment. Please try again.'
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <p className='text-gray-500 mb-6'>
        Our mortgage calculator estimates your monthly payments based on loan
        amount, interest rate, and term
      </p>

      <CalculatorInput
        label='Enter Loan Amount (£)'
        value={loanAmount}
        onChange={e => setLoanAmount(e.target.value)}
        type='number'
        placeholder='Enter loan amount'
        className='mb-4'
      />

      <CalculatorInput
        label='Enter Annual Interest Rate (%)'
        value={interestRate}
        onChange={e => setInterestRate(e.target.value)}
        type='number'
        placeholder='Enter interest rate'
        className='mb-4'
      />

      <CalculatorInput
        label='Enter Loan Terms (Years)'
        value={loanTerm}
        onChange={e => setLoanTerm(e.target.value)}
        type='number'
        placeholder='Enter loan term'
        className='mb-4'
      />

      <CalculateButton loading={loading} onClick={handleCalculate} />

      {monthlyPayment !== null && (
        <div className='mt-8 text-center'>
          <p className='text-gray-600 mb-2'>Monthly Mortgage Payment:</p>
          <p className='text-4xl font-bold text-navy-900'>£{monthlyPayment}</p>
        </div>
      )}
    </div>
  )
}

export default MortgageCalculator
