// src/components/InputField.jsx
import React from "react";

const InputField = ({ type, placeholder, value, onChange, name }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default InputField;
