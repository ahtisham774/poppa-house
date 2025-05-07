import { useState } from 'react'
import { Input, Button } from 'antd'
import {
  SearchOutlined,
  HomeOutlined,
  EnvironmentOutlined,
  BankOutlined,
  DollarOutlined
} from '@ant-design/icons'
import { FaBath } from 'react-icons/fa'

const SearchFilters = ({ onApplyFilter, onClearFilter }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleClearFilter = () => {
    setSearchTerm('')
    onClearFilter()
  }

  return (
    <div className='bg-white rounded-lg border border-[#e5e7eb] p-4 mb-6'>
      <div className='mb-4'>
        <Input
          type='search'
          placeholder='Search by Location, Price, or Property Type...'
          prefix={<SearchOutlined className='text-[#64748b]' />}
          className='w-full py-2 focus-within:outline-none focus-within:border-accent focus-within:ring-0 hover:outline-none hover:!ring-0 '
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='flex flex-wrap gap-4 mb-4'>
        <Button
          icon={<HomeOutlined />}
          className='flex items-center justify-center flex-1'
        >
          Filter by property type
        </Button>
        <Button
          icon={<EnvironmentOutlined />}
          className='flex items-center justify-center flex-1'
        >
          Filter by location
        </Button>
        <Button
          icon={<BankOutlined />}
          className='flex items-center justify-center flex-1'
        >
          Filter by bedrooms
        </Button>
        <Button
          icon={<FaBath />}
          className='flex items-center justify-center flex-1'
        >
          Filter by bathrooms
        </Button>
        <Button
          icon={<DollarOutlined />}
          className='flex items-center justify-center flex-1'
        >
          Filter by Price
        </Button>
      </div>

      <div className='flex justify-between flex-wrap gap-4'>
        <Button onClick={handleClearFilter} className='flex items-center'>
          Clear Filter
        </Button>
        <Button
          type='primary'
          onClick={() => onApplyFilter(searchTerm)}
          className='bg-accent hover:!bg-accent border-none text-black hover:!text-black'
        >
          Apply Filter
        </Button>
      </div>
    </div>
  )
}

export default SearchFilters
