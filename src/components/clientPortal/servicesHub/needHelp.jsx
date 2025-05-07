
import { useState } from 'react'
import ChatBox from './chatBox'

const NeedHelp = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
     {!open && (
      <button
        onClick={() => {
          setOpen(!open)
        }}
        aria-label="Open help chat"
        className='px-6 py-2 bg-primary h-fit w-fit m-auto text-white font-medium rounded-lg hover:bg-primary/80 transition duration-300'
      >
        Need Help?
      </button>
     )}
      {open && (
        <ChatBox
          onClose={() => setOpen(false)}
          
        />
      )}
        
    </>
  )
}

export default NeedHelp
