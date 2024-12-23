import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLinkProps {
  text: string;
  linkText: string;
  to: string;
}

export function AuthLink({ text, linkText, to }: AuthLinkProps) {
  return (
    <div className="text-sm text-center">
      <span className="text-gray-600">{text}</span>{' '}
      <Link to={to} className="font-medium text-blue-600 hover:text-blue-500">
        {linkText}
      </Link>
    </div>
  );
}