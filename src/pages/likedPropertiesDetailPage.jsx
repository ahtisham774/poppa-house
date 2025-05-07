import PropertyLayout from '../components/clientPortal/properties-hub/propertiesLayout'
import PropertyDetailPage from './propertyDetail'

const LikedPropertiesDetailPage = () => {
  return (
    <PropertyLayout
      title='Liked Properties'
      subTitle={'Liked Properties'}
      description={`Discover the perfect place to live, invest, or rent with verified listings and expert guidance.`}
      showFilters={false}
    >
      <PropertyDetailPage isLiked={true} />
    </PropertyLayout>
  )
}

export default LikedPropertiesDetailPage
