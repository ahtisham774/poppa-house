export function Countries () {
  const countries = [
    {
      name: 'United Kingdom',
      message: '',
      image: '/assets/c1.png'
    },
    {
      name: 'Ghana',
      message: 'Coming Soon',
      image: '/assets/c2.png'
    }
  ]

  return (
    <section className='py-16'>
      <div className='container flex flex-col items-center'>
        <h2 className='text-4xl font-bold text-center mb-4'>
          Countries We Operate In
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-4xl mx-auto'>
          Proppa House operates in multiple countries, providing top-tier
          property services tailored to each region's needs.
        </p>
        <div className='flex overflow-x-auto  hide_scrollbar gap-8'>
          {countries.map((country, index) => (
            <div key={index} className='text-center shrink-0  '>
              <div className='relative rounded-full overflow-hidden mb-4'>
                <img
                  src={country.image || '/placeholder.svg'}
                  alt={country.name}
                  className=' size-32 lg:size-44 rounded-full object-cover object-top mx-auto'
                />
                {country.message && (
                  <p className='absolute inset-0 font-medium text-white bg-[#00000059] flex items-center justify-center '>
                    {country.message}
                  </p>
                )}
              </div>
              <h3 className='font-semibold'>{country.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
