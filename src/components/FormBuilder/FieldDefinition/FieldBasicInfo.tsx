import React from 'react';
import { FormField } from '../../../types/form';

interface FieldBasicInfoProps {
  field: FormField;
  onChange: (field: FormField) => void;
}

export function FieldBasicInfo({ field, onChange }: FieldBasicInfoProps) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">Field ID</label>
        <input
          type="text"
          value={field.id}
          onChange={e => onChange({ ...field, id: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Label</label>
        <input
          type="text"
          value={field.label}
          onChange={e => onChange({ ...field, label: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Default Value</label>
        <input
          type={field.type === 'number' ? 'number' : 'text'}
          value={field.defaultValue}
          onChange={e => onChange({ ...field, defaultValue: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          checked={field.visible}
          onChange={e => onChange({ ...field, visible: e.target.checked })}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-900">Visible by default</label>
      </div>
    </>
  );
}