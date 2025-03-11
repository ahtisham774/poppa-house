import { Button } from 'antd'
import { FaArrowRightLong } from 'react-icons/fa6'

export function ServiceCTA () {
  return (
    <section className='py-16 bg-secondary'>
      <div className='container'>
      
          <div className='mb-6 md:mb-0'>
            <h2 className='text-3xl lg:text-5xl transition-all  font-medium text-primary mb-2'>
              Find Your Perfect Home with Confidence!
            </h2>
            <div className='flex items-center w-full justify-between flex-wrap gap-8'>
              <p className='text-muted-foreground  flex-1 text-base font-normal max-w-3xl mt-4'>
                Log in to explore our tailored Proppa House Property Viewing
                Packages and choose the one that suits you best. Let us handle
                the details while you make informed, stress-free decisions.
              </p>
              <Button
                size='large'
                icon={<FaArrowRightLong />}
                iconPosition='end'
                className='mt-4 px-8 md:mt-0 bg-accent flex max-w-[272px] flex-1  items-center gap-10 hover:!bg-accent font-medium text-base text-primary border-none'
              >
                Login
              </Button>
            </div>
         
        </div>
      </div>
    </section>
  )
}
