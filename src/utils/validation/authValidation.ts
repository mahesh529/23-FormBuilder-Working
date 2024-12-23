import { AuthFormValues, ValidationErrors } from '../../types/auth';
import { 
  validateEmail, 
  validatePassword, 
  validateRequiredField 
} from './commonValidation';

export function validateRegistration(values: AuthFormValues): ValidationErrors {
  const errors: ValidationErrors = {};

  // Name validation
  const nameError = validateRequiredField(values.name, 'Name', 2);
  if (nameError) errors.name = nameError;

  // Email validation
  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  // Password validation
  const passwordError = validatePassword(values.password);
  if (passwordError) errors.password = passwordError;

  // Confirm password validation
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  // Skills validation (only for annotators)
  if (values.role === 'annotator' && !values.skills) {
    errors.skills = 'Please enter at least one skill';
  }

  return errors;
}

export function validateLogin(values: AuthFormValues): ValidationErrors {
  const errors: ValidationErrors = {};

  const emailError = validateEmail(values.email);
  if (emailError) errors.email = emailError;

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
}