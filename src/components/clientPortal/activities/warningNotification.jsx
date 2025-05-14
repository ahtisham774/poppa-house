import { ExclamationCircleOutlined } from '@ant-design/icons'

const NotifyCard = ({
  text,
  icon,
  bgColor,
  borderColor,
  textColor,
  textClassName,
  outerClassName
}) => {
  return (
    <div
      className={` border  rounded-lg p-4 mb-8 flex items-start ${outerClassName}`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor
      }}
    >
      {icon ? (
        icon
      ) : (
        <ExclamationCircleOutlined
          style={{ color: textColor , fontSize: '20px', marginTop: '2px' }}
        />
      )}
      <p className={`ml-3 ${textClassName}`} style={{ color: textColor }}>
       {text}
      </p>
    </div>
  )
}


export const InfoNotification = ({ text }) => {
  return (
    <NotifyCard
      text={text}
      textColor={'#2B4BB4'}
      textClassName='text-[#2B4BB4]'
      outerClassName='bg-[#EFF6FF] border border-[#D3E6FF]'
    />
  )
}

const WarningNotification = ({ text }) => {
  return (
    <NotifyCard
      text={text}
      textColor={'#B54708'}
      textClassName='text-[#B54708]'
      outerClassName='bg-[#FFF9E7] border border-[#FEF0C7]'
    />
  )
}

export default WarningNotification
