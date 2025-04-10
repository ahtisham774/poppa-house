import React, { useState } from 'react';

const ProfileHeader = ({ name, title, bio, avatar }) => {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-100 mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="relative mb-4 md:mb-0 md:mr-6">
          <img
            src={avatar}
            alt={`${name} Avatar`}
            className="h-32 w-32 rounded-full object-cover border-4 border-white shadow"
          />
          <button
            className="absolute bottom-0 right-0 bg-yellow-400 rounded-full p-2 shadow-md"
            onClick={() => {}}
          >
            <svg className="h-5 w-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">{name}</h2>
          <p className="text-gray-600 mb-3">{title}</p>

          <div className="flex items-center mb-4">
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                isAvailable ? 'bg-green-400' : 'bg-gray-400'
              }`}
              onClick={() => setIsAvailable(!isAvailable)}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                  isAvailable ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {isAvailable ? 'Available' : 'Unavailable'}
            </span>
          </div>

          <p className="text-gray-700">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
