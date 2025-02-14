import React from 'react'

interface InputFieldProps {
  label: string
  type: string
  placeholder: string
  required?: boolean
}

const InputField = ({
  label,
  type,
  placeholder,
  required
}: InputFieldProps) => {
  return (
    <div className="group mb-4">
      <label className="mb-1 block text-sm font-medium tracking-wide text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#1cd41c]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border-2 border-[#1cd41c] bg-[#2c2c2c] px-3 py-2 tracking-wide text-white placeholder-[#1cd41c] transition-all duration-300 hover:-translate-y-1 hover:transform hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8)] focus:outline-none focus:ring-2 focus:ring-[#1cd41c] focus:ring-opacity-50"
      />
    </div>
  )
}

export default InputField
