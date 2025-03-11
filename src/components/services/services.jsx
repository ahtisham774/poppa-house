import RightArrow from '../svg/rightArrow'
import { useNavigate } from 'react-router-dom'

export default function Services () {
  const navigate = useNavigate()
  const contactCards = [
    {
      icon: '/assets/PV.png',
      title: 'Property Viewing',
      description:
        'Personalized property viewings with experts who understand your lifestyle and housing needs.',
      link: '/services-detail'
    },
    {
      icon: '/assets/BS.png',
      title: 'Buying & Selling',
      description:
        'Navigate buying or selling with transparency, market insights, and end-to-end support.',
      link: '/services-detail'
    },
    {
      icon: '/assets/PM.png',
      title: 'Property Management',
      description:
        'Hassle-free rental and maintenance services including cleaning, repairs, and garden upkeep.',
      link: '/services-detail'
    },
    {
      icon: '/assets/BC.png',
      title: 'Bills Consolidation',
      description:
        'Simplify your financial management by merging all your property-related bills into one platform.',
      link: '/services-detail'
    },
    {
      icon: '/assets/PI.png',
      title: 'Property Insurance',
      description:
        'Get peace of mind with tailored property insurance plans that safeguard your home and investment.',
      link: '/services-detail'
    }
  ]

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
            maintaining your current home, we’ve got every step covered with
            professionalism, care, and expertise.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-8'>
          {contactCards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl  w-[350px]  min-h-[400px] border border-[#E3E3E3] p-8 flex flex-col items-center justify-center text-center drop-shadow-md shadow-[0px_4px_4px_0px_#00000040] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.12)] transition-shadow duration-300'
            >
              <div className='size-[90px] bg-white flex items-center justify-center mb-6'>
                <img src={card.icon} alt={card.title} className='' />
              </div>

              <h3 className='text-[#1a1a4b] text-2xl font-bold '>
                {card.title}
              </h3>

              <p className='text-muted-foreground font-normal my-6 text-sm'>
                {card.description}
              </p>

              <button
                onClick={() => handleAction('link', card.link)}
                className=' text-gray-800 px-6 py-3 text-base font-semibold rounded-xl  border border-[#131E47] flex items-center gap-3'
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
