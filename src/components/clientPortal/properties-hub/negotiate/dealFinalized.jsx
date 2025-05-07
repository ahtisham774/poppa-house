const DealFinalized = ({ offerAmount, specialRequests }) => {
    return (
      <div className="py-4">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-[#1E293B]">Your Offer:</span>
            <span className="font-bold text-[#1E293B]">£{offerAmount.toLocaleString()}</span>
          </div>
  
          <div className="bg-[#F8FAFC] p-4 rounded-md mb-4">
            <h4 className="font-medium text-[#1E293B] mb-2">Special Requests:</h4>
            <p className="text-[#64748B]">{specialRequests}</p>
          </div>
  
          <div className="bg-[#ECFDF5] border border-[#A7F3D0] p-4 rounded-md mb-4 text-[#047857]">
            <h4 className="font-medium mb-2">Deal Finalized</h4>
            <p className="text-sm">
              Congratulations! Your agreement is now securely logged and protected by Proppa House. Loved the experience?
              Leave a review or share the journey!
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default DealFinalized
  