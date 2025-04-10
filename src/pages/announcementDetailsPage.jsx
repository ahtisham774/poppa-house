import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiChevronLeft, BiX } from 'react-icons/bi';
import TopTitle from '../components/topTitle';
import { CgArrowLongLeft } from 'react-icons/cg';
import { announcements } from '../data/announcementData';


const AnnouncementDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the announcement with the matching ID
  const announcement = announcements.find(a => a.id === id) || announcements[0];
  
  return (
    <div className="max-w-6xl mx-auto p-6">
    <TopTitle title='Proppa House Info Centre' subTitle='PH Info Centre' />

    <div className='bg-[#EFF6FF] border border-[#D3E6FF] p-5 py-8 rounded-lg mb-6'>
        <div className='flex items-center mb-2'>
          <button
            className='flex items-center font-medium mr-4 gap-2 border-2 border-[#b1b1b19a] rounded-lg px-3 py-1'
            onClick={() => navigate('/staff/info')}
          >
            <CgArrowLongLeft size={20} />
            <span>Back</span>
          </button>
          
          <div>
            <h2 className="text-xl font-bold">Announcements</h2>
            <p className="text-gray-600">Company news and updates</p>
          </div>
        </div>
      </div>

      {/* Announcement Detail */}
      <div className="relative bg-white border rounded-lg p-6 max-w-3xl mx-auto">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={() => navigate('/announcements')}
        >
          <BiX size={24} />
        </button>
        
        <h2 className="text-xl font-bold mb-1">{announcement.title}</h2>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{announcement.fullDate || announcement.date}</span>
          <span className="mx-2">•</span>
          <span>{announcement.category}</span>
        </div>
        
        {announcement.relevantFor && (
          <div className="mb-4">
            <span className="font-semibold">Relevant for:</span>
            <span className="ml-1 text-gray-600">{announcement.relevantFor}</span>
          </div>
        )}
        
        <div className="space-y-4 text-gray-600 mb-6">
          {announcement.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <button className="w-full py-3 rounded-lg bg-gray-900 text-white font-medium">
          Mark as Read
        </button>
      </div>
    </div>
  );
};

export default AnnouncementDetailsPage;