import apiClient from '../apiClient'

const SERVICE_HUB_URL = 'servicesHub'

const serviceHub = {
  async addService (service) {
    try {
      const response = await apiClient.post(
        `${SERVICE_HUB_URL}/propertyViewing/add`,
        service,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Add Service error:', error)
      throw new Error(error.message || 'Add Service failed')
    }
  },
  async addPropertySearch (service) {
    try {
      const response = await apiClient.post(
        `${SERVICE_HUB_URL}/propertySearch/add`,
        service,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Add Property Search error:', error)
      throw new Error(error.message || 'Add Property Search failed')
    }
  }
}

export default serviceHub
