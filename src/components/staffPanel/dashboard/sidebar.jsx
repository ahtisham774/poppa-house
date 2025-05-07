import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../context/useAuth'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = useAuth()
  const role = user?.role
  const [expandedMenus, setExpandedMenus] = useState({
    jobs: true,
    you: false
  })
  const [activeMenu, setActiveMenu] = useState('dashboard') // Track active menu
  const [isMobile, setIsMobile] = useState(false)

  const toggleMenu = menu => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }))
  }
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])
  const handleMenuClick = (menuKey, hasSubItems = false) => {
    if (!hasSubItems) {
      setActiveMenu(menuKey)
    }
  }

  // Check if any submenu item is active
  const isSubItemActive = menuKey => {
    const parentItem = sidebarItems
      .flatMap(section => section.items)
      .find(item => item.menuKey === menuKey)

    return parentItem?.subItems?.some(subItem => activeMenu === subItem.menuKey)
  }

  const baseUrl = role == 'staff' ? '/staff/' : '/client/'

  const staffSidebarItems = [
    {
      section: 'GENERAL',
      items: [
        {
          title: 'Dashboard',
          menuKey: 'dashboard',
          icon: (
            <svg className='w-5 h-5 ' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0 8h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0-12h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z' />
            </svg>
          ),
          href: baseUrl + 'dashboard'
        },
        {
          title: 'Jobs',
          menuKey: 'jobs',
          icon: (
            <svg
              width='22'
              height='20'
              className='w-5 h-5 '
              viewBox='0 0 22 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 19V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H9C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V19'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M19 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ),
          expandable: true,
          subItems: [
            {
              title: 'Current Jobs',
              menuKey: 'current-jobs',
              href: '/staff/jobs/current'
            },
            {
              title: 'Assigned Jobs',
              menuKey: 'assigned-jobs',
              href: '/staff/jobs/assign'
            },
            {
              title: 'Job History',
              menuKey: 'job-history',
              href: '/staff/jobs/history'
            }
          ]
        },
        {
          title: 'Messages',
          menuKey: 'messages',
          icon: (
            <svg
              className='w-5 h-5 '
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
              />
            </svg>
          ),
          href: 'messages'
        },
        {
          title: 'You',
          menuKey: 'you',
          icon: (
            <svg
              className='w-5 h-5 '
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          ),
          expandable: true,
          subItems: [
            {
              title: 'Earnings',
              menuKey: 'earnings',
              href: baseUrl + 'earnings'
            },
            { title: 'PH Info Centre', menuKey: 'info-centre', href: 'info' },
            { title: 'Profile', menuKey: 'profile', href: 'profile' }
          ]
        }
      ]
    },
    {
      section: 'TOOLS',
      items: [
        {
          title: 'Help',
          menuKey: 'help',
          icon: (
            <svg
              className='w-5 h-5 '
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          ),
          href: '#'
        },
        {
          title: 'Log Out',
          menuKey: 'logout',
          icon: (
            <svg
              className='w-5 h-5 '
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
          ),
          href: '#'
        }
      ]
    }
  ]

  const clientSidebarItems = [
    {
      section: 'GENERAL',
      items: [
        {
          title: 'Dashboard',
          menuKey: 'dashboard',
          icon: (
            <svg className='w-5 h-5 ' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0 8h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0-12h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z' />
            </svg>
          ),
          href: baseUrl + 'dashboard'
        },
        {
          title: 'Services Hub',
          menuKey: 'services',
          icon: (
            <svg
              width='21'
              height='22'
              viewBox='0 0 21 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.9189 4.93945H2.05405C1.47192 4.93945 1 5.41137 1 5.99351V19.6962C1 20.2783 1.47192 20.7503 2.05405 20.7503H18.9189C19.5011 20.7503 19.973 20.2783 19.973 19.6962V5.99351C19.973 5.41137 19.5011 4.93945 18.9189 4.93945Z'
                stroke='#888888'
                stroke-width='2'
                stroke-linejoin='round'
              />
              <path
                d='M7.29797 11.2677H13.6223M1 5.46622L4.68919 1.25H16.2838L19.973 5.46622'
                stroke='#888888'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          ),
          href: baseUrl + 'services-hub'
        },
        {
          title: 'Properties Hub',
          menuKey: 'properties',
          icon: (
            <svg
              width='21'
              height='22'
              viewBox='0 0 21 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.6283 20.9991V12.578C13.6283 12.2988 13.5174 12.0311 13.32 11.8337C13.1226 11.6363 12.8548 11.5254 12.5757 11.5254H8.36513C8.08596 11.5254 7.81822 11.6363 7.62081 11.8337C7.4234 12.0311 7.3125 12.2988 7.3125 12.578V20.9991'
                stroke='#888888'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M1 9.42052C0.999927 9.11427 1.06667 8.8117 1.19557 8.5339C1.32447 8.2561 1.51242 8.00977 1.74632 7.81209L9.11475 1.49735C9.49473 1.1762 9.97618 1 10.4737 1C10.9712 1 11.4527 1.1762 11.8326 1.49735L19.2011 7.81209C19.435 8.00977 19.6229 8.2561 19.7518 8.5339C19.8807 8.8117 19.9475 9.11427 19.9474 9.42052V18.8942C19.9474 19.4526 19.7256 19.988 19.3308 20.3829C18.936 20.7777 18.4005 20.9995 17.8421 20.9995H3.10527C2.54691 20.9995 2.01143 20.7777 1.61662 20.3829C1.2218 19.988 1 19.4526 1 18.8942V9.42052Z'
                stroke='#888888'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          ),
          expandable: true,
          subItems: [
            {
              title: 'Properties Hub',
              menuKey: 'properties-hub',
              href: baseUrl + 'properties-hub'
            },
            {
              title: 'Liked Properties',
              menuKey: 'liked-properties',
              href: baseUrl + 'properties-hub/' + 'liked-properties'
            },
            {
              title: 'Deals Room',
              menuKey: 'deals-room',
              href: baseUrl + 'properties-hub/' + 'deals-room'
            },
          ]
        },
        {
          title: 'Activities',
          menuKey: 'activities',
          icon: (
            <svg
              width='21'
              height='22'
              viewBox='0 0 21 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_3033_11704)'>
                <path
                  d='M18.375 11.1821C18.7852 11.4624 19.1509 11.7803 19.4722 12.1357C19.7935 12.4912 20.0703 12.8809 20.3027 13.3047C20.5352 13.7285 20.7061 14.1763 20.8154 14.6479C20.9248 15.1196 20.9863 15.6016 21 16.0938C21 16.9072 20.8462 17.6729 20.5386 18.3906C20.231 19.1084 19.8071 19.7339 19.2671 20.2671C18.7271 20.8003 18.1016 21.2207 17.3906 21.5283C16.6797 21.8359 15.9141 21.9932 15.0938 22C14.4717 22 13.8701 21.9077 13.2891 21.7231C12.708 21.5386 12.1748 21.272 11.6895 20.9233C11.2041 20.5747 10.7734 20.1577 10.3975 19.6724C10.0215 19.187 9.73096 18.6504 9.52588 18.0625H1.3125V2.3125H3.9375V1H5.25V2.3125H14.4375V1H15.75V2.3125H18.375V11.1821ZM2.625 3.625V6.25H17.0625V3.625H15.75V4.9375H14.4375V3.625H5.25V4.9375H3.9375V3.625H2.625ZM9.21826 16.75C9.19775 16.5381 9.1875 16.3193 9.1875 16.0938C9.1875 15.5059 9.26953 14.9351 9.43359 14.3813C9.59766 13.8276 9.84717 13.3047 10.1821 12.8125H9.1875V11.5H10.5V12.3818C10.7803 12.0332 11.0913 11.7256 11.4331 11.459C11.7749 11.1924 12.144 10.9634 12.5405 10.772C12.937 10.5806 13.3506 10.437 13.7812 10.3413C14.2119 10.2456 14.6494 10.1943 15.0938 10.1875C15.7773 10.1875 16.4336 10.3003 17.0625 10.5259V7.5625H2.625V16.75H9.21826ZM15.0938 20.6875C15.7295 20.6875 16.3242 20.5679 16.8779 20.3286C17.4316 20.0894 17.917 19.7612 18.334 19.3442C18.751 18.9272 19.0791 18.4419 19.3184 17.8882C19.5576 17.3345 19.6807 16.7363 19.6875 16.0938C19.6875 15.458 19.5679 14.8633 19.3286 14.3096C19.0894 13.7559 18.7612 13.2705 18.3442 12.8535C17.9272 12.4365 17.4419 12.1084 16.8882 11.8691C16.3345 11.6299 15.7363 11.5068 15.0938 11.5C14.458 11.5 13.8633 11.6196 13.3096 11.8589C12.7559 12.0981 12.2705 12.4263 11.8535 12.8433C11.4365 13.2603 11.1084 13.7456 10.8691 14.2993C10.6299 14.853 10.5068 15.4512 10.5 16.0938C10.5 16.7295 10.6196 17.3242 10.8589 17.8779C11.0981 18.4316 11.4263 18.917 11.8433 19.334C12.2603 19.751 12.7456 20.0791 13.2993 20.3184C13.853 20.5576 14.4512 20.6807 15.0938 20.6875ZM15.75 15.4375H17.7188V16.75H14.4375V12.8125H15.75V15.4375ZM3.9375 11.5H5.25V12.8125H3.9375V11.5ZM6.5625 11.5H7.875V12.8125H6.5625V11.5ZM6.5625 8.875H7.875V10.1875H6.5625V8.875ZM3.9375 14.125H5.25V15.4375H3.9375V14.125ZM6.5625 14.125H7.875V15.4375H6.5625V14.125ZM10.5 10.1875H9.1875V8.875H10.5V10.1875ZM13.125 10.1875H11.8125V8.875H13.125V10.1875ZM15.75 10.1875H14.4375V8.875H15.75V10.1875Z'
                  fill='#888888'
                />
              </g>
              <defs>
                <clipPath id='clip0_3033_11704'>
                  <rect
                    width='21'
                    height='21'
                    fill='white'
                    transform='translate(0 0.5)'
                  />
                </clipPath>
              </defs>
            </svg>
          ),
          href: baseUrl + 'activities'
        },
        {
          title: 'Chats',
          menuKey: 'messages',
          icon: (
            <svg
              width='25'
              height='26'
              viewBox='0 0 25 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.125 21.6354V5.70833C3.125 5.1558 3.34449 4.62589 3.73519 4.23519C4.12589 3.84449 4.6558 3.625 5.20833 3.625H19.7917C20.3442 3.625 20.8741 3.84449 21.2648 4.23519C21.6555 4.62589 21.875 5.1558 21.875 5.70833V16.125C21.875 16.6775 21.6555 17.2074 21.2648 17.5981C20.8741 17.9888 20.3442 18.2083 19.7917 18.2083H8.29271C7.98045 18.2084 7.6722 18.2786 7.39074 18.4138C7.10929 18.5491 6.86183 18.7458 6.66667 18.9896L4.23854 22.025C4.15774 22.1263 4.04746 22.1999 3.92296 22.2358C3.79846 22.2716 3.66589 22.2679 3.5436 22.2251C3.42131 22.1823 3.31534 22.1026 3.24035 21.997C3.16536 21.8913 3.12505 21.765 3.125 21.6354Z'
                stroke='#888888'
                stroke-width='2'
              />
            </svg>
          ),
          href: 'chats'
        },
        {
          title: 'Profile',
          menuKey: 'profile',
          icon: (
            <svg
              className='w-5 h-5 '
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          ),
          href: baseUrl + 'profile'
        }
      ]
    },
    {
      section: 'TOOLS',
      items: [
        {
          title: 'Tools',
          menuKey: 'tools',
          icon: (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21 7.86035C21 7.43035 20.944 7.01135 20.839 6.61435C20.747 6.26535 20.317 6.18235 20.063 6.43735L18.34 8.16035C18.1758 8.3245 17.981 8.45471 17.7665 8.54355C17.552 8.63239 17.3221 8.67811 17.09 8.67811C16.8579 8.67811 16.628 8.63239 16.4135 8.54355C16.199 8.45471 16.0042 8.3245 15.84 8.16035C15.6758 7.9962 15.5456 7.80132 15.4568 7.58684C15.368 7.37237 15.3222 7.14249 15.3222 6.91035C15.3222 6.6782 15.368 6.44833 15.4568 6.23385C15.5456 6.01938 15.6758 5.8245 15.84 5.66035L17.563 3.93835C17.818 3.68335 17.735 3.25335 17.386 3.16135C16.5304 2.93377 15.6289 2.94424 14.7788 3.19163C13.9287 3.43902 13.1623 3.91393 12.5624 4.56508C11.9625 5.21623 11.5519 6.01888 11.3749 6.88637C11.1979 7.75386 11.2612 8.65322 11.558 9.48735C11.629 9.68735 11.589 9.91135 11.44 10.0603L3.3 18.2003C2.9 18.6003 2.9 19.2493 3.3 19.6483L4.352 20.7003C4.752 21.1003 5.399 21.1003 5.799 20.7003L13.939 12.5603C14.089 12.4103 14.313 12.3703 14.512 12.4413C15.2454 12.7021 16.0307 12.7829 16.8018 12.6769C17.573 12.5709 18.3073 12.2812 18.9432 11.8322C19.579 11.3833 20.0977 10.7882 20.4557 10.097C20.8136 9.40578 21.0003 8.63872 21 7.86035Z'
                stroke='#888888'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          ),
          href: baseUrl + 'tools'
        },
        {
          title: 'Help',
          menuKey: 'help',
          icon: (
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          ),
          href: '#'
        },

        {
          title: 'Log Out',
          menuKey: 'logout',
          icon: (
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
          ),
          href: '#'
        }
      ]
    }
  ]

  const sidebarItems = role == 'staff' ? staffSidebarItems : clientSidebarItems

  return (
    <>
      <div
        className={`${isMobile ? 'fixed inset-0 z-40' : 'relative'} ${
          sidebarOpen || !isMobile ? 'block' : 'hidden'
        }`}
      >
        {isMobile && sidebarOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-30'
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`w-60 min-h-full bg-white border-r border-gray-200 flex flex-col z-40 ${
            isMobile
              ? 'fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out'
              : 'relative'
          }`}
        >
          {/* Close button for mobile */}
          {isMobile && (
            <button
              onClick={() => setSidebarOpen(false)}
              className='absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700'
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          )}
          {/* Logo */}
          <div className='p-4'>
            <img
              src='/assets/logo.png'
              alt='Proppa House Logo'
              className='h-20'
            />
          </div>

          {/* Navigation */}
          <div className='flex-1 overflow-y-auto hide-scrollbar'>
            {sidebarItems.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className='pt-4 pb-2'>
                  <p className='px-4 text-xs font-medium text-[#888888]'>
                    {section.section}
                  </p>
                </div>

                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className='px-2 py-1'>
                    {item.expandable ? (
                      <>
                        <button
                          className={`w-full flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md ${
                            isSubItemActive(item.menuKey)
                              ? 'bg-accent text-gray-900'
                              : activeMenu === item.menuKey
                              ? 'bg-accent text-gray-900'
                              : 'text-[#888888] hover:bg-gray-100'
                          }`}
                          onClick={() => {
                            toggleMenu(item.menuKey)
                            handleMenuClick(item.menuKey, true)
                          }}
                        >
                          <div className='flex items-center gap-3'>
                            {item.icon}
                            {item.title}
                          </div>
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              expandedMenus[item.menuKey] ? 'rotate-180' : ''
                            }`}
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M19 9l-7 7-7-7'
                            />
                          </svg>
                        </button>

                        {expandedMenus[item.menuKey] && item.subItems && (
                          <div className='py-2'>
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                onClick={() => handleMenuClick(subItem.menuKey)}
                                className={`pl-10 block py-2 px-2 text-sm rounded-md  hover:bg-gray-100 ${
                                  activeMenu === subItem.menuKey
                                    ? 'text-secondary font-medium'
                                    : 'text-[#888888] '
                                }`}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => handleMenuClick(item.menuKey)}
                        className={`flex items-center px-2 gap-3 py-2 text-sm font-medium rounded-md ${
                          activeMenu === item.menuKey
                            ? 'bg-accent text-gray-900'
                            : 'text-[#888888] hover:bg-gray-100'
                        }`}
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
