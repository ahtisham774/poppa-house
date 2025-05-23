import { useState } from 'react';
import authService from '../api/services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';


export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {setUser} = useAuth()

  const registerBasic = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.registerBasic(userData);
      setUser(response.user);
      navigate('/'); // Redirect to home page after registration
      return response;
    } catch (err) {
      setError(err.message || 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(email, password);
      setUser(response.user);
      navigate('/'); // Redirect to home page after login
      return response;
    } catch (err) {
      setError(err.message || 'Invalid Credentials');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.loginWithGoogle();
      return response;
    } catch (err) {
      setError(err.message || 'Google login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const loginWithFacebook = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.authWithFacebook();
      return response;
    } catch (err) {
      setError(err.message || 'Facebook login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null); // Clear user state
      navigate('/');

    } catch (err) {
      console.warn('Logout failed:', err);
    }
  };

  return {
    loading,
    error,
    registerBasic,
    login,
    loginWithGoogle,
    loginWithFacebook,
    logout,
  };
};