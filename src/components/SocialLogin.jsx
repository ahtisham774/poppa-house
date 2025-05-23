import { Button } from 'antd'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useLogin } from '../hooks/useLogin'
import { showToast } from '../utils/toast'
import apiClient, { API_BASE_URL, setToken, setUser } from '../api/apiClient'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/useAuth'

const SocialLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const { setUser: setUserData } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we have Google OAuth callback parameters
    if (searchParams.get('token') && searchParams.get('user')) {
      setLoading(true)
      const token = searchParams.get('token')
     
      const user = JSON.parse(decodeURIComponent(searchParams.get('user')))
      setUserData(user)
      setUser(user)
      setToken(token)
      setSearchParams({})
      setLoading(false)
      showToast('success', 'Login successful!')
     
         navigate(user?.role == "Staff" ? "/staff/dashboard" : user?.role == "Client" ? "/client/dashboard" : "/"); // Redirect based on user role
      
    }
  }, [searchParams])

  const handleGoogleLogin = () => {
    setLoading(true)
    window.location.href = `${API_BASE_URL}auth/login/google`
  }

  const handleFacebookLogin = async () => {
    setLoading(true)
    window.location.href = `${API_BASE_URL}auth/signup/facebook`
  }

  return (
    <div className='flex items-center justify-center gap-5'>
      {loading && (
        <div className='flex items-center fixed inset-0 z-10 bg-[rgba(0,0,0,0.3)] justify-center'>
          <div className='size-10 border-4 border-t-4 border-gray-200 border-t-primary rounded-full animate-spin'></div>
        </div>
      )}
      <Button
        loading={loading}
        disabled={loading}
        onClick={handleGoogleLogin}
        icon={<FcGoogle size={25} className='mt-1' />}
        className='w-fit text-base border-[#D9D9D9] py-5 font-medium rounded-xl bg-white'
      >
        Sign in with Google
      </Button>
      <Button
        loading={loading}
        disabled={loading}
        onClick={handleFacebookLogin}
        icon={<FaFacebook color='#1877F2' size={25} className='mt-1' />}
        className='w-fit text-base border-[#D9D9D9] py-5 font-medium rounded-xl bg-white'
      >
        Sign in with Facebook
      </Button>
    </div>
  )
}

export default SocialLogin
