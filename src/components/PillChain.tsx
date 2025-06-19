
import React from 'react';

interface PillChainProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const PillChain: React.FC<PillChainProps> = ({ className = '', size = 'medium' }) => {
  const pillSizes = {
    small: 'w-6 h-3',
    medium: 'w-8 h-4',
    large: 'w-10 h-5'
  };

  const chainSize = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-40 h-40'
  };

  const pills = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className={`relative ${chainSize[size]} ${className}`}>
      <div className="absolute inset-0 animate-spin-slow">
        {pills.map((pill, index) => {
          const angle = (index * 360) / pills.length;
          const radius = size === 'small' ? 40 : size === 'medium' ? 56 : 72;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <div
              key={pill}
              className={`absolute ${pillSizes[size]} rounded-full border-2 border-amber-800 transform -translate-x-1/2 -translate-y-1/2 ${
                pill % 2 === 0 ? 'bg-pump-red' : 'bg-white'
              }`}
              style={{
                left: `50%`,
                top: `50%`,
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
            />
          );
        })}
      </div>
      
      {/* Center pill/lock */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-16 bg-pump-green rounded-t-full rounded-b-lg border-4 border-emerald-700 relative">
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-6 w-full h-2 bg-emerald-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default PillChain;
