import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { announcements } from '../data/announcementData'
import { CgArrowLongLeft } from 'react-icons/cg'
import { HeartOutlined, MessageOutlined } from '@ant-design/icons'
import CommentSection from '../components/commentSection'
import Comments from '../components/blog/comments'
import TopTitle from '../components/topTitle'
import { BiX } from 'react-icons/bi'

export default function Announcement () {
  const { id } = useParams()
  const announcement = announcements.find(a => a.id === id) || announcements[0]
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null)
  const navigate = useNavigate()
  const onBackClick = () => {
    navigate(-1)
  }

  const [likes, setLikes] = useState(announcement.likes || 0)
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1)
      setHasLiked(true)
    } else {
      setLikes(likes - 1)
      setHasLiked(false)
    }
  }
  const closeModal = () => {
    setSelectedAnnouncement(null)
  }
  return (
    <div className='max-w-6xl mx-auto p-6'>
      <TopTitle title='Proppa House Info Centre' subTitle='PH Info Centre' />

      <div className='bg-[#EFF6FF] border border-[#D3E6FF] p-5 py-6 rounded-lg mb-6'>
        <div className='flex items-center mb-2'>
          <button
            className='flex items-center font-medium mr-4 gap-2 border border-gray-300 rounded-lg px-3 py-1'
            onClick={onBackClick}
          >
            <CgArrowLongLeft className='h-4 w-4' />
            <span>Back</span>
          </button>

          <div className='border-l border-gray-300 pl-4'>
            <h2 className='text-xl font-bold'>Announcements</h2>
            <p className='text-gray-600'>Company news and updates</p>
          </div>
        </div>
      </div>

      {/* Announcement Detail */}
      <div className='border rounded-lg p-8 px-10 mb-6'>
        <div className='flex items-center gap-2'>
          <div className=''>{announcement.icon}</div>
          <h3 className='text-lg font-bold mb-1'>{announcement.title}</h3>
          {announcement.isNew && <span className='badge badge-new'>New</span>}
        </div>

        <div className='flex items-center ml-12 text-xs text-gray-500 mb-2'>
          <span className='text-xs text-[#888888]'>{announcement.date}</span>
          <span className='mx-2'>•</span>
          <div className='badge border-2 text-[#2F2F2F] text-xs font-medium px-3 py-1'>
            {announcement.category}
          </div>
        </div>

        {announcement.relevantFor && (
          <div className='mb-4 ml-12 text-sm'>
            <span className='font-semibold'>Relevant for:</span>
            <span className='ml-1 text-gray-600'>
              {announcement.relevantFor}
            </span>
          </div>
        )}

        {/* Placeholder image */}
        <div className='bg-[#F1F5F9]  rounded-xl p-10 min-h-[450px] mb-20 flex items-center justify-center'>
          <div className='text-center flex flex-col items-center justify-center gap-1 text-gray-400'>
            <svg
              width='83'
              height='81'
              viewBox='0 0 83 81'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_2608_12757)'>
                <path
                  d='M46.3867 10.4219V15.6142C46.3867 20.5088 46.3867 22.9561 47.9001 24.4757C49.4066 25.9988 51.8384 25.9988 56.7053 25.9988H61.8646'
                  stroke='black'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M22.3089 39.8453H49.8251M22.3089 50.2299H49.8251M22.3089 60.6145H36.6517M8.55078 57.1529V29.4606C8.55078 19.6714 8.55078 14.7733 11.5741 11.7341C14.594 8.69141 19.4609 8.69141 29.1879 8.69141H43.5376C44.9409 8.69141 45.646 8.69141 46.2789 8.95448C46.9083 9.21756 47.4071 9.71602 48.4011 10.7199L61.5676 23.9706C62.5651 24.9745 63.0603 25.4729 63.3217 26.1099C63.5832 26.7433 63.5832 27.4529 63.5832 28.8653V57.1529C63.5832 66.9422 63.5832 71.8403 60.5598 74.8795C57.5399 77.9222 52.673 77.9222 42.946 77.9222H29.1879C19.4609 77.9222 14.594 77.9222 11.5741 74.8795C8.55078 71.8403 8.55078 66.9422 8.55078 57.1529Z'
                  stroke='black'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_2608_12757'>
                  <rect width='83' height='81' fill='white' />
                </clipPath>
              </defs>
            </svg>

            <p>Picture or videos will be here</p>
          </div>
        </div>

        {/* Content */}
        <div className='space-y-4 text-gray-600 mb-6'>
          {announcement.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Reactions */}
        <div className='flex items-center justify-end gap-4 mb-6 border-b border-[#B1B1B1] p-3'>
          <div className='flex items-center gap-1'>
            <button
              onClick={handleLike}
              className={` rounded-full ${
                hasLiked ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <HeartOutlined className='h-5 w-5' />
            </button>
            <span className='text-sm text-gray-500'>{likes}</span>
          </div>
          <div className='flex items-center gap-1'>
            <button className=' rounded-full text-gray-400 hover:text-gray-600'>
              <MessageOutlined className='h-5 w-5' />
            </button>
            <span className='text-sm text-gray-500'>
              {announcement.comments?.length || 0}
            </span>
          </div>
        </div>

        {/* Comments Section */}
        {/* <CommentSection announcement={announcement} /> */}
        <Comments comments={announcement.comments} />
      </div>

      <button
        onClick={() => setSelectedAnnouncement(announcement)}
        className='w-full py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800'
      >
        Mark as Read
      </button>
      {selectedAnnouncement && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div className='relative bg-white border rounded-lg p-8 max-w-3xl w-full mx-auto max-h-[90vh] overflow-y-auto'>
            <button
              className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'
              onClick={closeModal}
            >
              <BiX size={24} />
            </button>

            <h2 className='text-xl font-medium mb-1'>
              {selectedAnnouncement.title}
            </h2>

            <div className='flex items-center text-sm text-[#888888] mb-4'>
              <span>
                {selectedAnnouncement.fullDate || selectedAnnouncement.date}
              </span>
              <span className='mx-2'>•</span>
              <span>{selectedAnnouncement.category}</span>
            </div>

            {selectedAnnouncement.relevantFor && (
              <div className='mb-4'>
                <span className='font-semibold'>Relevant for:</span>
                <span className='ml-1 text-gray-600'>
                  {selectedAnnouncement.relevantFor}
                </span>
              </div>
            )}

            <div className='space-y-4 text-gray-600 mb-6'>
              {selectedAnnouncement.content
                .split('\n\n')
                .map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>

            <button className='w-full py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800'>
              Mark as Read
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
