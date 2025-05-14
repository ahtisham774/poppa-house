const CardLayout = ({ title, children, children1 }) => {
  return (
    <div className='bg-white rounded-lg br  '>
      <div className='border-b border-[#B1B1B1] p-4'>
        <h3 className='text-xl font-medium'>{title}</h3>
      </div>
      <div className='p-4 sm:p-6'>{children}</div>
      {children1}
    </div>
  )
}

export default CardLayout
