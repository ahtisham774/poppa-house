import { useState } from 'react'
import { useAuth } from '../../context/useAuth'
import { Button, Modal, Upload } from 'antd'
import clientProfileService from '../../api/services/clientProfileService'
import { UploadOutlined } from '@ant-design/icons'
import { showToast } from '../../utils/toast'

const UpdateProfileModal = ({ open, handleClose, onSubmit }) => {
  const { handleUserUpdate, user } = useAuth()
  const [profilePicture, setProfilePicture] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFileUpload = async file => {
    const isValidFileType = [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/webp'
    ].includes(file.type)
    const isValidFileSize = file.size / 1024 / 1024 < 2 // 2MB limit
    if (!isValidFileType) {
      showToast(
        'error',
        'Invalid file type. Please upload a PNG or JPEG image.'
      )
      return false
    }
    if (!isValidFileSize) {
      showToast('error', 'File size exceeds 2MB limit.')
      return false
    }
    setProfilePicture(file)

    return false // Prevent automatic upload
  }

  const handleSaveChanges = async () => {
    if (!profilePicture) {
      showToast('error', 'Please upload a profile picture.')
      return
    }
    setLoading(true)
    onSubmit(profilePicture)
      .then(res => {
        if (res) {
          handleUserUpdate({
            ...user,
            profilePicture: res?.url
          })
          handleClose()
        }
      })
      .catch(err => {
        console.error('Error uploading file:', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      width={800}
      centered
      className='update-profile-modal'
    >
      <div className='p-6'>
        <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
          Update Profile
        </h2>
        <Upload
          name='profilePicture'
          className={
            'p-5 border-2 rounded-xl !w-full flex flex-col items-start overflow-auto'
          }
          style={{
            borderRadius: '0px',
            border: 'none',
            background: '#fff',
            width: '100%'
          }}
          accept='.png, .jpg, .jpeg, .webp'
          multiple={false}
          maxCount={1}
          listType='picture'
          showUploadList={true}
          beforeUpload={handleFileUpload}
          customRequest={({ onSuccess }) => {
            setTimeout(() => {
              onSuccess('ok')
            }, 0)
          }}
        >
          <Button
            htmlType='button'
            className='border-none rounded-none outline-none !w-full'
            icon={<UploadOutlined />}
          >
            Click to upload
          </Button>
        </Upload>

        <button
          onClick={handleSaveChanges}
          disabled={loading}
          className='bg-primary disabled:cursor-not-allowed disabled:opacity-60 text-white px-4 py-2 rounded mt-6'
        >
          Save Changes
        </button>
      </div>
    </Modal>
  )
}

export default UpdateProfileModal
