

const Loader = ({variants, custom, className}) => {
    const common = `border-4 border-t-4 border-t-primary rounded-full border-primary/30 animate-spin`
    const variant = {
        xs: 'h-4 w-4',
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-10 w-10',
        xl: 'h-12 w-12',
        xxl: 'h-16 w-16',
    }
    const customClass = custom ? custom : ''
    const classes = `${common} ${variant[variants]} ${className} ${customClass}`
  return (
    <div className={classes}/>
  )
}

export default Loader