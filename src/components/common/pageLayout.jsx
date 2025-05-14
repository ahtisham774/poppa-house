import { Outlet } from 'react-router-dom'

const PageLayout = ({ title, description }) => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-6'>
      <h1 className='text-2xl font-medium text-primary mb-1'>Activities</h1>
      <p className='text-[#131E47] mb-6'>
        Track and manage all your property-related activities
      </p>
      {<Outlet />}
    </div>
  )
}

export default PageLayout
