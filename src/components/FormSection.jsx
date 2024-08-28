import React from 'react';

const FormSection = ({ label, value, onChange, name, textarea }) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-gray-800 mb-2">{label}</label>
      {textarea ? (
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
          value={value}
          onChange={onChange}
          name={name}
          rows="4"
        />
      ) : (
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
    </div>
  );
};

export default FormSection;