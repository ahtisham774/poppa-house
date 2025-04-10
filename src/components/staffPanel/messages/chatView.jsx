import { useState, useEffect, useRef } from 'react'
import { BsFlag } from 'react-icons/bs'
import {
  FaArrowLeft,
  FaPaperPlane,
  FaPaperclip,
  FaMicrophone,
  FaFlag
} from 'react-icons/fa'
import { TiMicrophoneOutline } from 'react-icons/ti'

const ChatView = ({ conversation, onBack, onReport }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    // Simulate fetching messages for this conversation
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
        timestamp: new Date(Date.now() - 1000 * 60 * 9)
      },
      {
        id: 3,
        sender: 'them',
        text: 'That works for me, thanks!',
        timestamp: new Date(Date.now() - 1000 * 60 * 8)
      }
    ]

    setMessages(mockMessages)
  }, [conversation.id])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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

  return (
    <div className='flex flex-col h-full w-full bg-white border rounded-xl'>
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
                src={conversation.avatar}
                alt={conversation.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div>
              <h3 className='font-semibold'>{conversation.name}</h3>
              <p className='text-xs text-gray-500'>Active 4 min ago</p>
            </div>
          </div>
        </div>

        <button
          onClick={onReport}
          className='p-3 border-2 rounded-lg hover:bg-gray-100'
        >
          <BsFlag size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className='flex-1 overflow-y-auto p-4 bg-gray-50'>
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
                    ? 'bg-primary text-white'
                    : 'bg-[#E2E8F0] text-gray-800'
                }`}
              >
                <p>{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'me'
                      ? 'text-[#888888]'
                      : 'text-[#888888]'
                  }`}
                >
                  {formatMessageTime(message.timestamp)}
                </p>
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
    </div>
  )
}

export default ChatView
