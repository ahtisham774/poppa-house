
import { useState } from "react"
import { GoAlert } from "react-icons/go"

const ContactAdminModal = ({ onClose }) => {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle sending the message to admin
    console.log("Sending message to admin:", message)
    alert("Message sent to admin")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#64748B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex items-center mb-4">
          <GoAlert className="text-primary mr-2" size={24} />
          <h2 className="text-xl font-bold text-primary">Contact Admin Support</h2>
        </div>

        <p className="text-gray-600 mb-4">Use this form to report issues or request assistance from the admin team.</p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your issue or request..."
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 min-h-[120px] focus:outline-none focus:ring-1 focus:ring-primary/50"
            required
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M14.6667 1.33337L7.33341 8.66671M14.6667 1.33337L10 14.6667L7.33341 8.66671M14.6667 1.33337L1.33341 6.00004L7.33341 8.66671"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactAdminModal
