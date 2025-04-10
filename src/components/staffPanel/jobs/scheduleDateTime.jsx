import React, { useState } from 'react'

const ScheduleDateTime = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
  
    const handleDateChange = (e) => {
      setSelectedDate(new Date(e.target.value));
      setShowDatePicker(false);
    };
  
    const handleTimeChange = (e) => {
      setSelectedTime(e.target.value);
      setShowTimePicker(false);
    };
  
    const handleConfirm = () => {
      if (!selectedDate) {
        alert("Please select a date");
        return;
      }
      if (!selectedTime) {
        alert("Please select a time");
        return;
      }
  
      const dateTimeInfo = {
        date: selectedDate ,
        time: selectedTime
      };
      
      console.log('Date and time confirmed:', dateTimeInfo);
      alert(`Schedule confirmed for ${dateTimeInfo.date} at ${dateTimeInfo.time}`);
      // Additional logic for backend submission would go here
    };
  return (
    <div className='bg-white rounded-lg border border-gray-200  mt-6 sm:mt-8'>
      <div className='border-b border-gray-200 p-4'>
        <h3 className='text-xl font-medium'>Schedule Date & Time</h3>
      </div>
      <div className='p-6 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='relative'>
            <button
              className='w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-between'
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5 mr-2 text-gray-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9.75v7.5'
                  />
                </svg>
                <span className='text-gray-700'>
                  {selectedDate || 'Select a date'}
                </span>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 text-gray-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m19.5 8.25-7.5 7.5-7.5-7.5'
                />
              </svg>
            </button>
            {showDatePicker && (
              <div className='absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4'>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={handleDateChange}
                  min={new Date().toISOString().split('T')[0]} // Today as the minimum date
                />
              </div>
            )}
           
          </div>

          <div className='relative'>
            <button
              className='w-full py-3 px-4 border border-gray-300 rounded flex items-center justify-between'
              onClick={() => setShowTimePicker(!showTimePicker)}
            >
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5 mr-2 text-gray-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                <span className='text-gray-700'>
                  {selectedTime || 'Select a time'}
                </span>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 text-gray-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m19.5 8.25-7.5 7.5-7.5-7.5'
                />
              </svg>
            </button>
            {showTimePicker && (
              <div className='absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4'>
                <input 
                  type="time" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={handleTimeChange}
                  min="09:00"
                  max="18:00"
                />
                <p className="text-xs text-gray-500 mt-2">Business hours: 9:00 AM - 6:00 PM</p>
              </div>
            )}
          </div>
        </div>

        <button
          className='w-full mt-4 py-3 bg-navy-900 text-white font-medium rounded'
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default ScheduleDateTime
