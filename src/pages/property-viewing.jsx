import { useParams } from 'react-router-dom'
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
import { Link } from 'react-router-dom'
import { servicesData } from '../data/serviceData'
import { ServiceCards } from '../components/services/serviceCards'
import { ServiceOptions } from '../components/services/serviceOptions'
import { BillsCoverSection } from '../components/services/billsCoverSection'

export default function ServiceDetailPage () {
  const { id } = useParams()
  const serviceData =
    servicesData.find(service => service.id === id) || servicesData[0]

  return (
    <>
      <ServiceHero backgroundImage={serviceData.heroImage} />
      <ServiceIntro
        title={serviceData.title}
        description={serviceData.introText}
      />
      {serviceData.whatWeDo && <WhatWeDo content={serviceData.whatWeDo} />}
      { serviceData.coverOptions && (
        <BillsCoverSection bills={serviceData.coverOptions} />
      )}

      {serviceData.serviceCards && (
        <ServiceCards services={serviceData.serviceCards} />
      )}
      {serviceData.serviceOptions && (
        <ServiceOptions options={serviceData.serviceOptions} />
      )}
      {serviceData.howItWorksSteps &&
        serviceData.howItWorksSteps.length > 0 && (
          <HowItWorks steps={serviceData.howItWorksSteps} />
        )}
      {serviceData.hasAgentSection && (
        <ViewingAgents benefits={serviceData.agentBenefits} />
      )}
      <WhyChooseUs benefits={serviceData.whyChooseUs} />
      {serviceData.audiences && serviceData.audiences.length > 0 && (
        <ServiceAudience audiences={serviceData.audiences} />
      )}
      <div className='flex items-center py-8 container'>
        <Link to='/services'>
          <Button
            size='large'
            icon={<FaArrowRightLong className='-scale-x-[1]' />}
            className='mt-4 md:mt-0 bg-accent flex max-w-[220px] py-6 flex-1 items-center gap-10 hover:!bg-accent font-medium text-base text-primary border-none'
          >
            Back to Services
          </Button>
        </Link>
      </div>
      <ServiceCTA
        title={serviceData.ctaTitle}
        description={serviceData.ctaDescription}
        buttonText={serviceData.ctaButtonText}
      />
    </>
  )
}
