import InfoCard from "../../common/infoCard"

const ClientInfo = () => {
  const header = 'Client Information'
  const lists = [
    {
      label: 'Name',
      value: 'John Doe'
    },
    {
      label: 'Client type',
      value: 'Student'
    },
    {
      label: 'Email',
      value: 'john.doe@example.com'
    },
    {
      label: 'Phone',
      value: '+44 7123 456789'
    },
    {
      label: 'Preferred Language',
      value: 'English'
    },
    {
      label: 'Preferred Communication',
      value: 'Message',
      isFullWidth: true
    },
    {
      label: 'Message',
      value:
        'I spoke with John about the property yesterday. He mentioned that there are already 2 other interested parties.',
      isFullWidth: true
    }
  ]
  return <InfoCard heading={header} infoLists={lists} />
}

export default ClientInfo
