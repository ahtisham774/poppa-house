import React from 'react'
import { CgArrowLongLeft } from 'react-icons/cg'

const BackButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center font-medium gap-2 border-2 border-[#b1b1b19a] rounded-lg px-3 py-1"
      onClick={onClick}
    >
      <CgArrowLongLeft size={20} />
      <span>Back</span>
    </button>
  )
}

export default BackButton
