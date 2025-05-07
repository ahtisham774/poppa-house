// components/maintenance/MaintenanceStepper.js
import React, { useEffect, useState } from 'react'
import { MaintenanceStep1 } from './maintenanceSteppers/maintenanceStep1'
import { MaintenanceStep2 } from './maintenanceSteppers/maintenanceStep2'
import StepIndicator from './stepIndicator'
import { MaintenanceStep3 } from './maintenanceSteppers/maintenanceStep3'
export const getInitialFormData = (serviceType, packageType) => {
  // Common form data for all services
  const commonFormData = {
    // Personal Information
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: ''
  }

  // Service-specific form data
  const serviceFormData = {
    cleaning: {
      oneoff: {
        // Cleaning Service Details
        cleaningType: '',
        otherCleaningType: '',
        propertyType: '',
        otherPropertyType: '',
        specificAreas: {
          bedroom: false,
          otherRooms: false,
          walls: false,
          windows: false,
          kitchen: false,
          cabinets: false,
          bathrooms: false,
          carpet: false,
          balcony: false,
          other: false
        },
        bedroomCount: '1',
        bedroomFloorArea: '',
        otherRoomsCount: '1',
        otherRoomsFloorArea: '',
        kitchenCount: '1',
        kitchenFloorArea: '',
        bathroomCount: '1',
        bathroomFloorArea: '',
        otherAreaDescription: '',
        otherAreaCount: '',
        totalFloorArea: '',
        ceilingHeight: 'standard',

        // Location & Availability
        serviceAddress: '',
        serviceCity: '',
        serviceStateProvince: '',
        servicePostalCode: '',
        serviceCountry: '',
        preferredDate: '',
        preferredTimeSlot: 'morning',
        presentDuringCleaning: 'yes',
        parkingAvailable: 'no',
        accessInstructions: '',

        // Condition & Special Requests
        currentCondition: 'lightly',
        specialAttentionItems: {
          windows:false,
          walls: false,
          carpet: false,
          cabinets:false,
          other: false

        },
        otherSpecialAttention: 'Specific area description',
        pets: 'yes', // or "no"
        additionalRequests: 'Any special instructions here',
        urgency: 'priority', // or "emergency" or "standard"
        additionalDetails: '',

        // Upload Pictures or Videos
        photos: null,

        // Review & Submit
        termsAgreed: false
      },
      subscription: {
        // Subscription Plan Selection
        subscriptionPlan: 'monthly',

        // Cleaning Service Details (same as one-off)
        cleaningType: '',
        otherCleaningType: '',
        propertyType: '',
        otherPropertyType: '',
        specificAreas: {
          bedroom: false,
          otherRooms: false,
          walls: false,
          windows: false,
          kitchen: false,
          cabinets: false,
          bathrooms: false,
          carpet: false,
          balcony: false,
          other: false
        },
        bedroomCount: '1',
        bedroomFloorArea: '',
        otherRoomsCount: '1',
        otherRoomsFloorArea: '',
        kitchenCount: '1',
        kitchenFloorArea: '',
        bathroomCount: '1',
        bathroomFloorArea: '',
        otherAreaDescription: '',
        otherAreaCount: '',
        totalFloorArea: '',
        ceilingHeight: 'standard',

        // Location & Availability
        serviceAddress: '',
        serviceCity: '',
        serviceStateProvince: '',
        servicePostalCode: '',
        serviceCountry: '',
        preferredCleaningDays: [],
        specificPreferredDates: false,
        preferredDate1: '',
        preferredDate2: '',
        preferredTimeSlot: 'morning',
        presentDuringCleaning: 'yes',
        parkingAvailable: 'no',
        accessInstructions: '',

        // Condition & Special Requests
        currentCondition: 'lightly',
        additionalDetails: '',

        // Payment & Subscription Details
        paymentMethod: 'directDebit',
        otherPaymentMethod: '',
        subscriptionStartDate: '',
        autoRenewal: true,

        // Upload Pictures or Videos
        photos: null,

        // Review & Submit
        termsAgreed: false
      }
    },
    garden: {
      oneoff: {
        // Garden & Lawn Maintenance Service Details
        gardenServices: [],
        propertyType: 'residential',
        otherPropertyType: '',
        briefDescription: '',
        lawnSize: '',
        gardenArea: '',
        additionalRequirements: '',

        // Location & Availability
        serviceAddress: '',
        serviceCity: '',
        serviceStateProvince: '',
        servicePostalCode: '',
        serviceCountry: '',
        preferredDate: '',
        preferredTimeSlot: 'morning',
        callToArrange: false,

        // Condition & Special Requests
        currentCondition: 'wellMaintained',
        specialInstructions: '',

        // Urgency
        urgencyLevel: 'standard',

        // Upload Pictures or Videos
        photos: null,

        // Review & Submit
        termsAgreed: false
      },
      subscription: {
        // Subscription Plan Selection
        subscriptionPlan: 'monthly',

        // Garden & Lawn Maintenance Service Details
        gardenServices: [],
        propertyType: 'residential',
        otherPropertyType: '',
        briefDescription: '',
        lawnSize: '',
        gardenArea: '',
        additionalRequirements: '',

        // Location & Availability
        serviceAddress: '',
        serviceCity: '',
        serviceStateProvince: '',
        servicePostalCode: '',
        serviceCountry: '',
        callToArrange: false,
        preferredDate1: '',
        preferredDate2: '',
        preferredTimeSlot: 'morning',

        // Upload Pictures or Videos
        photos: null,

        // Review & Submit
        termsAgreed: false
      }
    },
    repair: {
      oneoff: {
        // Repair Service Details
        repairServices: {
          plumbing: false,
          plumbingOptions: {
            leaks: false,
            taps: false,
            blockage: false,
            waterHeater: false,
            other: false
          },
          plumbingOther: '',

          electrical: false,
          electricalOptions: {
            powerOutage: false,
            switches: false,
            lighting: false,
            circuitBreaker: false,
            other: false
          },
          electricalOther: '',

          structural: false,
          structuralOptions: {
            walls: false,
            roof: false,
            doors: false,
            flooring: false,
            other: false
          },
          structuralOther: '',

          hvac: false,
          hvacOptions: {
            radiator: false,
            boiler: false,
            ac: false,
            ventilation: false,
            other: false
          },
          hvacOther: '',

          appliances: false,
          appliancesOptions: {
            washer: false,
            fridge: false,
            cooker: false,
            other: false
          },
          appliancesOther: ''
        },
        issueDescription: '',

        // Repair Condition & Urgency
        urgencyLevel: 'routine',
        troubleshootingDone: {
          powerSupply: false,
          waterValve: false,
          circuitBreaker: false,
          other: false
        },
        troubleshootingOther: '',

        // Location & Availability
        serviceAddress: '',
        serviceCity: '',
        serviceStateProvince: '',
        servicePostalCode: '',
        serviceCountry: '',
        preferredDate: '',
        preferredTimeSlot: 'morning',
        callToArrange: false,
        parkingAvailable: 'no',
        accessInstructions: '',

        // Warranty
        warrantyRequired: true,

        // Upload Pictures or Videos
        photos: null,

        // Review & Submit
        termsAgreed: false
      },
      subscription: {
        // Subscription Plan Selection
        subscriptionPlan: 'quarterly',

        // Property & Maintenance Needs
        propertyType: 'residential',
        otherPropertyType: '',
        specialAttentionAreas: {
          plumbing: false,
          electrical: false,
          heating: false,
          roof: false,
          flooring: false,
          other: false
        },
        specialAttentionOther: '',
        previousIssues: '',

        // Location & Availability
        serviceAddress: '',
        serviceCity: '',
        serviceStateProvince: '',
        servicePostalCode: '',
        serviceCountry: '',
        preferredMonths: '',
        preferredTimeSlot: 'morning',
        callToArrange: false,

        // Payment & Subscription Agreement
        autoRenewal: true,
        paymentMethod: 'directDebit',

        // Review & Submit
        termsAgreed: false
      }
    }
  }

  // Return combined form data
  return {
    ...commonFormData,
    ...(serviceFormData[serviceType]?.[packageType] || {})
  }
}
export const MaintenanceStepper = ({
  service,
  packageType,
  onBack,
  onSubmit
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5

  const [stepperAnimation, setStepperAnimation] = useState({
    prevStep: 1,
    direction: 'forward'
  })

  useEffect(() => {
    setStepperAnimation({
      prevStep: stepperAnimation.prevStep,
      direction:
        currentStep > stepperAnimation.prevStep ? 'forward' : 'backward'
    })

    const timer = setTimeout(() => {
      setStepperAnimation({
        prevStep: currentStep,
        direction: 'none'
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [currentStep])

  // Form state would go here
  const [formData, setFormData] = useState(
    getInitialFormData(service.key, packageType.key)
  )

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      onBack()
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <MaintenanceStep1 formData={formData} setFormData={setFormData} />
        )
      case 2:
        return (
          <MaintenanceStep2 formData={formData} setFormData={setFormData} />
        )
      case 3:
        return (
          <MaintenanceStep3 formData={formData} setFormData={setFormData} />
        )
      //   case 4:
      //     return <MaintenanceStep4 formData={formData} setFormData={setFormData} />;
      //   case 5:
      //     return <MaintenanceStep5 formData={formData} setFormData={setFormData} />;
      default:
        return (
          <MaintenanceStep1 formData={formData} setFormData={setFormData} />
        )
    }
  }

  return (
    <div className='p-8 w-full max-h-[90vh] overflow-y-auto'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <h2 className='text-2xl font-semibold text-primary mb-1'>
            {service.title} - {packageType.title}
          </h2>
          <div className='text-gray-600 mb-6'>
            Book a professional service tailored to your needs!
          </div>
        </div>
      </div>

      {/* Stepper UI would go here */}
      <StepIndicator
        stepperAnimation={stepperAnimation}
        currentStep={currentStep}
      />

      {renderStep()}

      <div className='flex gap-4 mt-8 justify-between'>
        <button
          type='button'
          className='border rounded-lg px-7 py-2 text-primary font-medium flex items-center gap-1'
          onClick={handlePrevious}
        >
          <svg
            width='14'
            height='11'
            viewBox='0 0 14 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.998 5.84326H1.70703L7.08691 10.0703L6.47168 10.5537L0.0390625 5.49951L6.47168 0.445312L7.08691 0.928711L1.70703 5.15576H13.998V5.84326Z'
              fill='#131E47'
            />
          </svg>
          Previous
        </button>
        {currentStep < totalSteps ? (
          <button
            type='button'
            className='bg-primary rounded-lg px-7 py-2 text-white font-medium flex items-center gap-2'
            onClick={handleNext}
          >
            Next
            <svg
              width='14'
              height='11'
              viewBox='0 0 14 11'
              fill='none'
              className='-scale-x-[1]'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.998 5.84326H1.70703L7.08691 10.0703L6.47168 10.5537L0.0390625 5.49951L6.47168 0.445312L7.08691 0.928711L1.70703 5.15576H13.998V5.84326Z'
                fill='#ffffff'
              />
            </svg>
          </button>
        ) : (
          <button
            type='button'
            className='bg-primary rounded-lg px-7 py-2 text-white font-medium'
            onClick={onSubmit}
          >
            Submit Request
          </button>
        )}
      </div>
    </div>
  )
}
