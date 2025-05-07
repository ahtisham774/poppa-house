import { useState } from 'react'

const UserCategory = () => {
  const [info, setInfo] = useState({
    residency: 'Local Resident',
    type: 'Student'
  })

  const residencyOptions = [
    { label: 'Local Resident', value: 'Local Resident' },
    { label: 'International User', value: 'International User' }
  ]
  const typeOptions = [
    { label: 'Student', value: 'Student' },
    { label: 'Investor ', value: 'Investor ' },
    { label: 'Business Owner', value: 'Business Owner' }
  ]

  return (
    <div className='bg-white rounded-lg br p-6 mb-6 flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-lg font-medium'>User Category</h1>
        <p className='text-sm text-[#888888]'>
          Tell us a bit about yourself to help us personalize your experience
        </p>
      </div>
      {
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='residency' className='text-lg font-medium'>
              Are you a Local or International User?
            </label>
            {/* show radio buttons */}
            <div className='flex flex-col gap-1'>
              {residencyOptions.map(option => (
                <label key={option.value} className='flex items-center gap-2'>
                  <input
                    type='radio'
                    name='residency'
                    value={option.value}
                    checked={info.residency === option.value}
                    onChange={e =>
                      setInfo({ ...info, residency: e.target.value })
                    }
                    className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                  />
                  <span className='text-sm font-medium'>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='type' className='text-lg font-medium'>
              Are you a:
            </label>
            {/* show radio buttons */}
            <div className='flex flex-col gap-1'>
              {typeOptions.map(option => (
                <label key={option.value} className='flex items-center gap-2'>
                  <input
                    type='radio'
                    name='type'
                    value={option.value}
                    checked={info.type === option.value}
                    onChange={e => setInfo({ ...info, type: e.target.value })}
                    className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                  />
                  <span className='text-sm font-medium'>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      }

      <div className='flex justify-end gap-5'>
        <button className='border rounded-lg px-8 py-1 text-primary font-medium'>
          Cancel
        </button>
        <button
          type='submit'
          className='bg-primary text-white px-8 py-1 rounded-md font-medium hover:bg-primary/95 transition duration-200'
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default UserCategory
