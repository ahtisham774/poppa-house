import InfoCard from "../../common/infoCard"


const PolicyDetail = () => {
  const header = 'Policy Details'
  const list = [
    {
      label: 'Current Bundle',
      value: 'Essential Plan'
    },
    {
      label: 'Status',
      value: 'Active'
    },
    {
      label: 'Buildings Insurance',
      value: 'Yes'
    },
    {
      label: ' Liability Insurance',
      value: 'Yes'
    },
    {
      label: 'Contents Insurance',
      value: 'No'
    },
    {
        label: "Monthly Premium",
        value: "£185.50"
    },
    {
      label: 'Rent Guarantee Insurance',
      value: 'No'
    },
    
    {
      label: 'Company Name',
      value: 'SmartBill Solutions'
    },
    {
      label: 'Contact Person (if applicable)',
      value: 'Sarah Thompson'
    },
    {
      label: 'Phone Number / Email',
      value: 'sarah@smartbills.com'
    },
    {
      label: 'Status',
      value: 'Awaiting Contact'
    }
  ]
  return <InfoCard heading={header} infoLists={list} />
}

export default PolicyDetail