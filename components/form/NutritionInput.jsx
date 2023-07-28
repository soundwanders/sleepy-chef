import React from 'react';

export const NutritionInput = ({ label, id, name, placeholder, value, onChange, errors }) => (
  <div>
    <label className="block text-gray-700 dark:text-gray-200 text-base font-bold mb-3" htmlFor={id}>
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 
      leading-tight focus:outline-none focus:shadow-outline focus:placeholder-transparent"
      id={id}
      name={name}
      placeholder={placeholder}
      aria-label="Nutrition information"
      value={value}
      onChange={onChange}
    />
    {errors && <small className="error text-red-300">{errors.nutrition}</small>}
  </div>
);
