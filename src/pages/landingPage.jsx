
import { useState } from "react"
import { Layout } from "../components/landingPage/layout"
import { Hero } from "../components/landingPage/hero"
import { FilterModal } from "../components/landingPage/filter-modal"
import { FeaturedListings } from "../components/landingPage/featured-listings"
import { WhyChooseUs } from "../components/landingPage/why-choose-us"
import { Testimonials } from "../components/landingPage/testimonials"
import { FAQ } from "../components/landingPage/faq"
import { ContactSection } from "../components/landingPage/contact-section"

export default function LandingPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <>
      <Hero onFilterClick={() => setIsFilterOpen(true)} />
      {isFilterOpen && <FilterModal onClose={() => setIsFilterOpen(false)} />}
      <FeaturedListings />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  )
}

