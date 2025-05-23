import { useState } from 'react'
import CalculatorInput from './calculatorInput'
import CalculateButton from './calculateButton'
import clientTools from '../../../api/services/clientTools'
import { showToast } from '../../../utils/toast'

const ROICalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState('')
  const [annualRental, setAnnualRental] = useState('')
  const [annualExpenses, setAnnualExpenses] = useState('')
  const [roi, setRoi] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCalculate = () => {
    if (!purchasePrice || !annualRental || !annualExpenses) {
      setRoi(null)
      return
    }

    const price = parseFloat(purchasePrice)
    const rental = parseFloat(annualRental)
    const expenses = parseFloat(annualExpenses)

    // Validate inputs
    if (isNaN(price) || price <= 0) {
      setRoi(null)
      return
    }

    if (isNaN(rental) || rental < 0) {
      setRoi(null)
      return
    }
    if (isNaN(expenses) || expenses < 0) {
      setRoi(null)
      return
    }
    setLoading(true)
    clientTools
      .ROICalculator({
        purchasePrice: price,
        rentalIncome: rental,
        expenses: expenses
      })
      .then(response => {
        const calculatedRoi = response?.roi
        setRoi(calculatedRoi)
        showToast('success', 'Calculation successful!')
      })
      .catch(error => {
        console.error('Error calculating ROI:', error)
        setRoi(null)
        showToast('error', 'Failed to calculate ROI. Please try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      <p className='text-gray-500 mb-6'>
        Our ROI Calculator quickly helps property investors assess a property's
        profitability before deciding.
      </p>

      <div className='bg-blue-50 p-4 rounded-lg mb-6'>
        <h3 className='text-primary font-semibold mb-2'>
          What is ROI in Property Investment?
        </h3>
        <p className='text-primary text-sm'>
          ROI measures how much profit you make from an investment compared to
          the cost. It's usually expressed as a percentage. A higher ROI means a
          better return on your money.
        </p>
      </div>

      <CalculatorInput
        label='Enter Purchase Price (£)'
        value={purchasePrice}
        onChange={e => setPurchasePrice(e.target.value)}
        type='number'
        placeholder='Enter purchase price'
        className='mb-4'
      />

      <CalculatorInput
        label='Enter Annual Rental Income (£)'
        value={annualRental}
        onChange={e => setAnnualRental(e.target.value)}
        type='number'
        placeholder='Enter annual rental income'
        className='mb-4'
      />

      <CalculatorInput
        label='Enter Annual Expenses (£)'
        value={annualExpenses}
        onChange={e => setAnnualExpenses(e.target.value)}
        type='number'
        placeholder='Enter annual expenses'
        className='mb-4'
      />

      <CalculateButton loading={loading} onClick={handleCalculate} />

      {roi !== null && (
        <div className='mt-8 text-center'>
          <p className='text-gray-600 mb-2'>Return on Investment:</p>
          <p className='text-4xl font-bold text-navy-900'>{roi}%</p>
        </div>
      )}
    </div>
  )
}

export default ROICalculator
