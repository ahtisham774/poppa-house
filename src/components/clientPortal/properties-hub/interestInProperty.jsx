import { Button, Card } from 'antd'
import { useState } from 'react'

const InterestInProperty = ({ handleMakeOffer }) => {
  const [isShowInterest, setIsShowInterest] = useState(false)

  const dataToSHow = {
    title: !isShowInterest ? 'Interested in this property?' : 'Negotiate',
    description: !isShowInterest
      ? 'Click below to notify the lister. They’ll be able to reach out to you.'
      : 'Make an offer to purchase this property',
    buttonText: !isShowInterest ? 'Express Interest' : 'Make an Offer',
    buttonAction: () =>
      !isShowInterest ? setIsShowInterest(true) : handleMakeOffer()
  }

  return (
    <Card className='border border-[#E0E0E0] mb-6  shadow-[0px_4px_4px_0px_#00000040]'>
      <div className=' text-center mb-4'>
        {
          <h4 className='font-medium text-lg text-[#1E293B] mb-2'>
            {dataToSHow.title}
          </h4>
        }
        {
          <p className='text-[#64748B] text-left text-sm mb-4'>
            {dataToSHow.description}
          </p>
        }
        {
          <Button
            type='primary'
            size='large'
            block
            onClick={dataToSHow.buttonAction}
            className='bg-accent hover:!bg-[#f7e490] shadow-lg rounded-xl hover:!text-black text-black border-none h-12 text-lg font-medium'
          >
            {dataToSHow.buttonText}
          </Button>
        }
      </div>
    </Card>
  )
}

export default InterestInProperty
