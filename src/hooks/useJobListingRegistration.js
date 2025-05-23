import { useState } from 'react'
import authService from '../api/services/authService'

export const useJobListingRegistration = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const registerForJobListing = async data => {
    setLoading(true)
    setError(null)
    try {
      const response = await authService.registerForJobListing(data)
      return response
    } catch (err) {
      setError(err.message || 'Job listing registration failed')
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    registerForJobListing
  }
}
