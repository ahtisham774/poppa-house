import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import Tabs from '../../common/tabs'
import TopTitle from '../../topTitle'
import SearchFilters from './searchFilters'

const PropertyLayout = ({
  children,

  title,
  subTitle,
  showFilters = true,
  description,
  handleApplyFilter,
  handleClearFilter
}) => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-6'>
      <div className='mb-4'>
        <TopTitle
          parent={'Properties Hub'}
          title={title}
          subTitle={subTitle}
          description={description}
        />
      </div>
      {showFilters && (
        <SearchFilters
          onApplyFilter={handleApplyFilter}
          onClearFilter={handleClearFilter}
        />
      )}
      <div className=''>{children}</div>
    </div>
  )
}

export default PropertyLayout
