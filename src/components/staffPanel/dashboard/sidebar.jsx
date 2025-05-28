import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../../context/useAuth'
import { useLogin } from '../../../hooks/useLogin'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = useAuth()
  const { logout } = useLogin()
  const location = useLocation()
  const role = user?.role?.toLowerCase()
  const [expandedMenus, setExpandedMenus] = useState({})
  const [activeMenu, setActiveMenu] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  // Initialize from localStorage and URL on component mount
  useEffect(() => {
    // Get expanded menus from localStorage
    const savedExpandedMenus = localStorage.getItem('expandedMenus')
    if (savedExpandedMenus) {
      setExpandedMenus(JSON.parse(savedExpandedMenus))
    }

    // Set active menu based on current URL
    const currentPath = location.pathname

    // Find which menu item matches the current path
    const allItems = sidebarItems.flatMap(section => section.items)

    // First check for exact matches
    const exactMatch = allItems.find(item => item.href === currentPath)
    if (exactMatch) {
      setActiveMenu(exactMatch.menuKey)
    } else {
      // Then check for submenu matches
      const parentWithSubMatch = allItems.find(item =>
        item.subItems?.some(
          subItem =>
            currentPath === subItem.href || currentPath.startsWith(subItem.href)
        )
      )

      if (parentWithSubMatch) {
        // Find the specific submenu item
        const matchingSubItem = parentWithSubMatch.subItems.find(
          subItem =>
            currentPath === subItem.href || currentPath.startsWith(subItem.href)
        )

        if (matchingSubItem) {
          setActiveMenu(matchingSubItem.menuKey)

          // Ensure parent menu is expanded
          setExpandedMenus(prev => ({
            ...prev,
            [parentWithSubMatch.menuKey]: true
          }))
        }
      }
    }
  }, [location.pathname])

  // Save expanded menus to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expandedMenus', JSON.stringify(expandedMenus))
  }, [expandedMenus])

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 950)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const toggleMenu = menu => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }))
  }

  const handleMenuClick = (menuKey, hasSubItems = false) => {
    if (menuKey === 'logout') {
      logout()
      setActiveMenu('')
      setSidebarOpen(false)
      return
    }
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
  let baseUrl = '/'

  switch (role) {
    case 'staff':
      baseUrl = '/staff/'
      break
    case 'client':
      baseUrl = '/client/'
      break
    case 'lister':
      baseUrl = '/lister/'
      break
    default:
      baseUrl = '/'
      break
  }

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
          title: 'Help & Support',
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
          href: baseUrl + 'help'
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
                strokeWidth='2'
                strokeLinejoin='round'
              />
              <path
                d='M7.29797 11.2677H13.6223M1 5.46622L4.68919 1.25H16.2838L19.973 5.46622'
                stroke='#888888'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
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
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M1 9.42052C0.999927 9.11427 1.06667 8.8117 1.19557 8.5339C1.32447 8.2561 1.51242 8.00977 1.74632 7.81209L9.11475 1.49735C9.49473 1.1762 9.97618 1 10.4737 1C10.9712 1 11.4527 1.1762 11.8326 1.49735L19.2011 7.81209C19.435 8.00977 19.6229 8.2561 19.7518 8.5339C19.8807 8.8117 19.9475 9.11427 19.9474 9.42052V18.8942C19.9474 19.4526 19.7256 19.988 19.3308 20.3829C18.936 20.7777 18.4005 20.9995 17.8421 20.9995H3.10527C2.54691 20.9995 2.01143 20.7777 1.61662 20.3829C1.2218 19.988 1 19.4526 1 18.8942V9.42052Z'
                stroke='#888888'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
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
            }
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
              <g clipPath='url(#clip0_3033_11704)'>
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
                strokeWidth='2'
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
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ),
          href: baseUrl + 'tools'
        },
        {
          title: 'Help & Support',
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
          href: baseUrl + 'support'
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
          onClick: () => {
            logout()
          }
        }
      ]
    }
  ]

  const listerSidebarItems = [
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
          title: 'Listing Manager',
          menuKey: 'listing-manager',
          icon: (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19.903 8.586C19.8555 8.4775 19.7892 8.37829 19.707 8.293L13.707 2.293C13.6217 2.21083 13.5225 2.14447 13.414 2.097C13.384 2.083 13.352 2.075 13.32 2.064C13.2363 2.03563 13.1492 2.01848 13.061 2.013C13.04 2.011 13.021 2 13 2H6C4.897 2 4 2.897 4 4V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V9C20 8.979 19.989 8.96 19.987 8.938C19.9815 8.84979 19.9644 8.7627 19.936 8.679C19.9267 8.647 19.9157 8.616 19.903 8.586ZM16.586 8H14V5.414L16.586 8ZM6 20V4H12V9C12 9.26522 12.1054 9.51957 12.2929 9.70711C12.4804 9.89464 12.7348 10 13 10H18L18.002 20H6Z'
                fill='#888888'
              />
              <path
                d='M8 12H16V14H8V12ZM8 16H16V18H8V16ZM8 8H10V10H8V8Z'
                fill='#888888'
              />
            </svg>
          ),
          href: baseUrl + 'listing-manager'
        },
        {
          title: 'Viewing Request Model',
          menuKey: 'viewing-request',
          icon: (
            <svg
              width='21'
              height='22'
              viewBox='0 0 21 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_4602_17480)'>
                <path
                  d='M18.375 11.1821C18.7852 11.4624 19.1509 11.7803 19.4722 12.1357C19.7935 12.4912 20.0703 12.8809 20.3027 13.3047C20.5352 13.7285 20.7061 14.1763 20.8154 14.6479C20.9248 15.1196 20.9863 15.6016 21 16.0938C21 16.9072 20.8462 17.6729 20.5386 18.3906C20.231 19.1084 19.8071 19.7339 19.2671 20.2671C18.7271 20.8003 18.1016 21.2207 17.3906 21.5283C16.6797 21.8359 15.9141 21.9932 15.0938 22C14.4717 22 13.8701 21.9077 13.2891 21.7231C12.708 21.5386 12.1748 21.272 11.6895 20.9233C11.2041 20.5747 10.7734 20.1577 10.3975 19.6724C10.0215 19.187 9.73096 18.6504 9.52588 18.0625H1.3125V2.3125H3.9375V1H5.25V2.3125H14.4375V1H15.75V2.3125H18.375V11.1821ZM2.625 3.625V6.25H17.0625V3.625H15.75V4.9375H14.4375V3.625H5.25V4.9375H3.9375V3.625H2.625ZM9.21826 16.75C9.19775 16.5381 9.1875 16.3193 9.1875 16.0938C9.1875 15.5059 9.26953 14.9351 9.43359 14.3813C9.59766 13.8276 9.84717 13.3047 10.1821 12.8125H9.1875V11.5H10.5V12.3818C10.7803 12.0332 11.0913 11.7256 11.4331 11.459C11.7749 11.1924 12.144 10.9634 12.5405 10.772C12.937 10.5806 13.3506 10.437 13.7812 10.3413C14.2119 10.2456 14.6494 10.1943 15.0938 10.1875C15.7773 10.1875 16.4336 10.3003 17.0625 10.5259V7.5625H2.625V16.75H9.21826ZM15.0938 20.6875C15.7295 20.6875 16.3242 20.5679 16.8779 20.3286C17.4316 20.0894 17.917 19.7612 18.334 19.3442C18.751 18.9272 19.0791 18.4419 19.3184 17.8882C19.5576 17.3345 19.6807 16.7363 19.6875 16.0938C19.6875 15.458 19.5679 14.8633 19.3286 14.3096C19.0894 13.7559 18.7612 13.2705 18.3442 12.8535C17.9272 12.4365 17.4419 12.1084 16.8882 11.8691C16.3345 11.6299 15.7363 11.5068 15.0938 11.5C14.458 11.5 13.8633 11.6196 13.3096 11.8589C12.7559 12.0981 12.2705 12.4263 11.8535 12.8433C11.4365 13.2603 11.1084 13.7456 10.8691 14.2993C10.6299 14.853 10.5068 15.4512 10.5 16.0938C10.5 16.7295 10.6196 17.3242 10.8589 17.8779C11.0981 18.4316 11.4263 18.917 11.8433 19.334C12.2603 19.751 12.7456 20.0791 13.2993 20.3184C13.853 20.5576 14.4512 20.6807 15.0938 20.6875ZM15.75 15.4375H17.7188V16.75H14.4375V12.8125H15.75V15.4375ZM3.9375 11.5H5.25V12.8125H3.9375V11.5ZM6.5625 11.5H7.875V12.8125H6.5625V11.5ZM6.5625 8.875H7.875V10.1875H6.5625V8.875ZM3.9375 14.125H5.25V15.4375H3.9375V14.125ZM6.5625 14.125H7.875V15.4375H6.5625V14.125ZM10.5 10.1875H9.1875V8.875H10.5V10.1875ZM13.125 10.1875H11.8125V8.875H13.125V10.1875ZM15.75 10.1875H14.4375V8.875H15.75V10.1875Z'
                  fill='#888888'
                />
              </g>
              <defs>
                <clipPath id='clip0_4602_17480'>
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
          href: baseUrl + 'viewing-request'
        },
        {
          title: 'Negotiations Tracker',
          menuKey: 'negotiations-tracker',
          icon: (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3 20V19H21V20H3ZM4 17.23V12H6V17.23H4ZM8.654 17.23V7H10.654V17.23H8.654ZM13.327 17.23V10H15.327V17.23H13.327ZM18 17.23V4H20V17.23H18Z'
                fill='#888888'
              />
            </svg>
          ),
          href: baseUrl + 'negotiations-tracker'
        },
        {
          title: 'Analytics Page',
          menuKey: 'analytics',
          icon: (
            <svg
              width='19'
              height='21'
              viewBox='0 0 19 21'
              
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.9531 6.5625V7.875H16.379L9.3515 15.6423L6.67962 12.6891L2.8457 16.9266L3.68541 17.8547L6.67962 14.5452L9.3515 17.4984L17.2187 8.8031V11.4844H18.4062V6.5625H13.9531Z'
                fill='#131E47'
              />
              <path
                d='M1.78125 4.26562H0.59375V20.3438H18.4062V19.0312H1.78125V4.26562Z'
                fill='#131E47'
              />
            </svg>
          ),
          href: baseUrl + 'analytics'
        },
        {
          title: 'Commissions Tracker',
          menuKey: 'commissions-tracker',
          icon: (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16 6C16 4.114 16 3.172 15.414 2.586C14.828 2 13.886 2 12 2C10.114 2 9.172 2 8.586 2.586C8 3.172 8 4.114 8 6M2 14C2 10.229 2 8.343 3.172 7.172C4.344 6.001 6.229 6 10 6H14C17.771 6 19.657 6 20.828 7.172C21.999 8.344 22 10.229 22 14C22 17.771 22 19.657 20.828 20.828C19.656 21.999 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2.001 19.656 2 17.771 2 14Z'
                stroke='#888888'
                strokeWidth='1.5'
              />
              <path
                d='M12 17.333C13.105 17.333 14 16.587 14 15.667C14 14.747 13.105 14 12 14C10.895 14 10 13.254 10 12.333C10 11.413 10.895 10.667 12 10.667M12 17.333C10.895 17.333 10 16.587 10 15.667M12 17.333V18M12 10.667V10M12 10.667C13.105 10.667 14 11.413 14 12.333'
                stroke='#888888'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
          ),
          href: baseUrl + 'commissions-tracker'
        },
        {
          title: 'Messaging Hub',
          menuKey: 'messaging-hub',
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
                strokeWidth='2'
              />
            </svg>
          ),
          href: baseUrl + 'messaging-hub'
        },
        {
          title: 'Profile',
          menuKey: 'profile',
          icon: (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z'
                fill='#888888'
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
          title: 'Help & Support',
          menuKey: 'support',
          icon: (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 17H12.01M12 14C12.8906 12.0938 15 12.2344 15 10C15 8.5 14 7 12 7C10.4521 7 9.50325 7.89844 9.15332 9M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
                stroke='#888888'
                strokeWidth='1.4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ),
          href: baseUrl + 'support'
        },

        {
          title: 'Log Out',
          menuKey: 'logout',

          icon: (
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.85292 4.58464C4.51057 5.47545 3.49075 6.77482 2.94442 8.2904C2.39809 9.80597 2.3543 11.4572 2.81952 12.9996C3.28475 14.542 4.23427 15.8936 5.52751 16.8543C6.82075 17.815 8.38896 18.3338 10 18.3338C11.611 18.3338 13.1793 17.815 14.4725 16.8543C15.7657 15.8936 16.7153 14.542 17.1805 12.9996C17.6457 11.4572 17.6019 9.80597 17.0556 8.2904C16.5093 6.77482 15.4894 5.47545 14.1471 4.58464M10.0004 1.66797V8.33464'
                stroke='#888888'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          ),
          onClick: () => {
            logout()
          }
        }
      ]
    }
  ]

  let sidebarItems = []
  switch (role) {
    case 'staff':
      sidebarItems = staffSidebarItems
      break
    case 'client':
      sidebarItems = clientSidebarItems
      break
    case 'lister':
      sidebarItems = listerSidebarItems
      break
    default:
      sidebarItems = []
      break
  }

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
          <div className='flex-1  max-h-[calc(100dvh-112px)] overflow-y-auto hide-scrollbar'>
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
                            <span className='size-5 '>{item.icon}</span>
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
                          <div className='py-2 relative ml-5  border-l-2 pl-2 border-gray-200'>
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                onClick={() => handleMenuClick(subItem.menuKey)}
                                className={` block py-2 px-2 text-sm rounded-md submenu-item  hover:text-secondary ${
                                  activeMenu === subItem.menuKey
                                    ? 'text-secondary font-medium '
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
                          <span className='size-5 '>{item.icon}</span>
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
