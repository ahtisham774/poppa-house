const CardContainer = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col w-full gap-4 p-3 bg-white rounded-lg   border-[#B1B1B1] ${className}`}
      style={{
        boxShadow: `0px 1px 2px 0px #0000000D`,
        borderWidth: '.5px'
      }}
    >
      {children}
    </div>
  )
}

export default CardContainer
