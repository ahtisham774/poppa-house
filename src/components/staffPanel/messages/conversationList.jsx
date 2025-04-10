import { useState, useEffect } from 'react'
import { CiChat1 } from 'react-icons/ci'
import { FaCommentAlt } from 'react-icons/fa'

const ConversationList = ({ onOpenConversation }) => {
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    // Simulate fetching conversations from an API
    const mockConversations = [
      {
        id: 1,
        name: 'John Smith',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        lastMessage: 'Hello, when will you arrive at the property?',
        timestamp: new Date(Date.now() - 1000 * 60),
        unread: 2
      },
      {
        id: 2,
        name: 'John Smith',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        lastMessage: 'Hello, when will you arrive at the property?',
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        unread: 0
      },
      {
        id: 3,
        name: 'John Smith',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        lastMessage: 'Hello, when will you arrive at the property?',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
        unread: 0
      },
      {
        id: 4,
        name: 'John Smith',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        lastMessage: 'Hello, when will you arrive at the property?',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
        unread: 0
      },
      {
        id: 5,
        name: 'John Smith',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        lastMessage: 'Hello, when will you arrive at the property?',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
        unread: 0
      }
    ]

    setConversations(mockConversations)
  }, [])

  const formatTimestamp = timestamp => {
    const now = new Date()
    const diff = now - timestamp

    if (diff < 60000) {
      return 'Less than a minute ago'
    } else if (diff < 3600000) {
      return 'About an hour ago'
    } else if (diff < 86400000) {
      return `${Math.floor(diff / 3600000)} hours ago`
    } else {
      return `${Math.floor(diff / 86400000)} days ago`
    }
  }

  return (
    <div className='flex-1 '>
      <div className='bg-white  rounded-lg shadow-sm border border-[#b1b1b198] p-6'>
        <div className='flex items-center gap-2 mb-6'>
          <svg
            width='23'
            height='24'
            className='mt-2'
            viewBox='0 0 23 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.125 19.6354V3.70833C1.125 3.1558 1.34449 2.62589 1.73519 2.23519C2.12589 1.84449 2.6558 1.625 3.20833 1.625H17.7917C18.3442 1.625 18.8741 1.84449 19.2648 2.23519C19.6555 2.62589 19.875 3.1558 19.875 3.70833V14.125C19.875 14.6775 19.6555 15.2074 19.2648 15.5981C18.8741 15.9888 18.3442 16.2083 17.7917 16.2083H6.29271C5.98045 16.2084 5.6722 16.2786 5.39074 16.4138C5.10929 16.5491 4.86183 16.7458 4.66667 16.9896L2.23854 20.025C2.15774 20.1263 2.04746 20.1999 1.92296 20.2358C1.79846 20.2716 1.66589 20.2679 1.5436 20.2251C1.42131 20.1823 1.31534 20.1026 1.24035 19.997C1.16536 19.8913 1.12505 19.765 1.125 19.6354Z'
              stroke='black'
              strokeWidth='2'
            />
          </svg>

          <h2 className='text-2xl font-semibold text-gray-800'>
            Your Conversations
          </h2>
        </div>

        <div className='space-y-4'>
          {conversations.map(conversation => (
            <div
              key={conversation.id}
              onClick={() => onOpenConversation(conversation)}
              className='flex items-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer border border-[#b1b1b198]'
            >
              <div className='w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0'>
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex-1'>
                <div className='flex justify-between'>
                  <h3 className='font-semibold text-lg'>{conversation.name}</h3>
                </div>
                <p className='text-gray-600 text-sm mt-1'>
                  {conversation.lastMessage}
                </p>
              </div>

              <div className='flex flex-col gap-2 items-end'>
                  <span className='text-sm text-gray-500'>
                        {formatTimestamp(conversation.timestamp)}
                      </span>
                  {conversation.unread > 0 && (
                    <div className='w-6 h-6 bg-primary font-medium text-white rounded-full flex items-center justify-center text-xs ml-2'>
                      {conversation.unread}
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConversationList
