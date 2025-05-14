import { useState } from 'react'
import ActionButton from './actionButton'
import CardLayout from './cardLayout'
import MapLists from './mapLists'
import ModifySubscriptionModal from './modifySubscriptionModal'
import CancelSubscriptionModal from './cancelSubscriptionModal'
import ViewDetailsModal from './viewDetailsModal'

const Management = () => {
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const list = [
    {
      label: 'Switching Window',
      value: 'Anytime'
    },
    {
      label: 'Upgrade Option',
      value: 'Upgrades allowed before next cycle confirmation'
    },
    {
      label: 'Policy',
      value: 'Modifications only allowed before renewal confirmation'
    },
    {
      label: 'Notice Period',
      value:
        'Must cancel or modify at least 7 days before next scheduled service',
      text: 'text-[#EB3741]'
    }
  ]
  return (
    <>
      <CardLayout
        title='Subscription Management'
        children1={
          <div className='flex justify-start flex-wrap gap-3 border-t-2 p-4 sm:p-6'>
            <ActionButton
              text='Modify Subscription Plan'
              variant='outline'
              onClick={() => setIsModifyModalOpen(true)}
            />
            <ActionButton
              text='Cancel Subscription'
              variant='primary'
              onClick={() => setIsCancelModalOpen(true)}
            />
            <ActionButton
              text='View & Confirm Details'
              variant='outline'
              onClick={() => setIsViewModalOpen(true)}
            />
          </div>
        }
      >
        <MapLists list={list} />
      </CardLayout>
      <ModifySubscriptionModal
        isOpen={isModifyModalOpen}
        onClose={() => setIsModifyModalOpen(false)}
      />

      <CancelSubscriptionModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
      />

      <ViewDetailsModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
      />
    </>
  )
}

export default Management
