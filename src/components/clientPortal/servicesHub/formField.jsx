// components/formField.js
import React from 'react';

const FormField = ({
  type = 'text',
  name,
  label,
  value,
  onChange,
  placeholder = '',
  options = [],
  checked = false,
  radioLabel = '',
  rows = 3,
  ...props
}) => {
  const renderField = () => {
    switch (type) {
      case 'select':
        return (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full border rounded-lg px-3 py-2 appearance-none"
            {...props}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
      case 'radio':
        return (
            <label className="inline-flex items-center">
            <input
              type={type}
              name={name}
              checked={checked}
              onChange={onChange}
              className="relative mr-2 appearance-none size-4 border-2 border-[#131e47] rounded-full checked:bg-white focus:outline-none focus:ring-0 transition-colors duration-200"
              style={{
                backgroundImage: checked ? 'radial-gradient(circle, #131e47 0%, #131e47 40%, white 40%, white 100%)' : 'none'
              }}
              {...props}
            />
            <span className="block capitalize  text-primary font-medium">{radioLabel || label}</span>
          </label>
        );
      case 'textarea':
        return (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            className="w-full border rounded-lg px-3 py-2"
            placeholder={placeholder}
            rows={rows}
            {...props}
          />
        );
      default:
        return (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full border rounded-lg px-3 py-2"
            placeholder={placeholder}
            {...props}
          />
        );
    }
  };

  return (
    <div className="mb-4">
      {type !== 'checkbox' && type !== 'radio' && (
        <label className="block mb-1  text-primary font-medium">
          {label}
        </label>
      )}
      {renderField()}
    </div>
  );
};

export default FormField;