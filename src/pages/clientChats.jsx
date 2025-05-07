
import { useState } from 'react'
import ConversationList from '../components/clientPortal/messages/conversationList'
import { useNavigate } from 'react-router-dom'

const ClientChats = () => {

  const [activeTab, setActiveTab] = useState('all') // 'all' or 'starred'
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    name: '',
    category: '',
    id: '',
    date: ''
  })

  const handleOpenConversation = conversation => {
    navigate(`/client/chats/${conversation.id}`)
  }

  const handleClearFilter = () => {
    setFilters({
      name: '',
      category: '',
      id: '',
      date: ''
    })
  }

  const handleApplyFilter = () => {
    console.log('Applying filters:', filters)
    // In a real app, this would filter the conversations
  }

  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  return (
    <div className='flex-1 overflow-hidden p-6 '>
      <div className=' flex flex-col gap-4 h-full'>
        {/* Search and Filters */}
        <div className='p-4 br  rounded-lg'>
          <div className='mb-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search by Category, Name, or Date...'
                className='w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.6667 14.6667L10.4373 10.4373M10.4373 10.4373C11.4129 9.46181 12 8.1188 12 6.66667C12 3.76193 9.65474 1.41667 6.75 1.41667C3.84526 1.41667 1.5 3.76193 1.5 6.66667C1.5 9.57141 3.84526 11.9167 6.75 11.9167C8.1188 11.9167 9.46181 11.4129 10.4373 10.4373Z'
                    stroke='#64748B'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Filter by name'
                className='w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none text-sm'
                value={filters.name}
                onChange={e => setFilters({ ...filters, name: e.target.value })}
              />
              <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13.3334 14V12.6667C13.3334 11.9594 13.0525 11.2811 12.5524 10.781C12.0523 10.281 11.374 10 10.6667 10H5.33341C4.62617 10 3.94789 10.281 3.4478 10.781C2.9477 11.2811 2.66675 11.9594 2.66675 12.6667V14M10.6667 4.66667C10.6667 6.14 9.47341 7.33333 8.00008 7.33333C6.52675 7.33333 5.33341 6.14 5.33341 4.66667C5.33341 3.19333 6.52675 2 8.00008 2C9.47341 2 10.6667 3.19333 10.6667 4.66667Z'
                    stroke='#64748B'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>

            <div className='relative'>
              <input
                type='text'
                placeholder='Filter by category'
                className='w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none text-sm'
                value={filters.category}
                onChange={e =>
                  setFilters({ ...filters, category: e.target.value })
                }
              />
              <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 4H14M6 8H14M2 12H14'
                    stroke='#64748B'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>

            <div className='relative'>
              <input
                type='text'
                placeholder='Filter by ID'
                className='w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none text-sm'
                value={filters.id}
                onChange={e => setFilters({ ...filters, id: e.target.value })}
              />
              <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13.3334 4L6.00008 11.3333L2.66675 8'
                    stroke='#64748B'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>

            <div className='relative'>
              <input
                type='text'
                placeholder='mm/dd/yyyy'
                className='w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none text-sm'
                value={filters.date}
                onChange={e => setFilters({ ...filters, date: e.target.value })}
              />
              <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.33325 1.33333V4M10.6666 1.33333V4M2.66659 6.66667H13.3333M4.66659 2.66667H11.3333C12.4378 2.66667 13.3333 3.56209 13.3333 4.66667V12.6667C13.3333 13.7712 12.4378 14.6667 11.3333 14.6667H4.66659C3.56202 14.6667 2.66659 13.7712 2.66659 12.6667V4.66667C2.66659 3.56209 3.56202 2.66667 4.66659 2.66667Z'
                    stroke='#64748B'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className='flex justify-between mt-4'>
            <button
              onClick={handleClearFilter}
              className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm'
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 4L4 12M4 4L12 12'
                  stroke='#64748B'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Clear Filter
            </button>

            <button
              onClick={handleApplyFilter}
              className='flex items-center gap-2 px-4 py-2 bg-accent rounded-lg hover:bg-accent text-sm'
            >
              Apply Filter
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className='flex br rounded-lg p-2'>
          <button
            className={`flex-1 py-1 rounded text-center ${
              activeTab === 'all' ? 'bg-accent' : 'bg-white'
            }`}
            onClick={() => handleTabChange('all')}
          >
            All
          </button>
          <button
            className={`flex-1 py-1 rounded text-center ${
              activeTab === 'starred' ? 'bg-accent' : 'bg-white'
            }`}
            onClick={() => handleTabChange('starred')}
          >
            Starred
          </button>
        </div>

        {/* Conversation List */}
        <ConversationList
          onOpenConversation={handleOpenConversation}
          activeTab={activeTab}
        />
      </div>
    </div>
  )
}

export default ClientChats
