import { Progress } from "antd"

const ProgressBar = ({progress, className}) => {
  return (
    // <div className={'progress-bar mb-6 ' + className}>
    //   <div
    //     className='progress-bar-fill transition-all'
    //     style={{ width: `${progress}%` }}
    //   ></div>
    // </div>
    <Progress
      percent={progress}
      showInfo={false}
      strokeColor={'#44CCFF'}
      className={` ${className}`}
     
    />
  )
}

export default ProgressBar
