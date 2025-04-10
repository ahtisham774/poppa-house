import React, { useState } from 'react';

const NotificationsCard = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: 'New Training Materials Available',
      description: 'Access the latest property management training materials in the PHIC section.',
      date: '2/15/2025'
    },
    {
      id: 2,
      title: 'New Training Materials Available',
      description: 'Access the latest property management training materials in the PHIC section.',
      date: '2/15/2025'
    },
    {
      id: 3,
      title: 'Company Policy Updates',
      description: 'Important changes to remote work policies have been implemented.',
      date: '2/15/2025'
    }
  ]);

  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-medium text-gray-900">Company Notifications</h2>
      <a href="#" className="flex items-center text-sm ">
          View All
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className="space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className="border-b border-[#D5D5D5] pb-4 mb-2 last:border-b-0 last:pb-0 last:mb-0">
            <div className="flex justify-between mb-1">
            <h3 className="text-base font-medium text-gray-900">{notification.title}</h3>
              <span className="text-xs text-[#888888]">
                {notification.date}
              </span>
            </div>
            <p className="text-sm text-[#505050] max-w-sm">{notification.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsCard;
