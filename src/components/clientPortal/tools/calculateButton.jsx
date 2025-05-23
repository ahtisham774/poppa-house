import React from 'react'

const CalculateButton = ({ loading, text = 'Calculate', onClick, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-full bg-primary/90 flex items-center gap-2 text-white py-4 font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-60 hover:bg-primary transition-colors ${className}`}
    >
      {
        loading && (
          <div className='size-4 border-2 mt-1 border-primary border-t-white rounded-full animate-spin' />
        )
      }
      {text}
    </button>
  )
}

export default CalculateButton
