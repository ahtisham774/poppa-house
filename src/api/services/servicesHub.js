import apiClient from '../apiClient'
import cloudinaryService from '../cloudinaryService'

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
  },
  async addBillConsolidation (service) {
    return await apiClient.post(
      `${SERVICE_HUB_URL}/billConsolidation/add`,
      service,
      {
        requireAuth: true
      }
    )
  },
  async addPropertyInsurance (service) {
    return await apiClient.post(
      `${SERVICE_HUB_URL}/propertyInsurance/add`,
      service,
      {
        requireAuth: true
      }
    )
  },
  async addMaintenanceService (type, service) {
    try {
      if (service?.files?.length > 0) {
        const files = await cloudinaryService.uploadMultipleFiles(
          service.files,
          'auto'
        )
        service.files = files.map(file => ({
          url: file.url,
          public_id: file.public_id,
          width: file.width,
          height: file.height,
          format: file.format,
          resource_type: file.resource_type,
          original_filename: file.original_filename
        }))
      }

      const response = await apiClient.post(
        `${SERVICE_HUB_URL}/${type}/add`,
        service,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Add Maintenance Service error:', error)
      throw new Error(error.message || 'Add Maintenance Service failed')
    }
  }
}

export default serviceHub
