import { blogCategories } from '../../data'

const BlogCategories = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className=' py-12'>
      <div className='container mx-auto flex flex-col items-center justify-center gap-8 px-4'>
        <div className='text-center mb-4'>
          <h2 className='text-2xl lg:text-5xl font-bold text-gray-800'>
            Our Recent Articles
          </h2>
        </div>
        <div className='flex flex-wrap gap-4 bg-gray-100 p-4 w-max rounded-lg border-2 justify-center'>
          {blogCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg text-sm font-medium border-2 transition-colors duration-200
                  
                    ${( category === activeCategory ? "bg-accent  border-[#131E47] text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300")
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogCategories
