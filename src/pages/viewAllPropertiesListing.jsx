import { useState } from 'react'
import PropertyLayout from '../components/clientPortal/properties-hub/propertiesLayout'
import { properties } from '../data'
import MapUrl from '../components/common/mapUrl'
import Pagination from '../components/common/pagination'
import PropertyCard from '../components/common/propertyCard'
import Tabs from '../components/common/tabs'
import ShowAllProperties from '../components/clientPortal/properties-hub/showAllProperties'

const ViewAllPropertiesListing = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties)

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



  const propertiesListingFilters = [
    { name: 'all', title: 'All Properties' },
    { name: 'sale', title: 'For Sale Properties ' },
    { name: 'rent', title: 'For Rent Properties ' },
    { name: 'featured', title: 'Featured Properties' }
  ]

  return (
    <PropertyLayout
      title='Properties Hub'
      subTitle={'Properties Hub'}
      description={` Discover the perfect place to live, invest, or rent with verified
        listings and expert guidance.`}
      handleApplyFilter={handleApplyFilter}
      handleClearFilter={handleClearFilter}
    >
      <ShowAllProperties
        title='Properties Listings'
        description='Discover the best properties for sale and rent near you.'
        properties={filteredProperties}
        filters={propertiesListingFilters}
      />
    </PropertyLayout>
  )
}

export default ViewAllPropertiesListing
