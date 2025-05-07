const OfferHistory = ({ history = [] }) => {
  if (history.length === 0) {
    return (
      <div className='py-8 text-center'>
        <p className='text-[#64748B]'>No offer history available.</p>
      </div>
    )
  }

  return (
    <div className='py-4'>
      <div className='space-y-6'>
        {history.map((entry, index) => (
          <div
            key={index}
            className={` rounded-lg ${
              entry.from === 'you'
                ? 'bg-[#EFF6FF]'
                : 'bg-white br'
            }`}
          >
            <div className='flex justify-between p-4 border-b w-full flex-wrap border-b-[#737373] items-center mb-2'>
              <span className='font-medium text-[#1E293B] mr-2'>
                {entry.from === 'you' ? 'You' : 'Lister'}
              </span>
              <span
                className={`text-xs px-3 border font-medium py-1 rounded ${getStatusBadgeStyle(
                  entry.status
                )}`}
              >
                {formatStatus(entry.status)}
              </span>
            </div>
            <div className="p-4 w-full flex flex-col justify-between">
                <div className='mb-2 '>
                  <span className='font-medium text-sm'>Offer Amount:</span>
                  <span className='font-bold text-[#1E293B] ml-2'>
                    £{entry.amount.toLocaleString()}
                  </span>
                </div>
                {entry.message && (
                  <div className='mt-2'>
                    <span className='font-medium text-sm'>Message:</span>
                    <p className='text-[#1E293B] mt-1'>{entry.message}</p>
                  </div>
                )}
                <span className='text-[10px] mt-2 text-[#888888] self-end'>{entry.date}</span>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const getStatusBadgeStyle = status => {
  switch (status) {
    case 'initial':
      return 'bg-[#FDFBFD] text-[#131E47]'
    case 'counter':
      return 'bg-[#EFF6FF] text-[#2B4BB4]'
    case 'accepted':
      return 'bg-[#DFF5E6] text-[#166534]'
    case 'rejected':
      return 'bg-[#FFD3CB] text-[#D50000]'
    case 'pending':
      return 'bg-[#FEF9C3] text-[#92400E]'
    default:
      return 'bg-[#F1F5F9] text-[#64748B]'
  }
}

const formatStatus = status => {
  switch (status) {
    case 'initial':
      return 'Initial Offer'
    case 'counter':
      return 'Counter Offer'
    case 'accepted':
      return 'Accepted'
    case 'rejected':
      return 'Rejected'
    case 'pending':
      return 'Pending Response'
    default:
      return status
  }
}

export default OfferHistory
