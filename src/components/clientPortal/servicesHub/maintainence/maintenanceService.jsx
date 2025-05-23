
import React, { useState } from 'react';
import ServiceSelection from './serviceSelection';
import PackageSelection from './packageSelection';
import MultiStepForm from './multiStepForm';

const MaintenanceService = () => {
  const [currentScreen, setCurrentScreen] = useState('serviceSelect');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setCurrentScreen('packageSelect');
  };

  const handleSelectPackage = (packageType) => {
    setSelectedPackage(packageType);
    setCurrentScreen('stepper');
  };

  const handleBackToServices = () => {
    setSelectedService(null);
    setCurrentScreen('serviceSelect');
  };

  const handleBackToPackages = () => {
    setSelectedPackage(null);
    setCurrentScreen('packageSelect');
  };

  const handleSubmit = (data) => {
    // Handle form submission
    console.log('Form submitted', data);
  };

  switch(currentScreen) {
    case 'serviceSelect':
      return <ServiceSelection onSelectService={handleSelectService} />;
    case 'packageSelect':
      return (
        <PackageSelection
          service={selectedService} 
          onSelectPackage={handleSelectPackage}
          onBack={handleBackToServices}
        />
      );
    case 'stepper':
      return (
        <MultiStepForm 
          service={selectedService}
          packageType={selectedPackage}
          onBack={handleBackToPackages}
          onSubmit={handleSubmit}
        />
      );
    default:
      return <ServiceSelection onSelectService={handleSelectService} />;
  }
};

export default MaintenanceService;