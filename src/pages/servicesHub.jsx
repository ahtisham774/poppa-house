import NeedHelp from '../components/clientPortal/servicesHub/needHelp'
import ModalProvider, { useModal } from '../context/useModal'
import { services } from '../data/services'

const ServiceCard = ({ service }) => {
  const { openModal } = useModal()
  if (!service) {
    console.error("ServiceCard: 'service' prop is required")
    return (
      <div className='error-message'>Service information not available</div>
    )
  }

  const {
    icon = null,
    name = 'Unnamed Service',
    description = 'No description available',
    whatWeDo = []
  } = service

  const handleSubscribe = () => {
    try {
      if (name === 'Property Viewing') {
        openModal('propertyViewingPackages')
      } else if (name === 'Property Search') {
        openModal('propertySearchService')
      } else if (name === 'Property Management') {
        openModal('maintenanceServiceSelect')
      } 
      else if (name === 'Bills Consolidation') {
        openModal('billsConsolidation')
      }
      else if (name === 'Property Insurance') {
        openModal('propertyInsurance')
      }
      else {
        console.warn('No modal handler for service:', name)
        openModal('defaultService')
      }
    } catch (error) {
      console.error('Error opening modal:', error)
    }
  }

  return (
    <div className='max-w-md mx-auto bg-white br rounded-lg overflow-hidden md:max-w-2xl'>
      <div className='p-6 flex flex-col justify-between h-full'>
        <div className='flex-1'>
          <div className='flex flex-col items-start gap-3'>
            {icon && <div className='bg-blue-50 p-3 rounded-lg'>{icon}</div>}
            <h2 className='text-xl font-medium text-gray-800'>{name}</h2>
          </div>
          <p className='mt-3 text-xs'>{description}</p>
          <div className='mt-6'>
            {whatWeDo.length > 0 && (
              <ul className='space-y-2'>
                {whatWeDo?.map((item, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <svg
                      width='19'
                      height='20'
                      viewBox='0 0 19 20'
                      className='shrink-0'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_2843_10264)'>
                        <path
                          d='M4.96981 8.518L8.40856 11.1944L12.9678 5.80862M8.99432 16.0282C7.943 16.0312 6.90141 15.8397 5.92903 15.4644C4.95664 15.0892 4.07251 14.5377 3.3271 13.8414C2.58169 13.1451 1.98961 12.3176 1.58466 11.4062C1.17971 10.4948 0.969817 9.51729 0.966973 8.52952C0.964128 7.54176 1.16838 6.56307 1.56808 5.64933C1.96778 4.7356 2.55508 3.90471 3.29647 3.20412C4.03785 2.50352 4.9188 1.94694 5.889 1.56614C6.85921 1.18534 7.89967 0.987786 8.951 0.984758C11.0742 0.978644 13.1128 1.76524 14.6182 3.17152C16.1236 4.57779 16.9726 6.48853 16.9783 8.48342C16.9841 10.4783 16.1461 12.3939 14.6488 13.8088C13.1515 15.2237 11.1176 16.0221 8.99432 16.0282Z'
                          stroke='#0D99FF'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_2843_10264'>
                          <rect
                            width='18.9511'
                            height='18.9511'
                            fill='white'
                            transform='translate(0 0.0625) rotate(-0.164995)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className='text-xs '>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          className='mt-4 px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/80 transition'
          onClick={handleSubscribe}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  )
}


const ServicesHub = () => {
  return (
    <ModalProvider>
      <div className='flex flex-col gap-8 p-4 lg:p-8'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-4xl font-medium text-gray-800'>Services Hub</h1>
          <p className='text-gray-600'>
            Explore our range of property management and real estate services
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
          <NeedHelp />
        </div>
      </div>
    </ModalProvider>
  )
}

export default ServicesHub
