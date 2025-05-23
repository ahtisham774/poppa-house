import { useState } from 'react';
import cloudinaryService from '../api/cloudinaryService';
import authService from '../api/services/authService';
import { showToast } from '../utils/toast'; // Optional utility

export const useRegisterForm = ({ form }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [cvUrl, setCvUrl] = useState('');

  const uploadFile = async (file, resourceType) => {
    if (!file) return null;

    try {
      const result = await cloudinaryService.uploadFile(file, resourceType);
      return result.url;
    } catch (err) {
      setError(`Upload failed: ${err.message}`);
      showToast('error', err.message || 'File upload failed');
      throw err;
    }
  };

  const handleRegister = async (userData, profilePictureFile, cvFile) => {
    setLoading(true);
    setError(null);

    try {
      let profileUrl = profilePictureUrl;
      let cvUrlResult = cvUrl;

      // Extract raw files if they exist
      const profileFile = profilePictureFile?.originFileObj || profilePictureFile;
      const cvRawFile = cvFile?.originFileObj || cvFile;

      if (profileFile) {
        profileUrl = await uploadFile(profileFile, 'image');
        setProfilePictureUrl(profileUrl);
        form.setFieldsValue({ profilePicture: { url: profileUrl } });
      }

      if (cvRawFile) {
        cvUrlResult = await uploadFile(cvRawFile, 'raw');
        setCvUrl(cvUrlResult);
        form.setFieldsValue({ cv: { url: cvUrlResult } });
      }

      const payload = {
        ...userData,
        ...(profileUrl && { profilePicture: profileUrl }),
        ...(cvUrlResult && { cv: cvUrlResult }),
      };

      const response = await authService.registerWithRole(payload);
      showToast('success', 'Registration successful!');
      return response;
    } catch (err) {
      setError(err.message || 'Registration failed');
      showToast('error', err.message || 'Something went wrong');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    profilePictureUrl,
    cvUrl,
    handleRegister,
  };
};