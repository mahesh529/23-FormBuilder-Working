import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { RegistrationForm } from '../../components/auth/RegistrationForm';
import { UserCircle } from 'lucide-react';

export function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = React.useState('');

  const handleRegister = async (formData: any) => {
    try {
      await register(formData);
      const user = useAuth.getState().user;
      navigate(user.role === 'admin' ? '/admin' : '/annotator');
    } catch (error: any) {
      setError(error.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
            <UserCircle className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        <RegistrationForm onSubmit={handleRegister} />
      </div>
    </div>
  );
}