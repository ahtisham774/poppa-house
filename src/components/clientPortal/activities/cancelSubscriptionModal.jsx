
import { useState } from "react"
import { Modal } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"



const CancelSubscriptionModal = ({ isOpen, onClose }) => {
  const [cancelOption, setCancelOption] = useState("")
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleCancel = () => {
    if (cancelOption && termsAccepted) {
      // Process cancellation
      console.log("Subscription cancelled with option:", cancelOption)
      onClose()
    } else {
      // Show validation error
      console.log("Please select an option and accept terms")
    }
  }

  return (
    <Modal
      open={isOpen}
      footer={null}
      onCancel={onClose}
      width={600}
    
    >
      <div className="pt-12 pb-6 px-6">
        <h2 className="text-2xl font-medium text-primary">Cancel Subscription</h2>
        <p className="text-gray-500 mt-2">Please select how you would like to cancel your subscription.</p>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-primary mb-4">Choose one</h3>

          <div className="flex items-center mb-4">
            <div
              className={`w-6 h-6 rounded-full border ${cancelOption === "immediate" ? "border-primary" : "border-gray-300"} flex items-center justify-center cursor-pointer`}
              onClick={() => setCancelOption("immediate")}
            >
              {cancelOption === "immediate" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
            </div>
            <label className="ml-3 text-lg font-medium cursor-pointer" onClick={() => setCancelOption("immediate")}>
              Immediate effect
            </label>
          </div>

          <div className="flex items-center mb-8">
            <div
              className={`w-6 h-6 rounded-full border ${cancelOption === "end-of-cycle" ? "border-primary" : "border-gray-300"} flex items-center justify-center cursor-pointer`}
              onClick={() => setCancelOption("end-of-cycle")}
            >
              {cancelOption === "end-of-cycle" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
            </div>
            <label className="ml-3 text-lg font-medium cursor-pointer" onClick={() => setCancelOption("end-of-cycle")}>
              End of current billing cycle
            </label>
          </div>

          <div className="bg-[#FFF9E7] border border-[#FEF0C7] rounded-lg p-4 mb-8 flex items-start">
            <ExclamationCircleOutlined style={{ color: "#B54708", fontSize: "20px", marginTop: "2px" }} />
            <p className="ml-3 text-[#B54708]">
              There will be charges if cancellation is made outside the cancellation window.
            </p>
          </div>

          <div className="flex items-center mb-8">
            <div
              className={`w-6 h-6 rounded-full border ${termsAccepted ? "border-primary" : "border-gray-300"} flex items-center justify-center cursor-pointer`}
              onClick={() => setTermsAccepted(!termsAccepted)}
            >
              {termsAccepted && <div className="w-3 h-3 rounded-full bg-primary"></div>}
            </div>
            <label className="ml-3 text-lg font-medium cursor-pointer" onClick={() => setTermsAccepted(!termsAccepted)}>
              I understand the terms and conditions of cancellation
            </label>
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium" onClick={onClose}>
            Go Back
          </button>
          <button
            className={`px-6 py-3 bg-primary text-white rounded-lg font-medium ${!cancelOption || !termsAccepted ? "opacity-70 cursor-not-allowed" : ""}`}
            onClick={handleCancel}
            disabled={!cancelOption || !termsAccepted}
          >
            Cancel Subscription
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default CancelSubscriptionModal
