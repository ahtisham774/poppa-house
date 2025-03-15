import { servicesData } from '../../data/serviceData'

import { useNavigate } from 'react-router-dom'
import RightArrow from '../svg/rightArrow'

export default function Services () {
  const navigate = useNavigate()

  const handleAction = (type, value) => {
    switch (type) {
      case 'link':
        navigate(value)
        break
      default:
        break
    }
  }

  return (
    <section className='my-24 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-[48px] font-bold text-[#1a1a4b] mb-2'>
            Services
          </h2>
          <p className='text-muted-foreground text-base font-normal max-w-3xl mx-auto'>
            At Proppa House, we offer a range of services designed to make your
            property journey seamless. From finding the perfect property to
            maintaining your current home, we've got every step covered with
            professionalism, care, and expertise.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl w-[350px] min-h-[400px] border border-[#E3E3E3] p-8 flex flex-col items-center justify-center text-center drop-shadow-md shadow-[0px_4px_4px_0px_#00000040] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300'
            >
              <div className='size-[90px] bg-white flex items-center justify-center mb-6'>
                <img src={service.icon} alt={service.title} className='' />
              </div>

              <h3 className='text-[#1a1a4b] text-2xl font-bold '>
                {service.title}
              </h3>

              <p className='text-muted-foreground font-normal my-6 text-sm'>
                {service.shortDescription}
              </p>

              <button
                onClick={() => handleAction('link', `/service/${service.id}`)}
                className='text-gray-800 px-6 py-3 text-base font-semibold rounded-xl border border-[#131E47] flex items-center gap-3'
              >
                Learn More <RightArrow className='-rotate-45' />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
