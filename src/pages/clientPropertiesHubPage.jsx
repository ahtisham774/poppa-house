import { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import { properties } from '../components/clientPortal/properties-hub/data'
import PropertyLayout from '../components/clientPortal/properties-hub/propertiesLayout'
import SearchFilters from '../components/clientPortal/properties-hub/searchFilters'
import PropertyCard from '../components/common/propertyCard'
import PropertyListingTabs from '../components/clientPortal/properties-hub/propertyListingTabs'
import ShowProperties from '../components/clientPortal/properties-hub/showProperties'

const ClientPropertiesHubPage = () => {
  
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [likedProperties, setLikedProperties] = useState([])




 

  const handleApplyFilter = searchTerm => {
    let filtered = [...properties]

    if (searchTerm) {
      filtered = filtered.filter(
        property =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    

    setFilteredProperties(filtered)
  }

  const handleClearFilter = () => {
    setFilteredProperties(properties)
    
  }

  const handleToggleLike = propertyId => {
    console.log('propertyId', propertyId)
    if (likedProperties.includes(propertyId)) {
      setLikedProperties(likedProperties.filter(id => id !== propertyId))
    } else {
      setLikedProperties([...likedProperties, propertyId])
    }
    setFilteredProperties(
      filteredProperties.map(property => {
        if (property.id === propertyId) {
          return { ...property, isLiked: !property.liked }
        }
        return property
      })
    )
  }

  const propertiesListingFilters = [
    { name: 'all', title: 'All Properties' },
    { name: 'sale', title: 'For Sale Properties ' },
    { name: 'rent', title: 'For Rent Properties ' }
  ]

  const featuredPropertiesFilters = [
    { name: 'all', title: 'All Properties' },
    { name: 'sale', title: 'For Sale Properties ' },
    { name: 'rent', title: 'For Rent Properties ' }
  ]

  const filteredPropertiesListing = filteredProperties.filter(
    property => property.featured === false
  )
  const filteredFeaturedProperties = filteredProperties.filter(
    property => property.featured
  )

  return (
    <PropertyLayout
      title='Properties Hub'
      subTitle={'Properties Hub'}
      description={` Discover the perfect place to live, invest, or rent with verified
          listings and expert guidance.`}
      handleApplyFilter={handleApplyFilter}
      handleClearFilter={handleClearFilter}
      
    >
      <div className='flex flex-col gap-8 '>
        <ShowProperties
          title='Properties Listings'
          description='Discover the best properties for sale and rent near you.'
          properties={filteredPropertiesListing}
          filters={propertiesListingFilters}
          handleToggleLike={handleToggleLike}
        />
        <ShowProperties
          title='Featured Listings'
          description='Explore  top properties available for sale and rent in your area.'
          properties={filteredFeaturedProperties}
          filters={featuredPropertiesFilters}
          handleToggleLike={handleToggleLike}
        />

        <div className='mb-6'>
          <div className='w-full h-[300px] rounded-lg overflow-hidden'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.52855824164916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1651234783242!5m2!1sen!2sus'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </PropertyLayout>
  )
}

export default ClientPropertiesHubPage
