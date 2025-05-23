import React from 'react'
import { useModal } from '../../../context/useModal'
import { useAuth } from '../../../context/useAuth'
import serviceHub from '../../../api/services/servicesHub'
import { showToast } from '../../../utils/toast'
import Loader from '../../common/loader'
import Address from '../../common/address'
import { Form } from 'antd'
// Add to components/ModalContext.jsx (inside ModalRenderer)

export function PropertyViewingPackagesModal ({ close }) {
  const { openModal } = useModal()
  return (
    <div className='p-8 pb-7 w-full'>
      <h2 className='text-2xl font-semibold text-primary'>
        Choose Your Property Viewing Package
      </h2>
      <div className='mt-8 flex gap-6'>
        {[
          {
            title: 'Basic Property Viewing',
            desc: 'Double your insight: Buy 1 Viewing Package, get 2 viewings with our trained and trusted property viewing experts.',
            bullets: [
              'Detailed overview of tenancy/sales contract terms.',
              "Thorough examination of the property's exterior and interior with pictures.",
              'Recorded video walkthrough of the viewing process.',
              'Ask as many Questions as you possibly can regarding the properties.'
            ],
            icon: (
              <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.2667 13.6716C21.4855 17.5779 18.5402 21.256 14.4074 22.0779C12.3917 22.4793 10.3008 22.2346 8.43237 21.3785C6.56392 20.5224 5.01318 19.0987 4.00095 17.3101C2.98872 15.5214 2.56661 13.459 2.79472 11.4164C3.02283 9.37392 3.88954 7.45543 5.27143 5.93414C8.1058 2.81227 12.8917 1.95289 16.798 3.51539'
                  stroke='#3853A0'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.98438 12.1094L12.8906 16.0156L22.2656 5.85938'
                  stroke='#3853A0'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ),
            action: () => openModal('proPropertyViewingForm', { type: 'basic' })
          },
          {
            title: 'Pro Property Viewing',
            desc: 'Buy 1 Viewing Package, get 2 Viewings with premium features for complete confidence in your property search.',
            bullets: [
              'All Basic Package features',
              'Unlimited Q&A about property and community',
              'Detailed billing information (council tax, etc.)',
              'Live video call walkthrough option',
              'In-depth neighborhood overview',
              'Thorough inspection of fixtures and appliances',
              'Comprehensive safety and security checks'
            ],
            icon: (
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.893 16.92L19.973 20M19 11.5C19 13.4891 18.2098 15.3968 16.8033 16.8033C15.3968 18.2098 13.4891 19 11.5 19C9.51088 19 7.60322 18.2098 6.1967 16.8033C4.79018 15.3968 4 13.4891 4 11.5C4 9.51088 4.79018 7.60322 6.1967 6.1967C7.60322 4.79018 9.51088 4 11.5 4C13.4891 4 15.3968 4.79018 16.8033 6.1967C18.2098 7.60322 19 9.51088 19 11.5Z'
                  stroke='#3853A0'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ),
            action: () => openModal('proPropertyViewingForm', { type: 'pro' })
          }
        ].map((pkg, n) => (
          <div
            key={pkg.title}
            className='bg-white border rounded-xl flex-1 px-7 py-6 flex flex-col gap-3 shadow-sm'
          >
            <div className='flex items-center gap-2 size-10 rounded-lg justify-center bg-[#ebedf5]'>
              {pkg.icon}
            </div>
            <h3 className='font-medium text-2xl text-primary mt-2'>
              {pkg.title}
            </h3>
            <div className='font-light text-sm'>{pkg.desc}</div>
            <ul className='mt-3 flex-1 text-sm space-y-2'>
              {pkg.bullets.map(bul => (
                <li className='flex items-start gap-2 text-primary' key={bul}>
                  <svg
                    width='23'
                    height='23'
                    className='shrink-0 mt-0.5'
                    viewBox='0 0 23 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_2884_10240)'>
                      <path
                        d='M5.76695 10.8184L9.75998 13.9262L15.0541 7.67229M10.4402 19.5391C9.21937 19.5426 8.0099 19.3202 6.88078 18.8845C5.75166 18.4488 4.72501 17.8084 3.85945 16.9999C2.99389 16.1913 2.30638 15.2305 1.83615 14.1721C1.36593 13.1138 1.1222 11.9788 1.1189 10.8318C1.1156 9.6848 1.35278 8.54835 1.8169 7.48734C2.28102 6.42632 2.96299 5.4615 3.82388 4.64798C4.68477 3.83446 5.70771 3.18815 6.8343 2.74598C7.96089 2.3038 9.16907 2.0744 10.3899 2.07089C12.8553 2.06379 15.2225 2.97718 16.9706 4.61012C18.7186 6.24307 19.7044 8.4618 19.7111 10.7782C19.7178 13.0947 18.7448 15.319 17.0061 16.962C15.2675 18.605 12.9056 19.532 10.4402 19.5391Z'
                        stroke='#0D99FF'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_2884_10240'>
                        <rect
                          width='22.0058'
                          height='22.0058'
                          fill='white'
                          transform='translate(-0.0078125 1) rotate(-0.164995)'
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className='font-normal'>{bul}</span>
                </li>
              ))}
            </ul>
            <button
              className='rounded bg-primary mt-1 text-white font-medium  py-2'
              onClick={pkg.action}
            >
              Select Package
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Exactly modeled on your 3rd screenshot (Pro Property Viewing form)
export function ProPropertyViewingFormModal ({ type, close }) {
  // type == 'pro' || 'basic'
  const { user } = useAuth()
  const [loading, setLoading] = React.useState(false)
  const [formInput = form] = Form.useForm()

  const initialState = {
    source: 'online',
    propertyUrl: '',
    city: '',
    postalCode: '',
    agencyName: '',
    contactDetails: '',
    hasCommunicated: 'yes',
    viewingInfo: '',
    hasConcerns: 'yes',
    concerns: '',
    preferredLanguage: type === 'pro' ? 'English' : '',
    otherLanguage: '',
    earlierInspection: 'yes',
    howSoon: '1',
    alternativeCommunication: 'yes',
    email: '',
    promoCode: '',
    consentGiven: false
  }

  const [form, setForm] = React.useState(initialState)

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const formatFormData = values => {
    return {
      userId: user?.id,
      howFound: form.source === 'online' ? 'Online' : 'Address',
      url: form.propertyUrl,
      ...values,
      nameOfAgencyOrOwner: form.agencyName,
      contactDetails: form.contactDetails,
      communicatedBefore: form.hasCommunicated === 'yes',
      communicationExplanation: form.viewingInfo,
      hasConcerns: form.hasConcerns === 'yes',
      concernExplanation: form.concerns,
      preferredLanguage:
        form.preferredLanguage === 'other'
          ? form.otherLanguage
          : form.preferredLanguage,
      requestEarlyInspection: form.earlierInspection === 'yes',
      preferredDate: calculatePreferredDate(form.howSoon),
      wantsOtherCommunication: form.alternativeCommunication === 'yes',
      communicationEmail: form.email,
      promoCode: form.promoCode,
      viewingPackage: type === 'pro' ? 'Pro' : 'Basic'
    }
  }

  const calculatePreferredDate = days => {
    if (form.earlierInspection !== 'yes') return null

    const date = new Date()
    let daysToAdd = parseInt(days)
    while (daysToAdd > 0) {
      date.setDate(date.getDate() + 1)
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        daysToAdd--
      }
    }
    return date.toISOString().split('T')[0] // Format as YYYY-MM-DD
  }

  const handleSubmit = async values => {
    if (!form.consentGiven) {
      alert('Please give consent to proceed')
      return
    }

    const formattedData = formatFormData(values)
    console.log('Formatted submission data:', formattedData)

    try {
      setLoading(true)
      serviceHub
        .addService(formattedData)
        .then(res => {
          console.log('Service added successfully:', res)
          showToast('success', res.message || 'Service added successfully')
          window.location.href = res.checkoutUrl
          resetForm() // Reset form after successful submission
          // Optionally show success message
        })
        .catch(err => {
          console.error('Error adding service:', err)
          showToast('error', 'Error adding service')
        })
        .finally(() => {
          setLoading(false)
          close()
        })

      // Optionally show success message
    } catch (error) {
      console.error('Submission error:', error)
      // Handle error (show error message, etc.)
    }
  }

  const resetForm = () => {
    setForm(initialState)
  }



  const showPropertyUrl = form.source === 'online'
  const showConcernsTextarea = form.hasConcerns === 'yes'
  const yourBehalf = form.hasCommunicated === 'yes'
  const showOtherLanguageField = form.preferredLanguage === 'other'
  const showHowSoonOptions = form.earlierInspection === 'yes'

  return (
    <Form
      form={formInput}
      className='p-9 w-full max-h-[90vh] overflow-y-auto'
      onFinish={handleSubmit}
    >
      <div className='flex justify-between items-center mb-1'>
        <h2 className='text-xl font-semibold text-primary'>
          {type === 'pro' ? 'Pro Property Viewing' : 'Basic Property Viewing'}
        </h2>
      </div>
      <div className='text-gray-600 mb-7'>
        Please provide details about the property you'd like us to view
      </div>

      {/* Where did you find this property? */}
      <div className='mb-6'>
        <div className='font-medium text-primary mb-2'>
          Where did you find this property?
        </div>
        <div className='space-y-2 flex flex-col font-medium'>
          <label className='inline-flex items-center mr-4'>
            <input
              type='radio'
              name='source'
              value='online'
              checked={form.source === 'online'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Online</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='source'
              value='address'
              checked={form.source === 'address'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>I know the address</span>
          </label>
        </div>

        {showPropertyUrl && (
          <div className='mt-3'>
            <label className=' text-sm text-primary flex items-center gap-1 font-medium mb-1'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.75 4.5L11.25 3C12 2.25 13.5 2.25 14.25 3L15 3.75C15.75 4.5 15.75 6 15 6.75L11.25 10.5C10.5 11.25 9 11.25 8.25 10.5M8.25 13.5L6.75 15C6 15.75 4.5 15.75 3.75 15L3 14.25C2.25 13.5 2.25 12 3 11.25L6.75 7.5C7.5 6.75 9 6.75 9.75 7.5'
                  stroke='#131E47'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Property URL
            </label>
            <input
              name='propertyUrl'
              value={form.propertyUrl}
              onChange={handleChange}
              className='w-full border rounded-lg px-3 py-2 text-sm mb-2 focus:ring-2 focus:ring-blue-200'
              placeholder='Enter the property URL'
            />
          </div>
        )}
      </div>

      {/* City and Postal/Zip Code */}
      {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border-b-2 '>
        <div>
          <label className='block text-sm text-primary font-medium mb-1'>
            City
          </label>
          <input
            name='city'
            value={form.city}
            onChange={handleChange}
            className='w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200'
            placeholder='Enter the city name'
          />
        </div>
        <div>
          <label className='block text-sm text-primary font-medium mb-1'>
            Postal/Zip Code
          </label>
          <input
            name='postalCode'
            value={form.postalCode}
            onChange={handleChange}
            className='w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200'
            placeholder='Enter postal/zip code here'
          />
        </div>
      </div> */}
      <Address form={formInput} />

      {/* Agency/Landlord Information */}
      <div className='my-6'>
        <div className='font-medium text-primary mb-4'>
          Agency/Landlord Information
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border-b-2'>
          <div>
            <label className='block text-sm text-primary font-medium mb-1'>
              Name of Agency, Landlord, or Property Owner
            </label>
            <input
              name='agencyName'
              value={form.agencyName}
              onChange={handleChange}
              className='w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200'
              placeholder='Enter the name'
            />
          </div>
          <div>
            <label className='block text-sm text-primary font-medium mb-1'>
              Contact Details
            </label>
            <input
              name='contactDetails'
              value={form.contactDetails}
              onChange={handleChange}
              className='w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200'
              placeholder='Enter the Contact Details'
            />
          </div>
        </div>
      </div>

      {/* Communication with agent */}
      <div className='mb-6 pb-6 border-b-2'>
        <div className='mb-6'>
          <div className='font-medium text-primary mb-2'>
            Have you already communicated with the agent, landlord or property
            owner?
          </div>
          <div className='space-x-4'>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                name='hasCommunicated'
                value='yes'
                checked={form.hasCommunicated === 'yes'}
                onChange={handleChange}
                className='accent-primary'
              />
              <span className='ml-2'>Yes</span>
            </label>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                name='hasCommunicated'
                value='no'
                checked={form.hasCommunicated === 'no'}
                onChange={handleChange}
                className='accent-primary'
              />
              <span className='ml-2'>No</span>
            </label>
          </div>
        </div>

        {/* Information for viewing */}
        {yourBehalf && (
          <div className=''>
            <div className='font-medium text-primary mb-2'>
              Information relevant for our viewing on your behalf
            </div>
            <textarea
              name='viewingInfo'
              value={form.viewingInfo}
              onChange={handleChange}
              className='w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200 min-h-[100px]'
              placeholder='Please provide any relevant information (Max 1000 words)'
            />
          </div>
        )}
      </div>

      {/* Concerns about property */}
      <div className='mb-6 pb-6 border-b-2'>
        <div className='font-medium text-primary mb-2'>
          Do you have any concerns about the property?
        </div>
        <div className='space-x-4 mb-2'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='hasConcerns'
              value='yes'
              checked={form.hasConcerns === 'yes'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='hasConcerns'
              value='no'
              checked={form.hasConcerns === 'no'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>No</span>
          </label>
        </div>

        {showConcernsTextarea && (
          <div>
            <label className='block text-sm text-primary font-medium mb-1'>
              What are your concerns?
            </label>
            <textarea
              name='concerns'
              value={form.concerns}
              onChange={handleChange}
              className='w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200 min-h-[100px]'
              placeholder='Please describe your concerns (Max 1000 words)'
            />
          </div>
        )}
      </div>

      {/* Preferred Language */}
      <div className='mb-6 pb-6 border-b-2'>
        <div className='font-medium text-primary mb-2'>
          Preferred Language for Communication (Other than English)
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='arabic'
              checked={form.preferredLanguage === 'arabic'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Arabic</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='french'
              checked={form.preferredLanguage === 'french'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>French</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='ga'
              checked={form.preferredLanguage === 'ga'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Ga</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='hausa'
              checked={form.preferredLanguage === 'hausa'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Hausa</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='hindi'
              checked={form.preferredLanguage === 'hindi'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Hindi</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='igbo'
              checked={form.preferredLanguage === 'igbo'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Igbo</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='mandarin'
              checked={form.preferredLanguage === 'mandarin'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Mandarin</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='portuguese'
              checked={form.preferredLanguage === 'portuguese'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Portuguese</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='yoruba'
              checked={form.preferredLanguage === 'yoruba'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Yoruba</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='polish'
              checked={form.preferredLanguage === 'polish'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Polish</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='spanish'
              checked={form.preferredLanguage === 'spanish'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Spanish</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='twi'
              checked={form.preferredLanguage === 'twi'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Twi</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='preferredLanguage'
              value='other'
              checked={form.preferredLanguage === 'other'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Other</span>
          </label>
        </div>

        {showOtherLanguageField && (
          <div className='mt-3'>
            <label className='block text-sm text-primary font-medium mb-1'>
              Please specify language
            </label>
            <input
              name='otherLanguage'
              value={form.otherLanguage}
              onChange={handleChange}
              className='w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200'
              placeholder='Enter the specific language'
            />
          </div>
        )}
      </div>

      {/* Earlier inspection */}
      <div className='mb-6 pb-6 border-b-2'>
        <div className='font-medium text-primary mb-2'>
          We strive to provide you with the property inspection within 5 working
          days. Do you want it earlier than that?
        </div>
        <div className='text-sm text-gray-500 mb-2'>
          This will attract a 40% increase in our fee.
        </div>
        <div className='space-x-4 mb-2'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='earlierInspection'
              value='yes'
              checked={form.earlierInspection === 'yes'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='earlierInspection'
              value='no'
              checked={form.earlierInspection === 'no'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>No</span>
          </label>
        </div>

        {showHowSoonOptions && (
          <div className='ml-6 mt-2'>
            <div className='font-medium text-sm mb-1'>How Soon?</div>
            <div className='flex flex-col gap-2'>
              <label className=' items-center block'>
                <input
                  type='radio'
                  name='howSoon'
                  value='1'
                  checked={form.howSoon === '1'}
                  onChange={handleChange}
                  className='accent-primary'
                />
                <span className='ml-2'>1 working day</span>
              </label>
              <label className='items-center block'>
                <input
                  type='radio'
                  name='howSoon'
                  value='2'
                  checked={form.howSoon === '2'}
                  onChange={handleChange}
                  className='accent-primary'
                />
                <span className='ml-2'>2 working days</span>
              </label>
              <label className=' items-center block'>
                <input
                  type='radio'
                  name='howSoon'
                  value='3'
                  checked={form.howSoon === '3'}
                  onChange={handleChange}
                  className='accent-primary'
                />
                <span className='ml-2'>3 working days</span>
              </label>
              <label className=' items-center block'>
                <input
                  type='radio'
                  name='howSoon'
                  value='4'
                  checked={form.howSoon === '4'}
                  onChange={handleChange}
                  className='accent-primary'
                />
                <span className='ml-2'>4 working days</span>
              </label>
            </div>
            <div className='text-sm text-gray-500 mt-1'>
              Note: If we cannot view within the specified date, you will be
              refunded the 40% extra charge.
            </div>
          </div>
        )}
      </div>

      {/* Alternative communication */}
      <div className='mb-6 pb-6 border-b-2'>
        <div className='font-medium text-primary mb-2'>
          We will be sending you notifications and updates in your messages
          section as well as your activities section. Do you prefer another
          communication option?
        </div>
        <div className='space-x-4 mb-2'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='alternativeCommunication'
              value='yes'
              checked={form.alternativeCommunication === 'yes'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='alternativeCommunication'
              value='no'
              checked={form.alternativeCommunication === 'no'}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='ml-2'>No</span>
          </label>
        </div>

        {form.alternativeCommunication === 'yes' && (
          <div className='mt-3'>
            <label className='block text-sm text-primary font-medium mb-1'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200'
              placeholder='Enter your email'
            />
          </div>
        )}
      </div>

      {/* Promo Code */}
      <div className='mb-6 pb-6 border-b-2'>
        <div className='font-medium text-primary mb-2'>
          Promo Code (if applicable)
        </div>
        <input
          name='promoCode'
          value={form.promoCode}
          onChange={handleChange}
          className='w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200'
          placeholder='Enter promo code'
        />
      </div>

      {/* Consent */}
      <div className='mb-7'>
        <label className='inline-flex items-start'>
          <input
            type='checkbox'
            name='consentGiven'
            checked={form.consentGiven}
            onChange={handleChange}
            className='relative mt-1 appearance-none shrink-0 size-4 border-2 border-[#131e47] rounded-full checked:bg-white focus:outline-none focus:ring-0 transition-colors duration-200'
            style={{
              backgroundImage: form.consentGiven
                ? 'radial-gradient(circle, #131e47 0%, #131e47 40%, white 40%, white 100%)'
                : 'none'
            }}
          />
          <span className='ml-2 text-sm font-medium'>
            I give consent for an Agent from Proppa House to represent and view
            this property on my behalf. A copy of the consent form will be sent
            to my email.
          </span>
        </label>
      </div>

      {/* Form Actions */}
      <div className='flex gap-4 justify-end items-center mt-7'>
        <button
          type='button'
          className='border rounded-lg px-7 py-2 text-primary font-medium'
          onClick={close}
        >
          Cancel
        </button>
        <button
          type='submit'
          disabled={loading}
          className='bg-primary disabled:bg-opacity-60 flex items-center justify-center gap-2 disabled:cursor-not-allowed text-white rounded-lg px-7 py-2 font-medium'
        >
          {loading && <Loader variants='sm' />}
          Submit &amp; Make Payment
        </button>
      </div>
    </Form>
  )
}
