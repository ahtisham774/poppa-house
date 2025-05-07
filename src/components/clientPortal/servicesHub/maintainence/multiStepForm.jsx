// src/components/MaintenanceService/MultiStepForm.jsx
import React, { useState, useEffect } from 'react';
import StepIndicator from './stepIndicator';
import FormStep from './FormStep';
import { getFormSteps } from '../../../../data/formStepsData';

const MultiStepForm = ({ service, packageType, onBack, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
   const [formData, setFormData] = useState({
     fullName: '',
     email: '',
     phoneNumber: '',
     address: '',
     city: '',
     stateProvince: '',
     postalCode: '',
     country: '',
 
     // Step 2: Cleaning Service Details
     cleaningType: '',
     otherCleaningType: '',
     propertyType: 'apartment',
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
       surface: false,
       floors: false,
       other: false
     },
     bedroomCount: '1',
     numberOfFloors: '1',
     preferredSpecificDate: {
      iPrefer: false,
     },
     floorArea: '',
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
 
     // Step 3: Location & Availability
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
 
     // Step 4: Condition & Special Requests
     specialAttentionItems: {
      windows:false,
      walls: false,
      carpet: false,
      cabinets:false,
      other: false

    },
    termsAgreed:{
      terms: false,
      acknowledge: false
    },
    otherSpecialAttention: 'Specific area description',
    pets: 'yes', // or "no"
    additionalRequests: 'Any special instructions here',
    urgency: 'priority', // or "emergency" or "standard"
     additionalDetails: ''
   })
  const [stepperAnimation, setStepperAnimation] = useState({
    prevStep: 1,
    direction: 'forward'
  });
  
  // Get steps based on service type and package type
  console.log('Service:', service);
  console.log('Package Type:', packageType);
  const steps = getFormSteps(service.key, packageType.key);
  console.log('Steps:', steps);
  const totalSteps = steps.length;

  useEffect(() => {
    setStepperAnimation({
      prevStep: stepperAnimation.prevStep,
      direction: currentStep > stepperAnimation.prevStep ? 'forward' : 'backward'
    });

    const timer = setTimeout(() => {
      setStepperAnimation({
        prevStep: currentStep,
        direction: 'none'
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const handleFormChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const handleSubmitForm = () => {
    onSubmit(formData);
  };

  return (
    <div className="p-8 w-full max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-[#131e47] mb-1">
            {packageType.title} {service.title}
          </h2>
          <div className="text-gray-600 mb-6">
            {service.formTitle || 'Book a professional service tailored to your needs!'}
          </div>
        </div>
      </div>

      <StepIndicator
        stepperAnimation={stepperAnimation}
        currentStep={currentStep}
        totalSteps={totalSteps}
        steps={steps}
      />

      <FormStep 
        step={steps[currentStep-1]} 
        index={currentStep}
        formData={formData}
        onChange={handleFormChange}
        serviceType={service.key}
      />

      <div className="flex gap-4 mt-8 justify-between">
        <button
          type="button"
          className="border rounded-lg px-7 py-2 text-[#131e47] font-medium flex items-center gap-1"
          onClick={handlePrevious}
        >
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.998 5.84326H1.70703L7.08691 10.0703L6.47168 10.5537L0.0390625 5.49951L6.47168 0.445312L7.08691 0.928711L1.70703 5.15576H13.998V5.84326Z"
              fill="#131E47"
            />
          </svg>
          Previous
        </button>
        {currentStep < totalSteps ? (
          <button
            type="button"
            className="bg-[#131e47] rounded-lg px-7 py-2 text-white font-medium flex items-center gap-2"
            onClick={handleNext}
          >
            Next
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              className="-scale-x-[1]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.998 5.84326H1.70703L7.08691 10.0703L6.47168 10.5537L0.0390625 5.49951L6.47168 0.445312L7.08691 0.928711L1.70703 5.15576H13.998V5.84326Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className="bg-[#131e47] rounded-lg px-7 py-2 text-white font-medium"
            onClick={handleSubmitForm}
          >
            Submit Request
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;