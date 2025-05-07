// src/components/MaintenanceService/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex-1 border rounded-xl py-12 transition hover:shadow-md flex flex-col items-center"
    >
      <span className="mb-2">{service.icon}</span>
      <span className="text-lg text-[#131e47] font-semibold">{service.title}</span>
      {service.description && (
        <span className="text-sm text-gray-500 mt-1">{service.description}</span>
      )}
    </button>
  );
};

export default ServiceCard;