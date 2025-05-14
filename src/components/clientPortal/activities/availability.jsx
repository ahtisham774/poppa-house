import { useState } from "react";

const Availability = ({ initialStatus, onStatusChange }) => {
  const [isAvailable, setIsAvailable] = useState(initialStatus);

  const handleToggle = () => {
    const newStatus = !isAvailable;
    setIsAvailable(newStatus);
    if (onStatusChange) {
      onStatusChange(newStatus);
    }
  };

  return (
    <div className='flex items-center mb-4'>
      <button
        type="button"
        className={`w-14 h-7 ${isAvailable ? 'bg-primary' : 'bg-gray-300'} rounded-full flex items-center p-1 transition-colors duration-200 focus:outline-none`}
        onClick={handleToggle}
      >
        <div className={`w-5 h-5 rounded-full bg-white transform transition-transform duration-200 ${isAvailable ? 'translate-x-7' : ''}`}></div>
      </button>
      <span className={`ml-2 ${isAvailable ? 'text-[#16A34A]' : 'text-gray-700'}`}>
        {isAvailable ? 'Available for work' : 'Unavailable'}
      </span>
    </div>
  );
};

export default Availability;