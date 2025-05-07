import  { useEffect } from 'react';

const Modal = ({ children, title, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 ">
      <div className="bg-white rounded-lg w-full max-w-xl ">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-navy-900">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 max-h-[80vh] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;