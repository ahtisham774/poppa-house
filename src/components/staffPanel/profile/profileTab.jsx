import React from 'react';

const ProfileTab = ({ isActive, onClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center whitespace-nowrap justify-center flex-1 py-2 rounded-sm px-6 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-accent text-gray-900 hover:bg-yellow-300'
          : 'bg-transparent text-gray-600 hover:text-gray-900'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default ProfileTab;
