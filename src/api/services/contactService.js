import apiClient from '../apiClient'

const contactService = {
  async sendMessage (data) {
    try {
      const response = await apiClient.post('contact/email', data, {
        requireAuth: false
      })
      return response
    } catch (error) {
      console.error('Contact form submission error:', error)
      throw new Error(error.message || 'Contact form submission failed')
    }
  }
}

export default contactService
