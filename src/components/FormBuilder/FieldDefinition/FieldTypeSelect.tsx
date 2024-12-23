import React from 'react';
import { FormField, FieldType } from '../../../types/form';

interface FieldTypeSelectProps {
  field: FormField;
  onChange: (field: FormField) => void;
}

export function FieldTypeSelect({ field, onChange }: FieldTypeSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Type</label>
      <select
        value={field.type}
        onChange={e => onChange({ ...field, type: e.target.value as FieldType })}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="select">Select</option>
        <option value="checkbox">Checkbox</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
}