import { MdArrowBack } from "react-icons/md"
import { Link } from "react-router-dom"

const AuthLayout = ({ title, subTitle, children }) => {
  return (
    <div className='flex flex-col-reverse lg:flex-row min-h-screen h-full'>
       <Link
        to='/'
        className='flex absolute top-5 left-5 items-center text-primary mb-6'
      >
        <MdArrowBack classID='text-2xl' />{' '}
        <span className='ml-2 font-medium text-2xl'>Go Back</span>
      </Link>
      <div className='lg:w-1/2 p-8 lg:p-24 flex flex-col gap-1 justify-center'>
        <h1 className={`text-3xl lg:text-5xl font-bold text-[#1a1a4b] ${subTitle ? "mb-3" : "mb-8"}`}>{title}</h1>
        {subTitle && <p className='text-gray-600 mb-8'>{subTitle}</p>}
        {children}
      </div>
      <div
        className='lg:w-1/2 bg-cover min-h-screen bg-center lg:rounded-[20px_0_0_20px]'
        style={{
          backgroundImage: `url(/assets/auth.jpg)`
        }}
      ></div>
    </div>
  )
}

export default AuthLayout
