
import { useState, useRef } from "react"
import { FiUpload, FiX } from "react-icons/fi"



const DocumentUploadModal = ({ document, onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const fileInputRef = useRef(null)

  // Handle file selection
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  // Handle drag events
  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  // Handle browse files click
  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // Handle submit
  const handleSubmit = () => {
    if (selectedFile && isConfirmed) {
      onUpload(document.id, selectedFile)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">Upload {document.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>

        <div className="p-6">
          <div
            className={`border-2 border-dashed rounded-lg p-8 mb-6 flex flex-col items-center justify-center cursor-pointer ${
              isDragging ? "border-primary bg-blue-50" : "border-gray-300"
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleBrowseClick}
          >
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            />

            {selectedFile ? (
              <div className="text-center">
                <div className="text-green-600 mb-2">
                  <svg className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-medium">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                <button
                  className="mt-3 text-sm text-primary hover:text-primary"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedFile(null)
                  }}
                >
                  Change file
                </button>
              </div>
            ) : (
              <>
                <FiUpload className="h-12 w-12 text-gray-400 mb-3" />
                <h4 className="text-lg font-medium mb-1">Upload your document</h4>
                <p className="text-sm text-gray-500 text-center mb-4">Drag and drop or click to browse files</p>
                <button
                  className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBrowseClick()
                  }}
                >
                  Select Files
                </button>
              </>
            )}
          </div>

          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-2"
                checked={isConfirmed}
                onChange={(e) => setIsConfirmed(e.target.checked)}
              />
              <span className="text-sm text-gray-700">
                I confirm that this document is authentic and accurate. I understand that providing false information
                may result in termination of my account.
              </span>
            </label>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className={`px-4 py-2 rounded-md text-white ${
                selectedFile && isConfirmed ? "bg-primary/95 hover:bg-primary" : "bg-primary/40 cursor-not-allowed"
              }`}
              disabled={!selectedFile || !isConfirmed}
              onClick={handleSubmit}
            >
              Submit Document
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentUploadModal
