import { Button } from 'antd'
import { FaArrowRightLong } from 'react-icons/fa6'

export function ApplyNow () {
  return (
    <section className='py-16 bg-[#40c7f4]'>
      <div className='container'>
        <div className='flex flex-col '>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-medium text-foreground mb-5'>
            Apply Now!
          </h2>

          <div className='flex items-center w-full justify-between flex-wrap gap-8'>
            <p className='text-muted-foreground text-base font-normal max-w-3xl'>
              Interested? Register your interest and upload your CV today. Let's
              build something great together.
            </p>
            <Button
              size='large'
              icon={<FaArrowRightLong />}
              iconPosition='end'
              className='mt-4 px-8 md:mt-0 bg-accent flex max-w-[272px] flex-1  items-center gap-10 hover:!bg-accent font-medium text-base text-primary border-none'
            >
              Register Here
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
