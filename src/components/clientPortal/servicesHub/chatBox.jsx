import { UserOutlined } from '@ant-design/icons'
import React, { useRef, useEffect, useState } from 'react'
import { BiPaperclip, BiSend, BiX } from 'react-icons/bi'
import { FaPaperclip } from 'react-icons/fa'

// Flexible, dynamic chat box
export default function ChatBox ({
  title = 'Proppa House Chat Assistant',
  initialMessages = [
    {
      author: 'assistant',
      content: 'Hello! How can I help you with your real estate needs today?',
      time: '02:40 PM'
    },
    {
      author: 'user',
      content: "I'll be there around 2 PM, is that fine?",
      time: '02:40 PM'
    }
  ],
  onClose
}) {
  // Messages state
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const chatEndRef = useRef(null)

  // Auto-scroll on new message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  // Send new message
  function handleSendMessage (e) {
    e.preventDefault()
    if (input.trim() === '') return
    setMessages([
      ...messages,
      {
        author: 'user',
        content: input,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      }
    ])
    setInput('')
  }

  // Color palette
  // Primary: #182049
  // Assistant bubble: #f2f6fa

  return (
    <div className='fixed bottom-6 right-6 z-50 w-[370px]  max-w-[95vw] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col text-sm animate-fadein'>
      {/* Header */}
      <div className='flex items-center justify-between bg-[#182049] text-white rounded-t-xl px-5 py-3'>
        <div className='font-semibold text-base'>{title}</div>
        <div className='flex items-center gap-2'>
          <button
            className='hover:bg-[#20275b]  rounded p-1'
            aria-label='user-profile'
          >
            <svg
              width='28'
              height='28'
              viewBox='0 0 28 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.1667 6.99887C13.2046 6.99887 12.3805 6.65587 11.6945 5.96987C11.0085 5.28387 10.6659 4.4602 10.6667 3.49887C10.6674 2.53753 11.0101 1.71309 11.6945 1.02553C12.3789 0.337977 13.203 -0.00385608 14.1667 3.28084e-05C15.1303 0.0039217 15.9544 0.346144 16.6388 1.0267C17.3233 1.70725 17.6659 2.5317 17.6667 3.50003C17.6674 4.46837 17.3248 5.29203 16.6388 5.97103C15.9528 6.65003 15.1288 6.99187 14.1667 6.99887ZM6 15.435V13.5147C6 13.0333 6.14 12.5829 6.42 12.1637C6.70078 11.7437 7.078 11.4178 7.55167 11.186C8.653 10.6579 9.75511 10.262 10.858 9.99837C11.9601 9.73392 13.063 9.6017 14.1667 9.6017C15.2703 9.6017 16.3736 9.73392 17.4765 9.99837C18.5794 10.2628 19.6807 10.6587 20.7805 11.186C21.2549 11.4178 21.6322 11.7437 21.9122 12.1637C22.1929 12.5829 22.3333 13.0333 22.3333 13.5147V15.435H6ZM7.16667 14.2684H21.1667V13.5147C21.1667 13.2565 21.0831 13.0134 20.9158 12.7855C20.7494 12.5584 20.5188 12.3663 20.224 12.2092C19.2642 11.7441 18.2741 11.3879 17.2537 11.1405C16.2332 10.8932 15.2042 10.7691 14.1667 10.7684C13.1291 10.7676 12.1001 10.8913 11.0797 11.1394C10.0592 11.3875 9.06911 11.7437 8.10933 12.208C7.81378 12.3651 7.58317 12.5573 7.4175 12.7844C7.25028 13.0123 7.16667 13.2557 7.16667 13.5147V14.2684ZM14.1667 5.83337C14.8083 5.83337 15.3578 5.6047 15.8152 5.14737C16.2725 4.69003 16.5008 4.14014 16.5 3.4977C16.4992 2.85525 16.2709 2.30614 15.8152 1.85037C15.3594 1.39459 14.8099 1.16592 14.1667 1.16437C13.5234 1.16281 12.9743 1.39148 12.5193 1.85037C12.0643 2.30925 11.8357 2.85837 11.8333 3.4977C11.831 4.13703 12.0597 4.68653 12.5193 5.1462C12.979 5.60587 13.5281 5.83414 14.1667 5.83103'
                fill='white'
              />
            </svg>
          </button>

          <button
            onClick={onClose}
            className='hover:bg-[#20275b] rounded p-1 '
            aria-label='close'
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 1L15 15M15 1L1 15'
                stroke='white'
                stroke-linecap='round'
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Body (messages) */}
      <div
        className='flex-1 overflow-y-auto px-4 py-3 bg-white space-y-4'
        style={{ minHeight: '350px', maxHeight: '320px' }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col items-${
              msg.author === 'user' ? 'end' : 'start'
            }`}
          >
            <div
              className={`rounded-xl px-4 py-3 max-w-[81%] whitespace-pre-line ${
                msg.author === 'user'
                  ? 'bg-[#182049] text-white'
                  : 'bg-[#f2f6fa] text-[#131e4a]'
              } 
                shadow-sm`}
            >
              {msg.content}
              <div
                className={`text-xs mt-1 text-end text-gray-400 ${
                  msg.author === 'user' ? 'pr-2' : 'pl-2'
                }`}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}
        {/* Scroll ref */}
        <div ref={chatEndRef} />
      </div>
      {/* Input area */}
      <form
        onSubmit={handleSendMessage}
        className='flex items-center gap-1 border-t border-gray-200 px-3 py-2 bg-white rounded-b-xl'
      >
        <button
          type='button'
          tabIndex={-1}
          aria-label='Attach file'
          className='p-3 mr-2 text-gray-600 hover:bg-gray-100 rounded-lg border-2'
        >
          <FaPaperclip />
        </button>
        <input
          className='flex-1 border-2 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:border-blue-300'
          placeholder='Type a message...'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          type='submit'
          className='p-3 ml-3 bg-primary text-white rounded-lg hover:bg-primary/95'
          disabled={input.trim() === ''}
          aria-label='Send'
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
