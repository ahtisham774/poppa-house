// src/components/MaintenanceService/ServiceSelection.jsx
import React from 'react';
import ServiceCard from './serviceCard';
import { maintenanceServices } from '../../../../data/maintenanceData';

const ServiceSelection = ({ onSelectService }) => {
  return (
    <div className="p-3 lg:p-8 w-full">
      <h2 className="text-2xl font-semibold text-[#131e47] mb-7">
        Select Maintenance Service
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {maintenanceServices.map(service => (
          <ServiceCard
            key={service.key}
            service={service}
            onClick={() => onSelectService(service)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;