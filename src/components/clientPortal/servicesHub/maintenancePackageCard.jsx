// components/maintenance/MaintenancePackageCard.js

export const MaintenancePackageCard = ({ packageType, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border rounded-xl px-5 py-4 text-left ${
        isSelected
          ? 'border-primary ring-2 ring-blue-200 bg-blue-50'
          : ''
      }`}
    >
      <div className='flex items-center gap-4'>
        <span
          className={`w-5 h-5 border rounded-full inline-flex items-center justify-center mr-2 ${
            isSelected && 'border-primary bg-primary'
          }`}
        >
          {isSelected && (
            <span className='w-3 h-3 bg-white rounded-full block' />
          )}
        </span>
        <div>
          <div className='font-semibold text-primary'>{packageType.title}</div>
          {packageType.description && (
            <div className='text-gray-600 text-sm'>{packageType.description}</div>
          )}
        </div>
      </div>
    </button>
  );
};