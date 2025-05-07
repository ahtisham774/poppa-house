
export const MaintenanceServiceCard = ({ service, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex-1 border rounded-xl py-12 transition hover:shadow-md flex flex-col items-center'
    >
      <span className='mb-2'>{service.icon}</span>
      <span className='text-lg text-primary font-semibold'>{service.title}</span>
      {service.description && (
        <span className='text-sm text-gray-500 mt-1'>{service.description}</span>
      )}
    </button>
  );
};