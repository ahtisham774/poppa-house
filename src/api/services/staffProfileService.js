import apiClient from '../apiClient'
import cloudinaryService from '../cloudinaryService'

const STAFF_URL = 'staff'
const STAFF_PROFILE_URL = 'profile'
const url = `${STAFF_URL}/${STAFF_PROFILE_URL}`

const staffProfileService = {
  async getStaffProfile (staffId) {
    return await apiClient.get(`${url}/get/${staffId}`)
  },
  async uploadProfileImage (staffId, profileImage) {
    if (profileImage) {
      const result = await cloudinaryService.uploadFile(profileImage, 'image')
      let profilePictureUrl = result.url
      return await apiClient.post(
        `${url}/upload/${staffId}`,
        { profilePictureUrl },
        {
          requireAuth: true
        }
      )
    }
  },
  async updateProfile (staffId, data) {
    return await apiClient.put(
      `${url}/update/${staffId}`,
      data,
      {
        requireAuth: true
      }
    )
  },
  async getStaffReviews (staffId) {
    return await apiClient.get(`${STAFF_URL}/rating_reviews/get/${staffId}`, {
      requireAuth: true
    })
  }
}

export default staffProfileService
