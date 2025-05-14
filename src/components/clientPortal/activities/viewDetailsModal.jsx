

import { Modal } from "antd"


const ViewDetailsModal = ({ isOpen, onClose }) => {
  const subscriptionDetails = {
    plan: "Premium",
    frequency: "Monthly",
    nextBillingDate: "2025-06-12",
    amount: "$49.99",
    serviceType: "Garden & Lawn Maintenance",
    status: "Active",
  }

  return (
    <Modal
      open={isOpen}
      footer={null}
      onCancel={onClose}
      width={600}
      closeIcon={
        <div className="absolute right-6 top-6 cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      }
    >
      <div className="pt-12 pb-6 px-6">
        <h2 className="text-3xl font-bold text-[#1e293b]">Subscription Details</h2>
        <p className="text-gray-500 mt-2">Review your current subscription details.</p>

        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Plan</p>
              <p className="text-lg font-medium">{subscriptionDetails.plan}</p>
            </div>
            <div>
              <p className="text-gray-500">Frequency</p>
              <p className="text-lg font-medium">{subscriptionDetails.frequency}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Next Billing Date</p>
              <p className="text-lg font-medium">{subscriptionDetails.nextBillingDate}</p>
            </div>
            <div>
              <p className="text-gray-500">Amount</p>
              <p className="text-lg font-medium">{subscriptionDetails.amount}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Service Type</p>
              <p className="text-lg font-medium">{subscriptionDetails.serviceType}</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <p className="text-lg font-medium text-green-600">{subscriptionDetails.status}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="px-6 py-3 bg-[#1e293b] text-white rounded-lg font-medium" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ViewDetailsModal
