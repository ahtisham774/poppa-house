import React, { useState } from 'react'

import FormField from './formField'
import RadioGroup from './radioGroup'

const DynamicRoomTypes = ({ formData, onChange }) => {
  const [roomTypes, setRoomTypes] = useState(
    formData.roomTypes || [
      {
        id: 1,
        roomTypeName: '',
        numberOfRooms: 1,
        roomsFloorArea: '',
        cleaningServices: {
          sweeping: false,
          mopping: false,
          vacuuming: false,
          dusting: false,
          disinfection: false
        }
      }
    ]
  )

  const handleRoomTypeChange = (id, field, value) => {
    const updatedRoomTypes = roomTypes.map(room => {
      if (room.id === id) {
        return { ...room, [field]: value }
      }
      return room
    })

    setRoomTypes(updatedRoomTypes)
    onChange({ roomTypes: updatedRoomTypes })
  }

  const handleServiceChange = (id, service, checked) => {
    console.log('Service changed:', id, service, checked)
    const updatedRoomTypes = roomTypes.map(room => {
      if (room.id == id) {
        return {
          ...room,
          cleaningServices: {
            ...room.cleaningServices,
            [service]: checked
          }
        }
      }
      return room
    })

    setRoomTypes(updatedRoomTypes)
    onChange({ roomTypes: updatedRoomTypes })
  }

  const addRoomType = () => {
    const newId =
      roomTypes.length > 0 ? Math.max(...roomTypes.map(r => r.id)) + 1 : 1
    const newRoomType = {
      id: newId,
      roomTypeName: '',
      numberOfRooms: 1,
      roomsFloorArea: '',
      cleaningServices: {
        sweeping: false,
        mopping: false,
        vacuuming: false,
        dusting: false,
        disinfection: false
      }
    }

    setRoomTypes([...roomTypes, newRoomType])
    onChange({ roomTypes: [...roomTypes, newRoomType] })
  }

  const removeRoomType = id => {
    if (roomTypes.length <= 1) return

    const updatedRoomTypes = roomTypes.filter(room => room.id !== id)
    setRoomTypes(updatedRoomTypes)
    onChange({ roomTypes: updatedRoomTypes })
  }

  return (
    <div>
      {roomTypes.map((roomType, index) => (
        <div key={roomType.id} className='mb-4'>
          <h4 className='text-md font-medium text-[#131e47] mb-2'>
            Please specify the types of spaces to be cleaned and their
            quantities
          </h4>
          <div className='flex justify-end items-center mb-4'>
            {roomTypes.length > 1 && (
              <button
                type='button'
                onClick={() => removeRoomType(roomType.id)}
                className='text-red-500 hover:text-red-700 flex items-center text-sm'
              >
                Remove
              </button>
            )}
          </div>

          <div className='space-y-4'>
            <FormField
              field={{
                name: `roomTypeName_${roomType.id}`,
                label: 'Room Type Name',
                type: 'text',
                full: true,
                placeholder: 'Enter the room type name',
                required: true
              }}
              value={roomType.roomTypeName || ''}
              onChange={value =>
                handleRoomTypeChange(roomType.id, 'roomTypeName', value)
              }
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <FormField
                field={{
                  name: `numberOfRooms_${roomType.id}`,
                  label: 'Number of Rooms',
                  type: 'number',
                  min: 1,
                  required: true
                }}
                value={roomType.numberOfRooms || 1}
                onChange={value =>
                  handleRoomTypeChange(roomType.id, 'numberOfRooms', value)
                }
              />

              <FormField
                field={{
                  name: `roomsFloorArea_${roomType.id}`,
                  label: 'Floor Area (in m²)',
                  type: 'number',
                  min: 1,
                  step: 0.1,
                  placeholder: 'Select floor area (in m²)',
                  required: true
                }}
                value={roomType.roomsFloorArea || ''}
                onChange={value =>
                  handleRoomTypeChange(roomType.id, 'roomsFloorArea', value)
                }
              />
            </div>
            <RadioGroup
              key={roomType.id}
              field={{
                label: 'Select Cleaning Services',
                name: 'cleaningServices',

                inline: true,
                type: 'radio-group',
                options: [
                  { label: 'Sweeping', value: 'sweeping' },
                  { label: 'Mopping', value: 'mopping' },
                  { label: 'Vacuuming', value: 'vacuuming' },
                  { label: 'Dusting', value: 'dusting' },
                  { label: 'Disinfection', value: 'disinfection' }
                ]
              }}
              formData={
                roomType.cleaningServices || {
                  sweeping: false,
                  mopping: false,
                  vacuuming: false,
                  dusting: false,
                  disinfection: false
                }
              }
              onChange={(name, value) =>
                handleServiceChange(roomType.id, name, value)
              }
            />
            {/* <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Select Cleaning Services
              </label>
              <div className='space-y-2'>
                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`sweeping-${roomType.id}`}
                    checked={roomType.cleaningServices?.sweeping || false}
                    onChange={e =>
                      handleServiceChange(
                        roomType.id,
                        'sweeping',
                        e.target.checked
                      )
                    }
                    className='h-4 w-4 text-[#131e47] border-gray-300 rounded focus:ring-[#131e47]'
                  />
                  <label
                    htmlFor={`sweeping-${roomType.id}`}
                    className='ml-2 text-sm text-gray-700'
                  >
                    Sweeping
                  </label>
                </div>

                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`mopping-${roomType.id}`}
                    checked={roomType.cleaningServices?.mopping || false}
                    onChange={e =>
                      handleServiceChange(
                        roomType.id,
                        'mopping',
                        e.target.checked
                      )
                    }
                    className='h-4 w-4 text-[#131e47] border-gray-300 rounded focus:ring-[#131e47]'
                  />
                  <label
                    htmlFor={`mopping-${roomType.id}`}
                    className='ml-2 text-sm text-gray-700'
                  >
                    Mopping
                  </label>
                </div>

                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`vacuuming-${roomType.id}`}
                    checked={roomType.cleaningServices?.vacuuming || false}
                    onChange={e =>
                      handleServiceChange(
                        roomType.id,
                        'vacuuming',
                        e.target.checked
                      )
                    }
                    className='h-4 w-4 text-[#131e47] border-gray-300 rounded focus:ring-[#131e47]'
                  />
                  <label
                    htmlFor={`vacuuming-${roomType.id}`}
                    className='ml-2 text-sm text-gray-700'
                  >
                    Vacuuming
                  </label>
                </div>

                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`dusting-${roomType.id}`}
                    checked={roomType.cleaningServices?.dusting || false}
                    onChange={e =>
                      handleServiceChange(
                        roomType.id,
                        'dusting',
                        e.target.checked
                      )
                    }
                    className='h-4 w-4 text-[#131e47] border-gray-300 rounded focus:ring-[#131e47]'
                  />
                  <label
                    htmlFor={`dusting-${roomType.id}`}
                    className='ml-2 text-sm text-gray-700'
                  >
                    Dusting
                  </label>
                </div>

                <div className='flex items-center'>
                  <input
                    type='checkbox'
                    id={`disinfection-${roomType.id}`}
                    checked={roomType.cleaningServices?.disinfection || false}
                    onChange={e =>
                      handleServiceChange(
                        roomType.id,
                        'disinfection',
                        e.target.checked
                      )
                    }
                    className='h-4 w-4 text-[#131e47] border-gray-300 rounded focus:ring-[#131e47]'
                  />
                  <label
                    htmlFor={`disinfection-${roomType.id}`}
                    className='ml-2 text-sm text-gray-700'
                  >
                    Disinfection
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      ))}

      <button
        type='button'
        onClick={addRoomType}
        className='flex items-center bg-[#131e47] rounded-lg px-7 py-2 text-white font-medium'
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='mr-2'
        >
          <path
            d='M8 1V15M1 8H15'
            stroke='#ffffff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        Add Another Room Type
      </button>
    </div>
  )
}

export default DynamicRoomTypes
