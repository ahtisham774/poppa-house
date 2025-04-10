import { Link } from 'react-router-dom'

const TopTitle = ({ title, subTitle }) => {
  return (
    <div className='flex justify-between items-center mb-6'>
      <div>
        <h1 className='text-2xl font-semibold text-gray-900 mb-1'>{title}</h1>
        <div className='flex items-center text-sm text-gray-500'>
          <Link to='/staff/dashboard' className='hover:text-blue-500'>
            You
          </Link>
          <span className='mx-1 mt-1'>
            <svg
              width='16'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.3346 8.5013L4.66797 3.16797V13.8346L11.3346 8.5013Z'
                fill='#737373'
              />
            </svg>
          </span>
          <span className='text-secondary font-bold'>{subTitle || title}</span>
        </div>
      </div>
    </div>
  )
}

export default TopTitle
