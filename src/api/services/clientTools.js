import apiClient from '../apiClient'

const CALCULATOR_URL = `clientTools/calculate`

const clientTools = {
  async affordableRentCalculator (data) {
    try {
      const response = await apiClient.post(
        `${CALCULATOR_URL}/affordableRent`,
        data,
        {
          requireAuth: false
        }
      )
      return response
    } catch (error) {
      console.error('Affordable Rent Calculator error:', error)
      throw new Error(error.message || 'Affordable Rent Calculator failed')
    }
  },
  async monthlyRentCalculator (data) {
    try {
      const response = await apiClient.post(
        `${CALCULATOR_URL}/monthlyRent`,
        data,
        {
          requireAuth: false
        }
      )
      return response
    } catch (error) {
      console.error('Monthly Rent Calculator error:', error)
      throw new Error(error.message || 'Monthly Rent Calculator failed')
    }
  },
  async stampDutyCalculator (data) {
    try {
      const response = await apiClient.post(
        `${CALCULATOR_URL}/stampDuty`,
        data,
        {
          requireAuth: false
        }
      )
      return response
    } catch (error) {
      console.error('Stamp Duty Calculator error:', error)
      throw new Error(error.message || 'Stamp Duty Calculator failed')
    }
  },
  async ROICalculator (data) {
    try {
      const response = await apiClient.post(`${CALCULATOR_URL}/ROI`, data, {
        requireAuth: false
      })
      return response
    } catch (error) {
      console.error('ROI Calculator error:', error)
      throw new Error(error.message || 'ROI Calculator failed')
    }
  },
  async mortgageCalculator (data) {
    try {
      const response = await apiClient.post(
        `${CALCULATOR_URL}/mortgage`,
        data,
        {
          requireAuth: false
        }
      )
      return response
    } catch (error) {
      console.error('Mortgage Calculator error:', error)
      throw new Error(error.message || 'Mortgage Calculator failed')
    }
  }
}

export default clientTools
