
import PropertyLayout from '../components/clientPortal/properties-hub/propertiesLayout'
import PropertyDetailPage from './propertyDetail'

const DealsRoomDetailPage = () => {
  return (
    <PropertyLayout
      showFilters={false}
      title='Deals Room'
      subTitle={'Deals Room'}
      description={`Discover the perfect place to live, invest, or rent with verified listings and expert guidance.`}
    >
      <PropertyDetailPage />
    </PropertyLayout>
  )
}

export default DealsRoomDetailPage
