import { useState, useEffect } from 'react';
import { FormConfig } from '../../../types/form';
import { fetchData, extractDataFromResponse } from '../../../utils/api';

export function useFormPreview(
  config: FormConfig,
  onChange?: (fieldId: string, value: any) => void,
  initialValues: Record<string, any> = {}
) {
  const [formState, setFormState] = useState<Record<string, any>>(initialValues);
  const [visibleFields, setVisibleFields] = useState<Set<string>>(new Set());
  const [disabledFields, setDisabledFields] = useState<Set<string>>(new Set());
  const [fieldOptions, setFieldOptions] = useState<Record<string, Array<{ label: string; value: string }>>>({});

  useEffect(() => {
    // Initialize visible fields
    const initialVisibleFields = new Set<string>();
    config.fields.forEach((field) => {
      if (field.visible) {
        initialVisibleFields.add(field.id);
      }

      if (field.type === 'select' && field.apiConfig?.url) {
        loadFieldOptions(field.id, field.apiConfig);
      }
    });
    setVisibleFields(initialVisibleFields);
  }, [config.fields]);

  const loadFieldOptions = async (
    fieldId: string,
    apiConfig: NonNullable<(typeof config.fields)[0]['apiConfig']>,
    params?: Record<string, string>
  ) => {
    const data = await fetchData(apiConfig.url, apiConfig.method, params);
    const options = extractDataFromResponse(
      data,
      apiConfig.responseMapping,
      apiConfig.labelKey,
      apiConfig.valueKey
    );
    setFieldOptions((prev) => ({ ...prev, [fieldId]: options }));
  };

  const handleFieldChange = async (fieldId: string, value: any) => {
    const newFormState = { ...formState, [fieldId]: value };
    setFormState(newFormState);
    onChange?.(fieldId, value);

    // Process rules
    for (const rule of config.rules) {
      if (rule.sourceFieldId === fieldId && rule.event === 'change') {
        if (rule.action === 'populateOptions' && rule.apiConfig) {
          const params = rule.apiConfig.paramMapping
            ? Object.fromEntries(
                Object.entries(rule.apiConfig.paramMapping).map(
                  ([key, param]) => [param, formState[key] || value]
                )
              )
            : undefined;

          await loadFieldOptions(rule.targetFieldId, rule.apiConfig, params);
          continue;
        }

        switch (rule.action) {
          case 'show':
            setVisibleFields((prev) => new Set([...prev, rule.targetFieldId]));
            break;
          case 'hide':
            setVisibleFields((prev) => {
              const next = new Set(prev);
              next.delete(rule.targetFieldId);
              return next;
            });
            break;
          case 'enable':
            setDisabledFields((prev) => {
              const next = new Set(prev);
              next.delete(rule.targetFieldId);
              return next;
            });
            break;
          case 'disable':
            setDisabledFields((prev) => new Set([...prev, rule.targetFieldId]));
            break;
          case 'setValue':
            const newState = {
              ...newFormState,
              [rule.targetFieldId]: rule.impact,
            };
            setFormState(newState);
            onChange?.(rule.targetFieldId, rule.impact);
            break;
        }
      }
    }
  };

  return {
    formState,
    visibleFields,
    disabledFields,
    fieldOptions,
    handleFieldChange,
  };
}