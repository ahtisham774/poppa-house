// src/components/MaintenanceService/PackageSelection.jsx
import React from 'react';
import PackageCard from './PackageCard';
import { packageTypes } from '../../../../data/maintenanceData';

const PackageSelection = ({ service, onSelectPackage, onBack }) => {
  const [selectedPackage, setSelectedPackage] = React.useState(null);
  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-semibold text-[#131e47] mb-7">
        {service.title}
      </h2>
      <h3 className="text-lg font-medium text-[#131e47] mb-1">
        Select Package Type
      </h3>
      <div className="mb-7 text-gray-600 text-sm">
        Choose between a one-time service or regular scheduled service.
      </div>
      
      <div className="flex flex-col gap-3">
        {packageTypes.map(pkg => (
          <PackageCard
            key={pkg.key}
            isSelected={selectedPackage?.key === pkg.key}
            packageType={pkg}
            onClick={() => {
              console.log('Selected package:', pkg);
              setSelectedPackage(pkg);
            }}
          />
        ))}
      </div>
      
      <div className="mt-7 flex gap-4 justify-between">
        <button 
          className="border rounded-lg px-7 py-2 text-[#131e47] font-medium"
          onClick={onBack}
        >
          Previous
        </button>
        <button
          className="bg-[#131e47] rounded-lg px-7 py-2 text-white font-medium"
          onClick={() => {
            if (selectedPackage) {
              onSelectPackage(selectedPackage);
            } else {
              alert('Please select a package type.');
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PackageSelection;