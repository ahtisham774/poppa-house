import { Link } from 'react-router-dom'

const CardView = ({ title, icon, viewAll, list }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          {icon && icon}
          <h2 className='text-2xl -mt-1 font-medium text-primary'>{title}</h2>
        </div>
        {viewAll && (
          <Link
            to={viewAll}
            className='flex items-center font-medium text-sm text-[#2B4BB4]'
          >
            View All
            <svg
              className='ml-1 h-4 w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Link>
        )}
      </div>

      <div className='bg-white rounded-lg shadow border border-gray-100 p-6'>
        <div className='space-y-4'>
          {list?.map(item => (
            <div
              key={item?.id}
              className='border-b border-[#D5D5D5] pb-4 mb-2 last:border-b-0 last:pb-0 last:mb-0'
            >
              <div className='flex justify-between mb-1'>
                <h3 className='text-base font-medium text-gray-900'>
                  {item?.title}
                </h3>
                <span className='text-xs text-[#888888]'>{item?.date}</span>
              </div>
              <p className='text-sm text-[#505050] max-w-sm'>
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardView
