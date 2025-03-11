import { Button } from 'antd'
import RightArrow from '../svg/rightArrow'

const JoinUs = () => {
  return (
    <section className='py-16 bg-secondary'>
      <div className='container flex flex-col md:flex-row justify-between items-center'>
        <div>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-medium text-foreground mb-2'>
          Join Our Team
          </h2>
          <p className='text-muted-foreground text-base font-normal max-w-3xl'>
          Passionate about exceptional service? Join our growing team! Whether you're experienced or just starting out, we offer training and development to help you succeed. Be part of a company built on trust, care, and professionalism.
          </p>
        </div>
        <Button
          size='large'
          icon={<RightArrow  />}
          iconPosition='end'
          className='mt-4 px-8 md:mt-0 bg-accent flex items-center gap-8 hover:!bg-accent font-medium text-base text-primary border-none'
        >
          Apply Now 
        </Button>
      </div>
    </section>
  )
}

export default JoinUs
