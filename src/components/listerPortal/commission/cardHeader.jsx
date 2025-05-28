

const CardHeader = ({children, className}) => {
  return (
    <h2 className={`text-2xl font-medium text-[#202224] ${className}`}>{children}</h2>
  )
}

export default CardHeader