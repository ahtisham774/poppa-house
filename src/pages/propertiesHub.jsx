import { useState } from 'react'
import { Hero } from '../components/landingPage/hero'
import { FilterModal } from '../components/landingPage/filter-modal'
import Listing from '../components/properties/listing'
import { FeaturedListings } from '../components/landingPage/featured-listings'
import Map from '../components/common/map'
import WhyListing from '../components/properties/whyListing'
import RegisterNow from '../components/properties/registerNow'

const PropertiesHub = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const bg = '/assets/properties_hub_bg.png'
  const title = 'Properties Hub'
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
      <Listing />
      <FeaturedListings />
      <div className='mb-24'>
        <Map />
      </div>
      <WhyListing />
      <RegisterNow />
    </>
  )
}

export default PropertiesHub
