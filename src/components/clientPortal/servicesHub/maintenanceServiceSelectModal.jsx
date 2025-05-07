// import React, { useEffect, useState } from 'react'
// import { useModal } from '../../../context/useModal'

import { useState } from "react";
import { MaintenanceServiceSelect } from "./maintenanceServiceSelect";
import { MaintenancePackageSelect } from "./maintenancePackageSelect";
import { MaintenanceStepper } from "./maintenanceStepper";

// export function MaintenanceServiceSelectModal () {
//   const { openModal } = useModal()
//   return (
//     <div className='p-8 w-full'>
//       <h2 className='text-2xl font-semibold text-primary mb-7'>
//         Select Maintenance Service
//       </h2>
//       <div className='flex gap-8'>
//         <button
//           onClick={() => openModal('cleaningServicePackage')}
//           className='flex-1 border rounded-xl py-12 transition hover:shadow-md flex flex-col items-center'
//         >
//           <span className='mb-2'>
//             <svg width='30' height='30' fill='none'>
//               <rect width='30' height='30' fill='#EEF5FD' rx='15' />
//               <path
//                 d='M21 10l-1 10H10l-1-10'
//                 stroke='#1B2943'
//                 strokeWidth='2'
//               />
//               <rect x='13' y='8' width='4' height='2' rx='1' fill='#1B2943' />
//             </svg>
//           </span>
//           <span className='text-lg text-primary font-semibold'>
//             Cleaning Service
//           </span>
//         </button>
//         <div className='flex-1 border rounded-xl py-12 flex flex-col items-center text-center'>
//           <span className='mb-2'>
//             <svg width='30' height='30' fill='none'>
//               <rect width='30' height='30' fill='#EEF5FD' rx='15' />
//               <path
//                 d='M15 8l6 13M15 8l-6 13'
//                 stroke='#1B2943'
//                 strokeWidth='2'
//               />
//             </svg>
//           </span>
//           <span className='text-lg text-primary font-semibold'>
//             Garden &amp; Lawn Maintenance
//           </span>
//         </div>
//         <div className='flex-1 border rounded-xl py-12 flex flex-col items-center text-center'>
//           <span className='mb-2'>
//             <svg width='30' height='30' fill='none'>
//               <rect width='30' height='30' fill='#EEF5FD' rx='15' />
//               <path d='M15 11v8M19 15h-8' stroke='#1B2943' strokeWidth='2' />
//             </svg>
//           </span>
//           <span className='text-lg text-primary font-semibold'>
//             Repair Service
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export function CleaningServicePackageModal () {
//   const [selected, setSelected] = React.useState('oneoff')
//   const { openModal } = useModal()
//   return (
//     <div className='p-8 w-full'>
//       <h2 className='text-2xl font-semibold text-primary mb-7'>
//         Cleaning Service
//       </h2>
//       <h3 className='text-lg font-medium text-primary mb-1'>
//         Select Package Type
//       </h3>
//       <div className='mb-7 text-gray-600 text-sm'>
//         Choose between a one-time cleaning service or regular scheduled
//         cleaning.
//       </div>
//       {/* Options here */}
//       <div className='flex flex-col gap-3'>
//         <button
//           onClick={() => setSelected('oneoff')}
//           className={`border rounded-xl px-5 py-4 text-left ${
//             selected === 'oneoff'
//               ? 'border-primary ring-2 ring-blue-200 bg-blue-50'
//               : ''
//           }`}
//         >
//           <div className='flex items-center gap-4'>
//             <span
//               className={`w-5 h-5 border rounded-full inline-flex items-center justify-center mr-2 ${
//                 selected === 'oneoff' && 'border-primary bg-primary'
//               }`}
//             >
//               {selected === 'oneoff' && (
//                 <span className='w-3 h-3 bg-white rounded-full block' />
//               )}
//             </span>
//             <div>
//               <div className='font-semibold text-primary'>One-off Service</div>
//               <div className='text-gray-600 text-sm'>
//                 Perfect for single deep cleaning or special occasions
//               </div>
//             </div>
//           </div>
//         </button>
//         <button
//           onClick={() => setSelected('subscription')}
//           className={`border rounded-xl px-5 py-4 text-left ${
//             selected === 'subscription'
//               ? 'border-primary ring-2 ring-blue-200 bg-blue-50'
//               : ''
//           }`}
//         >
//           <div className='flex items-center gap-4'>
//             <span
//               className={`w-5 h-5 border rounded-full inline-flex items-center justify-center mr-2 ${
//                 selected === 'subscription' && 'border-primary bg-primary'
//               }`}
//             >
//               {selected === 'subscription' && (
//                 <span className='w-3 h-3 bg-white rounded-full block' />
//               )}
//             </span>
//             <div>
//               <div className='font-semibold text-primary'>
//                 Subscription Based service
//               </div>
//               <div className='text-gray-600 text-sm'>
//                 Regular scheduled cleaning at discounted rates
//               </div>
//             </div>
//           </div>
//         </button>
//       </div>
//       <div className='mt-7 flex gap-4 justify-between'>
//         <button className='border rounded-lg px-7 py-2 text-primary font-medium'>
//           Previous
//         </button>
//         <button
//           className='bg-primary rounded-lg px-7 py-2 text-white font-medium'
//           onClick={() => openModal('cleaningServiceStepper', { step: 1 })}
//         >
//           Next &rarr;
//         </button>
//       </div>
//     </div>
//   )
// }
// export function CleaningServiceStepperModal ({ step = 1 }) {
//   const [currStep, setCurrStep] = useState(step)

//   const [selected, setSelected] = useState('oneoff')

//   // Step 1 - Personal Info, Step 2 - Details
//   return (
//     <div className='p-8 w-full'>
//       <h2 className='text-2xl font-semibold text-primary mb-4'>
//         One-Off Cleaning Service Request Form
//       </h2>
//       <div className='mb-5'>
//         Book a professional cleaning service tailored to your space!
//       </div>
//       {/* Stepper */}
//       <div className='flex items-center mb-8 gap-6'>
//         {[1, 2, 3, 4, 5].map(i => (
//           <div key={i} className='flex items-center gap-3'>
//             <div
//               className={`rounded-full w-9 h-9 flex items-center justify-center text-lg font-semibold ${
//                 currStep === i
//                   ? 'bg-primary text-white'
//                   : 'bg-gray-200 text-gray-500'
//               }`}
//             >
//               {i}
//             </div>
//             {i < 5 && (
//               <div
//                 className={`h-1 w-16 ${
//                   currStep > i ? 'bg-primary' : 'bg-gray-300'
//                 }`}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//       {currStep === 1 && (
//         <form>
//           <div className='mb-7 font-semibold text-primary'>
//             1. Personal Information
//           </div>
//           <div className='grid grid-cols-2 gap-4 mb-5'>
//             <div>
//               <label className='text-sm mb-1 block'>Full Name</label>
//               <input
//                 className='w-full border rounded-lg px-3 py-2 mb-2'
//                 placeholder='Enter your full name'
//               />
//             </div>
//             <div>
//               <label className='text-sm mb-1 block'>Email Address</label>
//               <input
//                 className='w-full border rounded-lg px-3 py-2 mb-2'
//                 placeholder='Enter your email address'
//               />
//             </div>
//           </div>
//           {/* more fields: phone, address, city, state, postal, country */}
//           <div className='flex gap-4 mt-8 justify-between'>
//             <button className='border rounded-lg px-7 py-2 text-primary font-medium'>
//               &larr; Previous
//             </button>
//             <button
//               type='button'
//               className='bg-primary rounded-lg px-7 py-2 text-white font-medium'
//               onClick={() => setCurrStep(2)}
//             >
//               Next &rarr;
//             </button>
//           </div>
//         </form>
//       )}
//       {currStep === 2 && (
//         <form>
//           <div className='mb-7 font-semibold text-primary'>
//             2. Cleaning Service Details
//           </div>
//           <div className='mb-4'>
//             <label className='text-sm mb-1 block'>Type of Cleaning</label>
//             <input
//               className='w-full border rounded-lg px-3 py-2'
//               placeholder='Select the type of cleaning'
//             />
//           </div>
//           <div className='mb-4 flex gap-8'>
//             <div>
//               <label className='text-sm mb-1 block'>Property Type</label>
//               <div className='flex gap-4'>
//                 <button
//                   className={`border rounded-lg px-4 py-2 ${
//                     selected === 'oneoff' ? 'bg-primary text-white' : ''
//                   }`}
//                 >
//                   Apartment
//                 </button>
//                 <button
//                   className={`border rounded-lg px-4 py-2 ${
//                     selected === 'oneoff' ? 'bg-primary text-white' : ''
//                   }`}
//                 >
//                   House
//                 </button>
//                 <button
//                   className={`border rounded-lg px-4 py-2 ${
//                     selected === 'oneoff' ? 'bg-primary text-white' : ''
//                   }`}
//                 >
//                   Office
//                 </button>
//               </div>
//             </div>
//             <div></div>
//           </div>
//         </form>
//       )}
//     </div>
//   )
// }




// export function MaintenanceServiceModal() {
//   // Track which screen to show
//   const [currentScreen, setCurrentScreen] = useState('serviceSelect');
  
//   // For package selection
//   const [selectedPackage, setSelectedPackage] = useState('oneoff');
  
//   // For stepper form
//   const [currentStep, setCurrentStep] = useState(1);
//   const totalSteps = 5;

//   // Form data state
//   const [formData, setFormData] = useState({
//     // Step 1: Personal Information
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     city: "",
//     stateProvince: "",
//     postalCode: "",
//     country: "",

//     // Step 2: Cleaning Service Details
//     cleaningType: "",
//     otherCleaningType: "",
//     propertyType: "apartment",
//     otherPropertyType: "",
//     specificAreas: {
//       bedroom: false,
//       otherRooms: false,
//       walls: false,
//       windows: false,
//       kitchen: false,
//       cabinets: false,
//       bathrooms: false,
//       carpet: false,
//       balcony: false,
//       other: false
//     },
//     bedroomCount: "1",
//     bedroomFloorArea: "",
//     otherRoomsCount: "1",
//     otherRoomsFloorArea: "",
//     kitchenCount: "1",
//     kitchenFloorArea: "",
//     bathroomCount: "1",
//     bathroomFloorArea: "",
//     otherAreaDescription: "",
//     otherAreaCount: "",
//     totalFloorArea: "",
//     ceilingHeight: "standard",

//     // Step 3: Location & Availability
//     serviceAddress: "",
//     serviceCity: "",
//     serviceStateProvince: "",
//     servicePostalCode: "",
//     serviceCountry: "",
//     preferredDate: "",
//     preferredTimeSlot: "morning",
//     presentDuringCleaning: "yes",
//     parkingAvailable: "no",
//     accessInstructions: "",

//     // Step 4: Condition & Special Requests
//     currentCondition: "lightly",
//     additionalDetails: ""
//   });

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     if (name.startsWith("specificAreas.")) {
//       const areaName = name.split(".")[1];
//       setFormData(prev => ({
//         ...prev,
//         specificAreas: {
//           ...prev.specificAreas,
//           [areaName]: checked
//         }
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: type === "checkbox" ? checked : value
//       }));
//     }
//   };

//   // Handle radio button changes
//   const handleRadioChange = (name, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Next step handler
//   const handleNext = () => {
//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   // Previous step handler
//   const handlePrevious = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     } else {
//       setCurrentScreen('packageSelect');
//     }
//   };

//   // Animation for stepper
//   const [stepperAnimation, setStepperAnimation] = useState({
//     prevStep: 1,
//     direction: 'forward'
//   });

//   useEffect(() => {
//     setStepperAnimation({
//       prevStep: stepperAnimation.prevStep,
//       direction: currentStep > stepperAnimation.prevStep ? 'forward' : 'backward'
//     });
    
//     const timer = setTimeout(() => {
//       setStepperAnimation({
//         prevStep: currentStep,
//         direction: 'none'
//       });
//     }, 500);
    
//     return () => clearTimeout(timer);
//   }, [currentStep]);

//   // Render the service selection screen
//   const renderServiceSelect = () => (
//     <div className='p-8 w-full'>
//       <div className="flex justify-between items-center mb-7">
//         <h2 className='text-2xl font-semibold text-primary'>
//           Select Maintenance Service
//         </h2>
       
//       </div>
//       <div className='flex gap-8'>
//         <button
//           onClick={() => setCurrentScreen('packageSelect')}
//           className='flex-1 border rounded-xl py-12 transition hover:shadow-md flex flex-col items-center'
//         >
//           <span className='mb-2'>
//             <svg width='30' height='30' fill='none'>
//               <rect width='30' height='30' fill='#EEF5FD' rx='15' />
//               <path
//                 d='M21 10l-1 10H10l-1-10'
//                 stroke='#1B2943'
//                 strokeWidth='2'
//               />
//               <rect x='13' y='8' width='4' height='2' rx='1' fill='#1B2943' />
//             </svg>
//           </span>
//           <span className='text-lg text-primary font-semibold'>
//             Cleaning Service
//           </span>
//         </button>
//         <div className='flex-1 border rounded-xl py-12 flex flex-col items-center text-center'>
//           <span className='mb-2'>
//             <svg width='30' height='30' fill='none'>
//               <rect width='30' height='30' fill='#EEF5FD' rx='15' />
//               <path
//                 d='M15 8l6 13M15 8l-6 13'
//                 stroke='#1B2943'
//                 strokeWidth='2'
//               />
//             </svg>
//           </span>
//           <span className='text-lg text-primary font-semibold'>
//             Garden &amp; Lawn Maintenance
//           </span>
//         </div>
//         <div className='flex-1 border rounded-xl py-12 flex flex-col items-center text-center'>
//           <span className='mb-2'>
//             <svg width='30' height='30' fill='none'>
//               <rect width='30' height='30' fill='#EEF5FD' rx='15' />
//               <path d='M15 11v8M19 15h-8' stroke='#1B2943' strokeWidth='2' />
//             </svg>
//           </span>
//           <span className='text-lg text-primary font-semibold'>
//             Repair Service
//           </span>
//         </div>
//       </div>
//     </div>
//   );

//   // Render the package selection screen
//   const renderPackageSelect = () => (
//     <div className='p-8 w-full'>
//       <div className="flex justify-between items-center mb-7">
//         <h2 className='text-2xl font-semibold text-primary'>
//           Cleaning Service
//         </h2>
       
//       </div>
//       <h3 className='text-lg font-medium text-primary mb-1'>
//         Select Package Type
//       </h3>
//       <div className='mb-7 text-gray-600 text-sm'>
//         Choose between a one-time cleaning service or regular scheduled
//         cleaning.
//       </div>
//       <div className='flex flex-col gap-3'>
//         <button
//           onClick={() => setSelectedPackage('oneoff')}
//           className={`border rounded-xl px-5 py-4 text-left ${
//             selectedPackage === 'oneoff'
//               ? 'border-primary ring-2 ring-blue-200 bg-blue-50'
//               : ''
//           }`}
//         >
//           <div className='flex items-center gap-4'>
//             <span
//               className={`w-5 h-5 border rounded-full inline-flex items-center justify-center mr-2 ${
//                 selectedPackage === 'oneoff' && 'border-primary bg-primary'
//               }`}
//             >
//               {selectedPackage === 'oneoff' && (
//                 <span className='w-3 h-3 bg-white rounded-full block' />
//               )}
//             </span>
//             <div>
//               <div className='font-semibold text-primary'>One-off Service</div>
//               <div className='text-gray-600 text-sm'>
//                 Perfect for single deep cleaning or special occasions
//               </div>
//             </div>
//           </div>
//         </button>
//         <button
//           onClick={() => setSelectedPackage('subscription')}
//           className={`border rounded-xl px-5 py-4 text-left ${
//             selectedPackage === 'subscription'
//               ? 'border-primary ring-2 ring-blue-200 bg-blue-50'
//               : ''
//           }`}
//         >
//           <div className='flex items-center gap-4'>
//             <span
//               className={`w-5 h-5 border rounded-full inline-flex items-center justify-center mr-2 ${
//                 selectedPackage === 'subscription' && 'border-primary bg-primary'
//               }`}
//             >
//               {selectedPackage === 'subscription' && (
//                 <span className='w-3 h-3 bg-white rounded-full block' />
//               )}
//             </span>
//             <div>
//               <div className='font-semibold text-primary'>
//                 Subscription Based service
//               </div>
//               <div className='text-gray-600 text-sm'>
//                 Regular scheduled cleaning at discounted rates
//               </div>
//             </div>
//           </div>
//         </button>
//       </div>
//       <div className='mt-7 flex gap-4 justify-between'>
//         <button 
//           className='border rounded-lg px-7 py-2 text-primary font-medium'
//           onClick={() => setCurrentScreen('serviceSelect')}
//         >
//           Previous
//         </button>
//         <button
//           className='bg-primary rounded-lg px-7 py-2 text-white font-medium'
//           onClick={() => {
//             if (selectedPackage === 'oneoff') {
//               setCurrentScreen('stepperForm');
//               setCurrentStep(1);
//             }
//             // Add subscription flow handling if needed
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );

//   // Render the stepper
//   const renderStepper = () => (
//     <div className="flex items-center justify-center mb-8">
//       {[1, 2, 3, 4, 5].map((step) => (
//         <React.Fragment key={step}>
//           <div 
//             className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
//               step === currentStep 
//                 ? 'bg-primary text-white' 
//                 : step < currentStep 
//                   ? 'bg-primary text-white' 
//                   : 'bg-gray-200 text-gray-500'
//             }`}
//           >
//             {step}
//           </div>
//           {step < 5 && (
//             <div className="w-24 h-1 mx-1">
//               <div 
//                 className={`h-full transition-all duration-500 ${
//                   step < currentStep ? 'bg-primary' : 'bg-gray-200'
//                 }`}
//                 style={{
//                   width: step === stepperAnimation.prevStep && stepperAnimation.direction === 'forward' 
//                     ? '100%' 
//                     : step === currentStep - 1 && stepperAnimation.direction === 'forward'
//                       ? '100%'
//                       : step < currentStep 
//                         ? '100%' 
//                         : '0%',
//                   transition: 'width 0.5s ease-in-out'
//                 }}
//               />
//             </div>
//           )}
//         </React.Fragment>
//       ))}
//     </div>
//   );

//   // Render Step 1: Personal Information
//   const renderStep1 = () => (
//     <div>
//       <h3 className="text-lg font-semibold text-primary mb-6">1. Personal Information</h3>
      
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2"
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2"
//             placeholder="Enter your email address"
//           />
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Phone Number</label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2"
//             placeholder="Enter your phone number"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Address</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2"
//             placeholder="Enter your address"
//           />
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">City</label>
//           <select
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 appearance-none"
//           >
//             <option value="">Select City</option>
//             <option value="london">London</option>
//             <option value="manchester">Manchester</option>
//             <option value="birmingham">Birmingham</option>
//             <option value="leeds">Leeds</option>
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">State/Province</label>
//           <select
//             name="stateProvince"
//             value={formData.stateProvince}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 appearance-none"
//           >
//             <option value="">Select state/province name</option>
//             <option value="england">England</option>
//             <option value="scotland">Scotland</option>
//             <option value="wales">Wales</option>
//             <option value="northern-ireland">Northern Ireland</option>
//           </select>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Postal Code</label>
//           <input
//             type="text"
//             name="postalCode"
//             value={formData.postalCode}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2"
//             placeholder="Enter your postal code"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Country</label>
//           <select
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 appearance-none"
//           >
//             <option value="">Select Country</option>
//             <option value="uk">United Kingdom</option>
//             <option value="us">United States</option>
//             <option value="ca">Canada</option>
//             <option value="au">Australia</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );

//   // Render Step 2: Cleaning Service Details
//   const renderStep2 = () => (
//     <div>
//       <h3 className="text-lg font-semibold text-primary mb-6">2. Cleaning Service Details</h3>
      
//       <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Type of Cleaning</label>
//         <select
//           name="cleaningType"
//           value={formData.cleaningType}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-3 py-2 appearance-none"
//         >
//           <option value="">Select the type of cleaning</option>
//           <option value="general">General Cleaning (Surface dusting, vacuuming, mopping, and sanitizing)</option>
//           <option value="deep">Deep Cleaning</option>
//           <option value="move-in">Move-in/Move-out Cleaning</option>
//           <option value="post-construction">Post-Construction Cleaning</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
      
//       {formData.cleaningType === "other" && (
//         <div className="mb-4">
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Please specify other cleaning type</label>
//           <input
//             type="text"
//             name="otherCleaningType"
//             value={formData.otherCleaningType}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2"
//             placeholder="Enter the specific cleaning type"
//           />
//         </div>
//       )}
      
//       <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Property Type</label>
//         <div className="flex flex-wrap gap-3 mt-1">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="propertyType"
//               value="apartment"
//               checked={formData.propertyType === "apartment"}
//               onChange={() => handleRadioChange("propertyType", "apartment")}
//               className="accent-primary mr-2"
//             />
//             <span>Apartment</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="propertyType"
//               value="house"
//               checked={formData.propertyType === "house"}
//               onChange={() => handleRadioChange("propertyType", "house")}
//               className="accent-primary mr-2"
//             />
//             <span>House</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="propertyType"
//               value="office"
//               checked={formData.propertyType === "office"}
//               onChange={() => handleRadioChange("propertyType", "office")}
//               className="accent-primary mr-2"
//             />
//             <span>Office</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="propertyType"
//               value="commercial"
//               checked={formData.propertyType === "commercial"}
//               onChange={() => handleRadioChange("propertyType", "commercial")}
//               className="accent-primary mr-2"
//             />
//             <span>Commercial Space</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="propertyType"
//               value="other"
//               checked={formData.propertyType === "other"}
//               onChange={() => handleRadioChange("propertyType", "other")}
//               className="accent-primary mr-2"
//             />
//             <span>Other</span>
//           </label>
//         </div>
//       </div>
      
//       {formData.propertyType === "other" && (
//         <div className="mb-4">
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Please specify property type</label>
//           <input
//             type="text"
//             name="otherPropertyType"
//             value={formData.otherPropertyType}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2"
//             placeholder="Enter the specific property type"
//           />
//         </div>
//       )}
      
//       <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Specific Areas to Clean (Apartments & Houses)</label>
//         <p className="text-xs text-gray-500 mb-2">Check all that apply based on your property type</p>
        
//         <div className="grid grid-cols-1 gap-2">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.bedroom"
//               checked={formData.specificAreas.bedroom}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Bedroom (Sweeping, Mopping, Vacuuming)</span>
//           </label>
          
//           {formData.specificAreas.bedroom && (
//             <div className="grid grid-cols-2 gap-4 ml-6 mb-2">
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Number of bedrooms</label>
//                 <select
//                   name="bedroomCount"
//                   value={formData.bedroomCount}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2 appearance-none"
//                 >
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5+">5+</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Floor Area (in m²)</label>
//                 <select
//                   name="bedroomFloorArea"
//                   value={formData.bedroomFloorArea}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2 appearance-none"
//                 >
//                   <option value="">Select floor area (in m²)</option>
//                   <option value="10-15">10-15 m²</option>
//                   <option value="16-20">16-20 m²</option>
//                   <option value="21-30">21-30 m²</option>
//                   <option value="31+">31+ m²</option>
//                 </select>
//               </div>
//             </div>
//           )}
          
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.otherRooms"
//               checked={formData.specificAreas.otherRooms}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Other rooms (Sweeping, Mopping, Vacuuming)</span>
//           </label>
          
//           {formData.specificAreas.otherRooms && (
//             <div className="grid grid-cols-2 gap-4 ml-6 mb-2">
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Number of other rooms</label>
//                 <select
//                   name="otherRoomsCount"
//                   value={formData.otherRoomsCount}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2 appearance-none"
//                 >
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5+">5+</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Floor Area (in m²)</label>
//                 <select
//                   name="otherRoomsFloorArea"
//                   value={formData.otherRoomsFloorArea}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2 appearance-none"
//                 >
//                   <option value="">Select floor area (in m²)</option>
//                   <option value="10-15">10-15 m²</option>
//                   <option value="16-20">16-20 m²</option>
//                   <option value="21-30">21-30 m²</option>
//                   <option value="31+">31+ m²</option>
//                 </select>
//               </div>
//             </div>
//           )}
          
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.walls"
//               checked={formData.specificAreas.walls}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Walls & Baseboards</span>
//           </label>
          
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.windows"
//               checked={formData.specificAreas.windows}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Windows & Glass Surfaces</span>
//           </label>
          
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.kitchen"
//               checked={formData.specificAreas.kitchen}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Kitchen (Countertops, Appliances, Sink, etc.)</span>
//           </label>
          
//           {formData.specificAreas.kitchen && (
//             <div className="grid grid-cols-2 gap-4 ml-6 mb-2">
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Number of kitchens</label>
//                 <select
//                   name="kitchenCount"
//                   value={formData.kitchenCount}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2 appearance-none"
//                 >
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3+">3+</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Floor Area (in m²)</label>
//                 <select
//                   name="kitchenFloorArea"
//                   value={formData.kitchenFloorArea}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2 appearance-none"
//                 >
//                   <option value="">Select floor area (in m²)</option>
//                   <option value="5-10">5-10 m²</option>
//                   <option value="11-15">11-15 m²</option>
//                   <option value="16-20">16-20 m²</option>
//                   <option value="21+">21+ m²</option>
//                 </select>
//               </div>
//             </div>
//           )}
          
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.cabinets"
//               checked={formData.specificAreas.cabinets}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Inside Cabinets & Cupboards</span>
//           </label>
          
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.bathrooms"
//               checked={formData.specificAreas.bathrooms}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Bathrooms (Tiles, Showers, Toilets)</span>
//           </label>
          
//           {formData.specificAreas.bathrooms && (
//             <div className="grid grid-cols-2 gap-4 ml-6 mb-2">
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Number of bathrooms</label>
//                 <select
//                   name="bathroomCount"
//                   value={formData.bathroomCount}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2 appearance-none"
//                 >
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4+">4+</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Floor Area (in m²)</label>
//                 <select
//                   name="bathroomFloorArea"
//                   value={formData.bathroomFloorArea}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2 appearance-none"
//                 >
//                   <option value="">Select floor area (in m²)</option>
//                   <option value="3-5">3-5 m²</option>
//                   <option value="6-10">6-10 m²</option>
//                   <option value="11-15">11-15 m²</option>
//                   <option value="16+">16+ m²</option>
//                 </select>
//               </div>
//             </div>
//           )}
          
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.carpet"
//               checked={formData.specificAreas.carpet}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Carpet & Upholstery</span>
//           </label>
          
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.balcony"
//               checked={formData.specificAreas.balcony}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Balcony/Patio</span>
//           </label>
          
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="specificAreas.other"
//               checked={formData.specificAreas.other}
//               onChange={handleChange}
//               className="accent-primary mr-2"
//             />
//             <span>Other</span>
//           </label>
          
//           {formData.specificAreas.other && (
//             <div className="grid grid-cols-2 gap-4 ml-6 mb-2">
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Please specify</label>
//                 <input
//                   type="text"
//                   name="otherAreaDescription"
//                   value={formData.otherAreaDescription}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                   placeholder="Describe the area"
//                 />
//               </div>
//               <div>
//                 <label className="block mb-1 text-xs text-gray-800">Count</label>
//                 <select
//                   name="otherAreaCount"
//                   value={formData.otherAreaCount}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg px-3 py-2 appearance-none"
//                 >
//                   <option value="">Select the count</option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4+">4+</option>
//                 </select>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
      
//       <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Additional Property Details</label>
//         <p className="text-xs text-gray-500 mb-2">Provide more details about your space to help us tailor your quote.</p>
        
//         <div className="mb-3">
//           <label className="block mb-1 text-sm text-gray-800">Floor Area (in m²)</label>
//           <select
//             name="totalFloorArea"
//             value={formData.totalFloorArea}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 appearance-none"
//           >
//             <option value="">Select floor area (in m²)</option>
//             <option value="under-50">Under 50 m²</option>
//             <option value="50-100">50-100 m²</option>
//             <option value="101-150">101-150 m²</option>
//             <option value="151-200">151-200 m²</option>
//             <option value="201-300">201-300 m²</option>
//             <option value="301+">301+ m²</option>
//           </select>
//         </div>
        
//         <div className="mb-3">
//           <label className="block mb-1 text-sm text-gray-800">Ceiling Height</label>
//           <div className="flex gap-4">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="ceilingHeight"
//                 value="standard"
//                 checked={formData.ceilingHeight === "standard"}
//                 onChange={() => handleRadioChange("ceilingHeight", "standard")}
//                 className="accent-primary mr-2"
//               />
//               <span>Standard (2.4m–2.7m)</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="ceilingHeight"
//                 value="high"
//                 checked={formData.ceilingHeight === "high"}
//                 onChange={() => handleRadioChange("ceilingHeight", "high")}
//                 className="accent-primary mr-2"
//               />
//               <span>High (2.8m+)</span>
//             </label>
//           </div>
//         </div>
//       </div>
      
//       <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Any Other Important Property Details?</label>
//         <textarea
//           name="additionalDetails"
//           value={formData.additionalDetails}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-3 py-2 min-h-[100px]"
//           placeholder="Please describe the property details..."
//         ></textarea>
//       </div>
//     </div>
//   );

//   // Render Step 3: Location & Availability
//   const renderStep3 = () => (
//     <div>
//       <h3 className="text-lg font-semibold text-primary mb-6">3. Location & Availability</h3>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Service Address</label>
//           <input
//             type="text"
//             name="serviceAddress"
//             value={formData.serviceAddress}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2"
//             placeholder="Enter your address"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">City</label>
//           <select
//             name="serviceCity"
//             value={formData.serviceCity}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 appearance-none"
//           >
//             <option value="">Select City</option>
//             <option value="london">London</option>
//             <option value="manchester">Manchester</option>
//             <option value="birmingham">Birmingham</option>
//             <option value="leeds">Leeds</option>
//           </select>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 mb-4">
        
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">State/Province</label>
//           <select
//             name="serviceStateProvince"
//             value={formData.serviceStateProvince}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 appearance-none"
//           >
//             <option value="">Select state/province name</option>
//             <option value="england">England</option>
//             <option value="scotland">Scotland</option>
//             <option value="wales">Wales</option>
//             <option value="northern-ireland">Northern Ireland</option>
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Postal Code</label>
//           <input
//             type="text"
//             name="servicePostalCode"
//             value={formData.servicePostalCode}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2"
//             placeholder="Enter your postal code"
//           />
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Country</label>
//           <select
//             name="serviceCountry"
//             value={formData.serviceCountry}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 appearance-none"
//           >
//             <option value="">Select Country</option>
//             <option value="uk">United Kingdom</option>
//             <option value="us">United States</option>
//             <option value="ca">Canada</option>
//             <option value="au">Australia</option>
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Preferred Cleaning Date</label>
//           <div className="relative">
//             <input
//               type="date"
//               name="preferredDate"
//               value={formData.preferredDate}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2"
//               min={new Date().toISOString().split('T')[0]}
//             />
//           </div>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 mb-4">
  
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Preferred Time Slot</label>
//           <div className="flex gap-4 mt-2">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="preferredTimeSlot"
//                 value="morning"
//                 checked={formData.preferredTimeSlot === "morning"}
//                 onChange={() => handleRadioChange("preferredTimeSlot", "morning")}
//                 className="accent-primary mr-2"
//               />
//               <span>Morning</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="preferredTimeSlot"
//                 value="afternoon"
//                 checked={formData.preferredTimeSlot === "afternoon"}
//                 onChange={() => handleRadioChange("preferredTimeSlot", "afternoon")}
//                 className="accent-primary mr-2"
//               />
//               <span>Afternoon</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="preferredTimeSlot"
//                 value="evening"
//                 checked={formData.preferredTimeSlot === "evening"}
//                 onChange={() => handleRadioChange("preferredTimeSlot", "evening")}
//                 className="accent-primary mr-2"
//               />
//               <span>Evening</span>
//             </label>
//           </div>
//         </div>
//         <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Will you be present during the cleaning?</label>
//         <div className="flex gap-4 mt-2">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="presentDuringCleaning"
//               value="yes"
//               checked={formData.presentDuringCleaning === "yes"}
//               onChange={() => handleRadioChange("presentDuringCleaning", "yes")}
//               className="accent-primary mr-2"
//             />
//             <span>Yes, I will be available</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="presentDuringCleaning"
//               value="no"
//               checked={formData.presentDuringCleaning === "no"}
//               onChange={() => handleRadioChange("presentDuringCleaning", "no")}
//               className="accent-primary mr-2"
//             />
//             <span>No, but I will arrange access</span>
//           </label>
//         </div>
//       </div>
//       </div>
      
    
      
//       <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Is there parking available for our team?</label>
//         <div className="flex gap-4 mt-2">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="parkingAvailable"
//               value="yes"
//               checked={formData.parkingAvailable === "yes"}
//               onChange={() => handleRadioChange("parkingAvailable", "yes")}
//               className="accent-primary mr-2"
//             />
//             <span>Yes</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="parkingAvailable"
//               value="no"
//               checked={formData.parkingAvailable === "no"}
//               onChange={() => handleRadioChange("parkingAvailable", "no")}
//               className="accent-primary mr-2"
//             />
//             <span>No</span>
//           </label>
//         </div>
//       </div>
      
//       <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Are there any special instructions for access?</label>
//         <textarea
//           name="accessInstructions"
//           value={formData.accessInstructions}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-3 py-2 min-h-[100px]"
//           placeholder="Enter any access instructions, security codes, key pick up information, etc..."
//         ></textarea>
//       </div>
//     </div>
//   );

//   // Render Step 4: Condition & Special Requests
//   const renderStep4 = () => (
//     <div>
//       <h3 className="text-lg font-semibold text-primary mb-6">4. Condition & Special Requests</h3>
      
//       <div className="mb-6">
//         <label className="block mb-2 text-sm text-gray-800 font-medium">How would you describe the current condition?</label>
//         <div className="flex flex-col gap-3">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="currentCondition"
//               value="lightly"
//               checked={formData.currentCondition === "lightly"}
//               onChange={() => handleRadioChange("currentCondition", "lightly")}
//               className="accent-primary mr-2"
//             />
//             <span>Lightly Used (Minimal dust and dirt)</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="currentCondition"
//               value="moderately"
//               checked={formData.currentCondition === "moderately"}
//               onChange={() => handleRadioChange("currentCondition", "moderately")}
//               className="accent-primary mr-2"
//             />
//             <span>Moderately Dirty (Visible dirt, minor stains, buildup)</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="currentCondition"
//               value="heavily"
//               checked={formData.currentCondition === "heavily"}
//               onChange={() => handleRadioChange("currentCondition", "heavily")}
//               className="accent-primary mr-2"
//             />
//             <span>Heavily Soiled (Deep stains, grease, grime, neglected space)</span>
//           </label>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Country</label>
//           <select
//             name="serviceCountry"
//             value={formData.serviceCountry}
//             onChange={handleChange}
//             className="w-full border rounded-lg px-3 py-2 appearance-none"
//           >
//             <option value="">Select Country</option>
//             <option value="uk">United Kingdom</option>
//             <option value="us">United States</option>
//             <option value="ca">Canada</option>
//             <option value="au">Australia</option>
//           </select>
//         </div>
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Preferred Cleaning Date</label>
//           <div className="relative">
//             <input
//               type="date"
//               name="preferredDate"
//               value={formData.preferredDate}
//               onChange={handleChange}
//               className="w-full border rounded-lg px-3 py-2"
//               min={new Date().toISOString().split('T')[0]}
//             />
//           </div>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Preferred Time Slot</label>
//           <div className="flex gap-4 mt-2">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="preferredTimeSlot"
//                 value="morning"
//                 checked={formData.preferredTimeSlot === "morning"}
//                 onChange={() => handleRadioChange("preferredTimeSlot", "morning")}
//                 className="accent-primary mr-2"
//               />
//               <span>Morning</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="preferredTimeSlot"
//                 value="afternoon"
//                 checked={formData.preferredTimeSlot === "afternoon"}
//                 onChange={() => handleRadioChange("preferredTimeSlot", "afternoon")}
//                 className="accent-primary mr-2"
//               />
//               <span>Afternoon</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="preferredTimeSlot"
//                 value="evening"
//                 checked={formData.preferredTimeSlot === "evening"}
//                 onChange={() => handleRadioChange("preferredTimeSlot", "evening")}
//                 className="accent-primary mr-2"
//               />
//               <span>Evening</span>
//             </label>
//           </div>
//         </div>
//         <div>
//           <label className="block mb-1 text-sm text-gray-800 font-medium">Will you be present during the cleaning?</label>
//           <div className="flex gap-4 mt-2">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="presentDuringCleaning"
//                 value="yes"
//                 checked={formData.presentDuringCleaning === "yes"}
//                 onChange={() => handleRadioChange("presentDuringCleaning", "yes")}
//                 className="accent-primary mr-2"
//               />
//               <span>Yes, I will be available</span>
//             </label>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="presentDuringCleaning"
//                 value="no"
//                 checked={formData.presentDuringCleaning === "no"}
//                 onChange={() => handleRadioChange("presentDuringCleaning", "no")}
//                 className="accent-primary mr-2"
//               />
//               <span>No, but I will arrange access</span>
//             </label>
//           </div>
//         </div>
//       </div>
      
//       <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Is there parking available for our team?</label>
//         <div className="flex gap-4 mt-2">
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="parkingAvailable"
//               value="yes"
//               checked={formData.parkingAvailable === "yes"}
//               onChange={() => handleRadioChange("parkingAvailable", "yes")}
//               className="accent-primary mr-2"
//             />
//             <span>Yes</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="radio"
//               name="parkingAvailable"
//               value="no"
//               checked={formData.parkingAvailable === "no"}
//               onChange={() => handleRadioChange("parkingAvailable", "no")}
//               className="accent-primary mr-2"
//             />
//             <span>No</span>
//           </label>
//         </div>
//       </div>
      
//       <div className="mb-4">
//         <label className="block mb-1 text-sm text-gray-800 font-medium">Are there any special instructions for access?</label>
//         <textarea
//           name="accessInstructions"
//           value={formData.accessInstructions}
//           onChange={handleChange}
//           className="w-full border rounded-lg px-3 py-2 min-h-[100px]"
//           placeholder="Enter any access instructions, security codes, key pick up information, etc..."
//         ></textarea>
//       </div>
//     </div>
//   );

//   // Render Step 5: Review & Submit
//   const renderStep5 = () => (
//     <div>
//       <h3 className="text-lg font-semibold text-primary mb-6">5. Review & Submit</h3>
      
//       <div className="border rounded-lg p-4 mb-4">
//         <h4 className="font-medium text-primary mb-2">Personal Information</h4>
//         <div className="grid grid-cols-2 gap-4 text-sm">
//           <div>
//             <p className="text-gray-500">Full Name</p>
//             <p>{formData.fullName || "Not provided"}</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Email Address</p>
//             <p>{formData.email || "Not provided"}</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Phone Number</p>
//             <p>{formData.phoneNumber || "Not provided"}</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Address</p>
//             <p>{formData.address || "Not provided"}</p>
//           </div>
//         </div>
//       </div>
      
//       <div className="border rounded-lg p-4 mb-4">
//         <h4 className="font-medium text-primary mb-2">Cleaning Service Details</h4>
//         <div className="grid grid-cols-2 gap-4 text-sm">
//           <div>
//             <p className="text-gray-500">Type of Cleaning</p>
//             <p>{formData.cleaningType || "Not selected"}</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Property Type</p>
//             <p>{formData.propertyType || "Not selected"}</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Total Floor Area</p>
//             <p>{formData.totalFloorArea || "Not provided"}</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Ceiling Height</p>
//             <p>{formData.ceilingHeight === "standard" ? "Standard (2.4m–2.7m)" : formData.ceilingHeight === "high" ? "High (2.8m+)" : "Not selected"}</p>
//           </div>
//         </div>
        
//         <h5 className="font-medium text-primary mt-3 mb-2">Areas to Clean</h5>
//         <div className="flex flex-wrap gap-2">
//           {Object.entries(formData.specificAreas).map(([key, value]) => (
//             value && (
//               <span key={key} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                 {key.charAt(0).toUpperCase() + key.slice(1)}
//               </span>
//             )
//           ))}
//         </div>
//       </div>
      
//       <div className="border rounded-lg p-4 mb-4">
//         <h4 className="font-medium text-primary mb-2">Location & Availability</h4>
//         <div className="grid grid-cols-2 gap-4 text-sm">
//           <div>
//             <p className="text-gray-500">Service Address</p>
//             <p>{formData.serviceAddress || "Not provided"}</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Preferred Date</p>
//             <p>{formData.preferredDate || "Not selected"}</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Preferred Time</p>
//             <p>{formData.preferredTimeSlot || "Not selected"}</p>
//           </div>
//           <div>
//             <p className="text-gray-500">Present During Cleaning</p>
//             <p>{formData.presentDuringCleaning === "yes" ? "Yes, will be available" : formData.presentDuringCleaning === "no" ? "No, will arrange access" : "Not selected"}</p>
//           </div>
//         </div>
//       </div>
      
//       <div className="border rounded-lg p-4 mb-4">
//         <h4 className="font-medium text-primary mb-2">Condition & Special Requests</h4>
//         <div className="grid grid-cols-1 gap-4 text-sm">
//           <div>
//             <p className="text-gray-500">Current Condition</p>
//             <p>
//               {formData.currentCondition === "lightly" 
//                 ? "Lightly Used (Minimal dust and dirt)" 
//                 : formData.currentCondition === "moderately" 
//                   ? "Moderately Dirty (Visible dirt, minor stains, buildup)" 
//                   : formData.currentCondition === "heavily" 
//                     ? "Heavily Soiled (Deep stains, grease, grime, neglected space)" 
//                     : "Not selected"}
//             </p>
//           </div>
//           <div>
//             <p className="text-gray-500">Special Instructions</p>
//             <p>{formData.accessInstructions || "None provided"}</p>
//           </div>
//         </div>
//       </div>
      
//       <div className="mb-4">
//         <label className="inline-flex items-center">
//           <input
//             type="checkbox"
//             name="termsAgreed"
//             className="accent-primary mr-2"
//           />
//           <span className="text-sm">I agree to the terms and conditions and confirm that the information provided is accurate.</span>
//         </label>
//       </div>
//     </div>
//   );

//   // Render the stepper form
//   const renderStepperForm = () => (
//     <div className='p-8 w-full max-h-[90vh] overflow-y-auto'>
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h2 className='text-2xl font-semibold text-primary mb-1'>
//             One-Off Cleaning Service Request Form
//           </h2>
//           <div className='text-gray-600 mb-6'>
//             Book a professional cleaning service tailored to your space!
//           </div>
//         </div>
      
//       </div>
      
//       {renderStepper()}
      
//       {currentStep === 1 && renderStep1()}
//       {currentStep === 2 && renderStep2()}
//       {currentStep === 3 && renderStep3()}
//       {currentStep === 4 && renderStep4()}
//       {currentStep === 5 && renderStep5()}
      
//       <div className='flex gap-4 mt-8 justify-between'>
//         <button 
//           type='button'
//           className='border rounded-lg px-7 py-2 text-primary font-medium flex items-center'
//           onClick={handlePrevious}
//         >
//           <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//           </svg>
//           Previous
//         </button>
//         {currentStep < totalSteps ? (
//           <button
//             type='button'
//             className='bg-primary rounded-lg px-7 py-2 text-white font-medium flex items-center'
//             onClick={handleNext}
//           >
//             Next
//             <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//             </svg>
//           </button>
//         ) : (
//           <button
//             type='button'
//             className='bg-primary rounded-lg px-7 py-2 text-white font-medium'
//           >
//             Submit Request
//           </button>
//         )}
//       </div>
//     </div>
//   );

//   // Determine which screen to render
//   switch(currentScreen) {
//     case 'serviceSelect':
//       return renderServiceSelect();
//     case 'packageSelect':
//       return renderPackageSelect();
//     case 'stepperForm':
//       return renderStepperForm();
//     default:
//       return renderServiceSelect();
//   }
// }


// components/maintenance/MaintenanceServiceModal.js


export const MaintenanceServiceModal = () => {
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

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted', { selectedService, selectedPackage });
  };

  switch(currentScreen) {
    case 'serviceSelect':
      return <MaintenanceServiceSelect onSelectService={handleSelectService} />;
    case 'packageSelect':
      return (
        <MaintenancePackageSelect
          service={selectedService} 
          onSelectPackage={handleSelectPackage}
          onBack={handleBackToServices}
        />
      );
    case 'stepper':
      return (
        <MaintenanceStepper 
          service={selectedService}
          packageType={selectedPackage}
          onBack={handleBackToPackages}
          onSubmit={handleSubmit}
        />
      );
    default:
      return <MaintenanceServiceSelect onSelectService={handleSelectService} />;
  }
};