import { Input, Button } from 'antd'
import {
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export function Footer () {
  return (
    <footer className='bg-primary text-white py-12'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[20%_20%_20%_30%] gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Company</h3>
            <ul className='space-y-2 opacity-60'>
              <li>
                <a href='#' className='hover:text-accent'>
                  About Us
                </a>
              </li>
              <li>
                <Link to="/register"  className='hover:text-accent'>
                  Register to Advertise
                </Link>
              </li>
              <li>
                <a href='#' className='hover:text-accent'>
                  Career
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-accent'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2 opacity-60'>
              <li>
                <a href='#' className='hover:text-accent'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-accent'>
                  Terms and Condition
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-accent'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-accent'>
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-semibold'>Reach Us</h3>
            <p className='opacity-60'>Phone: +44 740 525 3088</p>
            <p className='opacity-60'>Email: info@proppahouse.com</p>
            <p className='opacity-60'>
              Address: One Business Village, Emily Street, Hull, HU9 1ND
            </p>
          </div>
          <div>
            <Link to='/' className='flex items-center'>
              <img
                src='/assets/logo_yellow.png'
                alt='Asare Viewing'
                className='h-24 mb-2 '
              />
            </Link>
            <p className='mb-4'>Subscribe to our Blog & Market Insights
            </p>
            <div className='flex bg-white rounded-lg overflow-hidden'>
              <Input
                placeholder='Enter your Email'
                className='mr-2 p-2 rounded-none !border-none !ring-0 !outline-none'
              />
              <Button className='bg-accent text-primary hover:!bg-accent py-5 font-medium text-base border-none'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className='flex space-x-4 justify-center my-4'>
          <YoutubeOutlined className='text-xl hover:text-accent cursor-pointer' />
          <FaFacebookF className='text-xl hover:text-accent cursor-pointer' />
          <TwitterOutlined className='text-xl hover:text-accent cursor-pointer' />
          <FaLinkedinIn className='text-xl hover:text-accent cursor-pointer' />
          <InstagramOutlined className='text-xl hover:text-accent cursor-pointer' />
        </div>
        <div className='mt-8 pt-8 border-t border-[#FFFFFF] flex justify-center items-center'>
          <p className='text-sm mb-4 md:mb-0 opacity-60 text-center '>
            Proppa House is the trading name of Asare Viewing Ltd, registered in
            England & Wales. (Company No: 15771237)
          </p>
        </div>
      </div>
    </footer>
  )
}
