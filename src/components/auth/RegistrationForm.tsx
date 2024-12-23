import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { validateRegistration } from '../../utils/validation';

interface RegistrationFormProps {
  onSubmit: (data: any) => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'annotator',
      skills: '',
    },
    validateRegistration,
    onSubmit
  );

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="name" className="sr-only">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={values.password}
            onChange={handleChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={values.confirmPassword}
            onChange={handleChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <div>
          <label htmlFor="role" className="sr-only">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={values.role}
            onChange={handleChange}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          >
            <option value="annotator">Annotator</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {values.role === 'annotator' && (
          <div>
            <label htmlFor="skills" className="sr-only">
              Skills (comma-separated)
            </label>
            <input
              id="skills"
              name="skills"
              type="text"
              value={values.skills}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Skills (comma-separated)"
            />
            {errors.skills && (
              <p className="text-red-500 text-xs mt-1">{errors.skills}</p>
            )}
          </div>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Register
        </button>
      </div>

      <div className="text-sm text-center">
        <Link
          to="/login"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Already have an account? Sign in
        </Link>
      </div>
    </form>
  );
}