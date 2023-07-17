import React from 'react';

export const CheckboxOption = ({ name, value, checked, onChange, label }) => (
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="form-checkbox md:h-5 md:w-5 text-orange-600 checked:bg-orange-350"
    />
    <span className="ml-2 text-gray-700 dark:text-gray-200">{label}</span>
  </label>
);