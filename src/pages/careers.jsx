import Banner from '../components/banner'
import { ApplyNow } from '../components/careers/apply-now'
import { CurrentOpportunities } from '../components/careers/current-opportunities'
import { HowToApply } from '../components/careers/how-to-apply'
import { WhyJoin } from '../components/careers/why-join'

const Careers = () => {
  const title = 'Join Our Team'
  const bg =
    '/assets/join_banner.jpg'
  return (
    <>
      <Banner title={title} img={bg} />
      <CurrentOpportunities />
      <WhyJoin />
      <HowToApply />
      <ApplyNow />
    </>
  )
}

export default Careers
