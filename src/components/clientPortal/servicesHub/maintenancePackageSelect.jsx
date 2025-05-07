// components/maintenance/MaintenancePackageSelect.js
import React, { useState } from 'react';
import { packageTypes } from './maintenanceOptions';
import { MaintenancePackageCard } from './maintenancePackageCard';


export const MaintenancePackageSelect = ({ 
  service, 
  onSelectPackage, 
  onBack 
}) => {
  const [selectedPackage, setSelectedPackage] = useState('oneoff');

  const handleSelect = (packageKey) => {
    setSelectedPackage(packageKey);
  };

  const handleNext = () => {
    const selected = packageTypes.find(pkg => pkg.key === selectedPackage);
    onSelectPackage(selected);
  };

  return (
    <div className='p-8 w-full'>
      <h2 className='text-2xl font-semibold text-primary mb-7'>
        {service.title}
      </h2>
      <h3 className='text-lg font-medium text-primary mb-1'>
        Select Package Type
      </h3>
      <div className='mb-7 text-gray-600 text-sm'>
        Choose between a one-time service or regular scheduled service.
      </div>
      
      <div className='flex flex-col gap-3'>
        {packageTypes.map(pkg => (
          <MaintenancePackageCard
            key={pkg.key}
            packageType={pkg}
            isSelected={selectedPackage === pkg.key}
            onClick={() => handleSelect(pkg.key)}
          />
        ))}
      </div>
      
      <div className='mt-7 flex gap-4 justify-between'>
        <button 
          className='border rounded-lg px-7 py-2 text-primary font-medium'
          onClick={onBack}
        >
          Previous
        </button>
        <button
          className='bg-primary rounded-lg px-7 py-2 text-white font-medium'
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};