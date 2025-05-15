import React, { useState } from 'react'
import CardView from './cardView'

const NotificationsCard = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: 'New Training Materials Available',
      description:
        'Access the latest property management training materials in the PHIC section.',
      date: '2/15/2025'
    },
    {
      id: 2,
      title: 'New Training Materials Available',
      description:
        'Access the latest property management training materials in the PHIC section.',
      date: '2/15/2025'
    },
    {
      id: 3,
      title: 'Company Policy Updates',
      description:
        'Important changes to remote work policies have been implemented.',
      date: '2/15/2025'
    }
  ])

  return (
    <CardView
      title='Notifications'
      icon={
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.1229 22.7493C11.313 23.0787 11.5866 23.3522 11.9159 23.5423C12.2453 23.7325 12.6189 23.8326 12.9992 23.8326C13.3795 23.8326 13.7531 23.7325 14.0825 23.5423C14.4119 23.3522 14.6854 23.0787 14.8755 22.7493M3.53304 16.6025C3.39152 16.7576 3.29813 16.9505 3.26422 17.1577C3.23031 17.365 3.25735 17.5776 3.34206 17.7697C3.42676 17.9618 3.56547 18.1252 3.74132 18.2399C3.91717 18.3547 4.12257 18.4159 4.33254 18.416H21.6659C21.8758 18.4161 22.0813 18.3552 22.2572 18.2406C22.4332 18.1261 22.5721 17.9629 22.657 17.7709C22.7419 17.5789 22.7692 17.3664 22.7356 17.1591C22.702 16.9519 22.6088 16.7589 22.4675 16.6036C21.0267 15.1183 19.4992 13.5399 19.4992 8.66602C19.4992 6.94211 18.8144 5.28881 17.5954 4.06982C16.3764 2.85084 14.7231 2.16602 12.9992 2.16602C11.2753 2.16602 9.622 2.85084 8.40301 4.06982C7.18403 5.28881 6.49921 6.94211 6.49921 8.66602C6.49921 13.5399 4.97063 15.1183 3.53304 16.6025Z'
            stroke='#131E47'
            strokeWidth='2.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      }
      list={notifications}
      viewAll={null}
    />
  )
}

export default NotificationsCard
