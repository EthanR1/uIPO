import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline' | 'impact-high' | 'impact-medium' | 'impact-low';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  size = 'sm',
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-md transition-colors duration-200';
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm'
  };

  const variantClasses = {
    default: 'bg-black text-white',
    secondary: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-300 text-gray-700 bg-white',
    'impact-high': 'bg-red-50 text-red-800 border border-red-200',
    'impact-medium': 'bg-yellow-50 text-yellow-800 border border-yellow-200',
    'impact-low': 'bg-green-50 text-green-800 border border-green-200',
  };

  return (
    <span 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;