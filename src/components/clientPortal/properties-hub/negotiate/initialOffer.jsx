const InitialOffer = ({ offerAmount, specialRequests }) => {
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
  
          <div className="bg-[#EFF6FF] border border-[#BFDBFE] p-4 rounded-md mb-4 text-[#1E40AF]">
            <p className="text-sm">
              Your initial offer has been submitted. The property owner will review your offer and respond soon.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default InitialOffer
  