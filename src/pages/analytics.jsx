import { Select } from 'antd'
import ContainerLayout from '../utils/containerLayout'
import Filters from '../components/listerPortal/analytics/filters'
import CardItems from '../components/listerPortal/analytics/cardItems'
import ComparisonCards from '../components/listerPortal/analytics/comparisonCards'

import PerformanceCards from '../components/listerPortal/analytics/performanceCards'
import Tabs from '../components/common/tabs'

const Analytics = () => {
  const tabs = [
    {
      name: 'performance',
      title: 'Performance'
    },
    {
      name: 'conversionFunnel',
      title: 'Conversion Funnel'
    },
    {
      name: 'comparison',
      title: 'Comparison'
    },
    {
      name: 'trafficSources',
      title: 'Traffic Sources'
    },
    {
      name: 'benchmarks',
      title: 'Benchmarks'
    }
  ]
  return (
    <ContainerLayout>
      <div className='flex flex-wrap justify-between items-end gap-3'>
        <div className='flex flex-col items-start gap-2 justify-center h-full'>
          <h1 className='text-3xl font-medium '>Analytics Dashboard</h1>
          <p className='text-[#131E47] text-base font-normal'>
            View and analyze your data insights
          </p>
        </div>
        <div className='flex items-center gap-5'>
          <Select
            defaultValue='PDF'
            style={{ width: 120, height: 40 }}
            options={[
              { value: 'PDF', label: 'PDF' },
              { value: 'CSV', label: 'CSV' },
              { value: 'Excel', label: 'Excel' }
            ]}
            className='w-32'
          />

          <button className='px-4 py-2 border bg-white flex items-center gap-2 font-normal rounded-lg'>
            <svg
              width='17'
              height='16'
              viewBox='0 0 17 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.8398 10V12.6667C14.8398 13.0203 14.6994 13.3594 14.4493 13.6095C14.1993 13.8595 13.8601 14 13.5065 14H4.17318C3.81956 14 3.48042 13.8595 3.23037 13.6095C2.98032 13.3594 2.83984 13.0203 2.83984 12.6667V10'
                stroke='#131E47'
                strokeWidth='1.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M5.50781 6.6665L8.84115 9.99984L12.1745 6.6665'
                stroke='#131E47'
                strokeWidth='1.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8.83984 10V2'
                stroke='#131E47'
                strokeWidth='1.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Export Data
          </button>
        </div>
      </div>
      <Filters
        onApplyFilters={() => console.log('Filters Applied')}
        onClearFilters={() => console.log('Filters Cleared')}
      />
      <CardItems />
      <ComparisonCards />
      <PerformanceCards />
      <Tabs
      tabs={tabs}
      activeTab='performance'
      handleTabChange={(tabName) => console.log(`Active Tab: ${tabName}`)}
      />
    </ContainerLayout>
  )
}

export default Analytics
