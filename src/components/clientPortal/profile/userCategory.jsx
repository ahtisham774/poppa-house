import { useEffect, useState } from 'react'
import clientPreferenceService from '../../../api/services/clientPreferenceService'
import { useAuth } from '../../../context/useAuth'
import { showToast } from '../../../utils/toast'
import CalculateButton from '../tools/calculateButton'

const UserCategory = ({ category }) => {
  const [info, setInfo] = useState({
    residency: 'Local Resident',
    type: 'Student',
    universityName: ''
  })
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    if (category) {
      setInfo({
        residency: category?.userType,
        type: category?.category,
        universityName: category?.universityName
      })
    }
  }, [category])

  const residencyOptions = [
    { label: 'Local Resident', value: 'Local Resident' },
    { label: 'International User', value: 'International User' }
  ]
  const typeOptions = [
    { label: 'Student', value: 'Student' },
    { label: 'Investor ', value: 'Investor ' },
    { label: 'Business Owner', value: 'Business Owner' }
  ]

  const handleUpdateCategory = () => {
    setLoading(true)
    const data = {
      userType: info.residency,
      category: info.type
    }
    if (info.type === 'Student') {
      data.universityName = info.universityName
    }
    clientPreferenceService
      .updateCategories(user?.id, data)
      .then(() => {
        showToast('success', 'Category updated successfully!')
      })
      .catch(error => {
        console.error('Error updating category:', error)
        showToast('error', 'Failed to update category. Please try again.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

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
                    checked={info.residency == option.value}
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
            <label className='text-lg font-medium'>Are you a:</label>
            {/* show radio buttons */}
            <div className='flex flex-col gap-1'>
              {typeOptions.map(option => (
                <>
                  <label key={option.value} className='flex items-center gap-2'>
                    <input
                      type='radio'
                      name='type'
                      value={option.value}
                      checked={info.type == option.value}
                      onChange={e => setInfo({ ...info, type: e.target.value })}
                      className='h-4 w-4 border-gray-300 rounded-full text-primary accent-primary focus:ring-primary'
                    />
                    <span className='text-sm font-medium'>{option.label}</span>
                  </label>
                  {info.type === 'Student' && option.value == 'Student' && (
                    <div className='flex flex-col gap-2 ml-5 mb-3'>
                      <label
                        htmlFor='universityName'
                        className='text-sm text-[#888888]'
                      >
                        What is your university name?
                      </label>
                      <input
                        type='text'
                        id='universityName'
                        value={info.universityName}
                        onChange={e =>
                          setInfo({ ...info, universityName: e.target.value })
                        }
                        className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary'
                      />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      }

      <div className='flex justify-end gap-5'>
        <button className='border rounded-lg px-8 py-1 text-primary font-medium'>
          Cancel
        </button>
        <CalculateButton
          text='Save Changes'
          className='!w-fit px-10 !py-2'
          onClick={handleUpdateCategory}
          loading={loading}
        />
      </div>
    </div>
  )
}

export default UserCategory
