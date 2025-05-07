// src/components/MaintenanceService/PackageCard.jsx
import React from 'react';

const PackageCard = ({ packageType, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`border rounded-lg p-4 cursor-pointer transition ${
        isSelected ? 'border-[#131e47] bg-[#f8fafc]' : 'border-gray-200'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="relative mt-1">
          <input
            type="radio"
            checked={isSelected}
            onChange={() => {}}
            className="relative appearance-none size-4 border-2 border-[#131e47] rounded-full checked:bg-white focus:outline-none focus:ring-0 transition-colors duration-200"
            style={{
              backgroundImage: isSelected ? 'radial-gradient(circle, #131e47 0%, #131e47 40%, white 40%, white 100%)' : 'none'
            }}
          />
        </div>
        <div>
          <h4 className="font-medium text-[#131e47]">{packageType.title}</h4>
          <p className="text-sm text-gray-500">{packageType.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;