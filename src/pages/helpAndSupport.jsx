
import { useState, useRef} from "react"

const HelpAndSupport = () => {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [files, setFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const fileInputRef = useRef(null)

  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
    if (e.target.value) {
      setErrors((prev) => ({ ...prev, subject: undefined }))
    }
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
    if (e.target.value) {
      setErrors((prev) => ({ ...prev, message: undefined }))
    }
  }

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...fileArray])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files) {
      const fileArray = Array.from(e.dataTransfer.files)
      setFiles((prev) => [...prev, ...fileArray])
    }
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", {
        subject,
        message,
        files: files.map((file) => file.name),
      })

      // Reset form
      setSubject("")
      setMessage("")
      setFiles([])
      setSubmitSuccess(true)

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-4  lg:p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-primary">Help & Support</h1>
      <p className="text-[#1E293B] mt-2">Need assistance? Our support team is here to help you.</p>

      {/* Form Section */}
      <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Contact Customer Support Form</h2>

      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
          Your message has been submitted successfully. We&apos;ll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="border border-gray-200 bg-white rounded-lg p-8 flex flex-col">
        {/* Subject Field */}
        <div className="mb-6">
          <label htmlFor="subject" className="block text-primary font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Enter the subject of your inquiry"
            className={`w-full px-4 py-3 border ${errors.subject ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-primary font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Please describe your issue in detail"
            rows={6}
            className={`w-full px-4 py-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Attachment Field */}
        <div className="mb-8">
          <label className="block text-primary font-medium mb-2">Attachment (Optional)</label>
          <p className="text-gray-500 text-sm mb-4">
            You can upload a screenshot, document, or any relevant file to help us understand your issue better.
          </p>

          <div
            className={`border border-dashed ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"} rounded-lg p-8 text-center cursor-pointer`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleBrowseClick}
          >
            <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" multiple />

            <svg
              className="w-12 h-12 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>

            <h3 className="mt-4 text-lg font-medium text-primary">Upload your files</h3>
            <p className="mt-1 text-gray-500">Drag and drop or click to browse files</p>

            <button
              type="button"
              className="mt-4 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={(e) => {
                e.stopPropagation()
                handleBrowseClick()
              }}
            >
              Select Files
            </button>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h4>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
                    <span className="text-sm truncate max-w-xs">{file.name}</span>
                    <button type="button" onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full self-end bg-primary text-white py-2 px-8 max-w-xs rounded-md font-medium hover:bg-[#1E293B] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit Message"}
        </button>
      </form>
    </div>
  )
}

export default HelpAndSupport
