import React from 'react';
import { FormField as FormFieldType } from '../../../types/form';

interface FormFieldProps {
  field: FormFieldType;
  value: any;
  visible: boolean;
  disabled: boolean;
  options?: Array<{ label: string; value: string }>;
  onChange: (fieldId: string, value: any) => void;
}

export function FormField({
  field,
  value,
  visible,
  disabled,
  options,
  onChange,
}: FormFieldProps) {
  if (!visible) return null;

  const commonProps = {
    id: field.id,
    disabled,
    className:
      'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500',
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      onChange(field.id, e.target.value),
  };

  const renderField = () => {
    switch (field.type) {
      case 'text':
      case 'date':
        return <input type={field.type} {...commonProps} />;
      
      case 'number':
        return (
          <input
            type="number"
            {...commonProps}
            value={value ?? field.defaultValue ?? 0}
          />
        );
      
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">Select an option</option>
            {options?.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        );
      
      case 'checkbox':
        return (
          <input
            type="checkbox"
            id={field.id}
            checked={value ?? field.defaultValue ?? false}
            onChange={(e) => onChange(field.id, e.target.checked)}
            disabled={disabled}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-1">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
        {field.label}
      </label>
      {renderField()}
    </div>
  );
}