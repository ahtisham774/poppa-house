import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

const Comments = ({ comments }) => {
  const [commentText, setCommentText] = useState('')
  const [commentCount, setCommentCount] = useState(4)
  const [showAllComments, setShowAllComments] = useState(false)

  // Show only the latest 3 comments initially unless "Show All" is clicked
  const displayedComments = showAllComments 
    ? comments 
    : comments.slice(0, 3)
  const handleCommentSubmit = e => {
    e.preventDefault()
    // Here you would typically send the comment to a backend
    // For now, we'll just clear the input
    setCommentText('')
    setCommentCount(prevCount => prevCount + 1)
  }
  const toggleShowAllComments = () => {
    setShowAllComments(prev => !prev)
  }

  return (
    <div className='max-w-4xl mx-auto mt-16 mb-16'>
      <h3 className='text-base font-semibold mb-4'>
        Comments ({commentCount})
      </h3>

      {/* Comment Input */}
      <div className='mb-10 relative'>
        <textarea
          placeholder='Share your thoughts...'
          className='w-full border border-[#505050] rounded-lg p-4 min-h-[100px] focus:outline-none focus:ring-1 focus:ring-blue-500'
          value={commentText}
          rows={5}
          onChange={e => setCommentText(e.target.value)}
        />
        <button
          onClick={handleCommentSubmit}
          className='bg-primary text-white absolute bottom-8 right-5 rounded-full p-2  transition-colors'
        >
          <FiSend />
        </button>
        <div className='flex justify-end items-center'>
          <span className='text-xs text-gray-500'>
            {commentText.length} words (max 500 characters)
          </span>
        </div>
      </div>

      {/* Comment List */}
      <div className='space-y-6'>
      {displayedComments.map(comment => (
          <div key={comment.id} className='border-b border-gray-100 pb-6'>
            <div className='flex items-center mb-2'>
              <img
                src={comment.avatar}
                alt={comment.author}
                className='w-10 h-10 rounded-full mr-3'
              />
              <div>
                <h4 className='font-medium text-primary'>{comment.author}</h4>
                <p className='text-xs text-gray-500'>{comment.date}</p>
              </div>
            </div>
            <p className='text-gray-700 text-sm'>{comment.content}</p>
          </div>
        ))}
      </div>

      {comments.length > 3 && (
        <div className='text-center mt-8'>
          <button 
            onClick={toggleShowAllComments}
            className='border border-gray-300 rounded-md px-6 py-2 inline-flex items-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors'
          >
            {showAllComments ? 'Show Less Comments' : 'See All Comments'}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-4 w-4 ml-1 transition-transform ${showAllComments ? 'rotate-180' : ''}`}
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default Comments
