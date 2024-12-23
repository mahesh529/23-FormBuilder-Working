import React, { useState } from 'react';
import { X } from 'lucide-react';
import { FormField } from '../../../types/form';
import { FieldBasicInfo } from './FieldBasicInfo';
import { FieldTypeSelect } from './FieldTypeSelect';
import { ApiConfigForm } from './ApiConfigForm';

interface FieldDefinitionProps {
  onAdd: (field: FormField) => void;
}

export function FieldDefinition({ onAdd }: FieldDefinitionProps) {
  const [field, setField] = useState<FormField>({
    id: '',
    label: '',
    type: 'text',
    defaultValue: '',
    visible: true,
    options: [],
  });
  const [showApiConfig, setShowApiConfig] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(field);
    setField({
      id: '',
      label: '',
      type: 'text',
      defaultValue: '',
      visible: true,
      options: [],
    });
    setShowApiConfig(false);
    document.getElementById('field-definition')?.classList.add('hidden');
  };

  return (
    <div
      id="field-definition"
      className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add Field</h2>
          <button
            onClick={() => document.getElementById('field-definition')?.classList.add('hidden')}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FieldBasicInfo field={field} onChange={setField} />
          <FieldTypeSelect field={field} onChange={setField} />

          {field.type === 'select' && (
            <div className="space-y-4">
              {showApiConfig ? (
                <ApiConfigForm
                  config={field.apiConfig}
                  onChange={(config) => setField(prev => ({
                    ...prev,
                    apiConfig: { ...prev.apiConfig, ...config }
                  }))}
                />
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Options (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={field.options?.join(',')}
                    onChange={e => setField(prev => ({
                      ...prev,
                      options: e.target.value.split(',').map(s => s.trim()),
                    }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={showApiConfig}
                  onChange={e => setShowApiConfig(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  Populate options from API
                </label>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Field
          </button>
        </form>
      </div>
    </div>
  );
}