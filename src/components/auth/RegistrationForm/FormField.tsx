import React from 'react';
import { FormFieldProps } from '../../../types/auth';

export function FormField({
  id,
  type,
  label,
  value,
  error,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        placeholder={label}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}