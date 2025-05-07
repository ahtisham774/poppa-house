import { useState, useEffect } from 'react'
import { properties } from '../components/clientPortal/properties-hub/data'
import PropertyLayout from '../components/clientPortal/properties-hub/propertiesLayout'
import ShowProperties from '../components/clientPortal/properties-hub/showProperties'

const LikedProperties = () => {
  const [filteredProperties, setFilteredProperties] = useState([])
  const [likedProperties, setLikedProperties] = useState([1, 3, 5,6]) // Example liked property IDs

  useEffect(() => {
    // Filter properties that are liked
    const liked = properties.filter(property =>
      likedProperties.includes(property.id)
    )
    setFilteredProperties(liked)
  }, [likedProperties])

  const handleApplyFilter = searchTerm => {
    let filtered = properties.filter(property =>
      likedProperties.includes(property.id)
    )

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
    setFilteredProperties(
      properties.filter(property => likedProperties.includes(property.id))
    )
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

  const tabs = [
    { name: 'all', title: 'All Properties' },
    { name: 'sale', title: 'For Sale Properties ' },
    { name: 'rent', title: 'For Rent Properties ' },
    { name: 'featured', title: 'Featured Properties ' }
  ]

  return (
    <PropertyLayout
      title='Liked Properties'
      subTitle={'Liked Properties'}
      description={`Discover the perfect place to live, invest, or rent with verified listings and expert guidance.`}
      handleApplyFilter={handleApplyFilter}
      handleClearFilter={handleClearFilter}
    >
      <ShowProperties
       
        properties={filteredProperties}
        handleToggleLike={handleToggleLike}
        filters={tabs}
        redirectTo="/client/properties-hub/liked-properties"
        
      />
    </PropertyLayout>
  )
}

export default LikedProperties
