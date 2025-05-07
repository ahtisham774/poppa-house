
import { Button } from "antd"

const OfferRejected = ({ offerAmount, specialRequests, onMakeOffer }) => {
  return (
    <div className="py-4">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-[#1E293B]">Your Last Offer:</span>
          <span className="font-bold text-[#1E293B]">£{offerAmount.toLocaleString()}</span>
        </div>

        <div className="bg-[#F8FAFC] p-4 rounded-md mb-4">
          <h4 className="font-medium text-[#1E293B] mb-2">Special Requests:</h4>
          <p className="text-[#64748B]">{specialRequests}</p>
        </div>

        <div className="bg-[#FEE2E2] border border-[#FCA5A5] p-4 rounded-md mb-6 text-[#B91C1C]">
          <h4 className="font-medium mb-2">Deal Not Finalized</h4>
          <p className="text-sm">
            Your offer was either rejected or canceled. You can submit a new offer after 48 hours. Take this time to
            reassess and return with confidence.
          </p>
        </div>

        <Button
          type="primary"
          block
          className="bg-[#FACC15] hover:bg-[#F59E0B] text-black border-none h-12 font-medium"
          onClick={onMakeOffer}
        >
          Make an Offer Again
        </Button>
      </div>
    </div>
  )
}

export default OfferRejected
