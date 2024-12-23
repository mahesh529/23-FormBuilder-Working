import React from 'react';

interface SubmitButtonProps {
  label: string;
}

export function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {label}
    </button>
  );
}