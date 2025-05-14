import React, { useState } from 'react'

const UploadedFiles = ({title, files = [], allowEdit = true, showEdit = true }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [fileToDelete, setFileToDelete] = useState(null)

  // Sample files if none provided
  const defaultFiles = [
    {
      id: 1,
      name: 'Living Room Photos.zip',
      type: 'Image',
      size: '12.5 MB',
      uploaded: 'Oct 18, 2025'
    },
    {
      id: 2,
      name: 'Kitchen Inspection.pdf',
      type: 'Document',
      size: '12.5 MB',
      uploaded: 'Oct 18, 2025'
    },
    {
      id: 3,
      name: 'Bathroom Issues.jpg',
      type: 'Image',
      size: '12.5 MB',
      uploaded: 'Oct 18, 2025'
    },
    {
      id: 4,
      name: 'Property Overview Video.mp4',
      type: 'Video',
      size: '12.5 MB',
      uploaded: 'Oct 18, 2025'
    }
  ]

  const filesList = files.length > 0 ? files : defaultFiles

  const handleDeleteClick = file => {
    setFileToDelete(file)
    setShowDeleteModal(true)
  }

  const handleConfirmDelete = () => {
    console.log('Deleting file:', fileToDelete)
    // Delete logic would go here
    setShowDeleteModal(false)
    setFileToDelete(null)
  }

  const handleCancelDelete = () => {
    setShowDeleteModal(false)
    setFileToDelete(null)
  }

  if (filesList.length === 0) {
    return null
  }

  return (
    <div className='bg-white rounded-lg br  '>
      <div className='border-b border-[#B1B1B1] p-4'>
        <h3 className='text-xl font-medium'>{title || 'Uploaded Files'}</h3>
      </div>
      <div className='p-6'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead>
              <tr>
                <th className='px-4 py-3 text-left text-xs font-bold text-[#131E47] capitalize tracking-wider'>
                  File Name
                </th>
                <th className='px-4 py-3 text-left text-xs font-bold text-[#131E47] capitalize tracking-wider'>
                  Type
                </th>
                <th className='px-4 py-3 text-left text-xs font-bold text-[#131E47] capitalize tracking-wider'>
                  Size
                </th>
                <th className='px-4 py-3 text-left text-xs font-bold text-[#131E47] capitalize tracking-wider'>
                  Uploaded
                </th>
                {showEdit && (
                  <th className='px-4 py-3 text-left text-xs font-bold text-[#131E47] capitalize tracking-wider'>
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {filesList.map(file => (
                <tr key={file.id}>
                  <td className='px-4 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      {file.name}
                    </div>
                  </td>
                  <td className='px-4 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{file.type}</div>
                  </td>
                  <td className='px-4 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{file.size}</div>
                  </td>
                  <td className='px-4 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-500'>{file.uploaded}</div>
                  </td>
                  <td className='px-4 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {showEdit &&
                      (allowEdit ? (
                        <div className='flex space-x-2'>
                          <button className='text-blue-600 hover:text-blue-800'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                              />
                            </svg>
                          </button>
                          <button
                            className='text-red-600 hover:text-red-800'
                            onClick={() => handleDeleteClick(file)}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                              />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div>
                          <svg
                            width='28'
                            height='28'
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M16.1875 16.1875C16.1875 16.9032 15.8436 17.5385 15.3125 17.9375V21C15.3125 21.3481 15.1742 21.6819 14.9281 21.9281C14.6819 22.1742 14.3481 22.3125 14 22.3125C13.6519 22.3125 13.3181 22.1742 13.0719 21.9281C12.8258 21.6819 12.6875 21.3481 12.6875 21V17.9375C12.3892 17.7138 12.153 17.4175 12.0014 17.0768C11.8499 16.7362 11.7879 16.3624 11.8213 15.9911C11.8548 15.6197 11.9827 15.263 12.1928 14.955C12.4029 14.6469 12.6882 14.3977 13.0217 14.2309C13.3552 14.0642 13.7258 13.9855 14.0983 14.0022C14.4708 14.019 14.8329 14.1307 15.15 14.3267C15.4672 14.5227 15.729 14.7966 15.9106 15.1223C16.0922 15.4479 16.1875 15.8146 16.1875 16.1875Z'
                              fill='black'
                            />
                            <path
                              d='M8.75 6.125C8.75 4.73261 9.30312 3.39726 10.2877 2.41269C11.2723 1.42812 12.6076 0.875 14 0.875C15.3924 0.875 16.7277 1.42812 17.7123 2.41269C18.6969 3.39726 19.25 4.73261 19.25 6.125V8.75H21C21.9283 8.75 22.8185 9.11875 23.4749 9.77513C24.1313 10.4315 24.5 11.3217 24.5 12.25V23.625C24.5 24.5533 24.1313 25.4435 23.4749 26.0999C22.8185 26.7563 21.9283 27.125 21 27.125H7C6.07174 27.125 5.1815 26.7563 4.52513 26.0999C3.86875 25.4435 3.5 24.5533 3.5 23.625V12.25C3.5 11.3217 3.86875 10.4315 4.52513 9.77513C5.1815 9.11875 6.07174 8.75 7 8.75H8.75V6.125ZM17.0625 6.125C17.0625 5.31277 16.7398 4.53382 16.1655 3.95949C15.5912 3.38516 14.8122 3.0625 14 3.0625C13.1878 3.0625 12.4088 3.38516 11.8345 3.95949C11.2602 4.53382 10.9375 5.31277 10.9375 6.125V8.75H17.0625V6.125ZM7 10.5C6.53587 10.5 6.09075 10.6844 5.76256 11.0126C5.43437 11.3408 5.25 11.7859 5.25 12.25V23.625C5.25 24.0891 5.43437 24.5342 5.76256 24.8624C6.09075 25.1906 6.53587 25.375 7 25.375H21C21.4641 25.375 21.9092 25.1906 22.2374 24.8624C22.5656 24.5342 22.75 24.0891 22.75 23.625V12.25C22.75 11.7859 22.5656 11.3408 22.2374 11.0126C21.9092 10.6844 21.4641 10.5 21 10.5H7Z'
                              fill='black'
                            />
                          </svg>
                        </div>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg p-6 max-w-md w-full'>
              <h3 className='text-lg font-semibold mb-4'>Remove File</h3>
              <p className='mb-6'>
                Are you sure you want to remove this file? This action cannot be
                undone.
              </p>
              <div className='flex justify-end space-x-3'>
                <button
                  className='px-4 py-2 border border-gray-300 rounded text-gray-700'
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
                <button
                  className='px-4 py-2 bg-red-600 text-white rounded'
                  onClick={handleConfirmDelete}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UploadedFiles
