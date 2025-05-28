import React, { useEffect, useState } from 'react'
import VerificationCard from './verificationCard'
import VerificationModal from './verificationModal'
import staffProfileService from '../../../api/services/staffProfileService'
import { showToast } from '../../../utils/toast'
import cloudinaryService from '../../../api/cloudinaryService'
import { useAuth } from '../../../context/useAuth'

const VerificationsTab = ({ uploadedDocuments }) => {
  const { user } = useAuth()
  const [showVerificationModal, setShowVerificationModal] = useState(false)
  const [currentVerification, setCurrentVerification] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadError, setUploadError] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState({
    photoId: null,
    nationalInsurance: null,
    references: [],
    rightToWork: null
  })

  // Initialize verifications state with uploaded documents
  const [verifications, setVerifications] = useState({
    photoId: {
      status: uploadedDocuments?.photoId?.status || 'required',
      label: 'Photo ID',
      description: 'Government-issued photo identification',
      type: 'photoId',
      accept: 'image/*',
      value: uploadedDocuments?.photoId?.value || null,
      uploadedAt: uploadedDocuments?.photoId?.uploadedAt || null
    },
    nationalInsurance: {
      status: uploadedDocuments?.nationalInsurance?.status || 'required',
      label: 'National Insurance',
      description: 'National Insurance number verification',
      type: 'nationalInsurance',
      accept: 'application/pdf,image/*',
      value: uploadedDocuments?.nationalInsurance?.value || null,
      uploadedAt: uploadedDocuments?.nationalInsurance?.uploadedAt || null
    },
    references: {
      status: uploadedDocuments?.referenceLetters?.status || 'required',
      label: 'References',
      description: 'Two professional references required',
      type: 'referenceLetters',
      accept: 'application/pdf',
      multiple: true,
      value: uploadedDocuments?.referenceLetters?.value || null,
      uploadedAt: uploadedDocuments?.referenceLetters?.uploadedAt || null
    },
    rightToWork: {
      status: uploadedDocuments?.rightToWorkProof?.status || 'required',
      label: 'Right to Work',
      description: 'Legal right to work verification',
      type: 'rightToWorkProof',
      accept: 'application/pdf,image/*',
      value: uploadedDocuments?.rightToWorkProof?.value || null,
      uploadedAt: uploadedDocuments?.rightToWorkProof?.uploadedAt || null
    }
  })

  // Update verifications when uploadedDocuments changes
  useEffect(() => {
    if (uploadedDocuments) {
      setVerifications(prev => ({
        photoId: {
          ...prev.photoId,
          status: uploadedDocuments.photoId?.status || 'required',
          value: uploadedDocuments.photoId?.value || null,
          uploadedAt: uploadedDocuments.photoId?.uploadedAt || null
        },
        nationalInsurance: {
          ...prev.nationalInsurance,
          status: uploadedDocuments.nationalInsurance?.status || 'required',
          value: uploadedDocuments.nationalInsurance?.value || null,
          uploadedAt: uploadedDocuments.nationalInsurance?.uploadedAt || null
        },
        references: {
          ...prev.references,
          status: uploadedDocuments.referenceLetters?.status || 'required',
          value: uploadedDocuments.referenceLetters?.value?.value || null,
          uploadedAt: uploadedDocuments.referenceLetters?.uploadedAt || null
        },
        rightToWork: {
          ...prev.rightToWork,
          status: uploadedDocuments.rightToWorkProof?.status || 'required',
          value: uploadedDocuments.rightToWorkProof?.value || null,
          uploadedAt: uploadedDocuments.rightToWorkProof?.uploadedAt || null
        }
      }))
    }
  }, [uploadedDocuments])

  const handleVerificationClick = type => {
    setCurrentVerification(type)
    setShowVerificationModal(true)
    setUploadError(null)
  }

  const handleCloseModal = () => {
    setShowVerificationModal(false)
    setCurrentVerification(null)
    setUploadError(null)
  }

  const handleFileChange = event => {
    const files = Array.from(event.target.files)
    if (!files.length) return

    const verificationType = currentVerification
    const verificationConfig = verifications[verificationType]

    if (verificationConfig.multiple) {
      setSelectedFiles(prev => ({
        ...prev,
        [verificationType]: [...(prev[verificationType] || []), ...files]
      }))
    } else {
      setSelectedFiles(prev => ({
        ...prev,
        [verificationType]: files[0]
      }))
    }
  }

  const handleRemoveFile = (fileToRemove, type) => {
    if (verifications[type].multiple) {
      setSelectedFiles(prev => ({
        ...prev,
        [type]: prev[type].filter(file => file.name !== fileToRemove.name)
      }))
    } else {
      setSelectedFiles(prev => ({
        ...prev,
        [type]: null
      }))
    }
  }

  const handleSubmitDocument = async () => {
    if (!currentVerification) return

    const verificationType = currentVerification
    const files = selectedFiles[verificationType]

    if (!files || (Array.isArray(files) && files.length === 0)) {
      setUploadError('Please select at least one file to upload')
      return
    }

    try {
      setUploading(true)
      setUploadProgress(0)

      let uploadResponse
      const fileUrls = []

      // Handle single file uploads
      if (!verifications[verificationType].multiple) {
        uploadResponse = await cloudinaryService.uploadFile(
          files,
          'auto',
          progress => {
            setUploadProgress(progress)
          }
        )
        fileUrls.push(uploadResponse.url)
      }
      // Handle multiple file uploads (for references)
      else {
        const totalFiles = files.length
        let uploadedCount = 0

        for (const file of files) {
          const response = await cloudinaryService.uploadFile(
            file,
            'auto',
            progress => {
              // Calculate overall progress
              const overallProgress =
                (uploadedCount / totalFiles) * 100 + progress / totalFiles
              setUploadProgress(overallProgress)
            }
          )
          fileUrls.push(response.url)
          uploadedCount++
        }
      }

      // Prepare the request body based on document type
      let requestBody = {}
      const now = new Date().toISOString()

      switch (verificationType) {
        case 'photoId':
          requestBody = {
            photoId: {
              value: fileUrls[0],
              status: 'pending',
              uploadedAt: now
            }
          }
          break
        case 'nationalInsurance':
          requestBody = {
            nationalInsurance: {
              value: fileUrls[0],
              status: 'pending',
              uploadedAt: now
            }
          }
          break
        case 'references':
          requestBody = {
            referenceLetters: {
              value: fileUrls,
              status: 'pending',
              uploadedAt: now
            }
          }
          break
        case 'rightToWork':
          requestBody = {
            rightToWorkProof: {
              value: fileUrls[0],
              status: 'pending',
              uploadedAt: now
            }
          }
          break
        default:
          break
      }

      // Call the API to submit the documents
      await staffProfileService.uploadDocuments(user?.userId, requestBody)

      // Update verification status
      setVerifications(prev => ({
        ...prev,
        [verificationType]: {
          ...prev[verificationType],
          status: 'pending',
          value: fileUrls,
          uploadedAt: now,
          submittedDate: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }
      }))

      // Reset selected files for this type
      setSelectedFiles(prev => ({
        ...prev,
        [verificationType]: verifications[verificationType].multiple ? [] : null
      }))

      setShowVerificationModal(false)
      showToast('success', 'Documents uploaded successfully!')
    } catch (error) {
      console.error('Upload failed:', error)
      setUploadError(error.message || 'Failed to upload documents')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  // Function to get completion percentage
  const getCompletionPercentage = () => {
    const total = Object.keys(verifications).length
    const completed = Object.values(verifications).filter(
      v => v.status === 'verified'
    ).length
    return Math.round((completed / total) * 100)
  }

  return (
    <>
      <div className='bg-white rounded-lg  border-2 border-[#b1b1b171] p-3 md:p-6 mb-6 '>
        <div className='flex items-center gap-3 flex-wrap w-full justify-between mb-6'>
          <div className='flex items-center '>
            <svg
              className='h-6 w-6 mr-2 text-gray-700'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              />
            </svg>
            <h2 className='text-xl font-semibold text-gray-900'>
              Verifications
            </h2>
          </div>
          <div className='text-sm text-gray-500 '>
            {getCompletionPercentage()}% Complete
          </div>
        </div>

        <div className='w-full bg-[#E9E9E9] mb-4 rounded-full h-4 relative'>
          <div
            className='bg-secondary h-4 rounded-full transition-all'
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>

        <div className='bg-blue-50 p-4 border border-[#D3E6FF] rounded-lg mb-6'>
          <h3 className='text-[#2B4BB4] text-lg font-medium mb-2'>
            Required Documents
          </h3>
          <p className='text-[#2B4BB4] mb-3'>
            Please upload the following documents to verify your identity and
            eligibility to work:
          </p>
          <ul className='ml-5 text-[#2B4BB4] list-inside space-y-2'>
            <li className='list-disc'>
              Photo ID (passport or driving license)
            </li>
            <li className='list-disc'>
              National Insurance number documentation
            </li>
            <li className='list-disc'>
              Two professional references or referee contact details
            </li>
            <li className='list-disc'>
              Right to work proof (passport, visa, etc)
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <VerificationCard
            type='photoId'
            icon={
              <svg
                width='23'
                height='18'
                className='size-5'
                viewBox='0 0 23 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.8217 9.594C19.004 9.594 19.1564 9.53228 19.2791 9.40886C19.4018 9.28543 19.4627 9.13286 19.4618 8.95114C19.461 8.76943 19.3996 8.61643 19.2778 8.49214C19.156 8.36786 19.0044 8.30657 18.8229 8.30828H14.8912C14.7098 8.30828 14.5577 8.36957 14.4351 8.49214C14.3132 8.61471 14.2523 8.76771 14.2523 8.95114C14.2523 9.13457 14.3132 9.28714 14.4351 9.40886C14.5569 9.53057 14.7089 9.59228 14.8912 9.594H18.8217ZM18.8217 6.03257C19.004 6.03257 19.1564 5.97128 19.2791 5.84871C19.4018 5.72614 19.4627 5.57314 19.4618 5.38971C19.461 5.20629 19.3996 5.05371 19.2778 4.932C19.156 4.81029 19.0044 4.74857 18.8229 4.74686H14.8912C14.7098 4.74686 14.5577 4.80814 14.4351 4.93071C14.3132 5.05414 14.2523 5.20714 14.2523 5.38971C14.2523 5.57229 14.3132 5.72529 14.4351 5.84871C14.5569 5.97214 14.7089 6.03343 14.8912 6.03257H18.8217ZM7.76506 10.6817C7.06398 10.6817 6.47024 10.7306 5.98383 10.8283C5.49657 10.926 5.06 11.0837 4.67411 11.3014C4.34189 11.4814 4.09102 11.6781 3.9215 11.8916C3.75198 12.105 3.66765 12.333 3.6685 12.5756C3.6685 12.7667 3.74389 12.9274 3.89467 13.0577C4.04544 13.188 4.23456 13.2531 4.462 13.2531H11.0681C11.2956 13.2531 11.4847 13.1824 11.6354 13.041C11.7862 12.8996 11.8616 12.7311 11.8616 12.5357C11.8616 12.3197 11.7811 12.1101 11.6201 11.907C11.4591 11.7039 11.2044 11.5024 10.856 11.3027C10.4693 11.0841 10.0327 10.926 9.54628 10.8283C9.05987 10.7306 8.46613 10.6817 7.76506 10.6817ZM7.76506 8.604C8.30428 8.604 8.75831 8.41843 9.12717 8.04729C9.49687 7.67528 9.68172 7.218 9.68172 6.67543C9.68172 6.13286 9.49687 5.676 9.12717 5.30486C8.75746 4.93371 8.30343 4.74771 7.76506 4.74686C7.22669 4.746 6.77265 4.932 6.40294 5.30486C6.03324 5.67771 5.84839 6.13457 5.84839 6.67543C5.84839 7.21629 6.03324 7.67357 6.40294 8.04729C6.77265 8.421 7.22669 8.60657 7.76506 8.604ZM2.06489 18C1.47626 18 0.985167 17.802 0.591611 17.406C0.198056 17.01 0.000851852 16.5154 0 15.9223V2.07771C0 1.48543 0.197204 0.991285 0.591611 0.595285C0.986019 0.199285 1.47668 0.000857143 2.06361 0H20.9364C21.5242 0 22.0148 0.198428 22.4084 0.595285C22.8019 0.992143 22.9991 1.48629 23 2.07771V15.9236C23 16.515 22.8028 17.0091 22.4084 17.406C22.014 17.8029 21.5233 18.0009 20.9364 18H2.06489ZM2.06489 16.7143H20.9364C21.1323 16.7143 21.3125 16.632 21.4769 16.4674C21.6413 16.3029 21.7231 16.1211 21.7222 15.9223V2.07771C21.7222 1.87971 21.6404 1.698 21.4769 1.53257C21.3133 1.36714 21.1332 1.28486 20.9364 1.28571H2.06361C1.86768 1.28571 1.68752 1.368 1.52311 1.53257C1.3587 1.69714 1.27693 1.87886 1.27778 2.07771V15.9236C1.27778 16.1207 1.35956 16.302 1.52311 16.4674C1.68667 16.6329 1.86683 16.7151 2.06361 16.7143'
                  fill='#888888'
                />
              </svg>
            }
           status={verifications.photoId.status}
            label={verifications.photoId.label}
            description={verifications.photoId.description}
            submittedDate={verifications.photoId.uploadedAt ? 
              new Date(verifications.photoId.uploadedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : null}
            verifiedDate={verifications.photoId.status === 'verified' ? 
              new Date(verifications.photoId.uploadedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : null}
            documentUrl={verifications.photoId.value}
            onClick={() => handleVerificationClick('photoId')}
          />

          <VerificationCard
            type='nationalInsurance'
            icon={
              <svg
                width='16'
                height='17'
                className='size-5'
                viewBox='0 0 16 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.86812 17C7.62069 17 7.39388 16.9361 7.1877 16.8083L4.46602 15.1466C3.31137 14.4649 2.37322 13.5276 1.65156 12.3346C0.929906 11.1416 0.507221 9.86341 0.383509 8.5L0.0123713 3.70677C-0.0288663 3.36591 0.03299 3.05702 0.19794 2.78008C0.36289 2.50313 0.589696 2.32205 0.878359 2.23684C1.33197 2.10902 1.74435 1.91729 2.11548 1.66165C2.5691 1.36341 2.98147 0.97995 3.35261 0.511278C3.60003 0.170425 3.95055 0 4.40417 0H11.3321C11.7857 0 12.1362 0.170425 12.3836 0.511278C12.7548 0.97995 13.1671 1.36341 13.6207 1.66165C13.9919 1.91729 14.4043 2.10902 14.8579 2.23684C15.1465 2.32205 15.3733 2.50313 15.5383 2.78008C15.7032 3.05702 15.7857 3.34461 15.7857 3.64286L15.3527 8.43609C15.2702 9.8421 14.8682 11.131 14.1465 12.3026C13.4249 13.4743 12.4867 14.4223 11.3321 15.1466L8.61039 16.8083C8.36297 16.9361 8.11554 17 7.86812 17ZM4.40417 1.15038C4.32169 1.15038 4.25983 1.17168 4.2186 1.21428C3.80622 1.76817 3.33199 2.25815 2.7959 2.68421C2.34229 2.98246 1.84744 3.19549 1.31135 3.32331C1.18764 3.36592 1.12578 3.45113 1.12578 3.57895L1.55878 8.37218C1.64125 9.56516 1.99177 10.6729 2.61033 11.6955C3.2289 12.718 4.03303 13.5276 5.02273 14.1241L7.7444 15.7857C7.82688 15.8283 7.90935 15.8283 7.99183 15.7857L10.7135 14.1241C11.7032 13.5276 12.5073 12.7287 13.1259 11.7274C13.7445 10.7262 14.095 9.60777 14.1775 8.37218L14.6104 3.57895C14.6104 3.49373 14.5486 3.42982 14.4249 3.38722C13.8888 3.2594 13.3939 3.02506 12.9403 2.68421C12.4042 2.30075 11.93 1.83208 11.5176 1.2782C11.4764 1.23559 11.4145 1.21428 11.3321 1.21428L4.40417 1.15038ZM7.31141 10.3534C7.14646 10.3534 7.00213 10.2895 6.87842 10.1617L5.33201 8.56391C5.24953 8.4787 5.21861 8.36153 5.23922 8.21241C5.25984 8.06328 5.3217 7.93546 5.42479 7.82895C5.52789 7.72243 5.64129 7.65852 5.765 7.63722C5.88871 7.61591 6.01243 7.64787 6.13614 7.73308L7.31141 8.94737L9.97123 6.13534C10.0949 6.09273 10.2187 6.07143 10.3424 6.07143C10.4661 6.07143 10.5795 6.12469 10.6826 6.2312C10.7857 6.33772 10.8475 6.45489 10.8681 6.58271C10.8888 6.71053 10.8578 6.83835 10.7754 6.96617L7.68255 10.1617C7.60007 10.2895 7.47636 10.3534 7.31141 10.3534Z'
                  fill='#888888'
                />
              </svg>
            }
           status={verifications.nationalInsurance.status}
            label={verifications.nationalInsurance.label}
            description={verifications.nationalInsurance.description}
            submittedDate={verifications.nationalInsurance.uploadedAt ? 
              new Date(verifications.nationalInsurance.uploadedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : null}
            verifiedDate={verifications.nationalInsurance.status === 'verified' ? 
              new Date(verifications.nationalInsurance.uploadedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : null}
            documentUrl={verifications.nationalInsurance.value}
            onClick={() => handleVerificationClick('nationalInsurance')}
          />

          <VerificationCard
            type='references'
            icon={
              <svg
                width='25'
                height='25'
                className='size-6'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14C14.2652 2.00006 14.5195 2.10545 14.707 2.293L19.707 7.293C19.8946 7.48049 19.9999 7.73481 20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4ZM17.586 8L14 4.414V8H17.586ZM12 4H6V20H18V10H13C12.7348 10 12.4804 9.89464 12.2929 9.70711C12.1054 9.51957 12 9.26522 12 9V4ZM8 13C8 12.7348 8.10536 12.4804 8.29289 12.2929C8.48043 12.1054 8.73478 12 9 12H15C15.2652 12 15.5196 12.1054 15.7071 12.2929C15.8946 12.4804 16 12.7348 16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H9C8.73478 14 8.48043 13.8946 8.29289 13.7071C8.10536 13.5196 8 13.2652 8 13ZM8 17C8 16.7348 8.10536 16.4804 8.29289 16.2929C8.48043 16.1054 8.73478 16 9 16H15C15.2652 16 15.5196 16.1054 15.7071 16.2929C15.8946 16.4804 16 16.7348 16 17C16 17.2652 15.8946 17.5196 15.7071 17.7071C15.5196 17.8946 15.2652 18 15 18H9C8.73478 18 8.48043 17.8946 8.29289 17.7071C8.10536 17.5196 8 17.2652 8 17Z'
                  fill='#888888'
                />
              </svg>
            }
            status={verifications.references.status}
            label={verifications.references.label}
            description={verifications.references.description}
            submittedDate={verifications.references.uploadedAt ? 
              new Date(verifications.references.uploadedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : null}
            verifiedDate={verifications.references.status === 'verified' ? 
              new Date(verifications.references.uploadedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : null}
            documentUrl={verifications.references.value}
            onClick={() => handleVerificationClick('references')}
          />

          <VerificationCard
            type='rightToWork'
            icon={
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                className='size-5'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11 20.5C13.5196 20.5 15.9359 19.4991 17.7175 17.7175C19.4991 15.9359 20.5 13.5196 20.5 11C20.5 8.48044 19.4991 6.06408 17.7175 4.28249C15.9359 2.50089 13.5196 1.5 11 1.5C8.48044 1.5 6.06408 2.50089 4.28249 4.28249C2.50089 6.06408 1.5 8.48044 1.5 11C1.5 13.5196 2.50089 15.9359 4.28249 17.7175C6.06408 19.4991 8.48044 20.5 11 20.5Z'
                  stroke='#888888'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1.5 11H20.5M11 20.5C13.332 20.5 15.222 16.247 15.222 11C15.222 5.753 13.332 1.5 11 1.5C8.668 1.5 6.778 5.753 6.778 11C6.778 16.247 8.668 20.5 11 20.5Z'
                  stroke='#888888'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }
             status={verifications.rightToWork.status}
            label={verifications.rightToWork.label}
            description={verifications.rightToWork.description}
            submittedDate={verifications.rightToWork.uploadedAt ? 
              new Date(verifications.rightToWork.uploadedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : null}
            verifiedDate={verifications.rightToWork.status === 'verified' ? 
              new Date(verifications.rightToWork.uploadedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : null}
            documentUrl={verifications.rightToWork.value}
            onClick={() => handleVerificationClick('rightToWork')}
          />
        </div>
      </div>

      {/* Verification Modal */}
      {showVerificationModal && currentVerification && (
       <VerificationModal
          verification={verifications[currentVerification]}
          selectedFiles={selectedFiles[currentVerification]}
          onClose={handleCloseModal}
          onSubmit={handleSubmitDocument}
          onFileChange={handleFileChange}
          onRemoveFile={(file) => handleRemoveFile(file, currentVerification)}
          uploading={uploading}
          uploadProgress={uploadProgress}
          uploadError={uploadError}
        />
      )}
    </>
  )
}

export default VerificationsTab
