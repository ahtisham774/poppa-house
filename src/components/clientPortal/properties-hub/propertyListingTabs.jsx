
import { Tabs } from "antd"

const { TabPane } = Tabs

const PropertyListingTabs = ({ activeTab, onChange, children }) => {
  return (
    <Tabs
      activeKey={activeTab}
      onChange={onChange}
      className="property-listing-tabs"
      tabBarStyle={{
        marginBottom: "24px",
        backgroundColor: "white",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      <TabPane tab="All Properties" key="all">
        {children}
      </TabPane>
      <TabPane tab="For Sale Properties" key="sale">
        {children}
      </TabPane>
      <TabPane tab="For Rent Properties" key="rent">
        {children}
      </TabPane>
      <TabPane tab="Featured Properties" key="featured">
        {children}
      </TabPane>
    </Tabs>
  )
}

export default PropertyListingTabs
