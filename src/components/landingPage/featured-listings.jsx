import { properties } from '../../data'
import ShowPropertyGrid from '../properties/showPropertygrid'

export function FeaturedListings () {
  const featuredProperties = properties.filter(property => property.featured)

  return (
    <ShowPropertyGrid
      title='Featured Listings'
      description='Explore  top properties available for sale and rent in your area.'
      properties={featuredProperties}
    />
  )
}
