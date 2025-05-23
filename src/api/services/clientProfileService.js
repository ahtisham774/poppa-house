import apiClient from '../apiClient'
import cloudinaryService from '../cloudinaryService'

const CLIENT_URL = 'clientProfile/profile'
const CLIENT_URL_Progress = 'clientProfile/progress'
const CLIENT_PROFILE_SECURITY = 'clientProfile/security'

const clientProfileService = {
  async getClientProfile (clientId) {
    try {
      const response = await apiClient.get(`${CLIENT_URL}/get/${clientId}`, {
        requireAuth: true
      })
      return response
    } catch (error) {
      console.error('Get Client Profile error:', error)
      throw new Error(error.message || 'Get Client Profile failed')
    }
  },
  async updateClientProfile (clientId, data) {
    try {
      const response = await apiClient.put(
        `${CLIENT_URL}/update/${clientId}`,
        data,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Update Client Profile error:', error)
      throw new Error(error.message || 'Update Client Profile failed')
    }
  },
  async uploadProfileImage (clientId, profileImage) {
    try {
      if (profileImage) {
        const result = await cloudinaryService.uploadFile(profileImage, 'image')
        let imageUrl = result.url
        const response = await apiClient.put(
          `${CLIENT_URL}/uploadProfile/${clientId}`,
          { imageUrl },
          {
            requireAuth: true
          }
        )
        return response
      }
    } catch (error) {
      console.error('Upload Profile Image error:', error)
      throw new Error(error.message || 'Upload Profile Image failed')
    }
  },
  async profileCompletion (clientId) {
    try {
      const response = await apiClient.get(
        `${CLIENT_URL_Progress}/profileCompletion/${clientId}`,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Profile Completion error:', error)
      throw new Error(error.message || 'Profile Completion failed')
    }
  },
  async changePassword (clientId, data) {
    try {
      const response = await apiClient.put(
        `${CLIENT_PROFILE_SECURITY}/changePassword/${clientId}`,
        data,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Change Password error:', error)
      throw new Error(error.message || 'Change Password failed')
    }
  },
  async addTwoFactor (clientId) {
    try {
      const response = await apiClient.post(
        `${CLIENT_PROFILE_SECURITY}/setup2FA/${clientId}`,
        {},
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Add Two Factor error:', error)
      throw new Error(error.message || 'Add Two Factor failed')
    }
  },
  async verifyTwoFactor (clientId, data) {
    try {
      const response = await apiClient.post(
        `${CLIENT_PROFILE_SECURITY}/verify2FA/${clientId}`,
        data,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Verify Two Factor error:', error)
      throw new Error(error.message || 'Verify Two Factor failed')
    }
  },
  async disableTwoFactor (clientId) {
    try {
      const response = await apiClient.post(
        `${CLIENT_PROFILE_SECURITY}/disable2FA/${clientId}`,
        {},
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Disable Two Factor error:', error)
      throw new Error(error.message || 'Disable Two Factor failed')
    }
  },
  async getTwoFactor (clientId) {
    try {
      const response = await apiClient.get(
        `${CLIENT_PROFILE_SECURITY}/get2FAInfo/${clientId}`,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Get Two Factor error:', error)
      throw new Error(error.message || 'Get Two Factor failed')
    }
  },
  async getReviews (clientId) {
    try {
      const response = await apiClient.get(
        `clientProfile/review-rating/get/${clientId}`,
        {
          requireAuth: true
        }
      )
      return response
    } catch (error) {
      console.error('Get Reviews error:', error)
      throw new Error(error.message || 'Get Reviews failed')
    }
  }
}

export default clientProfileService
