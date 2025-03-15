import { Link, useNavigate, useParams } from 'react-router-dom'
import { blogPosts } from '../data'
import CategoryAndTime from '../components/blog/categoryAndTime'
import { Button } from 'antd'
import { FaArrowRightLong } from 'react-icons/fa6'
import Comments from '../components/blog/comments'

const BlogPostDetail = () => {
  // Find the blog post by ID
  const { id: blogId } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find(post => post.id == blogId)
  const onBack = () => navigate('/blogs')
  if (!post) {
    return (
      <div className='container mx-auto px-4 py-16 text-center'>
        <h1 className='text-2xl font-bold text-gray-700'>
          Blog post not found
        </h1>
        <button
          onClick={onBack}
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'
        >
          Back to Blog
        </button>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-white pb-16'>
      {/* Header Image */}
      <div className='relative h-[400px]'>
        <img
          src={post.headerImage}
          alt={post.title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-4xl mx-auto'>
          {/* Meta */}
          <div className='flex items-center border-b justify-between pb-3 mb-6'>
            <CategoryAndTime
              category={post.category}
              readTime={post.readTime}
            />
            <span className='text-sm text-[#4E5265] font-medium'>
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h1 className='text-4xl font-bold text-primary mb-10'>
            {post.title}
          </h1>
          <h2 className='text-2xl font-medium text-primary mb-3'>
            {post.content.subtitle}
          </h2>

          {/* Introduction */}
          <p className='text-gray-700 mb-12 text-base leading-relaxed'>
            {post.content.intro}
          </p>
          <h2 className='text-4xl font-semibold text-primary mb-10'>
            What&apos;s Changing?
          </h2>

          {/* Main Content */}
          <div className='space-y-8'>
            {post.content.sections.map((section, index) => (
              <div key={index}>
                <h3 className='text-2xl font-medium text-primary mb-4'>
                  {section.title}
                </h3>
                <p className='text-gray-700 font-normal text-base leading-relaxed'>
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Images Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12'>
            <img
              src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
              alt='Couple viewing property'
              className='w-full h-[344px] object-cover rounded-lg'
            />
            <img
              src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
              alt='Agent showing property'
              className='w-full h-[344px] object-cover rounded-lg'
            />
          </div>

          {/* Implications */}
          <div className='my-12'>
            <h3 className='text-3xl font-semibold text-primary mb-6'>
              What Does This Mean for You?
            </h3>
            <div className='space-y-4'>
              {post.content.implications.map((item, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  <div className='font-bold text-lg text-primary flex-shrink-0'>
                    ✔
                  </div>
                  <div>
                    <span className='font-bold text-primary'>{item.title}</span>{' '}
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <p className=' mb-12 text-base font-normal leading-relaxed'>
            As the market stabilizes, London's real estate landscape is shifting
            towards a more balanced environment for buyers, renters, and
            investors alike. If you're considering making a move, now may be the
            perfect time to explore your options.
          </p>

          {/* Subscribe */}
          <div className='text-center italic text-primary mb-12 border-t pt-8'>
            Stay Updated on London Real Estate –{' '}
            <a href='#' className=' hover:underline'>
              Subscribe to Our Blog!
            </a>
          </div>

          {post?.comments && post.comments.length > 0 && (
            <div>
              <Comments comments={post.comments} />
            </div>
          )}

          {/* Back button */}
          <Button
            size='large'
            onClick={onBack}
            icon={<FaArrowRightLong className='-scale-x-[1]' />}
            iconPosition='start'
            className='mt-4  md:mt-0 bg-accent flex max-w-[220px] py-6 flex-1  items-center gap-10 hover:!bg-accent font-medium text-base text-primary border-none'
          >
            Back to Blog
          </Button>
        </div>

        {/* Related Posts */}
        <div className='max-w-6xl mx-auto mt-16'>
          <h3 className='text-2xl font-bold text-primary mb-8'>
            Related Posts
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {post.relatedPosts.map(relatedPost => (
              <div key={relatedPost.id}>
                <Link to={`/blog/${relatedPost.id}`}>
                  <div
                    className=' rounded-lg h-[350px] overflow-hidden shadow-lg'
                    style={{
                      backgroundImage: `url(${relatedPost.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className='p-6 flex flex-col h-full bg-[#00000033]  justify-between'>
                      <div className='flex items-center justify-end'>
                        <CategoryAndTime
                          category={relatedPost.category}
                          readTime={relatedPost.readTime}
                        />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <h3 className='text-xl font-bold text-white '>
                          {relatedPost.title}
                        </h3>
                        <p className='text-white text-sm font-normal mb-4'>
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostDetail
