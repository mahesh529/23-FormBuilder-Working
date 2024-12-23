import React from 'react';
import { FormFieldProps } from '../../../types/auth';

export function SkillsInput({ value, error, onChange }: Partial<FormFieldProps>) {
  return (
    <div>
      <label htmlFor="skills" className="sr-only">
        Skills (comma-separated)
      </label>
      <input
        id="skills"
        name="skills"
        type="text"
        value={value}
        onChange={onChange}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        placeholder="Skills (comma-separated)"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}