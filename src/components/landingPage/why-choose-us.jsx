import { UserOutlined, HomeOutlined, SafetyOutlined } from '@ant-design/icons'
import Pcf from '../svg/pcf'
import Sbc from '../svg/sbc'
import Pri from '../svg/pri'

export function WhyChooseUs () {
  return (
    <section className='py-32 bg-primary text-white'>
      <div className='container'>
        <h2 className='text-3xl lg:text-5xl font-medium text-center mb-20'>Why Choose Us</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='text-center flex flex-col items-center gap-1'>
            <Pcf />
            <h3 className='text-xl font-semibold mb-2'>
              Personalized & Commission-Free
            </h3>
            <p className='text-sm'>
              We partner with trusted estate agents, tailor every service to
              your needs, and charge zero commissions ensuring a smooth,
              transparent property journey.
            </p>
          </div>
          <div className='text-center flex flex-col items-center gap-1'>
            <Sbc />
            <h3 className='text-xl font-semibold mb-2'>
              Simplified Bills Consolidation
            </h3>
            <p className='text-sm'>
              We offer one simple payment for all your bills, making financial
              management easier, saving you time, and ensuring everything is
              handled seamlessly.
            </p>
          </div>
          <div className='text-center flex flex-col items-center gap-1'>
            <Pri />
            <h3 className='text-xl font-semibold mb-2'>
              Property & Rent Insurance
            </h3>
            <p className='text-sm'>
              Protect your home and rental income with ease. Our tailored plans
              safeguard against damages, unexpected costs, and provide complete
              peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
