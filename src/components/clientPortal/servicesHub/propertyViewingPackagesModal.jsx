import React from 'react'
import { useModal } from '../../../context/useModal'
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
              <svg width='34' height='34' viewBox='0 0 34 34' fill='none'>
                <circle cx='17' cy='17' r='17' fill='#EEF5FD' />
                <path
                  d='M10 16L15 21L24 12'
                  stroke='#2D6ABF'
                  strokeWidth='2'
                  fill='none'
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
              <svg width='34' height='34' viewBox='0 0 34 34' fill='none'>
                <circle cx='17' cy='17' r='17' fill='#EEF5FD' />
                <rect
                  x='12'
                  y='13'
                  width='10'
                  height='6'
                  rx='3'
                  stroke='#2D6ABF'
                  strokeWidth='2'
                  fill='none'
                />
                <circle cx='17' cy='16' r='1' fill='#2D6ABF' />
              </svg>
            ),
            action: () => openModal('proPropertyViewingForm', { type: 'pro' })
          }
        ].map((pkg, n) => (
          <div
            key={pkg.title}
            className='bg-white border rounded-xl flex-1 px-7 py-6 flex flex-col gap-3 shadow-sm'
          >
            <div className='flex items-center gap-2'>{pkg.icon}</div>
            <h3 className='font-bold text-lg text-primary mt-2'>
              {pkg.title}
            </h3>
            <div className='text-gray-600 text-sm'>{pkg.desc}</div>
            <ul className='mt-4 flex-1 text-sm space-y-2'>
              {pkg.bullets.map(bul => (
                <li className='flex items-start gap-2 text-primary' key={bul}>
                  <svg width='20' height='20' fill='none'>
                    <circle cx='10' cy='10' r='10' fill='#EEF5FD' />
                    <path
                      d='M5 10l3 3 7-7'
                      stroke='#2D6ABF'
                      strokeWidth='2'
                      fill='none'
                    />
                  </svg>
                  <span className='text-gray-700'>{bul}</span>
                </li>
              ))}
            </ul>
            <button
              className='rounded bg-primary text-white font-medium mt-7 py-2'
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
export function ProPropertyViewingFormModal({ type, close }) {
  // type == 'pro' || 'basic'
  const [form, setForm] = React.useState({
    source: type === 'pro' ? 'online' : '',
    propertyUrl: '',
    city: '',
    postalCode: '',
    agencyName: '',
    contactDetails: '',
    hasCommunicated: type === 'pro' ? 'no' : 'yes',
    viewingInfo: '',
    hasConcerns: type === 'pro' ? 'no' : 'yes',
    concerns: '',
    preferredLanguage: type === 'pro' ? 'arabic' : '',
    otherLanguage: '',
    earlierInspection: type === 'pro' ? 'no' : 'yes',
    howSoon: '1',
    alternativeCommunication: type === 'pro' ? 'no' : 'yes',
    email: '',
    promoCode: '',
    consentGiven: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Add your submission logic here
    close();
  };

  // Show/hide conditional fields based on selections
  const showPropertyUrl = form.source === 'online';
  const showConcernsTextarea = form.hasConcerns === 'yes';
  const  yourBehalf = form.hasCommunicated === 'yes';
  const showOtherLanguageField = form.preferredLanguage === 'other';
  const showHowSoonOptions = form.earlierInspection === 'yes';

  return (
    <form className="p-9 w-full max-h-[90vh] overflow-y-auto" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-xl font-semibold text-primary">
          {type === 'pro' ? 'Pro Property Viewing' : 'Basic Property Viewing'}
        </h2>
      </div>
      <div className="text-gray-600 mb-7">
        Please provide details about the property you'd like us to view
      </div>

      {/* Where did you find this property? */}
      <fieldset className="mb-6">
        <legend className="font-medium text-gray-800 mb-2">
          Where did you find this property?
        </legend>
        <div className="space-y-2">
          <label className="inline-flex items-center mr-4">
            <input 
              type="radio" 
              name="source" 
              value="online"
              checked={form.source === 'online'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Online</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="source" 
              value="address"
              checked={form.source === 'address'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">I know the address</span>
          </label>
        </div>

        {showPropertyUrl && (
          <div className="mt-3">
            <label className="block text-xs text-gray-800 font-medium mb-1">
              Property URL
            </label>
            <input
              name="propertyUrl"
              value={form.propertyUrl}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm mb-2 focus:ring-2 focus:ring-blue-200"
              placeholder="Enter the property URL"
            />
          </div>
        )}
      </fieldset>

      {/* City and Postal/Zip Code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs text-gray-800 font-medium mb-1">
            City
          </label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200"
            placeholder="Enter the city name"
          />
        </div>
        <div>
          <label className="block text-xs text-gray-800 font-medium mb-1">
            Postal/Zip Code
          </label>
          <input
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200"
            placeholder="Enter postal/zip code here"
          />
        </div>
      </div>

      {/* Agency/Landlord Information */}
      <fieldset className="mb-6">
        <legend className="font-medium text-gray-800 mb-2">
          Agency/Landlord Information
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-800 font-medium mb-1">
              Name of Agency, Landlord, or Property Owner
            </label>
            <input
              name="agencyName"
              value={form.agencyName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200"
              placeholder="Enter the name"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-800 font-medium mb-1">
              Contact Details
            </label>
            <input
              name="contactDetails"
              value={form.contactDetails}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200"
              placeholder="Enter the Contact Details"
            />
          </div>
        </div>
      </fieldset>

      {/* Communication with agent */}
      <fieldset className="mb-6">
        <legend className="font-medium text-gray-800 mb-2">
          Have you already communicated with the agent, landlord or property owner?
        </legend>
        <div className="space-x-4">
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="hasCommunicated" 
              value="yes"
              checked={form.hasCommunicated === 'yes'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="hasCommunicated" 
              value="no"
              checked={form.hasCommunicated === 'no'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </fieldset>

      {/* Information for viewing */}
     {
     yourBehalf &&
     <fieldset className="mb-6">
        <legend className="font-medium text-gray-800 mb-2">
          Information relevant for our viewing on your behalf
        </legend>
        <textarea
          name="viewingInfo"
          value={form.viewingInfo}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200 min-h-[100px]"
          placeholder="Please provide any relevant information (Max 1000 words)"
        />
      </fieldset>}

      {/* Concerns about property */}
      <fieldset className="mb-6">
        <legend className="font-medium text-gray-800 mb-2">
          Do you have any concerns about the property?
        </legend>
        <div className="space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="hasConcerns" 
              value="yes"
              checked={form.hasConcerns === 'yes'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="hasConcerns" 
              value="no"
              checked={form.hasConcerns === 'no'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">No</span>
          </label>
        </div>

        {showConcernsTextarea && (
          <div>
            <label className="block text-xs text-gray-800 font-medium mb-1">
              What are your concerns?
            </label>
            <textarea
              name="concerns"
              value={form.concerns}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200 min-h-[100px]"
              placeholder="Please describe your concerns (Max 1000 words)"
            />
          </div>
        )}
      </fieldset>

      {/* Preferred Language */}
      <fieldset className="mb-6">
        <legend className="font-medium text-gray-800 mb-2">
          Preferred Language for Communication (Other than English)
        </legend>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="arabic"
              checked={form.preferredLanguage === 'arabic'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Arabic</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="french"
              checked={form.preferredLanguage === 'french'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">French</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="ga"
              checked={form.preferredLanguage === 'ga'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Ga</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="hausa"
              checked={form.preferredLanguage === 'hausa'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Hausa</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="hindi"
              checked={form.preferredLanguage === 'hindi'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Hindi</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="igbo"
              checked={form.preferredLanguage === 'igbo'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Igbo</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="mandarin"
              checked={form.preferredLanguage === 'mandarin'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Mandarin</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="portuguese"
              checked={form.preferredLanguage === 'portuguese'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Portuguese</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="yoruba"
              checked={form.preferredLanguage === 'yoruba'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Yoruba</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="polish"
              checked={form.preferredLanguage === 'polish'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Polish</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="spanish"
              checked={form.preferredLanguage === 'spanish'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Spanish</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="twi"
              checked={form.preferredLanguage === 'twi'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Twi</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="preferredLanguage" 
              value="other"
              checked={form.preferredLanguage === 'other'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Other</span>
          </label>
        </div>

        {showOtherLanguageField && (
          <div className="mt-3">
            <label className="block text-xs text-gray-800 font-medium mb-1">
              Please specify language
            </label>
            <input
              name="otherLanguage"
              value={form.otherLanguage}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200"
              placeholder="Enter the specific language"
            />
          </div>
        )}
      </fieldset>

      {/* Earlier inspection */}
      <fieldset className="mb-6">
        <legend className="font-medium text-gray-800 mb-2">
          We strive to provide you with the property inspection within 5 working days. Do you want it earlier than that?
        </legend>
        <div className="text-sm text-gray-500 mb-2">
          This will attract a 40% increase in our fee.
        </div>
        <div className="space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="earlierInspection" 
              value="yes"
              checked={form.earlierInspection === 'yes'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="earlierInspection" 
              value="no"
              checked={form.earlierInspection === 'no'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">No</span>
          </label>
        </div>

        {showHowSoonOptions && (
          <div className="ml-6 mt-2">
            <div className="font-medium text-sm mb-1">How Soon?</div>
            <div className="flex flex-col gap-2">
              <label className=" items-center block">
                <input 
                  type="radio" 
                  name="howSoon" 
                  value="1"
                  checked={form.howSoon === '1'}
                  onChange={handleChange}
                  className="accent-primary" 
                />
                <span className="ml-2">1 working day</span>
              </label>
              <label className="items-center block">
                <input 
                  type="radio" 
                  name="howSoon" 
                  value="2"
                  checked={form.howSoon === '2'}
                  onChange={handleChange}
                  className="accent-primary" 
                />
                <span className="ml-2">2 working days</span>
              </label>
              <label className=" items-center block">
                <input 
                  type="radio" 
                  name="howSoon" 
                  value="3"
                  checked={form.howSoon === '3'}
                  onChange={handleChange}
                  className="accent-primary" 
                />
                <span className="ml-2">3 working days</span>
              </label>
              <label className=" items-center block">
                <input 
                  type="radio" 
                  name="howSoon" 
                  value="4"
                  checked={form.howSoon === '4'}
                  onChange={handleChange}
                  className="accent-primary" 
                />
                <span className="ml-2">4 working days</span>
              </label>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Note: If we cannot view within the specified date, you will be refunded the 40% extra charge.
            </div>
          </div>
        )}
      </fieldset>

      {/* Alternative communication */}
      <fieldset className="mb-6">
        <legend className="font-medium text-gray-800 mb-2">
          We will be sending you notifications and updates in your messages section as well as your activities section. Do you prefer another communication option?
        </legend>
        <div className="space-x-4 mb-2">
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="alternativeCommunication" 
              value="yes"
              checked={form.alternativeCommunication === 'yes'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input 
              type="radio" 
              name="alternativeCommunication" 
              value="no"
              checked={form.alternativeCommunication === 'no'}
              onChange={handleChange}
              className="accent-primary" 
            />
            <span className="ml-2">No</span>
          </label>
        </div>

        {form.alternativeCommunication === 'yes' && (
          <div className="mt-3">
            <label className="block text-xs text-gray-800 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>
        )}
      </fieldset>

      {/* Promo Code */}
      <fieldset className="mb-6">
        <legend className="font-medium text-gray-800 mb-2">
          Promo Code (if applicable)
        </legend>
        <input
          name="promoCode"
          value={form.promoCode}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-200"
          placeholder="Enter promo code"
        />
      </fieldset>

      {/* Consent */}
      <div className="mb-7">
        <label className="inline-flex items-start">
          <input 
            type="checkbox" 
            name="consentGiven"
            checked={form.consentGiven}
            onChange={handleChange}
            className="accent-primary mt-1" 
          />
          <span className="ml-2 text-sm">
            I give consent for an Agent from Proppa House to represent and view this property on my behalf. A copy of the consent form will be sent to my email.
          </span>
        </label>
      </div>

      {/* Form Actions */}
      <div className="flex gap-4 justify-end items-center mt-7">
        <button
          type="button"
          className="border rounded-lg px-7 py-2 text-primary font-medium"
          onClick={close}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-primary text-white rounded-lg px-7 py-2 font-medium"
        >
          Submit &amp; Make Payment
        </button>
      </div>
    </form>
  );
}
