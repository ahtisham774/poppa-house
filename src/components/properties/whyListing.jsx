import { FaCheck } from 'react-icons/fa'

const WhyListing = () => {
  const benefits = [
    {
      title: 'Targeted Audience',
      description:
        'Reach verified tenants actively seeking accommodation,  including international professionals and students.'
    },
    {
      title: 'Increased Visibility',
      description:
        'Showcase your properties to a niche market looking for reliable  housing options.'
    },
    {
      title: 'Seamless Lead Generation',
      description:
        "Receive direct inquiries from serious renters, reducing  time wasted on unqualified leads."
    },
    {
      title: 'Flexible Listing Options',
      description:
        'Choose a package that suits your portfolio, from a few  properties to unlimited listings.'
    },
    {
      title: 'Enhanced Trust & Security',
      description:
        ' Our platform prioritizes transparency, helping you  connect with genuine renters.'
    }
  ]

  return (
    <section className='py-16 bg-[#F9F9F9]'>
      <div className='container'>
        <h2 className='text-3xl font-bold text-center text-primary mb-8'>
          Why List Your Properties on Proppa House?
        </h2>
        <p className='text-center text-base max-w-5xl font-normal mb-12 mx-auto'>
          At Proppa House, we connect landlords, estate agents, and property
          owners with a growing community of immigrants, international students,
          and skilled workers searching for trusted housing solutions in the UK.
        </p>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div className='rounded-xl overflow-hidden'>
            <img
              src='/assets/join.png'
              alt='Team members'
              className='w-full h-auto'
            />
          </div>
          <div className='space-y-6'>
            {benefits.map((benefit, index) => (
              <div key={index} className='flex gap-4'>
                <div className='size-8 rounded bg-primary shrink-0 text-white flex items-center justify-center'>
                  <FaCheck className='shrink-0' />
                </div>
                <p className='text-justify'>
                  <span className='font-bold text-primary'>
                    {benefit.title}
                  </span>{' '}
                  {` - `}
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  )
}

export default WhyListing
