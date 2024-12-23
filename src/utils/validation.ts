export function validateRegistration(values: Record<string, any>) {
  const errors: Record<string, string> = {};

  // Name validation
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters long';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
    errors.password =
      'Password must contain at least one uppercase letter, one lowercase letter, and one number';
  }

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

export function validateLogin(values: Record<string, any>) {
  const errors: Record<string, string> = {};

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
}