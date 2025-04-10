import { Collapse, Space } from 'antd'

export function HowItWorks({ steps = [] }) {
  // const defaultSteps = [
  //   {
  //     title: '1. Request a Viewing',
  //     content:
  //       'Submit your viewing request through our platform, including property details and your preferences.'
  //   },
  //   {
  //     title: '2. Matched Viewing Agent',
  //     content:
  //       "We'll pair you with an agent who understands your needs and speaks your language."
  //   },
  //   {
  //     title: '3. On-Site Inspection',
  //     content:
  //       'Your agent conducts a thorough property inspection, checking all important aspects.'
  //   },
  //   {
  //     title: '4. Detailed Report & Media',
  //     content:
  //       'Receive a comprehensive report with photos, videos, and detailed observations.'
  //   },
  //   {
  //     title: '5. Unlimited Q&A',
  //     content:
  //       "Ask any questions about the property or neighborhood - we're here to help."
  //   },
  //   {
  //     title: '6. Live Virtual Viewing (Optional)',
  //     content:
  //       'Request a live video call during the viewing for real-time interaction.'
  //   },
  //   {
  //     title: '7. Personalized Recommendations',
  //     content: "Get expert advice on the property's suitability for your needs."
  //   }
  // ];

  const displaySteps =  steps ;

  if (displaySteps.length === 0) {
    return null;
  }

  return (
    <section className='py-16 my-10'>
      <div className='container max-w-[66rem]'>
        <h2 className='text-3xl lg:text-5xl font-bold text-center text-primary mb-12'>
          How It Works
        </h2>
        <Space direction='vertical' className='w-full space-y-7'>
          {displaySteps.map((step, index) => (
            <Collapse
              ghost
              key={index}
              collapsible='header'
              expandIconPosition='right'

              expandIcon={({ isActive }) => (
                <svg
                  width='34'
                  height='37'
                  viewBox='0 0 34 37'
                  className={`shrink-0 my-auto ${isActive ? 'rotate-180' : ''}`}
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M28.6875 14L17 25.25L5.3125 14'
                    stroke='#131E47'
                    strokeWidth='2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
              
              className='bg-white shadow-sm w-full '
            >
              <Collapse.Panel
              
                header={step.title}
                className='bg-[#F6F6F6] !rounded-none  text-2xl font-medium shadow-[4px_4px_4px_0px_#00000040]'

                key={index}
              >
                <p className='text-muted-foreground text-base font-normal'>
                  {step.content}
                </p>
              </Collapse.Panel>
            </Collapse>
          ))}
        </Space>
      </div>
    </section>
  )
}
