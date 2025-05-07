
import { useState } from "react"
import { Modal, Input, Button, Checkbox } from "antd"

const { TextArea } = Input

const MakeOfferModal = ({ visible, onCancel, onSubmit, propertyPrice }) => {
  const [offerAmount, setOfferAmount] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [sharePhone, setSharePhone] = useState(false)
  const charLimit = 700

  return (
    <Modal
      title="Make an Offer"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
      className="offer-modal"
    >
      <div className="py-2">
        <p className="text-gray-600 mb-4">Current price: £{propertyPrice}</p>

        <div className="mb-4">
          <p className="font-medium mb-2">Your Offer Amount</p>
          <Input
            placeholder="Enter your offer amount"
            prefix="£"
            value={offerAmount}
            onChange={(e) => setOfferAmount(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <p className="font-medium mb-2">Special Requests (Optional)</p>
          <TextArea
            placeholder="Enter any special request or conditions..."
            rows={4}
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            maxLength={charLimit}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {specialRequests.length}/{charLimit} words
          </div>
        </div>

        <div className="mb-4">
          <Checkbox checked={sharePhone} onChange={(e) => setSharePhone(e.target.checked)}>
            I'd like to share my phone number with the property lister for faster communication.
          </Checkbox>
        </div>

        <div className="bg-[#FFF9E6] p-4 rounded-md mb-4">
          <p className="text-[#8B4513] font-medium">Proppa House Negotiation Policy:</p>
          <p className="text-[#8B4513] text-sm">
            To protect all parties, negotiations must take place within the platform. This ensures transparency, enables
            verification support, and allows us to assist in dispute resolution. Deals made outside the platform are not
            eligible for protection.
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            type="primary"
            onClick={() => onSubmit({ offerAmount, specialRequests, sharePhone })}
            className="bg-[#1e293b] hover:bg-[#334155]"
          >
            Submit Offer
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default MakeOfferModal
