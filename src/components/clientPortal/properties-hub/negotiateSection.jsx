import { Button } from 'antd'
import { MessageOutlined, PhoneOutlined } from '@ant-design/icons'

import OfferHistory from './offerHistory'
import PendingResponse from './negotiate/pendingResponse'
import CounterOfferReceived from './negotiate/counterOfferReceived'
import CounterOfferSent from './negotiate/counterOfferSent'
import OfferRejected from './negotiate/offerRejected'
import DealFinalized from './negotiate/dealFinalized'
import InitialOffer from './negotiate/initialOffer'
import Tabs from '../../common/tabs'
import { useState } from 'react'

const NegotiateSection = ({
  negotiationState,
  offerAmount,
  counterOfferAmount,
  specialRequests,
  onMakeOffer,
  onAcceptOffer,
  onRejectOffer,
  onCounterOffer,
  onSendMessage,
  onRequestCallBack,
  offerHistory
}) => {
  const [activeTab, setActiveTab] = useState('current_offer')

  const renderNegotiationContent = () => {
    switch (negotiationState) {
      case 'pending_response':
        return (
          <PendingResponse
            offerAmount={offerAmount}
            specialRequests={specialRequests}
          />
        )
      case 'counteroffer_received':
        return (
          <CounterOfferReceived
            yourOffer={offerAmount}
            counterOffer={counterOfferAmount}
            specialRequests={specialRequests}
            onAcceptOffer={onAcceptOffer}
            onRejectOffer={onRejectOffer}
            onCounterOffer={onCounterOffer}
          />
        )
      case 'counteroffer_sent':
        return (
          <CounterOfferSent
            offerAmount={offerAmount}
            specialRequests={specialRequests}
          />
        )
      case 'offer_rejected':
        return (
          <OfferRejected
            offerAmount={offerAmount}
            specialRequests={specialRequests}
            onMakeOffer={onMakeOffer}
          />
        )
      case 'deal_finalized':
        return (
          <DealFinalized
            offerAmount={offerAmount}
            specialRequests={specialRequests}
          />
        )
      case 'initial_offer':
        return (
          <InitialOffer
            offerAmount={offerAmount}
            specialRequests={specialRequests}
          />
        )
      default:
        return (
          <div className='py-4'>
            <Button
              type='primary'
              size='large'
              block
              onClick={onMakeOffer}
              className='bg-accent hover:!bg-[#f7e490] hover:!text-black text-black border-none h-14 text-lg font-medium'
            >
              Make an Offer
            </Button>
          </div>
        )
    }
  }

  return (
    <div className='bg-white rounded-lg border border-[#E0E0E0] p-6 mb-6 shadow-sm'>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold text-[#1E293B]'>Negotiate</h2>
        <p className='text-[#64748B]'>
          Make an offer to purchase this property
        </p>
      </div>

      {negotiationState && (
        <div className='mb-4'>
          {negotiationState === 'pending_response' && (
            <div className='bg-[#FFF9E6] text-[#92400E] py-2 px-4 rounded-md text-sm font-medium inline-block'>
              Pending Response
            </div>
          )}
          {negotiationState === 'counteroffer_received' && (
            <div className='bg-[#EFF6FF] text-[#1E40AF] py-2 px-4 rounded-md text-sm font-medium inline-block'>
              Counteroffer Received
            </div>
          )}
          {negotiationState === 'counteroffer_sent' && (
            <div className='bg-[#EFF6FF] text-[#1E40AF] py-2 px-4 rounded-md text-sm font-medium inline-block'>
              Counteroffer Sent
            </div>
          )}
          {negotiationState === 'offer_rejected' && (
            <div className='bg-[#FEE2E2] text-[#B91C1C] py-2 px-4 rounded-md text-sm font-medium inline-block'>
              Offer Rejected
            </div>
          )}
          {negotiationState === 'deal_finalized' && (
            <div className='bg-[#ECFDF5] text-[#047857] py-2 px-4 rounded-md text-sm font-medium inline-block'>
              Deal Finalized
            </div>
          )}
          {negotiationState === 'initial_offer' && (
            <div className='bg-[#EFF6FF] text-[#1E40AF] py-2 px-4 rounded-md text-sm font-medium inline-block'>
              Initial Offer
            </div>
          )}
        </div>
      )}

      {/* <Tabs
        defaultActiveKey="current_offer"
        className="negotiate-tabs"
        tabBarStyle={{
          marginBottom: "16px",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <TabPane tab={<span className="px-4 py-2 font-medium">Current Offer</span>} key="current_offer">
          {renderNegotiationContent()}
        </TabPane>
        <TabPane tab={<span className="px-4 py-2 font-medium">Offer History</span>} key="offer_history">
          <OfferHistory history={offerHistory} />
        </TabPane>
      </Tabs> */}
      <Tabs
        tabs={[
          {
            name: 'current_offer',
            title: 'Current Offer'
          },
          {
            name: 'offer_history',
            title: 'Offer History'
          }
        ]}
        activeTab={activeTab}
        handleTabChange={setActiveTab}
      />

        {activeTab === 'current_offer' && (
            <div className='mb-4'>
                {renderNegotiationContent()}
            </div>
            )}
        {activeTab === 'offer_history' && (
            <div className='mb-4'>
                <OfferHistory history={offerHistory} />
            </div>
        )}

      <div className='mt-6 border-t pt-6'>
        <h3 className='font-medium mb-4'>Contact Options:</h3>
        <div className='grid grid-cols-2 gap-4'>
          <Button
            className='flex items-center justify-center h-12 bg-[#0F172A] hover:bg-[#1E293B] text-white'
            onClick={onSendMessage}
          >
            <MessageOutlined className='mr-2' /> Message
          </Button>
          <Button
            className='flex items-center justify-center h-12 bg-[#0F172A] hover:bg-[#1E293B] text-white'
            onClick={onRequestCallBack}
          >
            <PhoneOutlined className='mr-2' /> Request Call Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NegotiateSection
