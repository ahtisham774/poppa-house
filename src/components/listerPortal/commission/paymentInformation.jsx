import React from 'react'
import CardContainer from './cardContainer'
import CardHeader from './cardHeader'

const PaymentInformation = () => {
  return (
    <CardContainer className={"py-8"}>
      <CardHeader>Payment Information</CardHeader>
      <CardContainer className='!bg-[#FAFAFA] lg:px-8 lg:py-5'>
        <CardHeader className='text-xl'>Payment Terms</CardHeader>
        <ul className='list-disc pl-6 text-base font-normal text-[#202224]'>
          <li>Payment window: 21 days from deal date</li>
          <li>
            <span className='text-[#16A34A]'>10% discount</span> for early
            payment (within 7 days)
          </li>
          <li>Full amount for on-time payment (before 21 days)</li>
          <li>
            <span className='text-[#D50000]'>10% late fee</span> for late
            payment (within 28 days)
          </li>
        </ul>
      </CardContainer>
      <CardContainer className='!bg-[#FAFAFA] lg:px-8 lg:py-5 mt-3'>
        <CardHeader className='text-xl'>Commission Structure</CardHeader>
        <ul className='list-disc pl-6 text-base font-normal text-[#202224]'>
          <li>
            <span className='font-medium text-[#131E47]'>Sales:</span> 1.25% of
            final sale price
          </li>
          <li>
            <span className='font-medium text-[#131E47]'>Rentals:</span> 2.95%
            of annual rent
          </li>
        </ul>
      </CardContainer>
    </CardContainer>
  )
}

export default PaymentInformation
