import { useEffect, useState } from 'react'

import RenderFields from './maintainence/renderFields'
import { propertyInsuranceSteps } from '../../../data/billsConsolidationSteps'
import { useAuth } from '../../../context/useAuth'
import clientProfileService from '../../../api/services/clientProfileService'
import { Form } from 'antd'
import serviceHub from '../../../api/services/servicesHub'
import { showToast } from '../../../utils/toast'
import Loader from '../../common/loader'

const PropertyInsurance = () => {
  const { user } = useAuth()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const initials = {
    fullName: '',
    email: '',
    phoneNumber: '',
    yearOfConstruction: '',
    insuranceTypes: {
      propertyInsurance: false,
      rentInsurance: false
    },
    securityMeasures: '',
    accidentalDamageCoverage: '',
    consolidationStartDate: '',

    specialRequests: '',
    termsAgreed: false
  }
  const [formData, setFormData] = useState(initials)

  useEffect(() => {
    const getUserInfo = () => {
      clientProfileService.getClientProfile(user.id).then(res => {
        console.log('getUserInfo', res)
        setFormData({
          ...formData,
          fullName: res?.name,
          email: res?.email,
          phoneNumber: res?.phoneNumber,
          address: res?.address
        })
      })
    }
    if (user) {
      getUserInfo()
    }
  }, [user])

  const handleFormChange = newData => {
    console.log('handleFormChange', newData)
    setFormData({ ...formData, ...newData })
  }

  const handleSubmitForm = values => {
    const {
      fullName,
      email,
      phoneNumber,
      insuranceTypes,
      securityMeasures,
      accidentalDamageCoverage,
      consolidationStartDate,
      specialRequests,
      ownershipStatus,
      yearOfConstruction,
      propertyCondition,
      propertyUsage,
      hasFloodingIssues,
      coverageType,
      agreementType,
      leaseLength,
      monthlyRental,
      tenantType,
      tenantReferenced,
      unpaidRentCoverage,
      legalExpenseCover,
      contentsValue,
      rebuildCost,
      preferredStartDate,
      additionalRequirements,
      typeOfCoverage
    } = formData

    // Base structure
    const updatedData = {
      userId: user?.id,
      fullName,
      email,
      phoneNumber,
      propertyAddress: {
        street1: values?.address?.street1 || '',
        street2: values?.address?.street2 || '',
        street3: values?.address?.street3 || '',
        city: values?.address?.city || '',
        postCode: values?.address?.postCode || '',
        country: values?.address?.country || ''
      },
      ownershipStatus,
      yearOfConstruction,
      propertyCondition,
      propertyUsage,
      hasFloodingExperience: hasFloodingIssues === 'yes',
      insurancePolicy: insuranceTypes.propertyInsurance
        ? insuranceTypes.rentInsurance
          ? 'Both'
          : 'Property'
        : 'Rent',
      additionalDetails: {
        startDate: preferredStartDate || consolidationStartDate,
        specialRequests: additionalRequirements || specialRequests
      }
    }

    // Add property details if property insurance is selected
    if (insuranceTypes.propertyInsurance) {
      updatedData.propertyDetails = {
        typeOfCoverage: coverageType || typeOfCoverage,
        estimatedRebuildCost: parseInt(rebuildCost) || 0,
        contentValueToBeInsured: parseInt(contentsValue) || 0,
        securityMeasures,
        accidentalDamageCover: accidentalDamageCoverage === 'yes'
      }
    }

    // Add rent details if rent insurance is selected
    if (insuranceTypes.rentInsurance) {
      updatedData.rentDetails = {
        tenantType,
        tenantReferenceCompleted: tenantReferenced === 'yes',
        rentAgreementType: agreementType,
        leaseLength: `${leaseLength} months`,
        monthlyRentalIncome: parseInt(monthlyRental) || 0,
        unpaidRentCoverageMonths: parseInt(unpaidRentCoverage) || 0,
        includeLegalExpenseCover: legalExpenseCover === 'yes'
      }
    }

    console.log('Form submitted:', updatedData)
    setLoading(true)
    serviceHub
      .addPropertyInsurance(updatedData)
      .then(res => {
        console.log('Service added successfully:', res)
        form.resetFields()
        setFormData(initials)
        showToast(
          'success',
          'Property Insurance request submitted successfully!'
        )
      })
      .catch(error => {
        console.error('Error adding service:', error)
        showToast('error', error.message || 'Failed to submit request')
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const shouldDisplay = section => {
    if (!section.conditions) return true

    return section.conditions.every(condition => {
      const { field, value, operator = 'equals' } = condition
      const fieldValue = formData[field]
      console.log('shouldDisplay', field, value, operator, fieldValue)
      switch (operator) {
        case 'equals':
          return fieldValue[value]
        case 'notEquals':
          return fieldValue !== value
        case 'contains':
          return Array.isArray(fieldValue) ? fieldValue.includes(value) : false
        case 'startsWith':
          return typeof fieldValue === 'string'
            ? fieldValue.startsWith(value)
            : false
        default:
          return true
      }
    })
  }

  const visibleSteps = propertyInsuranceSteps.map(step => ({
    ...step,
    isVisible: shouldDisplay(step)
  }))

  const visibleCount = visibleSteps.filter(step => step.isVisible).length

  return (
    <div className='p-3 lg:p-8 w-full max-h-[90vh] overflow-y-auto'>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <h2 className='text-2xl font-semibold text-[#131e47] mb-1'>
            Property & Rent Insurance Form
          </h2>
          <div className='text-gray-600 mb-6'>
            Protect your home and rental space with comprehensive coverage
            options tailored to your needs.
          </div>
        </div>
      </div>
      <Form
        form={form}
        onFinish={handleSubmitForm}
        className='flex flex-col gap-8 w-full'
      >
        {visibleSteps.map((step, originalIndex) =>
          !step.isVisible ? null : (
            <div
              key={originalIndex}
              className='flex flex-col gap-4 border-b w-full'
            >
              <h3 className='text-lg font-semibold text-[#131e47]'>
                {
                  visibleSteps
                    .slice(0, originalIndex + 1)
                    .filter(s => s.isVisible).length
                }
                . {step.title}
              </h3>
              <div className='md:grid md:grid-cols-2 md:gap-4'>
                {step.fields?.map((field, fieldIndex) => {
                  return (
                    <RenderFields
                      key={fieldIndex}
                      step={step}
                      form={form}
                      formData={formData}
                      index={fieldIndex}
                      onChange={handleFormChange}
                      field={field}
                    />
                  )
                })}
              </div>
            </div>
          )
        )}
        <div className='flex gap-4 mt-8 justify-between flex-wrap-reverse'>
          <button
            type='button'
            className='border rounded-lg w-full sm:flex-1 sm:w-fit px-7 py-2 justify-center text-[#131e47] font-medium flex items-center gap-1'
          >
            Cancel
          </button>

          <button
            type='submit'
            disabled={loading}
            className='bg-[#131e47] flex-1 rounded-lg disabled:bg-opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 px-7 py-2 text-white font-medium'
          >
            {loading && <Loader variants='sm' />}
            Submit Request
          </button>
        </div>
      </Form>
    </div>
  )
}

export default PropertyInsurance
