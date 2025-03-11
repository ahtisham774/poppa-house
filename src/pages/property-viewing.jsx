import { ServiceHero } from '../components/services/hero'
import { ServiceIntro } from '../components/services/intro'
import { WhatWeDo } from '../components/services/what-we-do'
import { HowItWorks } from '../components/services/how-it-works'
import { ViewingAgents } from '../components/services/viewing-agents'
import { WhyChooseUs } from '../components/services/why-choose-us'
import { ServiceAudience } from '../components/services/service-audience'
import { ServiceCTA } from '../components/services/service-cta'
import { Button } from 'antd'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function PropertyViewingService () {
  return (
    <>
      <ServiceHero />
      <ServiceIntro />
      <WhatWeDo />
      <HowItWorks />
      <ViewingAgents />
      <WhyChooseUs />
      <ServiceAudience />
      <div className='flex items-center py-8 container'>
        <Button
          size='large'
          icon={<FaArrowRightLong className='-scale-x-[1]' />}
          iconPosition='start'
          className='mt-4  md:mt-0 bg-accent flex max-w-[220px] py-6 flex-1  items-center gap-10 hover:!bg-accent font-medium text-base text-primary border-none'
        >
          Back to Services
        </Button>
      </div>
      <ServiceCTA />
    </>
  )
}
