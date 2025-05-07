// src/components/MaintenanceService/CheckboxGroup.jsx
import React from 'react';
import FormField from './formField';
import RenderFields from './renderFields';

const CheckboxGroup = ({ field, formData, onChange, onNestedChange }) => {
  const { name, label,full, description, options, subFields } = field;



  const handleCheckboxChange = (optionValue, isChecked) => {
   
    onChange(name, {
      ...formData[name],
      [optionValue]: isChecked,
    });
  };

  return (
    <div className={`mb-4 ${full ? "col-span-2":""} `}>
      {label && <label className="block mb-1  font-medium text-[#131e47]">{label}</label>}
      {description && <p className="text-xs text-gray-500 mb-2">{description}</p>}
      
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="mb-2">
             <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name={option.name}
                checked={formData[name][option.name] || false}
                onChange={((e)=> onNestedChange(name, option.name, e.target.checked))}
                className="relative mr-2 appearance-none size-4 border-2 border-[#131e47] rounded-full checked:bg-white focus:outline-none focus:ring-0 transition-colors duration-200"
                style={{
                  backgroundImage: formData[name][option.name] ? 'radial-gradient(circle, #131e47 0%, #131e47 40%, white 40%, white 100%)' : 'none'
                }}
              />
              <span className="font-medium text-sm">{option.label}</span>
            </label>
            
            {/* Render sub-fields if this option is selected */}
            {formData[name][option.name] &&  option.subFields && (
              <div className=" grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4 mt-2">
                {option.subFields.map((subField, subIndex) => (
                  // <FormField
                  //   key={subIndex}
                    
                  //   field={{
                  //     ...subField,
                      
                  //   }}
                  //   value={formData[subField.name] || ''}
                  //   onChange={(value) => onChange(subField.name, value)}
                  // />
                  <RenderFields
                  key={subIndex}
                  index={subIndex}
                  step={field}
                  formData={formData}
                  field={subField}
                  onChange={onChange}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;

