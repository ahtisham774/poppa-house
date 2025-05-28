// src/components/MaintenanceService/MultiStepForm.jsx
import React, { useState, useEffect } from 'react'
import StepIndicator from './stepIndicator'
import FormStep from './formStep'
import { getFormSteps } from '../../../../data/formStepsData'
import { Form } from 'antd'
import { useAuth } from '../../../../context/useAuth'
import clientProfileService from '../../../../api/services/clientProfileService'
import Loader from '../../../common/loader'

const MultiStepForm = ({ service, loading, packageType, onBack, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [form] = Form.useForm()
  const { user } = useAuth()
  const initials = {
    fullName: '',
    email: '',
    phoneNumber: '',
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
      iPrefer: false
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
    gardenServices: {
      lawnMowing: false,
      hedgeTrimming: false,
      weeding: false,
      treeShrub: false,
      cleaning: false,
      redesign: false
    },
    otherGardenServices: '',

    // Step 3: Service Address & Scheduling
    serviceAddress: {
      street1: '',
      street2: '',
      street3: '',
      postCode: '',
      city: '',
      state: '',
      country: ''
    },
    serviceLocationType: 'home', // or "office"
    accessType: 'key', // or "code" or "none"
    accessDetails: {
      keyLocation: '',
      codeDetails: ''
    },
    preferredDate: '',
    preferredTimeSlot: 'morning',
    presentDuringCleaning: 'yes',
    parkingAvailable: 'no',
    accessInstructions: '',

    // Step 4: Condition & Special Requests
    specialAttentionItems: {
      windows: false,
      walls: false,
      carpet: false,
      cabinets: false,
      other: false
    },
    termsAgreed: {
      terms: false,
      acknowledge: false
    },
    otherSpecialAttention: 'Specific area description',
    pets: 'yes', // or "no"
    additionalRequests: 'Any special instructions here',
    urgency: 'priority', // or "emergency" or "standard"
    additionalDetails: '',
    plumbingIssues: {
      leaks: false,
      taps: false,
      blockage: false,
      waterHeater: false,
      other: false
    },
    otherPlumbingIssue: '',
    electricalIssues: {
      powerOutage: false,
      switches: false,
      lighting: false,
      circuitBreaker: false,
      other: false
    },
    otherElectricalIssue: '',
    structuralIssues: {
      roof: false,
      walls: false,
      doors: false,
      flooring: false,
      other: false
    },
    otherStructuralIssue: '',
    heatingAndCoolingIssues: {
      radiator: false,
      boiler: false,
      ac: false,
      ventilation: false,
      other: false
    },
    otherHeatingCoolingIssue: '',
    applianceIssues: {
      washer: false,
      fridge: false,
      cooker: false,
      other: false
    },
    otherApplianceIssue: '',
    areasOfConcern: {
      plumbing: false,
      electrical: false,
      heatingCooling: false,
      roof: false,
      flooringWalls: false,
      other: false
    },
    otherAreasOfConcern: ''
  }
  const [formData, setFormData] = useState(initials)
  const [stepperAnimation, setStepperAnimation] = useState({
    prevStep: 1,
    direction: 'forward'
  })

  useEffect(() => {
    const getUserInfo = () => {
      clientProfileService.getClientProfile(user.id).then(res => {
        setFormData({
          ...formData,
          fullName: res?.name,
          email: res?.email,
          phoneNumber: res?.phoneNumber,
          address: res?.address
        })
      })
      form.setFieldsValue({
        serviceAddress: {
          street1: 'Happy Street',
          street2: 'Building 123',
          street3: 'Apartment 456',
          postCode: '12345',
          city: 'Lahore',
          state: 'Punjab',
          country: 'Pakistan'
        }
      })
    }
    if (user) {
      getUserInfo()
    }
  }, [user])

  const steps = getFormSteps(service.key, packageType.key)

  const totalSteps = steps.length

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

  const handleNext = () => {
    console.log('current step', currentStep)
    console.log('total steps', totalSteps)
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

  const handleFormChange = newData => {
    setFormData({ ...formData, ...newData })
  }

  const handleSubmitForm = () => {
    const formValues = form.getFieldValue()
    const combinedData = { ...formData, ...formValues }

    let transformedData

    switch (service.key) {
      case 'cleaning':
        transformedData = transformCleaningData(combinedData, user)
        break
      case 'garden':
        transformedData = transformGardenData(combinedData, user)
        break
      case 'repair':
        transformedData = transformRepairData(combinedData, user)
        break
      default:
        transformedData = combinedData
    }

    onSubmit(transformedData)
  }

  // Transformation functions
  const transformCleaningData = (data, user) => {
    const specificAreas = []

    // Add bedroom if selected
    if (data.specificAreas?.bedroom) {
      specificAreas.push({
        category: 'Apartment & houses',
        areas: [
          {
            areaType: 'Bedroom',
            amount: data.bedroomCount,
            area: data.bedroomFloorArea
          }
        ]
      })
    }

    // Add bathroom if selected
    if (data.specificAreas?.bathroom) {
      specificAreas.push({
        category: 'Apartment & houses',
        areas: [
          {
            areaType: 'Bathroom',
            amount: data.bathroomCount,
            area: data.bathroomFloorArea
          }
        ]
      })
    }

    // Add kitchen if selected
    if (data.specificAreas?.kitchen) {
      specificAreas.push({
        category: 'Apartment & houses',
        areas: [
          {
            areaType: 'Kitchen',
            amount: data.kitchenCount,
            area: data.kitchenFloorArea
          }
        ]
      })
    }

    // Add other rooms if selected
    if (data.specificAreas?.otherRooms) {
      specificAreas.push({
        category: 'Apartment & houses',
        areas: [
          {
            areaType: 'Other rooms',
            amount: data.otherRoomsCount,
            area: data.otherRoomsFloorArea
          }
        ]
      })
    }

    return {
      userId: user?.id,
      personalDetails: {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        ...data.address
      },
      serviceAddress: data.serviceAddress,
      subscriptionPlan: data.subscriptionPlan,
      typeOfCleaning: data.cleaningType,
      propertyType: data.propertyType,
      specificAreasToClean: specificAreas,
      additionalPropertyDetails: [
        {
          floorType: data.floorType,
          windowsCount: data.windowsCount
        }
      ],
      locationAndAvailability: [
        {
          day: data.preferredCleaningDays,
          timeSlot: data.preferredTimeSlot
        }
      ],
      preferredCleaningDate: data.preferredDate,
      preferredTimeSlot: data.preferredTimeSlot,
      willBePresentDuringCleaning: data.presentDuringCleaning === 'yes',
      isParkingAvailable: data.parkingAvailable === 'yes',
      specialInstruction: data.accessInstructions,
      conditionAndSpecialRequests: [
        { request: data.otherSpecialAttention },
        { request: data.additionalRequests }
      ],
      currentSituationDescription: data.currentCondition,
      specificAreaOrItem: data.specialAttentionItems,
      havePets: data.pets === 'yes',
      additionalRequest: data.additionalRequests,
      paymentAndSubscriptionDetails: {
        preferredPaymentMethod: data.preferredPaymentMethod,
        subscriptionStartDate: data.subscriptionStartDate,
        autoRenewal: data.subscriptionAutoRenewal === 'Yes'
      },
      files: data.files || []
    }
  }

  const transformGardenData = (data, user) => {
    const gardenServices = []

    if (data.gardenServices?.lawnMowing) gardenServices.push('Lawn mowing')
    if (data.gardenServices?.hedgeTrimming)
      gardenServices.push('Hedge trimming')
    if (data.gardenServices?.weeding) gardenServices.push('Weeding')
    if (data.gardenServices?.treeShrub) gardenServices.push('Tree/shrub care')
    if (data.gardenServices?.cleaning) gardenServices.push('Garden cleaning')
    if (data.gardenServices?.redesign) gardenServices.push('Garden redesign')

    return {
      userId: user?.id,
      serviceType: 'Subscription',
      phoneNumber: data.phoneNumber,
      subscriptionPlan: data.subscriptionPlan,
      personalDetails: {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        ...data.address
      },
      serviceDetails: {
        serviceRequired: gardenServices.join(', '),
        lawnSize: data.floorArea,
        gardenArea: data.totalFloorArea,
        additionalRequirements: data.otherGardenServices
      },
      propertyDetails: {
        propertyType: data.propertyType,
        description: data.otherPropertyType
      },
      locationAvailability: {
        serviceAddress: data.serviceAddress,
        preferredDates: [data.preferredDate],
        timeSlot: data.preferredTimeSlot,
        callRequested: false
      },
      urgencyPriority: {
        priorityType: data.urgency
      },
      specialInstructions: {
        currentCondition: data.currentCondition,
        text: data.additionalRequests
      },
      files: data.files || []
    }
  }

  const transformRepairData = (data, user) => {
    const plumbingIssues = []
    const electricalIssues = []
    const structuralIssues = []
    const heatingCoolingIssues = []
    const applianceIssues = []
    const commonFields = {
      serviceType: packageType.key,
      userId: user?.id,
      personalDetails: {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        ...data.address
      },
      availability: {
        serviceAddress: data.serviceAddress,
        timeSlot: data.preferredTimeSlot,
        presentDuringCleaning: data.presentDuringCleaning,
      
      },
      files: data.files || [],
      agreeTerms: data.termsAgreed.terms
    }

    if (packageType.key === 'subscription') {
      const subscriptionPlan = data.subscriptionPlan || 'basic'
      commonFields.subscriptionPlan = subscriptionPlan

      commonFields.paymentSubscription = {
        autoRenewal: data.subscriptionAutoRenewal === 'Yes',
        paymentMethod: data.preferredPaymentMethod
      }
      commonFields.availability = {
        ...commonFields.availability,
        preferredMonths: data.preferredMonths
      }
      commonFields.maintenanceNeeded = {
        propertyType: data.propertyType,
        specificAreas: data.areasOfConcern,
        otherAreasOfConcern: data.otherAreasOfConcern,
        anyPreviousIssues: data.anyPreviousIssues
      }



    } else {
      if (data.plumbingIssues?.leaks) plumbingIssues.push('Leaks')
      if (data.plumbingIssues?.taps) plumbingIssues.push('Taps')
      if (data.plumbingIssues?.blockage) plumbingIssues.push('Blockage')
      if (data.plumbingIssues?.waterHeater) plumbingIssues.push('Water heater')
      if (data.plumbingIssues?.other)
        plumbingIssues.push(data.otherPlumbingIssue)

      if (data.electricalIssues?.powerOutage)
        electricalIssues.push('Power outage')
      if (data.electricalIssues?.switches) electricalIssues.push('Switches')
      if (data.electricalIssues?.lighting) electricalIssues.push('Lighting')
      if (data.electricalIssues?.circuitBreaker)
        electricalIssues.push('Circuit breaker')
      if (data.electricalIssues?.other)
        electricalIssues.push(data.otherElectricalIssue)

      if (data.structuralIssues?.roof) structuralIssues.push('Roof')
      if (data.structuralIssues?.walls) structuralIssues.push('Walls')
      if (data.structuralIssues?.doors) structuralIssues.push('Doors')
      if (data.structuralIssues?.flooring) structuralIssues.push('Flooring')
      if (data.structuralIssues?.other)
        structuralIssues.push(data.otherStructuralIssue)

      if (data.heatingAndCoolingIssues?.radiator)
        heatingCoolingIssues.push('Radiator')
      if (data.heatingAndCoolingIssues?.boiler)
        heatingCoolingIssues.push('Boiler')
      if (data.heatingAndCoolingIssues?.ac) heatingCoolingIssues.push('AC')
      if (data.heatingAndCoolingIssues?.ventilation)
        heatingCoolingIssues.push('Ventilation')
      if (data.heatingAndCoolingIssues?.other)
        heatingCoolingIssues.push(data.otherHeatingCoolingIssue)

      if (data.applianceIssues?.washer) applianceIssues.push('Washer')
      if (data.applianceIssues?.fridge) applianceIssues.push('Fridge')
      if (data.applianceIssues?.cooker) applianceIssues.push('Cooker')
      if (data.applianceIssues?.other)
        applianceIssues.push(data.otherApplianceIssue)

      commonFields.urgencyPriority = {
        priorityType: data.urgency
      }
      commonFields.conditions = {
        urgencyType: data.howUrgent,
        description: data.issueDescription,
        troubleshootingSteps: data.troubleshootingDone
      }
      commonFields.AddWarranty = data.repairWarranty
      commonFields.availability = {
        ...commonFields.availability,
        serviceDate: data.preferredDate,
        parkingAvailable: data.parkingAvailable === 'yes',
        accessInstructions: data.accessInstructions
      }
      commonFields.serviceDetails = {
        plumbingAndWaterSystem:
          plumbingIssues.length > 0 ? { issues: plumbingIssues } : {},
        electricalAndLighting:
          electricalIssues.length > 0 ? { issues: electricalIssues } : {},
        structuralRepair:
          structuralIssues.length > 0 ? { issues: structuralIssues } : {},
        heatingCoolingSystem:
          heatingCoolingIssues.length > 0
            ? { issues: heatingCoolingIssues }
            : {},
        appliancesAndFixtures:
          applianceIssues.length > 0 ? { issues: applianceIssues } : {}
      }
    }

    return commonFields
  }

  return (
    <div className='p-3 lg:p-8 w-full max-h-[90vh] overflow-y-auto'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <h2 className='text-2xl font-semibold text-[#131e47] mb-1'>
            {packageType.title} {service.title}
          </h2>
          <div className='text-gray-600 mb-6'>
            {service.formTitle ||
              'Book a professional service tailored to your needs!'}
          </div>
        </div>
      </div>

      <StepIndicator
        stepperAnimation={stepperAnimation}
        currentStep={currentStep}
        totalSteps={totalSteps}
        steps={steps}
      />
      <Form
        form={form}
        onFinish={handleSubmitForm}
        layout='vertical'
        className='w-full'
      >
        <FormStep
          step={steps[currentStep - 1]}
          index={currentStep}
          formData={formData}
          form={form}
          onChange={handleFormChange}
          serviceType={service.key}
        />

        <div className='flex gap-4 mt-8 flex-wrap-reverse justify-between'>
          <button
            type='button'
            className='border w-full sm:w-fit rounded-lg justify-center px-7 py-2 text-[#131e47] font-medium flex items-center gap-1'
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
          {currentStep < totalSteps && (
            <button
              type='button'
              className='bg-[#131e47] w-full sm:w-fit justify-center rounded-lg px-7 py-2 text-white font-medium flex items-center gap-2'
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
          )}
          {currentStep === totalSteps && (
            <button
              type='submit'
              disabled={loading}
              className='bg-[#131e47] w-full sm:w-fit rounded-lg disabled:bg-opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 px-7 py-2 text-white font-medium'
            >
              {loading && <Loader variants='sm' />}
              Submit Request
            </button>
          )}
        </div>
      </Form>
    </div>
  )
}

export default MultiStepForm
