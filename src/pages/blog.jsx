import { useState } from 'react'
import { blogPosts } from '../data'
import BlogCategories from '../components/blog/blogCategories'
import BlogPostCard from '../components/blog/blogPostCard'
import Pagination from '../components/common/pagination'
import { useNavigate } from 'react-router-dom'

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('View all')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const navigate = useNavigate()

  // Filter posts based on selected category
  const filteredPosts =
    activeCategory === 'View all'
      ? blogPosts
      : blogPosts.filter(post => post.categoryType === activeCategory)

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const onViewPost = id => {
    navigate(`/blog/${id}`)
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <div
        className='relative h-full flex flex-col items-center justify-center min-h-screen bg-cover bg-center'
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)`
        }}
      >
        <div className='absolute inset-0 bg-black opacity-20 z-0'></div>
        <div className='relative z-10 container mx-auto px-4 flex flex-col justify-center items-center text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-primary mb-4'>
            Blog & Market Insights
          </h1>
          <p className='text-xl text-[#F4E7E7] max-w-3xl'>
            Stay informed with expert advice, market trends, and valuable
            insights into London's real estate.
          </p>
        </div>
      </div>

      {/* Categories */}
      <BlogCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Blog Grid */}
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {currentPosts.map(post => (
            <BlogPostCard
              key={post.id}
              post={post}
              onClick={() => onViewPost(post.id)}
            />
          ))}
        </div>
      </div>

    
      <div className='flex items-center justify-center py-8'>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}

            />
          )}
      </div>
    </div>
  )
}

export default BlogPage
