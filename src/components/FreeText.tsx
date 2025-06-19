
import React from 'react';

interface FreeTextProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const FreeText: React.FC<FreeTextProps> = ({ className = '', size = 'medium' }) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  return (
    <div className={`${sizeClasses[size]} font-black-ops text-pump-red animate-float ${className}`}>
      $FREE
    </div>
  );
};

export default FreeText;
