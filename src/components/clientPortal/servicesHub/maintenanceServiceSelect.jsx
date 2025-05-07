// components/maintenance/MaintenanceServiceSelect.js

import { maintenanceServices } from "./maintenanceOptions";
import { MaintenanceServiceCard } from "./maintenanceServiceCard";


export const MaintenanceServiceSelect = ({ onSelectService }) => {
  return (
    <div className='p-8 w-full'>
      <h2 className='text-2xl font-semibold text-primary mb-7'>
        Select Maintenance Service
      </h2>
      <div className='flex gap-8'>
        {maintenanceServices.map(service => (
          <MaintenanceServiceCard
            key={service.key}
            service={service}
            onClick={() => onSelectService(service)}
          />
        ))}
      </div>
    </div>
  );
};