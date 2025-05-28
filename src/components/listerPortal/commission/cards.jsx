const Cards = () => {
  const data = [
    {
      title: 'Commission Due',
      description: 'Awaiting payment from recent transactions',
      amount: '£1,876.20',
      icon: (
        <svg
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='36' height='36' rx='18' fill='#FEF9C3' />
          <path
            d='M17.9993 26.3332C22.6017 26.3332 26.3327 22.6022 26.3327 17.9998C26.3327 13.3975 22.6017 9.6665 17.9993 9.6665C13.397 9.6665 9.66602 13.3975 9.66602 17.9998C9.66602 22.6022 13.397 26.3332 17.9993 26.3332Z'
            stroke='#92400E'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18 13V18L21.3333 19.6667'
            stroke='#92400E'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    },
    {
      title: 'Commission Paid',
      description: 'Total commissions received to date',
      amount: '£5,625.00',
      icon: (
        <svg
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='36' height='36' rx='18' fill='#DFF5E6' />
          <path
            d='M26.1669 16.3336C26.5474 18.2013 26.2762 20.1431 25.3984 21.8351C24.5206 23.527 23.0893 24.8669 21.3431 25.6313C19.597 26.3957 17.6415 26.5384 15.8029 26.0355C13.9643 25.5327 12.3537 24.4147 11.2396 22.8681C10.1255 21.3214 9.57529 19.4396 9.68074 17.5364C9.78619 15.6332 10.5409 13.8236 11.8191 12.4095C13.0972 10.9954 14.8215 10.0623 16.7044 9.76561C18.5873 9.46897 20.515 9.82679 22.166 10.7794'
            stroke='#166534'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.5 17.1668L18 19.6668L26.3333 11.3335'
            stroke='#166534'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    },
    {
      title: 'Outstanding',
      description: 'Overdue payments requiring attention',
      amount: '£5,625.00',
      icon: (
        <svg
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='36' height='36' rx='18' fill='#FFD3CB' />
          <path
            d='M17.9993 26.3332C22.6017 26.3332 26.3327 22.6022 26.3327 17.9998C26.3327 13.3975 22.6017 9.6665 17.9993 9.6665C13.397 9.6665 9.66602 13.3975 9.66602 17.9998C9.66602 22.6022 13.397 26.3332 17.9993 26.3332Z'
            stroke='#D50000'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18 14.6665V17.9998'
            stroke='#D50000'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18 21.3335H18.0083'
            stroke='#D50000'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    },
    {
      title: 'Disputed',
      description: 'Transactions under review or disputed',
      amount: '£6,500.00',
      icon: (
        <svg
          width='36'
          height='36'
          viewBox='0 0 36 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='36' height='36' rx='18' fill='#EFF6FF' />
          <path
            d='M17.9993 26.3332C22.6017 26.3332 26.3327 22.6022 26.3327 17.9998C26.3327 13.3975 22.6017 9.6665 17.9993 9.6665C13.397 9.6665 9.66602 13.3975 9.66602 17.9998C9.66602 22.6022 13.397 26.3332 17.9993 26.3332Z'
            stroke='#2B4BB4'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.5742 15.5C15.7701 14.943 16.1568 14.4734 16.6658 14.1743C17.1748 13.8751 17.7733 13.7658 18.3552 13.8656C18.9371 13.9654 19.4649 14.2679 19.8451 14.7196C20.2253 15.1713 20.4334 15.7429 20.4326 16.3333C20.4326 18 17.9326 18.8333 17.9326 18.8333'
            stroke='#2B4BB4'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M18 22.1665H18.0083'
            stroke='#2B4BB4'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
    }
  ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {data.map((item, index) => (
        <div
          key={index}
          className='bg-white border border-[#B1B1B1] rounded-xl shadow p-5  flex flex-col  gap-2'
        >
          <div className='flex items-center justify-between gap-3'>
            <h3 className='text-base font-medium text-[#636366]'>
              {item.title}
            </h3>
            <div className='shrink-0'>{item.icon}</div>
          </div>
          <span className='text-2xl font-semibold text-[#202224]'>
            {item.amount}
          </span>
          <p className='text-sm text-[#636366] font-normal'>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Cards
