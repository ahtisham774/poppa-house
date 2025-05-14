import CardLayout from './cardLayout'
import MapLists from './mapLists'

const BillingDetail = () => {
  const header = 'Billing Details'
  const list = [
    {
      label: 'Monthly Subscription',
      value: '£185.50'
    },
    {
      label: 'Billing Cycle',
      value: 'Monthly'
    },
    {
      label: 'Next Payment Date',
      value: 'April 18, 2025'
    },
    {
      label: 'Partner Provider',
      value: 'EnergyPlus Solutions'
    }
  ]

  const header2 = 'Payment History'
  const historyList = [
    {
      date: 'March 18, 2025',
      amount: '£185.50',
      status: 'Paid'
    },
    {
      date: 'February 18, 2025',
      amount: '£185.50',
      status: 'Paid'
    },
    {
      date: 'January 18, 2025',
      amount: '£185.50',
      status: 'Paid'
    },
    {
      date: 'December 18, 2024',
      amount: '£185.50',
      status: 'Paid'
    }
  ]

  return (
    <CardLayout
      title={header}
      children1={
        <div className='flex flex-col '>
          <div className='border-t-2 border-b-2 p-4 '>
            <h2 className='text-xl font-medium'>{header2}</h2>
          </div>
          <div className='flex flex-col gap-5 p-4 sm:p-6 overflow-x-auto'>
            {historyList?.map((payment, index) => (
              <div
                key={index}
                className='grid grid-cols-3 w-full border-b-2 pb-4 last:pb-0 last:border-b-0 '
              >
                <p className='text-sm '>{payment.date}</p>
                <p className='text-sm '>{payment.amount}</p>
                <p className='text-sm '>
                  <span className='px-4 rounded py-1 bg-secondary'>
                    {payment.status}
                  </span>
                </p>
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

export default BillingDetail
