import CardLayout from '../clientPortal/activities/cardLayout'
import MapLists from '../clientPortal/activities/mapLists'

const InfoCard = ({ heading, infoLists }) => {
  return (
    <CardLayout title={heading}>
     <MapLists list={infoLists} />
    </CardLayout>
  )
}

export default InfoCard
