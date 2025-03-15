import { properties } from '../../data'
import ShowPropertyGrid from './showPropertygrid'

const Listing = () => {
  const listingProperties = properties.filter(property => !property.featured)

  return (
    <ShowPropertyGrid
      title='Property Listings'
      description='Discover the best properties for sale and rent near you.'
      properties={listingProperties}
    />
  )
}

export default Listing
