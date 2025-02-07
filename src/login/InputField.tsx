import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const InputField = ({ label, type, placeholder, required }: InputFieldProps) => {
  return (
    <div className="mb-4 group">
      <label className="block text-sm font-medium text-gray-300 mb-1 tracking-wide
                      transition-all duration-300 group-hover:text-[#1cd41c] group-hover:-translate-y-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 bg-[#2c2c2c] border-2 border-[#1cd41c] rounded-md text-white
                 placeholder-[#1cd41c] tracking-wide transition-all duration-300
                 hover:transform hover:-translate-y-1
                 hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)]
                 focus:outline-none focus:ring-2 focus:ring-[#1cd41c] focus:ring-opacity-50"
      />
    </div>
  );
};

export default InputField;
