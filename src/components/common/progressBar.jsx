const ProgressBar = ({progress, className}) => {
  return (
    <div className={'progress-bar mb-6 ' + className}>
      <div
        className='progress-bar-fill transition-all'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
