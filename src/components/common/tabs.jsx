// Description: This component is used to display a verified badge for the user in the client portal profile section.

import ProfileTab from '../staffPanel/profile/profileTab'

const Tabs = ({ tabs, activeTab, handleTabChange }) => {
  return (
    <div className='bg-white rounded-lg  border-2 border-[#b1b1b171]  mb-6 p-3 overflow-auto'>
      <div className='flex'>
        {tabs.map(tab => (
          <ProfileTab
            key={tab.name}
            label={tab.title}
            isActive={activeTab === tab.name}
            onClick={() => handleTabChange(tab.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default Tabs
