import React from 'react';

const StatusBadge = ({ status }) => {
  let bgColor = 'bg-gray-200';
  let textColor = 'text-gray-700';
  
  if (status === 'Awaiting Assignment') {
    bgColor = 'bg-white';
    textColor = 'text-primary';
  } else if (status === 'Assigned') {
     bgColor = 'bg-blue-100';
    textColor = 'text-blue-700';
  } else if (status === 'In Progress') {
    bgColor = 'bg-[#FEF9C3]';
    textColor = 'text-[#92400E]';
  } else if (status === 'Completed') {
    bgColor = 'bg-[#DFF5E6]';
    textColor = 'text-[#166534]';
  } else if (status === 'Awaiting Payment') {
    bgColor = 'bg-[#FFD3CB]';
    textColor = 'text-[#D50000]';
  } else if (status === 'Closed') {
    bgColor = 'bg-[#bcbcbc]';
    textColor = 'text-[#2F2F2F]';
  }
  
  return (
    <div className={`inline-block ${bgColor} br font-medium rounded-md px-2 py-1 text-xs ${textColor} mb-3`}>
      {status}
    </div>
  );
};

export default StatusBadge;