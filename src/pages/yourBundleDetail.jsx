import InfoCard from "../components/common/infoCard"

const YourBundleDetail = () => {
  const header = 'Your Details'
  const list = [
    {
      label: 'Name',
      value: 'John Doe'
    },
    {
      label: 'Client Type',
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
    },
    {
      label: 'Name of Estate Agent',
      value: 'Carlos Sainz'
    },
    {
      label: 'Tenancy Start Date',
      value: 'Oct 18, 2025'
    }
  ]
  return <InfoCard heading={header} infoLists={list} />
}

export default YourBundleDetail
