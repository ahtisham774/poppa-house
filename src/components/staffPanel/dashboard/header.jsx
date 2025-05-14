const Header = ({ user, handleSidebar }) => {
  return (
    <div className='flex justify-between md:justify-end items-center  bg-white border-b p-5'>
      <button
        onClick={handleSidebar}
        className='md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
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
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 7.08299L10.5151 5.50108C8.93316 3.81585 6.36837 3.81584 4.78644 5.50108C3.20452 7.18632 3.20452 9.91862 4.78644 11.6039L12 19.2885L19.2136 11.6039C20.7955 9.91862 20.7955 7.18632 19.2136 5.50108C17.6316 3.81585 15.0668 3.81584 13.4849 5.50108L12 7.08299ZM12.0015 3.91759C14.4036 1.36027 18.297 1.36081 20.6985 3.91918C23.1005 6.47807 23.1005 10.6269 20.6985 13.1858L12.7249 21.6801C12.3245 22.1066 11.6755 22.1066 11.2751 21.6801L3.30152 13.1858C0.8995 10.6269 0.899489 6.47808 3.30152 3.91918C5.70355 1.36027 9.59798 1.36028 12 3.91918C12.0005 3.91865 12.001 3.91812 12.0015 3.91759Z'
                  fill='#282828'
                />
              </svg>
            </button>
          </div>
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
