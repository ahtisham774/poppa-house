import InfoCard from "../../common/infoCard"

const BundleDetail = () => {
  const header = 'Bundle Details'
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
      label: 'Electricity',
      value: 'Yes'
    },
    {
      label: 'Water',
      value: 'Yes'
    },
    {
      label: 'Gas',
      value: 'Yes'
    },
    {
      label: 'TV License',
      value: 'No'
    },
    {
      label: 'Broadband & TV',
      value: 'No'
    },
    {
      label: 'Council Tax',
      value: 'No'
    },
    {
      label: 'Other',
      value: 'Support'
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
      value: 'In Progress'
    }
  ]
  return <InfoCard heading={header} infoLists={list} />
}

export default BundleDetail
