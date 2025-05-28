import { useState, useEffect } from 'react'
import { Button, Drawer, Dropdown } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { MenuOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons'
import { RxHamburgerMenu } from 'react-icons/rx'
import { user } from '../../data'
import { useAuth } from '../../context/useAuth'
import { useLogin } from '../../hooks/useLogin'
import ShowProfile from '../common/showProfile'

export function Header () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { user } = useAuth()
  const {logout} = useLogin()

  // Simulate checking if user is logged in
  useEffect(() => {
    // This could be replaced with actual authentication check
    const userLoggedIn = user !== null
    setIsLoggedIn(userLoggedIn)
  }, [user])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const navigate = useNavigate()

  const navLinks = [
    { path: '/services', text: 'Services' },
    { path: '/properties-hub', text: 'Properties Hub' },
    { path: '/blogs', text: 'Blog & Market Insights' },
    { path: '/about', text: 'About Us' },
    { path: '/contact', text: 'Contact Us' }
  ]

  const dropdownItems = [
    { key: 'account', label: 'Account', onClick: () => navigate('/account') },
    { key: 'chat', label: 'Chat', onClick: () => navigate('/chat') },
    {
      key: 'favourites',
      label: 'Favourites',
      onClick: () => navigate('/favourites')
    },
    {
      key: 'logout',
      label: 'Log Out',
      onClick: () => {
        logout()
        setIsLoggedIn(false)
        navigate('/')
      }
    }
  ]

  const gotoCareers = () => navigate('/careers')
  const gotoLogin = () => navigate('/login')

  // For demo purposes
  const handleLogin = () => {
    gotoLogin()
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <header className='border-b border-b-[#B8B8B8] sticky top-0 z-50 bg-white'>
      <div className='container mx-auto px-4 h-20 lg:px-12 flex items-center justify-between'>
        <Link to='/' className='flex items-center'>
          <img
            src='/assets/logo.png'
            alt='Proppa House'
            className='h-12 -mt-2'
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center space-x-8'>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className='text-sm font-medium hover:text-secondary active:text-secondary focus-within:text-secondary'
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className='lg:hidden flex items-center gap-2'>
          {isLoggedIn && (
            <ShowProfile />
          )}
          <button
            className='p-2 text-2xl'
            onClick={toggleMenu}
            aria-label='Open menu'
          >
            <RxHamburgerMenu size={25} />
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className='hidden lg:flex items-center space-x-4'>
          <Button
            onClick={gotoCareers}
            className='bg-secondary text-base font-medium py-4 rounded-lg hover:!bg-secondary hover:!text-foreground/30 text-foreground'
          >
            Careers
          </Button>

          {isLoggedIn ? (
            <div className='relative'>
              <div
                onClick={toggleDropdown}
                className='cursor-pointer flex items-center gap-2 border border-[#8D8D8D] rounded-full px-4 py-0.5'
              >
                <RxHamburgerMenu size={25} />
              <ShowProfile />
              </div>

              {/* Desktop dropdown menu */}
              {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-xl border border-[#b1b1b1] shadow-lg py-1 z-50'>
                  {dropdownItems.map((item, i) => (
                    <button
                      key={item.key}
                      onClick={item.onClick}
                      className={`block w-full ${
                        i < dropdownItems?.length - 1 ? 'border-b-2' : ''
                      } text-left px-4 py-2 text-gray-800 hover:bg-gray-100`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Button
              onClick={handleLogin} /* Changed to handleLogin for demo */
              className='bg-secondary hover:!bg-secondary text-base font-medium py-4 rounded-lg hover:!text-foreground/30 text-foreground'
            >
              Login/Register
            </Button>
          )}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='p-4 flex justify-between'>
            <Link to='/' className='flex items-center'>
              <img src='/assets/logo.png' alt='Proppa House' className='h-12' />
            </Link>
            <button
              onClick={toggleMenu}
              className='p-2 text-xl'
              aria-label='Close menu'
            >
              <CloseOutlined />
            </button>
          </div>

          <nav className='flex flex-col p-4 space-y-4'>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className='text-sm font-medium hover:text-secondary'
                onClick={() => setMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            {isLoggedIn &&
              dropdownItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => {
                    item.onClick()
                    setMenuOpen(false)
                  }}
                  className='text-sm text-start font-medium hover:text-secondary'
                >
                  {item.label}
                </button>
              ))}
            <div className='flex flex-col space-y-4 mt-8'>
              <Button
                onClick={gotoCareers}
                className='bg-secondary text-base font-medium py-4 rounded-lg'
              >
                Careers
              </Button>

              {!isLoggedIn && (
                <Button
                  onClick={handleLogin} /* Changed to handleLogin for demo */
                  className='bg-secondary text-base font-medium py-4 rounded-lg'
                >
                  Login/Register
                </Button>
              )}
            </div>
          </nav>
        </div>

        {/* Backdrop overlay */}
        {menuOpen && (
          <div
            className='fixed inset-0 bg-black/50 z-40 lg:hidden'
            onClick={toggleMenu}
          />
        )}

        {/* Backdrop for dropdown */}
        {dropdownOpen && (
          <div
            className='fixed inset-0 z-40 hidden lg:block'
            onClick={() => setDropdownOpen(false)}
          />
        )}
      </div>
    </header>
  )
}
