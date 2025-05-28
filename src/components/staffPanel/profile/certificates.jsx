import { UploadOutlined } from '@ant-design/icons'
import { Button, Progress, Upload, message } from 'antd'
import { useEffect, useState } from 'react' // Import your Cloudinary service
import cloudinaryService from '../../../api/cloudinaryService'

const Certificates = ({ uploadedCertificates, handleUpdateCertificates }) => {
  const [certificates, setCertificates] = useState([])
  const [uploadStates, setUploadStates] = useState({})
  const [deletingIndex, setDeletingIndex] = useState(null)
  const [fileList, setFileList] = useState([]) // Track files to be uploaded

  // Initialize with uploaded certificates
  useEffect(() => {
    setCertificates(uploadedCertificates || [])
  }, [uploadedCertificates])

  const handleBeforeUpload = file => {
    if (file.type !== 'image/jpeg') {
      message.error(`${file.name} is not a JPEG file`)
      return Upload.LIST_IGNORE
    }
    // Add to file list but don't upload yet
    setFileList(prev => [...prev, file])
    return false // Prevent automatic upload
  }

  const handleChange = ({ file, fileList }) => {
    // Update file list when files are added/removed
    setFileList(fileList)
  }

  const handleRemove = file => {
    setFileList(prev => prev.filter(f => f.uid !== file.uid))
  }

  const handleUpload = async () => {
    if (fileList.length === 0) {
      message.warning('No files to upload')
      return
    }

    const uploadedFiles = []

    for (const file of fileList) {
      try {
        // Set upload state for this file
        setUploadStates(prev => ({
          ...prev,
          [file.uid]: {
            name: file.name,
            percent: 0,
            status: 'uploading'
          }
        }))

        // Ensure we're passing the actual File object to Cloudinary
        const response = await cloudinaryService.uploadFile(
          file.originFileObj || file,
          'image'
        )

        // Update progress to 100%
        setUploadStates(prev => ({
          ...prev,
          [file.uid]: {
            ...prev[file.uid],
            percent: 100,
            status: 'done'
          }
        }))

        // Add to certificates list
        const newCertificate = {
          url: response.url,
          publicId: response.public_id,
          name: file.name
        }

        uploadedFiles.push(newCertificate)

        // Remove upload state after 2 seconds
        setTimeout(() => {
          setUploadStates(prev => {
            const newStates = { ...prev }
            delete newStates[file.uid]
            return newStates
          })
        }, 2000)
      } catch (error) {
        setUploadStates(prev => ({
          ...prev,
          [file.uid]: {
            ...prev[file.uid],
            status: 'error',
            error: error.message
          }
        }))
        message.error(`Failed to upload ${file.name}: ${error.message}`)
      }
    }

    // Update certificates with all successfully uploaded files
    if (uploadedFiles.length > 0) {
      const updatedCertificates = [...certificates, ...uploadedFiles]
      setCertificates(updatedCertificates)
      handleUpdateCertificates(updatedCertificates)
      setFileList([]) // Clear the upload queue
      message.success(`Uploaded ${uploadedFiles.length} file(s) successfully`)
    }
  }

  const handleDelete = async index => {
    const certToDelete = certificates[index]
    setDeletingIndex(index)

    try {
      if (certToDelete.publicId) {
        await cloudinaryService.deleteFile(certToDelete.publicId)
      }

      const updatedCertificates = certificates.filter((_, i) => i !== index)
      setCertificates(updatedCertificates)
      handleUpdateCertificates(updatedCertificates)
      message.success(
        `${certToDelete.name || 'Certificate'} deleted successfully`
      )
    } catch (error) {
      message.error(`Failed to delete: ${error.message}`)
    } finally {
      setDeletingIndex(null)
    }
  }

  const handleView = url => {
    window.open(url, '_blank')
  }

  // Get active uploads for display
  const activeUploads = Object.values(uploadStates)

  return (
    <div className='flex flex-col gap-5'>
      <h2 className='font-medium text-sm'>Certifications (JPEG format only)</h2>

      <div className='flex items-start gap-2 flex-col w-full border-2 rounded-lg p-2'>
        <Upload
          name='certificates'
          accept='image/jpeg'
          className='w-full'
          multiple
          fileList={fileList}
          listType='picture'
          showUploadList={{
            showPreviewIcon: false,
            showRemoveIcon: true,
            showDownloadIcon: false
          }}
          beforeUpload={handleBeforeUpload}
          onChange={handleChange}
          onRemove={handleRemove}
          disabled={activeUploads.length > 0}
        >
          <Button
            htmlType='button'
            className='border-none rounded-none outline-none !w-full'
            icon={<UploadOutlined />}
          >
            Select Files (JPEG only)
          </Button>
        </Upload>
        <Button
          type='primary'
          onClick={handleUpload}
          className={`self-end ${fileList.length === 0 ? 'hidden' : 'block'}`}
          disabled={fileList.length === 0 || activeUploads.length > 0}
          loading={activeUploads.length > 0}
        >
          {activeUploads.length > 0 ? 'Uploading...' : 'Start Upload'}
        </Button>
      </div>

      {/* Upload progress indicators */}
      {activeUploads.length > 0 && (
        <div className='space-y-2'>
          {activeUploads.map((upload, idx) => (
            <div key={idx} className='flex items-center gap-3'>
              <div className='w-32 truncate text-sm'>{upload.name}</div>
              <Progress
                percent={upload.percent}
                status={upload.status}
                strokeColor={upload.status === 'error' ? '#ff4d4f' : undefined}
                className='flex-1'
              />
              {upload.status === 'error' && (
                <span className='text-red-500 text-xs'>{upload.error}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certificates list */}
      <div className='flex flex-wrap gap-5'>
        {certificates.map((cert, index) => (
          <div
            key={index}
            className='w-32 h-32 relative bg-gray-100 rounded-lg overflow-hidden group'
          >
            <img
              src={cert.url}
              alt={`Certificate ${cert.name || index + 1}`}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
              <div className='flex items-center justify-center text-white gap-2 text-sm font-medium'>
                <button
                  type='button'
                  onClick={() => handleView(cert.url)}
                  className='hover:scale-110 transition-transform'
                  aria-label='openInNewTab'
                >
                  <svg
                    width='26'
                    height='25'
                    viewBox='0 0 26 25'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <ellipse cx='13' cy='12.5' rx='13' ry='12.5' fill='white' />
                    <g clipPath='url(#clip0_0_1)'>
                      <path
                        d='M13.875 15.25L11.125 12.5L7.6875 15.9375V7.6875H17.3125V15.25M12.5 13.875L14.5625 11.8125L17.3125 14.5625V17.3125H7.6875V15.25'
                        stroke='black'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10.4375 11.125C11.007 11.125 11.4688 10.6633 11.4688 10.0938C11.4688 9.52421 11.007 9.0625 10.4375 9.0625C9.86796 9.0625 9.40625 9.52421 9.40625 10.0938C9.40625 10.6633 9.86796 11.125 10.4375 11.125Z'
                        stroke='black'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_0_1'>
                        <rect
                          width='11'
                          height='11'
                          fill='white'
                          transform='translate(7 7)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button
                  type='button'
                  onClick={() => handleDelete(index)}
                  className='hover:scale-110 transition-transform'
                  disabled={deletingIndex === index}
                  aria-label='deleteImage'
                >
                  {deletingIndex === index ? (
                    <div className='size-6 border-2 border-white border-t-transparent rounded-full animate-spin' />
                  ) : (
                    <svg
                      width='26'
                      height='25'
                      viewBox='0 0 26 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <ellipse
                        cx='13'
                        cy='12.5'
                        rx='13'
                        ry='12.5'
                        fill='white'
                      />
                      <path
                        d='M9.375 18.125C9.03125 18.125 8.73708 18.0027 8.4925 17.7581C8.24792 17.5135 8.12542 17.2192 8.125 16.875V8.75H7.5V7.5H10.625V6.875H14.375V7.5H17.5V8.75H16.875V16.875C16.875 17.2188 16.7527 17.5131 16.5081 17.7581C16.2635 18.0031 15.9692 18.1254 15.625 18.125H9.375ZM15.625 8.75H9.375V16.875H15.625V8.75ZM10.625 15.625H11.875V10H10.625V15.625ZM13.125 15.625H14.375V10H13.125V15.625Z'
                        fill='#FF3D00'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates
