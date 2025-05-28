import Cards from '../components/listerPortal/commission/cards'
import PaymentInformation from '../components/listerPortal/commission/paymentInformation'
import TransactionHistory from '../components/listerPortal/commission/transactionHistory'
import ContainerLayout from '../utils/containerLayout'

const CommissionTracker = () => {
  return (
    <ContainerLayout>
      <div className='flex flex-col items-start gap-2 justify-center h-full'>
        <h1 className='text-3xl font-medium '>Commissions & Transactions</h1>
        <p className='text-[#131E47] text-base font-normal'>
          Monitor your commissions and payment statuses
        </p>
      </div>
      <Cards />
      <TransactionHistory />
      <PaymentInformation />
    </ContainerLayout>
  )
}

export default CommissionTracker
