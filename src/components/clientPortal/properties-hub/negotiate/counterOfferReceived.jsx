'use client'
import { Button } from 'antd'

const CounterOfferReceived = ({
  yourOffer,
  counterOffer,
  specialRequests,
  onAcceptOffer,
  onRejectOffer,
  onCounterOffer
}) => {
  return (
    <div className='py-4'>
      <div className='mb-6'>
        <div className='flex justify-between items-center mb-2'>
          <span className='font-medium text-[#1E293B]'>Counter Offer:</span>
          <span className='font-bold text-[#1E293B]'>
            £{counterOffer.toLocaleString()}
          </span>
        </div>

        <div className='bg-[#F8FAFC] p-4 rounded-md mb-4'>
          <h4 className='font-medium text-[#1E293B] mb-2'>Special Requests:</h4>
          <p className='text-[#64748B]'>{specialRequests}</p>
        </div>

        <div className='flex gap-4 mt-6'>
          <Button
            type='primary'
            className='flex-1 bg-[#4CAF50] hover:!bg-[#15803D] border-none h-12 flex items-center gap-2 font-medium text-white hover:!text-white'
            onClick={onAcceptOffer}
          >
            <svg
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M3.26562 10.3906L7.42188 14.5469L15.7344 5.64062'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Accept Offer
          </Button>
          <Button
            
            className='flex-1 h-12 font-medium !bg-[#D50000] flex items-center gap-2 hover:!bg-[#D50000] text-white hover:!text-white'
            onClick={onRejectOffer}
          >
            <svg
              width='21'
              height='21'
              viewBox='0 0 21 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4.78567 4.78567C4.90872 4.66278 5.07552 4.59375 5.24942 4.59375C5.42333 4.59375 5.59013 4.66278 5.71317 4.78567L16.2132 15.2857C16.2776 15.3458 16.3294 15.4182 16.3652 15.4987C16.4011 15.5792 16.4204 15.6661 16.4219 15.7542C16.4235 15.8423 16.4073 15.9299 16.3743 16.0116C16.3413 16.0933 16.2921 16.1675 16.2298 16.2298C16.1675 16.2921 16.0933 16.3413 16.0116 16.3743C15.9299 16.4073 15.8423 16.4235 15.7542 16.4219C15.6661 16.4204 15.5792 16.4011 15.4987 16.3652C15.4182 16.3294 15.3458 16.2776 15.2857 16.2132L4.78567 5.71317C4.66278 5.59013 4.59375 5.42333 4.59375 5.24942C4.59375 5.07552 4.66278 4.90872 4.78567 4.78567Z'
                fill='white'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.213 4.78567C16.3359 4.90872 16.4049 5.07552 16.4049 5.24942C16.4049 5.42333 16.3359 5.59013 16.213 5.71317L5.71301 16.2132C5.5886 16.3291 5.42406 16.3922 5.25405 16.3892C5.08403 16.3862 4.92182 16.3173 4.80159 16.1971C4.68135 16.0769 4.61248 15.9146 4.60948 15.7446C4.60648 15.5746 4.66959 15.4101 4.78551 15.2857L15.2855 4.78567C15.4086 4.66278 15.5753 4.59375 15.7493 4.59375C15.9232 4.59375 16.09 4.66278 16.213 4.78567Z'
                fill='white'
              />
            </svg>
            Cancel
          </Button>
          <Button className='flex-1 h-12 font-medium border' onClick={onCounterOffer}>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_3618_12821)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.5 13.5V1.5H8V4.25C8 5.216 8.784 6 9.75 6H13.125L13.188 5.997C13.2913 6.00557 13.3953 5.99263 13.4934 5.95898C13.5914 5.92534 13.6815 5.87173 13.7578 5.80153C13.8341 5.73133 13.895 5.64608 13.9367 5.55115C13.9784 5.45622 13.9999 5.35368 14 5.25V4.476C13.9997 4.21652 13.8986 3.96731 13.718 3.781L10.363 0.305C10.2696 0.208404 10.1578 0.131612 10.034 0.0792094C9.91034 0.0268066 9.77735 -0.000132485 9.643 4.89892e-07H3C2.73478 4.89892e-07 2.48043 0.105357 2.29289 0.292894C2.10536 0.48043 2 0.734784 2 1V14C2 14.2652 2.10536 14.5196 2.29289 14.7071C2.48043 14.8946 2.73478 15 3 15H7.25C7.44891 15 7.63968 14.921 7.78033 14.7803C7.92098 14.6397 8 14.4489 8 14.25C8 14.0511 7.92098 13.8603 7.78033 13.7197C7.63968 13.579 7.44891 13.5 7.25 13.5H3.5ZM12.328 4.5L9.5 1.57V4.25C9.5 4.388 9.612 4.5 9.75 4.5H12.328ZM10 15.25C10 15.0511 10.079 14.8603 10.2197 14.7197C10.3603 14.579 10.5511 14.5 10.75 14.5H15.25C15.4489 14.5 15.6397 14.579 15.7803 14.7197C15.921 14.8603 16 15.0511 16 15.25C16 15.4489 15.921 15.6397 15.7803 15.7803C15.6397 15.921 15.4489 16 15.25 16H10.75C10.5511 16 10.3603 15.921 10.2197 15.7803C10.079 15.6397 10 15.4489 10 15.25ZM13 13.25C12.8011 13.25 12.6103 13.171 12.4697 13.0303C12.329 12.8897 12.25 12.6989 12.25 12.5V11H10.75C10.5511 11 10.3603 10.921 10.2197 10.7803C10.079 10.6397 10 10.4489 10 10.25C10 10.0511 10.079 9.86032 10.2197 9.71967C10.3603 9.57902 10.5511 9.5 10.75 9.5H12.25V8C12.25 7.80109 12.329 7.61032 12.4697 7.46967C12.6103 7.32902 12.8011 7.25 13 7.25C13.1989 7.25 13.3897 7.32902 13.5303 7.46967C13.671 7.61032 13.75 7.80109 13.75 8V9.5H15.25C15.4489 9.5 15.6397 9.57902 15.7803 9.71967C15.921 9.86032 16 10.0511 16 10.25C16 10.4489 15.921 10.6397 15.7803 10.7803C15.6397 10.921 15.4489 11 15.25 11H13.75V12.5C13.75 12.6989 13.671 12.8897 13.5303 13.0303C13.3897 13.171 13.1989 13.25 13 13.25Z'
                  fill='#131E47'
                />
              </g>
              <defs>
                <clipPath id='clip0_3618_12821'>
                  <rect width='16' height='16' fill='white' />
                </clipPath>
              </defs>
            </svg>
            Counter Offer
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CounterOfferReceived
