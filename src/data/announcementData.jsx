import { BiBell, BiFile } from 'react-icons/bi'

export const announcements = [
  {
    id: 'new-service',
    title: 'New Service Offering: Garden Maintenance',
    date: '1 hour ago',
    category: 'Company Update',
    isNew: true,
    isRead: true,
    icon: (
      <div className='w-10 h-10 bg-[#EFF6FF] rounded-full flex items-center justify-center'>
        <BiBell className='text-blue-500' size={20} />
      </div>
    ),
    snippet: "We're expanding our services to include garden maintenance",
    content:
      "We're excited to announce that Proppa House is expanding our service offerings to include garden maintenance. This addition aligns with our mission to provide comprehensive home care services to our valued clients.\n\nStarting next month, we'll be offering basic garden maintenance services including lawn mowing, hedge trimming, and general garden tidying. This creates additional earning opportunities for our team members who are interested in garden work.\n\nFull training will be provided through the PH Info Centre. If you're interested in adding garden maintenance to your skills, please complete the relevant training modules that will be available next week.",
    relevantFor: 'Cleaner, Supervisor, Gardener',
    fullDate: 'October 12, 2025',
    likes: 20,
    comments: [
      {
        id: 101,
        author: 'John Doe',
        date: '20 Jan 2025',
        content:
          "Great insights! I've been considering investing in London real estate, and this article really helped me understand the market trends.",
        avatar: 'https://randomuser.me/api/portraits/men/39.jpg'
      },
      {
        id: 102,
        author: 'John Doe',
        date: '20 Jan 2025',
        content:
          "Great insights! I've been considering investing in London real estate, and this article really helped me understand the market trends.",
        avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
      },
      {
        id: 103,
        author: 'John Doe',
        date: '20 Jan 2025',
        content:
          "Great insights! I've been considering investing in London real estate, and this article really helped me understand the market trends.",
        avatar: 'https://randomuser.me/api/portraits/men/40.jpg'
      }
    ]
  },
  {
    id: 'health-safety',
    title: 'Updated Health & Safety Guidelines',
    date: '2/15/2025',
    category: 'Policy',
    isNew: true,
    isRead: true,
    icon: (
      <div className='w-10 h-10 bg-[#FEF9C3] rounded-full flex items-center justify-center'>
        <BiFile className='text-yellow-500' size={20} />
      </div>
    ),
    snippet: 'Important changes to our safety protocols',
    content:
      'Important updates to our health and safety protocols have been implemented. All employees must review these changes as they affect daily operations.',
    likes: 5,
    comments: []
  },
  {
    id: 'cleaning-products',
    title: 'New Cleaning Products Training',
    date: '2 days ago',
    category: 'Training',
    isNew: true,
    isRead: false,
    icon: (
      <div className='w-10 h-10 bg-[#DCFCE7] rounded-full flex items-center justify-center'>
        <svg
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 2.1875C0 2.07147 0.0460936 1.96019 0.128141 1.87814C0.210188 1.79609 0.321468 1.75 0.4375 1.75H4.81075C5.72425 1.75 6.52867 2.21667 6.99883 2.92483C7.23829 2.56353 7.56349 2.26714 7.9454 2.06214C8.32732 1.85714 8.75405 1.7499 9.1875 1.75H13.5625C13.6785 1.75 13.7898 1.79609 13.8719 1.87814C13.9539 1.96019 14 2.07147 14 2.1875V10.9742C14 11.0319 13.9886 11.0891 13.9664 11.1423C13.9443 11.1956 13.9118 11.244 13.8708 11.2846C13.8299 11.3253 13.7813 11.3575 13.7279 11.3793C13.6745 11.4011 13.6173 11.4121 13.5596 11.4117L9.07842 11.3814C8.8466 11.3798 8.61677 11.4242 8.40228 11.5121C8.18778 11.6 7.99288 11.7297 7.82892 11.8936L7.30975 12.4133C7.26912 12.454 7.22088 12.4862 7.16778 12.5082C7.11468 12.5302 7.05777 12.5416 7.00029 12.5416C6.94281 12.5416 6.8859 12.5302 6.8328 12.5082C6.7797 12.4862 6.73146 12.454 6.69083 12.4133L6.16467 11.8877C5.83655 11.5595 5.39151 11.3751 4.92742 11.375H0.4375C0.321468 11.375 0.210188 11.3289 0.128141 11.2469C0.0460936 11.1648 0 11.0535 0 10.9375L0 2.1875ZM7.4375 11.0728C7.90597 10.7021 8.48687 10.5023 9.08425 10.5064L13.125 10.5338V2.625H9.1875C8.72337 2.625 8.27825 2.80937 7.95006 3.13756C7.62187 3.46575 7.4375 3.91087 7.4375 4.375V11.0728ZM6.56075 4.37325C6.56029 3.90942 6.37571 3.46475 6.04757 3.13694C5.71943 2.80913 5.27458 2.625 4.81075 2.625H0.875V10.5H4.92742C5.52125 10.5 6.09758 10.7018 6.5625 11.0717L6.56075 4.37325Z'
            fill='#166534'
          />
        </svg>
      </div>
    ),
    snippet: "We're introducing a new line of eco-friendly cleaning products",
    content:
      "We're introducing a new line of eco-friendly cleaning products next month. These products are better for the environment while maintaining our high cleaning standards.",
    likes: 45,
    comments: [
      {
        id: 105,
        author: 'Michael Chen',
        date: '29 Mar 2025',
        content:
          'Thank you so much for this recognition! It means a lot to be appreciated for the work we do.',
        avatar: 'https://randomuser.me/api/portraits/men/39.jpg'
      },
      {
        id: 106,
        author: 'Team Leader',
        date: '30 Mar 2025',
        content:
          'Well deserved! The feedback from clients has been outstanding.',
        avatar: 'https://randomuser.me/api/portraits/men/39.jpg'
      }
    ]
  }
]
