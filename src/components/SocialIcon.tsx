
import React from 'react';

interface SocialIconProps {
  type: 'x' | 'telegram' | 'dextools' | 'chart';
  className?: string;
  onClick?: () => void;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type, className = '', onClick }) => {
  const getIcon = () => {
    switch (type) {
      case 'x':
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'telegram':
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-.38.24-1.64 1.08-.16.1-.3.15-.44.15-.14 0-.27-.04-.38-.1-.72-.37-1.29-.66-1.29-.66s-.47-.3.33-.62c.8-.32 1.78-.7 1.78-.7s.67-.23 1.01-.04c.34.19.64.42.64.42s1.49.87 2.33 1.36c.84.49 1.68.99 1.68.99s.15.1-.1.29z"/>
          </svg>
        );
      case 'dextools':
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM8 9.5l4-2 4 2v3l-4 2-4-2v-3z"/>
          </svg>
        );
      case 'chart':
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M3 3v18h18v-2H5V3H3zm4 12h2v4H7v-4zm4-6h2v10h-2V9zm4-2h2v12h-2V7z"/>
          </svg>
        );
    }
  };

  return (
    <div 
      className={`w-10 h-10 bg-pump-red text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all duration-200 hover:scale-110 ${className}`}
      onClick={onClick}
    >
      {getIcon()}
    </div>
  );
};

export default SocialIcon;
