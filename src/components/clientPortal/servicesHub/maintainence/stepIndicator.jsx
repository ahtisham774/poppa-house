// src/components/MaintenanceService/StepIndicator.jsx
import React from 'react';

const StepIndicator = ({ currentStep, totalSteps, steps, stepperAnimation }) => {
  return (
    <div className="flex items-center flex-wrap gap-y-4 justify-center mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {/* Step Circle */}
          <div
            className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
              index + 1 <= currentStep
                ? 'bg-[#131e47] text-white'
                : 'bg-[#e5e7eb] text-[#6b7280]'
            }`}
          >
            {index + 1}
          </div>
          
          {/* Connector Line */}
          {index < totalSteps - 1 && (
            <div 
              className="w-24 h-[2px] mx-1"
              style={{
                transition: 'background-color 0.5s ease-in-out',
                backgroundColor: 
                  index + 1 === stepperAnimation.prevStep &&
                  stepperAnimation.direction === 'forward' &&
                  index + 1 === currentStep - 1
                    ? '#131e47'
                    : index + 1 < currentStep
                      ? '#131e47'
                      : '#e5e7eb'
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;