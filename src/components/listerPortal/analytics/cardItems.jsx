const CardItems = () => {
  const items = [
    {
      title: 'Active Listings',

      growth: '+12%',
      value: 12
    },
    {
      title: 'Total Views',
      growth: '-3%',
      value: 12
    },
    {
      title: 'Total Inquiries',
      growth: '+12%',
      value: 12
    },
    {
      title: 'Total Saves',
      growth: '+12%',
      value: 12
    },
    {
      title: 'Scheduled Viewings',
      growth: '+12%',
      value: 12
    },
    {
      title: 'Offers Received',
      growth: '+12%',
      value: 12
    }
  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {items.map((item, index) => (
        <div
          key={index}
          className='bg-white border border-[#B1B1B1] rounded-xl shadow p-5  flex flex-col  gap-1'
        >
          <div className='flex items-center justify-between gap-3'>
            <h3 className='text-lg font-medium text-[#636366]'>
              {item.title}
            </h3>
            <div className='shrink-0'>
              <svg
                width='50'
                height='45'
                viewBox='0 0 50 45'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='50' height='45' rx='22.5' fill='#FEF9C3' />
                <path
                  d='M25.4987 35.5C32.6324 35.5 38.4154 29.9036 38.4154 23C38.4154 16.0964 32.6324 10.5 25.4987 10.5C18.365 10.5 12.582 16.0964 12.582 23C12.582 29.9036 18.365 35.5 25.4987 35.5Z'
                  stroke='#92400E'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M25.5 15.5V23L30.6667 25.5'
                  stroke='#92400E'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
          <span className='text-2xl font-bold text-[#020817]'>
            {item.value}
          </span>
          <p className={`text-sm font-normal flex items-center gap-1 ${item.growth.startsWith('+') ? 'text-[#16A34A]' : 'text-[#D50000]'}`}>
            {item.growth.startsWith('+') ? (
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                className="mt-0.5"
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.66797 4.6665H11.3346V11.3332'
                  stroke='#16A34A'
                  strokeWidth='1.33333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M4.66797 11.3332L11.3346 4.6665'
                  stroke='#16A34A'
                  strokeWidth='1.33333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ) : (
              <svg
                width='16'
                height='16'
                className="mt-1"
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.66797 4.6665L11.3346 11.3332'
                  stroke='#D50000'
                  strokeWidth='1.33333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M11.3346 4.6665V11.3332H4.66797'
                  stroke='#D50000'
                  strokeWidth='1.33333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}{' '}
            {item.growth} vs prev period
          </p>
        </div>
      ))}
    </div>
  )
}

export default CardItems
