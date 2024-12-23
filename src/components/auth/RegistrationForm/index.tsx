import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { validateRegistration } from '../../../utils/validation';
import { FormField } from './FormField';
import { RoleSelect } from './RoleSelect';
import { SkillsInput } from './SkillsInput';
import { SubmitButton } from '../common/SubmitButton';
import { AuthLink } from '../common/AuthLink';
import { initialValues } from './constants';

interface RegistrationFormProps {
  onSubmit: (data: any) => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validateRegistration,
    onSubmit
  );

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <FormField
          id="name"
          type="text"
          label="Full Name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
        />

        <FormField
          id="email"
          type="email"
          label="Email address"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
        />

        <FormField
          id="password"
          type="password"
          label="Password"
          value={values.password}
          error={errors.password}
          onChange={handleChange}
        />

        <FormField
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          value={values.confirmPassword}
          error={errors.confirmPassword}
          onChange={handleChange}
        />

        <RoleSelect value={values.role} onChange={handleChange} />

        {values.role === 'annotator' && (
          <SkillsInput
            value={values.skills}
            error={errors.skills}
            onChange={handleChange}
          />
        )}
      </div>

      <SubmitButton label="Register" />
      <AuthLink
        text="Already have an account?"
        linkText="Sign in"
        to="/login"
      />
    </form>
  );
}