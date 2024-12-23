import React from 'react';
import { ApiConfig } from '../../../types/form';

interface ApiConfigFormProps {
  config?: ApiConfig;
  onChange: (config: Partial<ApiConfig>) => void;
}

export function ApiConfigForm({ config, onChange }: ApiConfigFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">API URL</label>
        <input
          type="url"
          value={config?.url || ''}
          onChange={e => onChange({ url: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Response Path</label>
        <input
          type="text"
          placeholder="e.g., data.items"
          value={config?.responseMapping || ''}
          onChange={e => onChange({ responseMapping: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Label Key</label>
        <input
          type="text"
          placeholder="e.g., name"
          value={config?.labelKey || ''}
          onChange={e => onChange({ labelKey: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Value Key</label>
        <input
          type="text"
          placeholder="e.g., id"
          value={config?.valueKey || ''}
          onChange={e => onChange({ valueKey: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}