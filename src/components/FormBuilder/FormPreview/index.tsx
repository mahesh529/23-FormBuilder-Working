import React, { useState, useEffect } from 'react';
import { FormConfig } from '../../../types/form';
import { useFormPreview } from './useFormPreview';
import { FormField } from './FormField';

interface FormPreviewProps {
  config: FormConfig;
  onChange?: (fieldId: string, value: any) => void;
  initialValues?: Record<string, any>;
}

export function FormPreview({ config, onChange, initialValues = {} }: FormPreviewProps) {
  const {
    formState,
    visibleFields,
    disabledFields,
    fieldOptions,
    handleFieldChange,
  } = useFormPreview(config, onChange, initialValues);

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {config.fields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          value={formState[field.id] ?? field.defaultValue ?? ''}
          visible={visibleFields.has(field.id)}
          disabled={disabledFields.has(field.id)}
          options={fieldOptions[field.id]}
          onChange={handleFieldChange}
        />
      ))}
    </form>
  );
}