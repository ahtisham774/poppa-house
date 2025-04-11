import { useState } from 'react'
import { FiSend } from 'react-icons/fi'

export default function CommentSection ({ announcement }) {
  const [comments, setComments] = useState(announcement.comments || [])
  const [newComment, setNewComment] = useState('')
  const [charCount, setCharCount] = useState(0)
  const maxChars = 500

  const handleCommentChange = e => {
    const text = e.target.value
    if (text.length <= maxChars) {
      setNewComment(text)
      setCharCount(text.length)
    }
  }

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: 'John Doe',
        date: new Date().toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        }),
        content: newComment,
        avatar: '/placeholder-user.jpg'
      }

      setComments([comment, ...comments])
      setNewComment('')
      setCharCount(0)
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmitComment()
    }
  }

  return (
    <div>
      <h3 className='text-lg font-semibold mb-4'>
        Comments ({comments.length})
      </h3>

      {/* Comment input */}
      <div className='mb-6 relative'>
        <textarea
          className='w-full border rounded-lg p-4 pr-12 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500'
          placeholder='Share your thoughts...'
          rows={3}
          value={newComment}
          onChange={handleCommentChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button
          className='absolute bottom-4 right-4 text-blue-500 hover:text-blue-600'
          onClick={handleSubmitComment}
          disabled={!newComment.trim()}
        >
          <FiSend className='h-6 w-6' />
        </button>
        <div className='text-right text-xs text-gray-400 mt-1'>
          {charCount} words (max {maxChars} characters)
        </div>
      </div>

      {/* Comments list */}
      <div className='space-y-6'>
        {comments.map(comment => (
          <div key={comment.id} className='border-b pb-6'>
            <div className='flex items-center mb-2'>
              <div className='w-10 h-10 rounded-full overflow-hidden mr-3'>
                <img
                  src={comment.avatar || '/placeholder.svg?height=40&width=40'}
                  alt={comment.author}
                  className='w-full h-full object-cover'
                />
              </div>
              <div>
                <div className='font-semibold'>{comment.author}</div>
                <div className='text-xs text-gray-500'>{comment.date}</div>
              </div>
            </div>
            <p className='text-gray-700'>{comment.content}</p>
          </div>
        ))}

        {comments.length > 3 && (
          <button className='flex items-center justify-center w-full py-2 border rounded-lg text-gray-600 hover:bg-gray-50'>
            See All Comments
          </button>
        )}
      </div>
    </div>
  )
}
