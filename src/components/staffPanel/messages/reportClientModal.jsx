
import { useState } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import { GoAlert } from 'react-icons/go';

const ReportClientModal = ({ onClose }) => {
  const [report, setReport] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle submitting the report
    console.log('Submitting report:', report);
    alert('Report submitted');
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>
        
        <div className="flex items-center mb-4">
          <span className=" mr-2"><GoAlert/></span>
          <h2 className="text-xl font-bold text-gray-800">Report this client</h2>
        </div>
        
        <p className="text-gray-600 mb-4">
          If you're experiencing inappropriate behavior or other issues with this client, please submit a report and our team will review it within 24 hours.
        </p>
        
        <form onSubmit={handleSubmit}>
          <textarea
            value={report}
            onChange={(e) => setReport(e.target.value)}
            placeholder="Describe your issue..."
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 min-h-[120px] focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center"
          >
            <FaPaperPlane className="mr-2" />
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportClientModal;