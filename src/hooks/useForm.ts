import { useState, useCallback } from 'react';

export function useForm(
  initialValues: Record<string, any>,
  validate: (values: Record<string, any>) => Record<string, string>,
  onSubmit: (values: Record<string, any>) => void
) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length === 0) {
        onSubmit(values);
      } else {
        setErrors(validationErrors);
      }
    },
    [values, validate, onSubmit]
  );

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}