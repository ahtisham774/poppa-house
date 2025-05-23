import apiClient from '../apiClient'
import cloudinaryService from '../cloudinaryService'

const clientDocumentService = {
  async uploadDocument (id, document, type) {
    if (document) {
      const result = await cloudinaryService.uploadFile(document, 'raw')
      let documentUrl = result.url
      const response = await apiClient.post(
        `clientProfile/documents/upload/${id}`,
        { documentUrl, type },
        {
          requireAuth: true
        }
      )
      return response
    }
  },
  async getDocuments (id) {
    try {
      const response = await apiClient.get(
        `clientProfile/documents/list/${id}`,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Get Client Documents error:', error)
      throw new Error(error.message || 'Get Client Documents failed')
    }
  }
}

export default clientDocumentService
