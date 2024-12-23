export function validateEmail(email: string): string | undefined {
  if (!email) {
    return 'Email is required';
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Email is invalid';
  }
}

export function validatePassword(password: string): string | undefined {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  }
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
  }
}

export function validateRequiredField(
  value: string | undefined,
  fieldName: string,
  minLength = 1
): string | undefined {
  if (!value) {
    return `${fieldName} is required`;
  }
  if (value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters long`;
  }
}