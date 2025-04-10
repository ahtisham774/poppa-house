import React, { useState } from 'react';

const JobHistoryCard = () => {
  const [jobHistory] = useState([
    {
      id: 1,
      title: 'Property Inspection - 123 Main St',
      completedDate: '2/15/2025',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Property Inspection - 123 Main St',
      completedDate: '2/15/2025',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Property Inspection - 123 Main St',
      completedDate: '2/15/2025',
      status: 'Completed'
    }
  ]);

  return (
    <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-gray-900">Job History</h2>
        <a href="#" className="flex items-center text-sm ">
          View All
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      <div className="space-y-4">
        {jobHistory.map(job => (
          <div key={job.id} className="border-b border-[#D5D5D5] pb-4 mb-2 last:border-b-0 last:pb-0 last:mb-0">
            <div className="flex justify-between mb-1">
              <h3 className="text-base font-medium text-gray-900">{job.title}</h3>
              <span className="px-4 py-1 text-xs rounded-lg bg-green-100 font-medium text-green-800">
                {job.status}
              </span>
            </div>
            <p className="text-xs text-gray-500">Completed: {job.completedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobHistoryCard;
