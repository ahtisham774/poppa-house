/**
 * Generic API Client with comprehensive HTTP methods and error handling
 * Supports authentication tokens, custom headers, and request configuration
 */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api/v1/'
const API_KEY = import.meta.env.VITE_API_KEY || 'your_api_key_here'

// Default headers
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

// Token configuration
const TOKEN_STORAGE_KEY = 'api_token'
const TOKEN_HEADER = 'api-token' // Customize this based on your API requirements

const USER_STORAGE_KEY = 'proppa_user' // Key for storing user data in localStorage


/**
 * Get token from localStorage
 * @returns {string|null} The stored token or null
 */
function getToken () {
  return localStorage.getItem(TOKEN_STORAGE_KEY)
}

/**
 * Store token in localStorage
 * @param {string} token - The token to store
 */
export function setToken (token) {
  localStorage.setItem(TOKEN_STORAGE_KEY, token)
}

/**
 * store user data in localStorage
 * @param {string} user - The user data to store

 * 
 */

export function setUser (user) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
}

/**
 * Get user data from localStorage
 * @return {string|null} The stored user data or null
 *  */
export function getUser () {
  const user = localStorage.getItem(USER_STORAGE_KEY)
  return user ? JSON.parse(user) : null
}

/**
 * remove user data from localStorage
 * @param {string} user - The user data to remove
 * */
export function clearUser () {
  localStorage.removeItem(USER_STORAGE_KEY)
}

/**
 * Remove token from localStorage
 */
export function clearToken () {
  localStorage.removeItem(TOKEN_STORAGE_KEY)
}

async function handleResponse (response) {
  if (!response.ok) {
    let errorMessage = `HTTP error! status: ${response.status}`

    try {
      const errorBody = await response.json()
      errorMessage =
        errorBody.message ||
        errorBody.error ||
        errorBody.detail ||
        response.statusText

      // Auto-clear token if unauthorized
      if (response.status === 401) {
        clearToken()
      }
    } catch (e) {
      errorMessage = response.statusText || errorMessage
    }

    const error = new Error(errorMessage)
    error.status = response.status
    error.response = response
    throw error
  }

  if (response.status === 204) return null

  try {
    return await response.json()
  } catch (e) {
    throw new Error('Failed to parse JSON response')
  }
}

function buildHeaders (options = {}) {
  const headers = { ...DEFAULT_HEADERS }
  headers['api-key'] = API_KEY // Add API key to headers

  // Automatic token handling
  if (options.requireAuth) {
    const token = getToken()
    if (!token) {
      throw new Error('Authentication required but no token found')
    }
    headers[TOKEN_HEADER] = token
  }

  // Manual override options
  if (options.token) {
    headers[TOKEN_HEADER] = options.token
  } else if (options.apiKey) {
    headers['Authorization'] = `ApiKey ${options.apiKey}`
  } else if (options.basicAuth) {
    headers['Authorization'] = `Basic ${btoa(
      `${options.basicAuth.username}:${options.basicAuth.password}`
    )}`
  }

  if (options.headers) {
    Object.assign(headers, options.headers)
  }

  return headers
}

function buildUrl (endpoint, params = {}) {
  const url = new URL(`${API_BASE_URL}${endpoint}`)

  if (params && typeof params === 'object') {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(item => url.searchParams.append(key, item))
        } else {
          url.searchParams.append(key, value)
        }
      }
    })
  }

  return url.toString()
}

const apiClient = {
  async get (endpoint, params = {}, options = {}) {
    const url = buildUrl(endpoint, params)
    const response = await fetch(url, {
      method: 'GET',
      headers: buildHeaders(options),
      credentials: options.credentials || 'same-origin',
      signal: options.signal,
      ...options
    })
    return handleResponse(response)
  },

  async post (endpoint, data, options = {}) {
    const url = buildUrl(endpoint)
    const body = options.stringify !== false ? JSON.stringify(data) : data

    const response = await fetch(url, {
      method: 'POST',
      headers: buildHeaders(options),
      body,
      credentials: options.credentials || 'same-origin',
      signal: options.signal,
      ...options
    })
    return handleResponse(response)
  },

  async put (endpoint, data, options = {}) {
    const url = buildUrl(endpoint)
    const body = options.stringify !== false ? JSON.stringify(data) : data

    const response = await fetch(url, {
      method: 'PUT',
      headers: buildHeaders(options),
      body,
      credentials: options.credentials || 'same-origin',
      signal: options.signal,
      ...options
    })
    return handleResponse(response)
  },

  async patch (endpoint, data, options = {}) {
    const url = buildUrl(endpoint)
    const body = options.stringify !== false ? JSON.stringify(data) : data

    const response = await fetch(url, {
      method: 'PATCH',
      headers: buildHeaders(options),
      body,
      credentials: options.credentials || 'same-origin',
      signal: options.signal,
      ...options
    })
    return handleResponse(response)
  },

  async delete (endpoint, options = {}) {
    const url = buildUrl(endpoint)
    const response = await fetch(url, {
      method: 'DELETE',
      headers: buildHeaders(options),
      credentials: options.credentials || 'same-origin',
      signal: options.signal,
      ...options
    })
    return handleResponse(response)
  },

  async upload (endpoint, formData, options = {}) {
    const url = buildUrl(endpoint)

    const headers = { ...buildHeaders(options) }
    delete headers['Content-Type']

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
      credentials: options.credentials || 'same-origin',
      signal: options.signal,
      ...options
    })
    return handleResponse(response)
  },

  async request (endpoint, config) {
    const url = buildUrl(endpoint, config.params)
    const response = await fetch(url, {
      ...config,
      headers: buildHeaders(config)
    })
    return handleResponse(response)
  }
}

export default apiClient
