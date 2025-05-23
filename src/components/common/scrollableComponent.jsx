import ScrollContainer from 'react-indiana-drag-scroll'

const ScrollableComponent = ({ children, className }) => {
  return (
    <ScrollContainer
      horizontal
      className={`flex  gap-5 w-full 2xl:w-fit max-w-[100rem] xl:max-w-fit scroll-smooth snap-mandatory snap-x overflow-x-auto  p-2 mt-2 ${className}`}
    >
      {children}
    </ScrollContainer>
  )
}

export default ScrollableComponent
