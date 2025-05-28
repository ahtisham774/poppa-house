import React, { useState } from 'react'
import ServiceSelection from './serviceSelection'
import PackageSelection from './packageSelection'
import MultiStepForm from './multiStepForm'
import serviceHub from '../../../../api/services/servicesHub'
import { showToast } from '../../../../utils/toast'

const MaintenanceService = () => {
  const [currentScreen, setCurrentScreen] = useState('serviceSelect')
  const [selectedService, setSelectedService] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSelectService = service => {
    setSelectedService(service)
    setCurrentScreen('packageSelect')
  }

  const handleSelectPackage = packageType => {
    setSelectedPackage(packageType)
    setCurrentScreen('stepper')
  }

  const handleBackToServices = () => {
    setSelectedService(null)
    setCurrentScreen('serviceSelect')
  }

  const handleBackToPackages = () => {
    setSelectedPackage(null)
    setCurrentScreen('packageSelect')
  }

  const handleSubmit = data => {
    // Handle form submission
    console.log('Form submitted', data)
    console.log('Selected Service:', selectedService)
    console.log('Selected Package:', selectedPackage)
    let apiPath = ''
    switch (selectedService.key) {
      case 'cleaning':
        apiPath = 'cleaningServiceRequest'
        break
      case 'garden':
        apiPath = 'gardenLawnService'
        break
      case 'repair':
        apiPath = 'repairService'
        break
      default:
        console.error('Unknown service type:', selectedService.type)
        return
    }
    // if (apiPath != '') {
    //   setLoading(true)
    //   serviceHub
    //     .addMaintenanceService(apiPath, data)
    //     .then(response => {
    //       console.log('Service request submitted successfully:', response)
    //       showToast('success', 'Service request submitted successfully!')
    //       // Optionally reset state or navigate to a success screen
    //       setCurrentScreen('serviceSelect')
    //       setSelectedService(null)
    //       setSelectedPackage(null)
    //     })
    //     .catch(error => {
    //       console.error('Error submitting service request:', error)
    //       showToast(
    //         'error',
    //         'Failed to submit service request. Please try again.'
    //       )
    //       // Handle error (e.g., show notification)
    //     })
    //     .finally(() => {
    //       setLoading(false)
    //     })
    // }
  }

  switch (currentScreen) {
    case 'serviceSelect':
      return <ServiceSelection onSelectService={handleSelectService} />
    case 'packageSelect':
      return (
        <PackageSelection
          service={selectedService}
          onSelectPackage={handleSelectPackage}
          onBack={handleBackToServices}
        />
      )
    case 'stepper':
      return (
        <MultiStepForm
          service={selectedService}
          packageType={selectedPackage}
          onBack={handleBackToPackages}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )
    default:
      return <ServiceSelection onSelectService={handleSelectService} />
  }
}

export default MaintenanceService
