import React, { useState } from 'react'

const UploadedFiles = ({ files = [] }) => {
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
    <div className='bg-white rounded-lg border border-gray-200  my-6'>
      <div className='border-b border-gray-200 p-4'>
        <h3 className='text-xl font-medium'>Uploaded Files</h3>
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
                <th className='px-4 py-3 text-left text-xs font-bold text-[#131E47] capitalize tracking-wider'>
                  Action
                </th>
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
