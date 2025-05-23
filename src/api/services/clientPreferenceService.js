import apiClient from '../apiClient'

const CLIENT_URL = 'clientProfile/intension_category'

const clientPreferenceService = {
  async updateIntentions (clientId, data) {
    try {
      const response = await apiClient.put(
        `${CLIENT_URL}/updateIntentions/${clientId}`,
        data,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Update Intentions error:', error)
      throw new Error(error.message || 'Update Intentions failed')
    }
  },
  async updateCategories (clientId, data) {
    try {
      const response = await apiClient.put(
        `${CLIENT_URL}/updateCategory/${clientId}`,
        data,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Update Categories error:', error)
      throw new Error(error.message || 'Update Categories failed')
    }
  }
}


export default clientPreferenceService