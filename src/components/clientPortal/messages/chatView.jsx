import { useState, useEffect, useRef } from 'react'
import { FaStar, FaRegStar, FaEllipsisV, FaPaperclip } from 'react-icons/fa'
import { TiMicrophoneOutline } from 'react-icons/ti'
import { useNavigate, useParams } from 'react-router-dom'
import { mockConversations } from './conversationList'
import ReportPersonModal from './reportPersonModal'

const ChatView = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const [conversation, setConversation] = useState({})
  const [showReportPerson, setShowReportPerson] = useState(false)
  const [isStarred, setIsStarred] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const messagesEndRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    // Simulate fetching messages for this conversation
    mockConversations.forEach(conversation => {
      if (conversation.id === parseInt(id)) {
        setConversation(conversation)
      }
    })
    const mockMessages = [
      {
        id: 1,
        sender: 'them',
        text: 'Hello, when will you arrive at the property?',
        timestamp: new Date(Date.now() - 1000 * 60 * 10)
      },
      {
        id: 2,
        sender: 'me',
        text: "I'll be there around 2 PM, is that fine?",
        timestamp: new Date(Date.now() - 1000 * 60 * 9),
        isRead: true
      },
      {
        id: 3,
        sender: 'them',
        text: 'That works for me, thanks!',
        timestamp: new Date(Date.now() - 1000 * 60 * 8)
      }
    ]

    setMessages(mockMessages)
  }, [id])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Close menu when clicking outside
    function handleClickOutside (event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  const onBack = () => {
    navigate(-1)
  }

  const handleReportPerson = () => {
    setShowReportPerson(true)
  }

  const handleCloseReportPerson = () => {
    setShowReportPerson(false)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = e => {
    e.preventDefault()
    if (newMessage.trim() === '') return

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: newMessage,
      timestamp: new Date()
    }

    setMessages([...messages, newMsg])
    setNewMessage('')
  }

  const formatMessageTime = timestamp => {
    return timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const toggleStar = () => {
    setIsStarred(!isStarred)
  }

  const handleViewProfile = () => {
    // Navigate to the profile page of the person in the chat
    navigate(`/client/chats/user-profile/${conversation.id}`)
    setShowMenu(false)
  }

  const handleCloseChat = () => {
    onBack()
    setShowMenu(false)
  }

  return (
    <div className='flex flex-col h-full w-full bg-white border rounded-lg'>
      {/* Chat header */}
      <div className='flex justify-between items-center p-4 border-b'>
        <div className='flex items-center'>
          <button
            onClick={onBack}
            className='mr-4 p-2 rounded-full hover:bg-gray-100'
          >
            <svg
              width='12'
              height='21'
              viewBox='0 0 12 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.60206 10.5L11.4062 2.55085C11.9866 1.9597 11.9778 1.00999 11.3867 0.429623C10.7955 -0.150747 9.84583 -0.142006 9.26546 0.449147L0.429623 9.44915C-0.143208 10.0326 -0.143208 10.9674 0.429623 11.5509L9.26546 20.5509C9.84583 21.142 10.7955 21.1507 11.3867 20.5704C11.9778 19.99 11.9866 19.0403 11.4062 18.4491L3.60206 10.5Z'
                fill='#131E47'
              />
            </svg>
          </button>

          <div className='flex items-center'>
            <div className='w-10 h-10 rounded-full overflow-hidden mr-3'>
              <img
                src={conversation.avatar || '/placeholder.svg'}
                alt={conversation.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div>
              <div className='flex gap-3 flex-wrap items-center'>
                <h3 className='text-lg font-medium'>{conversation.name}</h3>

                <span className='bg-gray-100 px-2 py-0.5 rounded-lg text-xs border'>
                  {conversation.category}
                </span>
                <span className='bg-gray-100 px-2 py-0.5 rounded-lg text-xs border'>
                  {conversation.categoryId}
                </span>
              </div>
              <p className='text-xs text-gray-500'>Active 4 min ago</p>
            </div>
          </div>
        </div>

        <div className='flex items-center'>
          <button
            onClick={toggleStar}
            className='p-3 rounded-lg br hover:bg-gray-100 mr-2'
          >
            {isStarred ? <FaStar className='text-yellow-400' /> : <FaRegStar />}
          </button>

          <button
            onClick={handleReportPerson}
            className='p-3 rounded-lg br hover:bg-gray-100 mr-2'
          >
            <svg
              width='19'
              height='19'
              viewBox='0 0 19 19'
              className='size-4'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.96094 17.4173V11.084M3.96094 11.084V3.16732M3.96094 11.084L5.91635 10.6929C7.22326 10.4325 8.57764 10.5568 9.81531 11.0507C11.1561 11.5867 12.6317 11.6867 14.0325 11.3365L14.2019 11.2946C14.4425 11.2345 14.6561 11.0958 14.8087 10.9004C14.9613 10.705 15.0442 10.4642 15.0443 10.2163V4.38411C15.0442 4.23984 15.0113 4.09748 14.948 3.96782C14.8848 3.83817 14.7928 3.72463 14.6791 3.63581C14.5654 3.547 14.433 3.48524 14.2919 3.45523C14.1508 3.42522 14.0047 3.42774 13.8647 3.46261C12.5731 3.78527 11.2128 3.69275 9.97681 3.19819L9.81531 3.13407C8.57788 2.64027 7.2238 2.51597 5.91715 2.77623L3.96094 3.16732M3.96094 3.16732V1.58398'
                stroke='black'
                stroke-width='1.5'
                stroke-linecap='round'
              />
            </svg>
          </button>

          <div className='relative' ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className='p-3 rounded-lg hover:bg-gray-100'
            >
              <FaEllipsisV className='text-gray-500' />
            </button>

            {showMenu && (
              <div className='absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10 border'>
                <button
                  onClick={handleViewProfile}
                  className='block w-full text-left px-4 py-2 hover:bg-gray-100 border-b'
                >
                  View Profile
                </button>
                <button
                  onClick={handleCloseChat}
                  className='block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500'
                >
                  Close chat
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className='flex-1 min-h-screen overflow-y-auto p-4 bg-gray-50 py-8'>
        <div className='space-y-4'>
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'me' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.sender === 'me'
                    ? 'bg-blue-900 text-white'
                    : 'bg-[#F1F5F9] border border-[#E2E8F0] text-gray-800'
                }`}
              >
                <p className='font-medium'>{message.text}</p>
                <div
                  className={`text-xs justify-end items-center gap-1 mt-1 flex ${
                    message.sender === 'me'
                      ? 'text-gray-300 justify-end'
                      : 'text-gray-500'
                  }`}
                >
                  {formatMessageTime(message.timestamp)}
                  {message.sender === 'me' && message.isRead && (
                    <svg
                      width='14'
                      height='9'
                      viewBox='0 0 14 9'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-1'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.79177 0.157452C9.91168 0.268879 9.98512 0.42644 9.99592 0.595491C10.0067 0.764541 9.95403 0.93124 9.8494 1.05893L3.56041 8.7275C3.50406 8.79621 3.43455 8.85128 3.35655 8.88902C3.27854 8.92676 3.19385 8.94628 3.10817 8.94628C3.02249 8.94628 2.9378 8.92676 2.85979 8.88902C2.78179 8.85128 2.71227 8.79621 2.65592 8.7275L0.14017 5.66007C0.039255 5.53186 -0.0104141 5.36664 0.00182522 5.19988C0.0140645 5.03312 0.0872367 4.87812 0.205633 4.76814C0.324029 4.65817 0.478211 4.602 0.635079 4.61168C0.791947 4.62136 0.938996 4.69613 1.04466 4.81994L3.10817 7.33608L8.94491 0.2188C9.04959 0.0911512 9.1976 0.0129803 9.35641 0.00147589C9.51521 -0.0100285 9.67181 0.0460756 9.79177 0.157452Z'
                        fill='white'
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message input */}
      <form
        onSubmit={handleSendMessage}
        className='p-4 border-t flex items-center'
      >
        <button
          type='button'
          className='p-3 mr-2 text-gray-600 hover:bg-gray-100 rounded-lg border-2'
        >
          <FaPaperclip />
        </button>
        <button
          type='button'
          className='p-3 mx-2 text-gray-600 hover:bg-gray-100 rounded-lg border-2'
        >
          <TiMicrophoneOutline size={19} />
        </button>
        <input
          type='text'
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder='Type a message...'
          className='flex-1 border-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:border-blue-300'
        />

        <button
          type='submit'
          className='p-3 ml-3 bg-primary text-white rounded-lg hover:bg-primary/95'
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.66574 9.33333L13.9991 2M6.66574 9.33333L8.99907 14C9.02832 14.0638 9.07528 14.1179 9.13437 14.1558C9.19346 14.1938 9.26219 14.2139 9.3324 14.2139C9.40261 14.2139 9.47135 14.1938 9.53044 14.1558C9.58953 14.1179 9.63649 14.0638 9.66574 14L13.9991 2M6.66574 9.33333L1.99907 7C1.93524 6.97075 1.88115 6.92379 1.84323 6.8647C1.80531 6.80561 1.78516 6.73688 1.78516 6.66667C1.78516 6.59646 1.80531 6.52772 1.84323 6.46863C1.88115 6.40954 1.93524 6.36258 1.99907 6.33333L13.9991 2'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </form>

      {showReportPerson && (
        <ReportPersonModal onClose={handleCloseReportPerson} />
      )}
    </div>
  )
}

export default ChatView
