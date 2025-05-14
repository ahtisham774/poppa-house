import InfoCard from "../../common/infoCard"


const RentPropertyClientInfo = () => {
   const header = 'Your Information'
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
      label: 'Preferred Language',
      value: 'English'
    },
    {
      label: 'Phone',
      value: '+44 7123 456789'
    },
    {
        label: 'Address',
        value: '221B Baker Street, London, NW1 6XE, United Kingdom'
    }

    
   
  ]
  return <InfoCard heading={header} infoLists={lists} />
}

export default RentPropertyClientInfo