
import { useState } from "react"
import { Modal, Input, Button } from "antd"

const { TextArea } = Input

const MessageModal = ({ visible, onCancel, onSend, propertyTitle }) => {
  const [message, setMessage] = useState("")
  const charLimit = 700

  return (
    <Modal
      title="Send Message to Property Owner"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={500}
      className="message-modal"
      closeIcon={<div className="absolute right-4 top-4 text-xl cursor-pointer">×</div>}
    >
      <div className="py-2">
        <p className="text-sm text-gray-600 mb-4">
          Your message will be saved and you can continue the conversation later.
        </p>

        <div className="mb-4">
          <p className="font-medium mb-2">Your Message (Max {charLimit} words)</p>
          <TextArea
            placeholder="Write your message here"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={charLimit}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {message.length}/{charLimit} words
          </div>
        </div>

        <div className="bg-[#FFF9E6] p-4 rounded-md mb-4">
          <p className="text-[#8B4513] font-medium">Proppa House Negotiation Policy:</p>
          <p className="text-[#8B4513] text-sm">
            To protect all parties, negotiations must take place within the platform. This ensures transparency, enables
            verification support, and allows us to assist in dispute resolution. Deals made outside the platform are not
            eligible for protection.
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="primary" onClick={() => onSend(message)} className="bg-[#1e293b] hover:bg-[#334155]">
            Send Message
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default MessageModal
