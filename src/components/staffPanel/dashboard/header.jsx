const Header = ({ user, handleSidebar }) => {
  return (
    <div className='flex justify-between md:justify-end items-center  bg-white border-b p-5'>
      <button 
        onClick={handleSidebar}
        className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className='flex items-center'>
        <div className='relative mr-4'>
          <input
            type='text'
            placeholder='Search for something'
            className='md:w-72 pl-12 pr-4 py-2 rounded-full  bg-[#F5F7FA] text-[#8BA3CB] placeholder:text-[#8BA3CB]  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
          <svg
            className='absolute left-5 top-2.5 h-5 w-5 text-[#8BA3CB]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <div className='relative mr-3 bg-[#F5F7FA] rounded-full'>
          <div className='relative'>
            <button className='text-gray-500 p-1 rounded-full hover:bg-gray-100'>
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>
          </div>
        </div>
        <img
          src={user.avatar}
          alt='User Avatar'
          className='h-10 w-10 rounded-full object-cover'
        />
      </div>
    </div>
  )
}

export default Header
