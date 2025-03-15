import { ArrowRightOutlined } from '@ant-design/icons'
import CategoryAndTime from './categoryAndTime'
import { FaRegHeart } from 'react-icons/fa'
import { IoChatbubbleOutline } from 'react-icons/io5'

const BlogPostCard = ({ post, onClick }) => {
  return (
    <div
      className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer'
      onClick={onClick}
    >
      <div className='relative'>
        <img
          src={post.headerImage}
          alt={post.title}
          className='w-full h-56 object-cover bg-gray-300'
        />
      </div>

      <div className='p-6'>
        <div className='flex items-center flex-wrap mb-3 gap-3 justify-between'>
          <CategoryAndTime category={post.category} readTime={post.readTime} />
          <div className='flex items-center gap-3'>
            {post?.likes && (
              <div className='flex items-center gap-1'>
                <FaRegHeart />
                <span className='text-primary'>{post.likes}</span>
              </div>
            )}
            {post?.comments && (
              <div className='flex items-center gap-1'>
                <IoChatbubbleOutline />
                <span className='text-primary'>
                  {post?.comments?.length}
                </span>
              </div>
            )}
          </div>
        </div>

        <h3 className='text-xl font-bold text-primary mb-2'>{post.title}</h3>
        <p className='text-gray-600 mb-4 line-clamp-2'>{post.excerpt}</p>

        <div className='flex items-center gap-1 p-2 px-3 rounded border-2 w-fit border-primary text-primary font-medium'>
          Read more
          <ArrowRightOutlined rotate={-45} />
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
