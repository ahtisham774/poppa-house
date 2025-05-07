import React from 'react'

function StepIndicator({ currentStep, stepperAnimation }) {
  const totalSteps = 5
  
  return (
    <div className='flex items-center justify-center mb-8'>
      {[1, 2, 3, 4, 5].map((step, index) => (
        <React.Fragment key={step}>
          {/* Step Circle */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              step <= currentStep
                ? 'bg-[#131e47] text-white'
                : 'bg-[#e5e7eb] text-[#6b7280]'
            }`}
          >
            {step}
          </div>
          
          {/* Connector Line */}
          {step < totalSteps && (
            <div 
              className={`w-28 h-[4px] rounded-lg mx-1 ${
                step < currentStep ? 'bg-[#131e47]' : 'bg-[#e5e7eb]'
              }`}
              style={{
                transition: 'background-color 0.5s ease-in-out',
                backgroundColor: 
                  step === stepperAnimation.prevStep &&
                  stepperAnimation.direction === 'forward' &&
                  step === currentStep - 1
                    ? '#131e47'
                    : step < currentStep
                      ? '#131e47'
                      : '#e5e7eb'
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default StepIndicator