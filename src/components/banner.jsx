const Banner = ({ title, img }) => {
  return (
    <div className='relative min-h-screen'>
      <img src={img} alt='banner' className='w-full min-h-screen object-cover' />
      <div className='absolute inset-0  flex items-center justify-center'>
        <h1 className='text-white text-4xl md:text-5xl lg:text-8xl transition-all font-bold'>{title}</h1>
      </div>
    </div>
  )
}

export default Banner
