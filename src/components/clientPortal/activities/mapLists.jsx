const MapLists = ({ list }) => {
  return (
    <div className='grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8'>
      {list?.map(info => {
        return (
          <div
            key={info.label}
            className={`${info.isFullWidth ? 'sm:col-span-2' : ''}`}
          >
            <p className='text-xs sm:text-sm text-[#888888] mb-1'>
              {info.label}
            </p>
            <p
              className={`text-sm sm:text-base ${
                info.text ? info.text : 'text-primary'
              } font-medium break-words`}
            >
              {info.value || info.defaultValue}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default MapLists
