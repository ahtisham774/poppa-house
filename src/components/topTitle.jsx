import { Link } from 'react-router-dom'

const TopTitle = ({ parent="You",title, subTitle, description }) => {
  const location = window.location.pathname.split('/').slice(1)
  return (
    <div className='flex justify-between items-center mb-6'>
      <div>
        <h1 className='text-2xl font-semibold text-gray-900 mb-1'>{title}</h1>
        <div className='flex items-center flex-wrap text-sm text-gray-500'>
          <Link to={`/${location.slice(0,(location.length-1)).join("/")}`} className='text-secondary font-bold'>
            {parent}
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
        <p className='font-medium mt-1'>
         {description}
        </p>
      </div>
      
    </div>
  )
}

export default TopTitle
