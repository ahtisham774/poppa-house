import CardContainer from '../commission/cardContainer'
import CardHeader from '../commission/cardHeader'

const PerformanceCard = ({ title, items }) => {
  return (
    <CardContainer>
      <CardHeader>{title}</CardHeader>
      <div className='flex flex-col gap-2'>
        {items?.map((item, index) => (
          <div
            key={index}
            className='flex min-[400px]:items-center gap-2 flex-col min-[400px]:flex-row justify-between p-4 bg-[#FAFAFA] rounded-lg border border-[#B1B1B1]'
          >
            <div className='flex min-[300px]:items-center flex-col min-[300px]:flex-row gap-3'>
              <span className='size-12 rounded-xl shrink-0 bg-white border'>
                <img
                  src={item?.image}
                  alt={item?.title}
                  className='w-full h-full object-cover rounded-xl'
                />
              </span>
              <div className='flex flex-col '>
                <h3 className='text-primary text-base font-medium'>
                  {item?.title}
                </h3>
                <span className='text-[#EB3741] text-sm font-normal'>
                  ${item?.amount?.toLocaleString()}
                </span>
              </div>
            </div>
            <div className='flex flex-col  min-[400px]::items-center'>
              <span className='text-[#454545] text-sm font-normal'>Views</span>
              <span className='text-[#131E47] text-sm font-medium'>
                {item?.views}
              </span>
            </div>
          </div>
        ))}
      </div>
    </CardContainer>
  )
}

export default PerformanceCard
