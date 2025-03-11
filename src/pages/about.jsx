import { Branches } from '../components/about/branches'
import { CodeOfConduct } from '../components/about/code-of-conduct'
import { CoreValues } from '../components/about/core-values'
import { Founder } from '../components/about/founder'
import { AboutHero } from '../components/about/hero'
import { AboutIntro } from '../components/about/intro'
import JoinUs from '../components/about/joinUs'
import { MissionVision } from '../components/about/mission-vision'
import { OurStory } from '../components/about/our-story'
import { Partners } from '../components/about/partners'
import { Recruitment } from '../components/about/recruitment'
import { Team } from '../components/about/team'
import { WhyChooseUs } from '../components/about/why-choose-us'

import { Layout } from '../components/landingPage/layout'
import { Countries } from './countries'

export default function AboutPage () {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <CoreValues />
      <Founder />
      <OurStory />
      <Team />
      <WhyChooseUs />
      <Partners />
      <Recruitment />
      <CodeOfConduct />
      <Branches />
      <Countries/>
      <JoinUs />
    </>
  )
}
