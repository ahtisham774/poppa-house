

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className="flex items-center space-x-1">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
  
        {pages.map((page) => (
          <button
            key={page}
            className={`flex items-center justify-center w-10 h-10 rounded-md ${
              currentPage === page
                ? 'bg-primary text-white border border-primary'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
  
        <button
          className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };
  

export default Pagination