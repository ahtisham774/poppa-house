import { useState } from 'react'
import { Layout } from '../components/landingPage/layout'
import { Hero } from '../components/landingPage/hero'
import { FilterModal } from '../components/landingPage/filter-modal'
import { FeaturedListings } from '../components/landingPage/featured-listings'
import { WhyChooseUs } from '../components/landingPage/why-choose-us'
import { Testimonials } from '../components/landingPage/testimonials'
import { FAQ } from '../components/landingPage/faq'
import { ContactSection } from '../components/landingPage/contact-section'
import ReviewSection from '../components/landingPage/reviewSection'

export default function LandingPage () {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const bg = '/assets/hero_bg.png'
  const title = 'Find Your Dream Home'
  const description =
    'Discover the perfect place to live, invest, or rent with verified listings and expert guidance.'

  return (
    <>
      <Hero
        bg={bg}
        title={title}
        description={description}
        onFilterClick={() => setIsFilterOpen(true)}
      />
      {isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} />}
      <FeaturedListings />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ReviewSection />
      <ContactSection />
    </>
  )
}
