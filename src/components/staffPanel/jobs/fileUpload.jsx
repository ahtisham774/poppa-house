import React, { useState } from 'react'

const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState([])

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle files
      console.log('Files dropped:', e.dataTransfer.files)
      setFiles(Array.from(e.dataTransfer.files))
    }
  }

  const handleChange = (e) => {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      // Handle files
      console.log('Files selected:', e.target.files)
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Files to upload:', files)
    // Upload logic would go here
  }

  return (
    <div className="mt-6">
      <div
        className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
          </svg>
        </div>

        <h4 className="text-lg font-medium mb-2">Upload your files</h4>
        <p className="text-sm text-gray-500 text-center mb-4">Drag and drop or click to browse files</p>

        <label className="inline-flex items-center justify-center px-4 py-2 border-2 text-gray-700 rounded-lg cursor-pointer">
          <span>Select Files</span>
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <p className="text-sm mb-2">{files.length} file(s) selected</p>
          <button
            className="w-full py-3 bg-[#131E47] text-white font-medium rounded"
            onClick={handleSubmit}
          >
            Upload Document
          </button>
        </div>
      )}

      {files.length === 0 && (
        <button
          className="w-full mt-4 py-2 bg-[#131E47] text-white font-medium rounded"
          onClick={handleSubmit}
          disabled
        >
          Upload Document
        </button>
      )}
    </div>
  )
}

export default FileUpload
