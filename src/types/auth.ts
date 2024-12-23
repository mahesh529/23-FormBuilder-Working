import { ChangeEvent } from 'react';

export interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectFieldProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface AuthFormValues {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role?: string;
  skills?: string;
}

export interface ValidationErrors {
  [key: string]: string;
}