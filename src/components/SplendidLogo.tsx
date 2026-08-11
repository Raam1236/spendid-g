import React from 'react';

interface SplendidLogoProps {
  variant?: 'light' | 'dark'; // 'light' for light backgrounds (Navbar), 'dark' for dark backgrounds (Footer)
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const SplendidLogo: React.FC<SplendidLogoProps> = ({
  variant = 'light',
  size = 'md',
  showTagline = true,
  className = ''
}) => {
  const isDark = variant === 'dark';
  const groupTextColor = isDark ? '#FFFFFF' : '#222222';
  const taglineColor = isDark ? '#E5E7EB' : '#111827';
  const dividerColor = isDark ? 'rgba(255,255,255,0.2)' : '#CCCCCC';

  // Size configurations
  const scaleMap = {
    sm: { icon: 'w-7 h-7', title: 'text-xs sm:text-sm', tagline: 'text-[7px]' },
    md: { icon: 'w-9 h-9', title: 'text-base sm:text-lg', tagline: 'text-[8px] sm:text-[9px]' },
    lg: { icon: 'w-12 h-12', title: 'text-xl sm:text-2xl', tagline: 'text-[10px] sm:text-[11px]' }
  };

  const currentSize = scaleMap[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Splendid Emblem Box */}
      <div className={`relative shrink-0 ${currentSize.icon} flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blue top-right accent bracket */}
          <path
            d="M 68 8 L 92 8 L 92 32"
            stroke="#4A86C5"
            strokeWidth="8"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* Main Purple/Plum Box */}
          <rect x="10" y="16" width="74" height="74" fill="#863B6F" rx="1" />

          {/* Inner 4 White Squares */}
          {/* 1. Large square - bottom left */}
          <rect x="23" y="46" width="30" height="30" stroke="#FFFFFF" strokeWidth="4" fill="none" />
          
          {/* 2. Top middle square */}
          <rect x="42" y="27" width="16" height="16" stroke="#FFFFFF" strokeWidth="3.5" fill="none" />

          {/* 3. Top right square */}
          <rect x="62" y="30" width="12" height="12" stroke="#FFFFFF" strokeWidth="3" fill="none" />

          {/* 4. Middle right square */}
          <rect x="60" y="47" width="16" height="16" stroke="#FFFFFF" strokeWidth="3.5" fill="none" />
        </svg>
      </div>

      {/* Brand Text Block */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1 font-sans font-extrabold tracking-[0.14em]">
          <span className="text-[#863B6F] font-black">
            SPLENDID
          </span>
          <span
            className="tracking-[0.16em] font-bold"
            style={{ color: isDark ? '#FFFFFF' : '#1A1A1A' }}
          >
            GROUP
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FFD700] to-[#C5A059] inline-block ml-0.5 animate-pulse" />
        </div>

        {showTagline && (
          <div className="mt-0.5">
            <div
              className="h-[1px] w-full mb-0.5"
              style={{
                background: isDark
                  ? 'linear-gradient(90deg, rgba(197,160,89,0.6) 0%, rgba(255,215,0,0.8) 50%, rgba(197,160,89,0.3) 100%)'
                  : 'linear-gradient(90deg, rgba(134,59,111,0.5) 0%, rgba(197,160,89,0.7) 50%, rgba(134,59,111,0.2) 100%)'
              }}
            />
            <span
              className={`block font-sans font-semibold tracking-[0.1em] lowercase ${currentSize.tagline}`}
              style={{ color: taglineColor }}
            >
              thinks outside the box
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
