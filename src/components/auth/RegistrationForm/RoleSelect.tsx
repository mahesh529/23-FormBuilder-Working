import React from 'react';
import { SelectFieldProps } from '../../../types/auth';

export function RoleSelect({ value, onChange }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor="role" className="sr-only">
        Role
      </label>
      <select
        id="role"
        name="role"
        value={value}
        onChange={onChange}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
      >
        <option value="annotator">Annotator</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}