import React, { useState } from 'react'
import { BiBell, BiChevronLeft, BiFile, BiSearch, BiX } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import TopTitle from '../components/topTitle'
import { CgArrowLongLeft } from 'react-icons/cg'
import { announcements } from '../data/announcementData'

const AnnouncementsPage = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('unread')
  const [searchQuery, setSearchQuery] = useState('')

  const [readAnnouncements, setReadAnnouncements] = useState([])

  // Filter announcements based on active tab and search query
  const filteredAnnouncements = announcements.filter(announcement => {
    // Filter by read/unread status
    const isRead = readAnnouncements.includes(announcement.id)
    if (activeTab === 'read' && !isRead) return false
    if (activeTab === 'unread' && isRead) return false
    
    // Filter by search query
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      return (
        announcement.title.toLowerCase().includes(searchLower) ||
        announcement.content.toLowerCase().includes(searchLower) ||
        announcement.category.toLowerCase().includes(searchLower) ||
        announcement.date.toLowerCase().includes(searchLower)
      )
    }
    
    return true
  })

  const handleSearch = (e) => {
    e.preventDefault()
    // Search is handled in the filteredAnnouncements calculation
  }

  const handleAnnouncementClick = (announcement) => {
    // setSelectedAnnouncement(announcement)
    navigate(`/staff/announcements/${announcement.id}`)
  }

  const handleMarkAsRead = (id) => {
    if (!readAnnouncements.includes(id)) {
      setReadAnnouncements([...readAnnouncements, id])
    }
    setSelectedAnnouncement(null)
  }


  return (
    <div className='max-w-6xl mx-auto p-6'>
      <TopTitle title='Proppa House Info Centre' subTitle='PH Info Centre' />

      <div className='bg-[#EFF6FF] border border-[#D3E6FF] p-5 py-8 rounded-lg mb-6'>
        <div className='flex items-center mb-2'>
          <button
            className='flex items-center font-medium mr-4 gap-2 border-2 border-[#b1b1b19a] rounded-lg px-3 py-1'
            onClick={() => navigate('/staff/info')}
          >
            <CgArrowLongLeft size={20} />
            <span>Back</span>
          </button>

          <div className='border-l-2 border-[#b1b1b19a] pl-4'>
            <h2 className='text-xl font-bold'>Announcements</h2>
            <p className='text-gray-600'>Company news and updates</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className='border rounded-lg p-5 mb-6'>
        <div className='flex'>
          <div className='relative flex-1'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <BiSearch className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='text'
              className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg'
              placeholder='Search by Location, Name, or Date...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <button className='ml-2 px-6 py-2 bg-accent text-black font-medium rounded-lg'>
            Search
          </button>
        </div>
      </div>

      <div className='bg-white rounded-lg br flex mb-6 p-3'>
        {['unread', 'read'].map(filter => (
          <button
            key={filter}
            onClick={() => {
              setActiveTab(filter)
            }}
            className={`flex items-center justify-center flex-1 py-2 rounded-sm px-6 text-sm font-medium transition-colors duration-200 ${
              activeTab === filter
                ? 'bg-accent text-gray-900'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {filter === 'unread' && 'Unread'}
            {filter === 'read' && 'Read'}
          </button>
        ))}
      </div>

      {/* Announcements List */}
      <div className='border rounded-lg p-5'>
      {filteredAnnouncements.length > 0 ? (
        <div className='space-y-4'>
        {filteredAnnouncements.map(announcement => {
              const isRead = readAnnouncements.includes(announcement.id)
              return (
                <div
                key={announcement.id}
                className={`border rounded-lg p-5 cursor-pointer transition-all ${
                  isRead ? 'bg-gray-50' : 'bg-white hover:shadow-md'
                }`}
                onClick={() => handleAnnouncementClick(announcement)}
              >
              <div className='flex items-start'>
                <div className='mr-4'>
                  {
                    announcement.icon 
                  }
                 
                </div>

                <div className='flex-1'>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-lg font-bold mb-1'>
                      {announcement.title}
                    </h3>
                    {announcement.isNew && (
                      <span className='badge badge-new'>New</span>
                    )}
                  </div>

                  <div className='flex items-center text-sm text-gray-500 mb-2 gap-2'>
                    <span className='text-xs text-[#888888]'>{announcement.date}</span>
                    <div className='badge border-2 text-[#2F2F2F] text-xs font-medium px-3 py-1'>
                      {announcement.category}
                    </div>
                    
                  </div>

                  <p className='text-gray-600'>{announcement.content}</p>
                </div>
              </div>
            </div>
          )})}
        </div>
      ) : (
        <div className='text-center py-10 text-gray-500'>
        No announcements found matching your criteria
      </div>
      )}
      </div>
      {/* {selectedAnnouncement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative bg-white border rounded-lg p-8 max-w-3xl w-full mx-auto max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={closeModal}
            >
              <BiX size={24} />
            </button>
            
            <h2 className="text-xl font-medium mb-1">{selectedAnnouncement.title}</h2>
            
            <div className="flex items-center text-sm text-[#888888] mb-4">
              <span>{selectedAnnouncement.fullDate || selectedAnnouncement.date}</span>
              <span className="mx-2">•</span>
              <span>{selectedAnnouncement.category}</span>
            </div>
            
            {selectedAnnouncement.relevantFor && (
              <div className="mb-4">
                <span className="font-semibold">Relevant for:</span>
                <span className="ml-1 text-gray-600">{selectedAnnouncement.relevantFor}</span>
              </div>
            )}
            
            <div className="space-y-4 text-gray-600 mb-6">
              {selectedAnnouncement.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            {!readAnnouncements.includes(selectedAnnouncement.id) && (
              <button 
                className="w-full py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800"
                onClick={() => handleMarkAsRead(selectedAnnouncement.id)}
              >
                Mark as Read
              </button>
            )}
          </div>
        </div>
      )} */}
    </div>
  )
}

export default AnnouncementsPage
