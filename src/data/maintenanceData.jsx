// src/data/maintenanceData.js
export const maintenanceServices = [
  {
    key: 'cleaning',
    title: 'Cleaning Service',
    icon: (
      <svg
        width='28'
        height='30'
        viewBox='0 0 28 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M19.8359 7.5H25.6693V10H23.3359V26.25C23.3359 26.5815 23.213 26.8995 22.9942 27.1339C22.7754 27.3683 22.4787 27.5 22.1693 27.5H5.83594C5.52652 27.5 5.22977 27.3683 5.01098 27.1339C4.79219 26.8995 4.66927 26.5815 4.66927 26.25V10H2.33594V7.5H8.16927V3.75C8.16927 3.41848 8.29219 3.10054 8.51098 2.86612C8.72977 2.6317 9.02652 2.5 9.33594 2.5H18.6693C18.9787 2.5 19.2754 2.6317 19.4942 2.86612C19.713 3.10054 19.8359 3.41848 19.8359 3.75V7.5ZM21.0026 10H7.0026V25H21.0026V10ZM10.5026 13.75H12.8359V21.25H10.5026V13.75ZM15.1693 13.75H17.5026V21.25H15.1693V13.75ZM10.5026 5V7.5H17.5026V5H10.5026Z'
          fill='#131E47'
        />
      </svg>
    ),
    description: null,
    formTitle: 'Book a professional cleaning service tailored to your space!'
  },
  {
    key: 'garden',
    title: 'Garden & Lawn Maintenance',
    icon: (
      <svg
        width='29'
        height='30'
        viewBox='0 0 29 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.4974 21.25H22.9557L17.5182 13.125H21.1432L14.4974 3.75L7.85156 13.125H11.4766L6.03906 21.25H14.4974ZM14.4974 21.25V26.25'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    ),
    description: null,
    formTitle:
      'Get your outdoor space in top shape with our expert garden and lawn maintenance service!'
  },
  {
    key: 'repair',
    title: 'Repair Service',
    icon: (
      <svg
        width='23'
        height='25'
        viewBox='0 0 23 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.9297 6.20831C13.7272 6.43454 13.6138 6.73868 13.6138 7.05546C13.6138 7.37224 13.7272 7.67638 13.9297 7.90261L15.6976 9.83894C15.9042 10.0607 16.1819 10.1849 16.4711 10.1849C16.7603 10.1849 17.038 10.0607 17.2446 9.83894L21.4103 5.27645C21.966 6.62122 22.1342 8.11952 21.8926 9.57166C21.651 11.0238 21.0111 12.3608 20.0582 13.4046C19.1052 14.4483 17.8844 15.1491 16.5586 15.4137C15.2327 15.6783 13.8647 15.4941 12.6368 14.8855L5.00147 23.2481C4.56188 23.7295 3.96567 24 3.344 24C2.72234 24 2.12613 23.7295 1.68654 23.2481C1.24696 22.7666 1 22.1136 1 21.4328C1 20.7519 1.24696 20.0989 1.68654 19.6174L9.32192 11.2549C8.7663 9.91012 8.59807 8.41182 8.83964 6.95968C9.08122 5.50753 9.72113 4.17051 10.6741 3.12678C11.6271 2.08305 12.8478 1.3822 14.1737 1.11761C15.4996 0.853029 16.8676 1.03728 18.0954 1.64582L13.9407 6.19621L13.9297 6.20831Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    ),
    description: null,
    formTitle: 'Get professional repairs done quickly and efficiently!'
  }
]

export const packageTypes = [
  {
    key: 'oneoff',
    title: 'One-off Service',
    description: 'For a single, on-demand visit/service'
  },
  {
    key: 'subscription',
    title: 'Subscription Based Service',
    description: 'Recurring scheduled visits/services'
  }
]
