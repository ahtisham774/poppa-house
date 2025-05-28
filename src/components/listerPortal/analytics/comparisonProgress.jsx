import React from 'react'
import CardContainer from '../commission/cardContainer'
import { Progress } from 'antd'

const ComparisonProgress = ({ item1, item2, total, note }) => {
  return (
    <CardContainer>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-medium text-primary'>
          {item1?.title} vs {item2?.title}
        </h2>
        <p className='text-base text-[#888888]'>
          out of {total} total listings
        </p>
      </div>
      <div className='flex flex-col gap-1 w-full'>
        <div className='flex items-center w-full justify-between gap-2 text-base font-normal text-primary'>
          <span>{item1?.title}</span>{item1?.value}
        </div>
        <Progress
          percent={(item1?.value / total) * 100}
          strokeColor='#2196F3'
          showInfo={false}
          className='w-full'
        />
        <div className='flex items-center w-full justify-between gap-2 text-base font-normal text-primary'>
         <span>{item2?.title}</span>{item2?.value}
        </div>
        <Progress
          percent={(item2?.value / total) * 100}
          strokeColor='#2196F3'
          showInfo={false}
          className='w-full'
        />
      {note && <p className='text-xs text-[#888888]'>{note}</p>}
      </div>
    </CardContainer>
  )
}

export default ComparisonProgress
