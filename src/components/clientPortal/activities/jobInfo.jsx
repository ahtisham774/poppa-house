import InfoCard from "../../common/infoCard"

const JobInfo = () => {
  const header = 'Job Information'
  const list = [
    {
      label: 'Job Type',
      value: 'Pro Property Viewing'
    },
    {
      label: 'Priority Level',
      value: 'Expedited - 2 working days',
      
    },
    {
      label: 'Property Source',
      value: 'Known Address'
    },
    {
      label: 'Property Address',
      value: '1234 Elm Street, London, UK'
    },
    {
      label: 'Agency/Landlord Name',
      value: 'Central London Estates'
    },
    {
      label: 'Contact Details',
      value: 'John Smith, 020 7123 4567 , john@primelondon.com'
    },
    {
      label: 'Concerns About Property',
      value:
        "I'm concerned about the proximity to the main road and potential noise issues.",
      isFullWidth: true
    }
  ]

  return <InfoCard heading={header} infoLists={list} />
}

export default JobInfo
