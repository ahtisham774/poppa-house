import { useState } from 'react'
import {
  FiUpload,
  FiLock,
  FiClock,
  FiCheck,
  FiFileText,
  FiImage,
  FiVideo
} from 'react-icons/fi'
import DocumentUploadModal from './documentUploadModal'

const Documents = () => {
  // State for document data
  const [documentCategories, setDocumentCategories] = useState([
    {
      id: 'identity',
      title: 'Identity Verification',
      description: 'Mandatory for all users unless using property viewing',
      required: true,
      documents: [
        {
          id: 'passport',
          type: 'passport',
          title: 'Passport (International users)',
          description: 'Valid government-issued passport',
          status: 'not_uploaded'
        },
        {
          id: 'national_id',
          type: 'id',
          title: "National ID or Driver's License (UK users)",
          description: 'Valid photo ID for identity verification',
          status: 'not_uploaded'
        }
      ]
    },
    {
      id: 'residency',
      title: 'Proof of Residency',
      description: 'Required before accessing Property Maintenance Services',
      required: true,
      documents: [
        {
          id: 'utility_bill',
          type: 'bill',
          title: 'Utility Bill',
          description: 'Recent bill as proof of current residential address',
          status: 'not_uploaded'
        },
        {
          id: 'bank_statement_address',
          type: 'bank_statement',
          title: 'Bank Statement',
          description: 'Bank statement showing your address',
          status: 'pending',
          submittedDate: 'March 22, 2025'
        }
      ]
    },
    {
      id: 'financial_buyer',
      title: 'Proof of Financial Readiness (Buyer)',
      description:
        'Required before making offers or negotiating - buyers must upload these documents.',
      required: false,
      documents: [
        {
          id: 'mortgage_agreement',
          type: 'mortgage',
          title: 'Mortgage Agreement in Principle',
          description:
            'Document confirming borrowing eligibility (if using a mortgage)',
          status: 'verified',
          verifiedDate: 'March 22, 2025'
        },
        {
          id: 'bank_statement_funds',
          type: 'bank_statement',
          title: 'Bank Statement',
          description: 'Bank Statement showing available funds',
          status: 'not_uploaded'
        },
        {
          id: 'proof_deposit',
          type: 'deposit',
          title: 'Proof of Deposit',
          description:
            'Evidence of funds available for deposit (if applicable)',
          status: 'not_uploaded'
        }
      ]
    },
    {
      id: 'financial_renter',
      title: 'Proof of Financial Readiness (Renter)',
      description:
        'Required before making offers or negotiating - Renter must upload these documents.',
      required: false,
      documents: [
        {
          id: 'proof_employment',
          type: 'employment',
          title: 'Proof of Employment',
          description: 'Current employment status (Recent Payslip or Contract)',
          status: 'not_uploaded'
        },
        {
          id: 'bank_statement_income',
          type: 'bank_statement',
          title: 'Bank Statement',
          description: 'Bank Statement showing income transactions',
          status: 'pending',
          submittedDate: 'March 22, 2025'
        }
      ]
    },
    {
      id: 'guarantor',
      title: 'Guarantor Details',
      description:
        'Information of guarantor for support (if required by lister)',
      required: false,
      documents: [
        {
          id: 'guarantor_details',
          type: 'guarantor',
          title: 'Guarantor Details',
          description:
            'Information of guarantor for support (if required by lister)',
          status: 'not_uploaded'
        }
      ]
    }
  ])

  // State for uploaded files
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: '1',
      fileName: 'Living Room Photos.zip',
      fileType: 'Image',
      fileSize: '12.5 MB',
      uploadedDate: 'Oct 18, 2025'
    },
    {
      id: '2',
      fileName: 'Kitchen Inspection.pdf',
      fileType: 'Document',
      fileSize: '12.5 MB',
      uploadedDate: 'Oct 18, 2025'
    },
    {
      id: '3',
      fileName: 'Bathroom Issues.jpg',
      fileType: 'Image',
      fileSize: '12.5 MB',
      uploadedDate: 'Oct 18, 2025'
    },
    {
      id: '4',
      fileName: 'Property Overview Video.mp4',
      fileType: 'Video',
      fileSize: '12.5 MB',
      uploadedDate: 'Oct 18, 2025'
    }
  ])

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState(null)
  const [viewingDocument, setViewingDocument] = useState(null)

  // Handle document upload click
  const handleUploadClick = document => {
    setSelectedDocument(document)
    setIsModalOpen(true)
  }

  // Handle document view click
  const handleViewDocument = document => {
    setViewingDocument(document)
    setIsModalOpen(true)
  }

  // Handle document upload
  const handleDocumentUpload = (documentId, file) => {
    // Update document status to pending
    setDocumentCategories(prevCategories => {
      return prevCategories.map(category => {
        const updatedDocuments = category.documents.map(doc => {
          if (doc.id === documentId) {
            return {
              ...doc,
              status: 'pending',
              fileName: file.name,
              fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
              submittedDate: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            }
          }
          return doc
        })

        return {
          ...category,
          documents: updatedDocuments
        }
      })
    })

    // Add to uploaded files
    const fileType = file.type.startsWith('image/')
      ? 'Image'
      : file.type.startsWith('video/')
      ? 'Video'
      : 'Document'

    setUploadedFiles(prev => [
      ...prev,
      {
        id: Math.random().toString(36).substring(2, 9),
        fileName: file.name,
        fileType: fileType,
        fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        uploadedDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }
    ])

    setIsModalOpen(false)
  }

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedDocument(null)
    setViewingDocument(null)
  }

  // Render document status badge
  const renderStatusBadge = status => {
    switch (status) {
      case 'pending':
        return (
          <span className='inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800'>
            <FiClock className='mr-1' /> Pending
          </span>
        )
      case 'verified':
        return (
          <span className='inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800'>
            <FiCheck className='mr-1' /> Verified
          </span>
        )
      case 'rejected':
        return (
          <span className='inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800'>
            <FiClock className='mr-1' /> Rejected
          </span>
        )
      default:
        return null
    }
  }

  // Render document card
  const renderDocumentCard = document => {
    const isUploaded = document.status !== 'not_uploaded'

    return (
      <div
        key={document.id}
        className='border  rounded-lg flex-1 p-4 mb-4 bg-white'
        onClick={() => (isUploaded ? handleViewDocument(document) : null)}
      >
        <div className='flex justify-between items-start'>
          <div className='flex items-start'>
          
            <div className='w-full'>
              <h3 className='font-medium text-gray-900'>{document.title}</h3>
             
            
            </div>
          </div>
          <div className='flex items-center'>
            {renderStatusBadge(document.status)}
            {document.status === 'not_uploaded' && (
              <button
                onClick={e => {
                  e.stopPropagation()
                  handleUploadClick(document)
                }}
                className='ml-2 inline-flex items-center px-3 py-1  text-xs leading-5 font-medium rounded-md text-[#1A1A1A] bg-[#E9E9E9] hover:text-[#888888] focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150'
              >
                <FiUpload className='mr-1' /> Upload
              </button>
            )}
            {document.status === 'verified' && (
              <span className='ml-2 inline-flex items-center px-2 py-1 text-xs font-medium text-green-800'>
                <FiLock className='mr-1' /> Locked
              </span>
            )}
          </div>
        </div>
          <p className='text-sm text-[#888888] w-full my-1'>{document.description}</p>
          {document.submittedDate && document.status === 'pending' && (
                <p className='text-xs text-[#888888] mt-1'>
                  Submitted on {document.submittedDate}
                </p>
              )}
              {document.verifiedDate && document.status === 'verified' && (
                <p className='text-xs text-[#888888] mt-1'>
                  Verified on {document.verifiedDate}
                </p>
              )}
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-5'>
      <div className='bg-white rounded-lg br p-6 mb-6 flex flex-col gap-8'>
        <h2 className='text-xl font-semibold mb-6 flex items-center gap-2'>
          <svg
            width='16'
            height='17'
            viewBox='0 0 16 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.86812 17C7.62069 17 7.39388 16.9361 7.1877 16.8083L4.46602 15.1466C3.31137 14.4649 2.37322 13.5276 1.65156 12.3346C0.929906 11.1416 0.507221 9.86341 0.383509 8.5L0.0123713 3.70677C-0.0288663 3.36591 0.03299 3.05702 0.19794 2.78008C0.36289 2.50313 0.589696 2.32205 0.878359 2.23684C1.33197 2.10902 1.74435 1.91729 2.11548 1.66165C2.5691 1.36341 2.98147 0.97995 3.35261 0.511278C3.60003 0.170425 3.95055 0 4.40417 0H11.3321C11.7857 0 12.1362 0.170425 12.3836 0.511278C12.7548 0.97995 13.1671 1.36341 13.6207 1.66165C13.9919 1.91729 14.4043 2.10902 14.8579 2.23684C15.1465 2.32205 15.3733 2.50313 15.5383 2.78008C15.7032 3.05702 15.7857 3.34461 15.7857 3.64286L15.3527 8.43609C15.2702 9.8421 14.8682 11.131 14.1465 12.3026C13.4249 13.4743 12.4867 14.4223 11.3321 15.1466L8.61039 16.8083C8.36297 16.9361 8.11554 17 7.86812 17ZM4.40417 1.15038C4.32169 1.15038 4.25983 1.17168 4.2186 1.21428C3.80622 1.76817 3.33199 2.25815 2.7959 2.68421C2.34229 2.98246 1.84744 3.19549 1.31135 3.32331C1.18764 3.36592 1.12578 3.45113 1.12578 3.57895L1.55878 8.37218C1.64125 9.56516 1.99177 10.6729 2.61033 11.6955C3.2289 12.718 4.03303 13.5276 5.02273 14.1241L7.7444 15.7857C7.82688 15.8283 7.90935 15.8283 7.99183 15.7857L10.7135 14.1241C11.7032 13.5276 12.5073 12.7287 13.1259 11.7274C13.7445 10.7262 14.095 9.60777 14.1775 8.37218L14.6104 3.57895C14.6104 3.49373 14.5486 3.42982 14.4249 3.38722C13.8888 3.2594 13.3939 3.02506 12.9403 2.68421C12.4042 2.30075 11.93 1.83208 11.5176 1.2782C11.4764 1.23559 11.4145 1.21428 11.3321 1.21428L4.40417 1.15038ZM7.31141 10.3534C7.14646 10.3534 7.00213 10.2895 6.87842 10.1617L5.33201 8.56391C5.24953 8.4787 5.21861 8.36153 5.23922 8.21241C5.25984 8.06328 5.3217 7.93546 5.42479 7.82895C5.52789 7.72243 5.64129 7.65852 5.765 7.63722C5.88871 7.61591 6.01243 7.64787 6.13614 7.73308L7.31141 8.94737L9.97123 6.13534C10.0949 6.09273 10.2187 6.07143 10.3424 6.07143C10.4661 6.07143 10.5795 6.12469 10.6826 6.2312C10.7857 6.33772 10.8475 6.45489 10.8681 6.58271C10.8888 6.71053 10.8578 6.83835 10.7754 6.96617L7.68255 10.1617C7.60007 10.2895 7.47636 10.3534 7.31141 10.3534Z'
              fill='black'
            />
          </svg>
          Legal Documentation & Verifications
        </h2>
        {documentCategories.map(category => (
          <div key={category.id} className='mb-1'>
            <h3 className='text-lg font-medium text-gray-900 mb-1'>
              {category.title}
            </h3>
            <p className='text-sm text-[#888888] mb-4'>{category.description}</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>{category.documents.map(document => renderDocumentCard(document))}</div>
          </div>
        ))}
      </div>

      <div className='bg-white rounded-lg br p-6 mb-6 flex flex-col gap-8'>
        <h2 className='text-xl font-semibold mb-6'>Uploaded Files</h2>

        <div className='overflow-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className=''>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-primary  uppercase tracking-wider'
                >
                  File Name
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-primary  uppercase tracking-wider'
                >
                  Type
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-primary  uppercase tracking-wider'
                >
                  Size
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-primary  uppercase tracking-wider'
                >
                  Uploaded
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-primary  uppercase tracking-wider'
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {uploadedFiles.map(file => (
                <tr key={file.id}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    {file.fileName}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm '>
                    <div className='flex items-center'>
                      {file.fileType === 'Image' && (
                        <FiImage className='mr-2' />
                      )}
                      {file.fileType === 'Document' && (
                        <FiFileText className='mr-2' />
                      )}
                      {file.fileType === 'Video' && (
                        <FiVideo className='mr-2' />
                      )}
                      {file.fileType}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm '>
                    {file.fileSize}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm '>
                    {file.uploadedDate}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm '>
                    <button className='text-gray-600 hover:text-gray-900'>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1875 16.1875C16.1875 16.9032 15.8436 17.5385 15.3125 17.9375V21C15.3125 21.3481 15.1742 21.6819 14.9281 21.9281C14.6819 22.1742 14.3481 22.3125 14 22.3125C13.6519 22.3125 13.3181 22.1742 13.0719 21.9281C12.8258 21.6819 12.6875 21.3481 12.6875 21V17.9375C12.3892 17.7138 12.153 17.4175 12.0014 17.0768C11.8499 16.7362 11.7879 16.3624 11.8213 15.9911C11.8548 15.6197 11.9827 15.263 12.1928 14.955C12.4029 14.6469 12.6882 14.3977 13.0217 14.2309C13.3552 14.0642 13.7258 13.9855 14.0983 14.0022C14.4708 14.019 14.8329 14.1307 15.15 14.3267C15.4672 14.5227 15.729 14.7966 15.9106 15.1223C16.0922 15.4479 16.1875 15.8146 16.1875 16.1875Z" fill="black"/>
<path d="M8.75 6.125C8.75 4.73261 9.30312 3.39726 10.2877 2.41269C11.2723 1.42812 12.6076 0.875 14 0.875C15.3924 0.875 16.7277 1.42812 17.7123 2.41269C18.6969 3.39726 19.25 4.73261 19.25 6.125V8.75H21C21.9283 8.75 22.8185 9.11875 23.4749 9.77513C24.1313 10.4315 24.5 11.3217 24.5 12.25V23.625C24.5 24.5533 24.1313 25.4435 23.4749 26.0999C22.8185 26.7563 21.9283 27.125 21 27.125H7C6.07174 27.125 5.1815 26.7563 4.52513 26.0999C3.86875 25.4435 3.5 24.5533 3.5 23.625V12.25C3.5 11.3217 3.86875 10.4315 4.52513 9.77513C5.1815 9.11875 6.07174 8.75 7 8.75H8.75V6.125ZM17.0625 6.125C17.0625 5.31277 16.7398 4.53382 16.1655 3.95949C15.5912 3.38516 14.8122 3.0625 14 3.0625C13.1878 3.0625 12.4088 3.38516 11.8345 3.95949C11.2602 4.53382 10.9375 5.31277 10.9375 6.125V8.75H17.0625V6.125ZM7 10.5C6.53587 10.5 6.09075 10.6844 5.76256 11.0126C5.43437 11.3408 5.25 11.7859 5.25 12.25V23.625C5.25 24.0891 5.43437 24.5342 5.76256 24.8624C6.09075 25.1906 6.53587 25.375 7 25.375H21C21.4641 25.375 21.9092 25.1906 22.2374 24.8624C22.5656 24.5342 22.75 24.0891 22.75 23.625V12.25C22.75 11.7859 22.5656 11.3408 22.2374 11.0126C21.9092 10.6844 21.4641 10.5 21 10.5H7Z" fill="black"/>
</svg>

                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Document Upload Modal */}
      {isModalOpen && selectedDocument && (
        <DocumentUploadModal
          document={selectedDocument}
          onClose={handleCloseModal}
          onUpload={handleDocumentUpload}
        />
      )}

      {/* Document View Modal */}
      {isModalOpen && viewingDocument && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg max-w-lg w-full mx-4'>
            <div className='flex justify-between items-center p-4 border-b'>
              <div className='flex items-center'>
                <FiFileText className='mr-2' size={20} />
                <h3 className='text-lg font-medium'>{viewingDocument.title}</h3>
              </div>
              <button
                onClick={handleCloseModal}
                className='text-[#888888] hover:text-gray-700'
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>

            <div className='p-6'>
              {viewingDocument.status === 'pending' && (
                <>
                  <div className='bg-blue-50 p-4 rounded-lg mb-4'>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Status: Pending
                    </h4>
                    <p className='text-gray-600'>
                      {viewingDocument.description}
                    </p>
                    <p className='text-gray-600 text-sm mt-1'>
                      Submitted on {viewingDocument.submittedDate}
                    </p>
                  </div>

                  <div className='bg-yellow-50 p-4 rounded-lg'>
                    <div className='flex items-start'>
                      <FiClock className='mr-2 mt-1 text-yellow-600' />
                      <div>
                        <h4 className='font-medium text-yellow-800'>
                          Under Review
                        </h4>
                        <p className='text-yellow-800'>
                          Your document is currently being reviewed by our team.
                          This process typically takes 1-3 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {viewingDocument.status === 'verified' && (
                <>
                  <div className='bg-blue-50 p-4 rounded-lg mb-4'>
                    <h4 className='font-medium text-gray-900 mb-2'>
                      Status: Verified
                    </h4>
                    <p className='text-gray-600'>
                      {viewingDocument.description}
                    </p>
                    <p className='text-gray-600 text-sm mt-1'>
                      Verified on {viewingDocument.verifiedDate}
                    </p>
                  </div>

                  <div className='bg-green-50 p-4 rounded-lg'>
                    <div className='flex items-start'>
                      <FiLock className='mr-2 mt-1 text-green-600' />
                      <div>
                        <h4 className='font-medium text-green-800'>
                          Document Verified and Locked
                        </h4>
                        <p className='text-green-800'>
                          This document has been verified and locked. No further
                          changes can be made. If you need to update this
                          information, please contact support.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Documents
