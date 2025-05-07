import React from 'react';

function RadioOption({ id, name, value, checked, onChange, label, description }) {
  return (
    <div className="border border-[#d9d9d9] rounded-md p-4 mb-4">
      <div className="flex items-start space-x-2">
        <div className="mt-1">
          <input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={() => onChange(name, value)}
            className="h-4 w-4 text-[#131e47] border-[#d9d9d9] focus:ring-[#131e47]"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor={id} className="font-medium text-[#131e47]">
            {label}
          </label>
          {description && (
            <p className="text-xs text-[#8d8d8d]">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RadioOption;