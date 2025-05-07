import { useState, useEffect } from 'react'
import { properties } from '../components/clientPortal/properties-hub/data'
import PropertyLayout from '../components/clientPortal/properties-hub/propertiesLayout'
import ShowProperties from '../components/clientPortal/properties-hub/showProperties'

const DealsRoom = () => {
  const [filteredProperties, setFilteredProperties] = useState([])
  // Example properties in deals room (properties with active negotiations)
  const [dealsProperties] = useState([1, 4, 6])

  useEffect(() => {
    // Filter properties that are in deals room
    const deals = properties.filter(property =>
      dealsProperties.includes(property.id)
    )
    setFilteredProperties(deals)
  }, [dealsProperties])

  const handleApplyFilter = searchTerm => {
    let filtered = properties.filter(property =>
      dealsProperties.includes(property.id)
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
      properties.filter(property => dealsProperties.includes(property.id))
    )
  }

  const handleToggleLike = propertyId => {
    console.log('propertyId', propertyId)
    if (dealsProperties.includes(propertyId)) {
      setFilteredProperties(filteredProperties.filter(id => id !== propertyId))
    } else {
      setFilteredProperties([...dealsProperties, propertyId])
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
      title='Deals Room'
      subTitle={'Deals Room'}
      description={`Discover the perfect place to live, invest, or rent with verified listings and expert guidance.`}
      handleApplyFilter={handleApplyFilter}
      handleClearFilter={handleClearFilter}
    >
      <ShowProperties
        properties={filteredProperties}
        handleToggleLike={handleToggleLike}
        filters={tabs}
        redirectTo="/client/properties-hub/deals-room"
      />
    </PropertyLayout>
  )
}

export default DealsRoom
