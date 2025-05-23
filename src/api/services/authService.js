import apiClient, {
  clearToken,
  clearUser,
  setToken,
  setUser
} from '../apiClient'
import cloudinaryService from '../cloudinaryService'

const authService = {
  /**
   * Basic user registration
   * @param {Object} userData - { name, email, password }
   * @returns {Promise<Object>} Registration response
   */
  async registerBasic (userData) {
    try {
      const response = await apiClient.post('auth/signup', userData, {
        requireAuth: false
      })
      if (response.token) {
        setToken(response.token)
      }
      if (response.user) {
        setUser(response.user)
      }
      return response
    } catch (error) {
      console.error('Basic registration error:', error)
      throw new Error(error.message || 'Registration failed')
    }
  },

  /**
   * Job listing registration
   * @param {Object} registrationData - Registration data for job listing
   * @returns {Promise<Object>} Response with checkout URL
   */
  async registerForJobListing (registrationData) {
    try {
      const response = await apiClient.post(
        'auth/signup/jobListing/register',
        registrationData,
        { requireAuth: false }
      )
      return response
    } catch (error) {
      console.error('Job listing registration error:', error)
      throw new Error(error.message || 'Job listing registration failed')
    }
  },

  /**
   * Register with role (with optional file uploads)
   * @param {Object} userData - User registration data
   * @param {File} [profilePictureFile] - Optional profile picture
   * @param {File} [cvFile] - Optional CV file
   * @returns {Promise<Object>} Registration response
   */
  async registerWithRole (userData, profilePictureFile = null, cvFile = null) {
    try {
      // Upload files if provided
      if (profilePictureFile) {
        const result = await cloudinaryService.uploadFile(
          profilePictureFile,
          'image'
        )
        userData.profilePicture = result.url
      }

      if (cvFile) {
        const result = await cloudinaryService.uploadFile(cvFile, 'raw')
        userData.cv = result.url
      }

      const response = await apiClient.post(
        'auth/signup/registerForRole',
        userData,
        { requireAuth: false }
      )

      return response
    } catch (error) {
      console.error('Role registration error:', error)
      throw new Error(error.message || 'Registration with role failed')
    }
  },

  /**
   * Email/password login
   * @param {string} email
   * @param {string} password
   * @returns {Promise<Object>} Login response
   */
  async login (email, password) {
    try {
      const response = await apiClient.post(
        'auth/login',
        { email, password },
        { requireAuth: false }
      )

      if (response.token) {
        setToken(response.token)
      }
      if (response.user) {
        setUser(response.user)
      }

      return response
    } catch (error) {
      throw new Error(error.message || 'Login failed')
    }
  },

  /**
   * Google OAuth login
   * @returns {Promise<Object>} Login response
   */
  async loginWithGoogle () {
    try {
      const response = await apiClient.get('auth/login/google')

      if (response.token) {
        setToken(response.token)
      }
      if (response.user) {
        setUser(response.user)
      }

      return response
    } catch (error) {
      throw new Error(error.message || 'Google login failed')
    }
  },

  /**
   * Facebook OAuth registration/login
   * @returns {Promise<Object>} Auth response
   */
  async authWithFacebook () {
    try {
      const response = await apiClient.get('auth/signup/facebook')

      if (response.token) {
        setToken(response.token)
      }
      if (response.user) {
        setUser(response.user)
      }

      return response
    } catch (error) {
      console.error('Facebook auth error:', error)
      throw new Error(error.message || 'Facebook authentication failed')
    }
  },

  /**
   * Logout user
   * @returns {Promise<void>}
   */
  async logout () {
    try {
      clearToken()
      clearUser()
    } catch (error) {
      console.error('Logout API error:', error)
      // Continue with local logout even if API fails
    }
  },

  /**
   * Contact Admin
   * @param {Object} contactData - Contact data
   * @returns {Promise<Object>} Contact response
   * */
  async contactAdmin (contactData) {
    try {
      const response = await apiClient.post('contact/support', contactData, {
        requireAuth: false
      })
      return response
    } catch (error) {
      console.error('Contact admin error:', error)
      throw new Error(error.message || 'Failed to contact admin')
    }
  },

  /**
   * Get current user profile
   * @returns {Promise<Object>} User profile
   */
  async getProfile () {
    try {
      return await apiClient.get('auth/profile', {}, { requireAuth: true })
    } catch (error) {
      console.error('Get profile error:', error)
      throw new Error(error.message || 'Failed to get profile')
    }
  }
}

export default authService
