import CardLayout from './cardLayout'
import MapLists from './mapLists'

const SubscriptionDetail = () => {
  const list = [
    {
      label: 'Subscription Type',
      value: 'Monthly'
    },
    {
      label: 'Next Scheduled Service Date',
      value: 'April 18, 2025'
    },
    {
      label: 'Last Service Completed',
      value: 'March 18, 2025'
    }
  ]

  const paymentHistory = [
    {
      date: 'March 18, 2025',
      amount: '£100.00',
      status: 'Paid'
    },
    {
      date: 'February 18, 2025',
      amount: '£100.00',
      status: 'Paid'
    },
    {
      date: 'January 18, 2025',
      amount: '£100.00',
      status: 'Paid'
    },
    {
      date: 'December 18, 2024',
      amount: '£100.00',
      status: 'Paid'
    }
  ]

  return (
    <CardLayout
      title='Subscription Details'
      children1={
        <div className='flex flex-col '>
          <div className='border-t-2 border-b-2 p-4 '>
            <h2 className='text-xl font-medium'>Payment History</h2>
          </div>
          <div className='flex flex-col gap-5 p-4 sm:p-6 overflow-x-auto'>
            {paymentHistory.map((payment, index) => (
              <div
                key={index}
                className='grid grid-cols-3 w-full border-b-2 pb-4 last:pb-0 last:border-b-0 '
              >
                <p className='text-sm '>{payment.date}</p>
                <p className='text-sm '>{payment.amount}</p>
                <p className='text-sm '><span className='px-4 rounded py-1 bg-accent'>{payment.status}</span></p>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <MapLists list={list} />
    </CardLayout>
  )
}

export default SubscriptionDetail
