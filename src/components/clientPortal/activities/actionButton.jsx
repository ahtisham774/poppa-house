const ActionButton = ({ text, variant,className, onClick, icon }) => {
  const buttonClasses =
    variant === 'primary'
      ? 'bg-primary text-white font-medium rounded-lg px-12 py-2'
      : 'bg-white text-primary border border-primary font-medium rounded-lg px-12 py-2'

  return (
    <button className={buttonClasses+" "+className} onClick={onClick}>
      {icon && <span className='mr-2'>{icon}</span>}
      {text}
    </button>
  )
}

export default ActionButton
