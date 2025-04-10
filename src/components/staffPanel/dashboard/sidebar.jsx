import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
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

  const baseUrl = '/staff/'

  const sidebarItems = [
    {
      section: 'GENERAL',
      items: [
        {
          title: 'Dashboard',
          menuKey: 'dashboard',
          icon: (
            <svg
              className='w-5 h-5 mr-3'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
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
              className='w-5 h-5 mr-3'
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
            { title: 'Assigned Jobs', menuKey: 'assigned-jobs', href: '/staff/jobs/assign' },
            { title: 'Job History', menuKey: 'job-history', href: '/staff/jobs/history' }
          ]
        },
        {
          title: 'Messages',
          menuKey: 'messages',
          icon: (
            <svg
              className='w-5 h-5 mr-3'
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
              className='w-5 h-5 mr-3'
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
              className='w-5 h-5 mr-3'
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
              className='w-5 h-5 mr-3'
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
                          <div className='flex items-center'>
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
                        className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
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
