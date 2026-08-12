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
  const groupTextColor = isDark ? '#F3F4F6' : '#1A1A1A';
  const taglineColor = isDark ? '#D1D5DB' : '#4A4A4A';
  const dividerColor = isDark ? 'rgba(197, 160, 89, 0.35)' : 'rgba(197, 160, 89, 0.45)';

  // Size configurations
  const scaleMap = {
    sm: { icon: 'w-7 h-7', title: 'text-xs sm:text-sm', tagline: 'text-[7.5px]' },
    md: { icon: 'w-9 sm:w-10 h-9 sm:h-10', title: 'text-base sm:text-[17px]', tagline: 'text-[8.5px] sm:text-[9.5px]' },
    lg: { icon: 'w-12 h-12', title: 'text-xl sm:text-2xl', tagline: 'text-[10px] sm:text-[11px]' }
  };

  const currentSize = scaleMap[size];

  return (
    <div className={`group/logo flex items-center gap-3 sm:gap-3.5 transition-all duration-300 ${className}`}>
      {/* Splendid Emblem Box with subtle premium ring/glow */}
      <div className={`relative shrink-0 ${currentSize.icon} flex items-center justify-center p-0.5 rounded transition-transform duration-500 group-hover/logo:scale-105`}>
        {/* Subtle Ambient Backlight Glow on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#863B6F]/20 via-[#C5A059]/20 to-[#863B6F]/20 rounded-lg blur-sm opacity-60 group-hover/logo:opacity-100 transition-opacity duration-500" />
        
        <svg
          viewBox="0 0 100 100"
          className="relative w-full h-full drop-shadow-[0_2px_8px_rgba(134,59,111,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blue top-right accent bracket with crisp gradient fill look */}
          <path
            d="M 68 8 L 92 8 L 92 32"
            stroke="#4A86C5"
            strokeWidth="8"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />

          {/* Main Purple/Plum Box */}
          <rect x="10" y="16" width="74" height="74" fill="#863B6F" rx="2" />

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
        <div className="flex items-center gap-1.5 font-sans font-extrabold tracking-[0.16em]">
          <span
            className="text-[#863B6F] transition-colors duration-300 group-hover/logo:text-[#A04585]"
            style={{
              color: '#863B6F',
              textShadow: '0 0 12px rgba(134,59,111,0.15)'
            }}
          >
            SPLENDID
          </span>
          <span
            className="font-bold tracking-[0.18em] transition-colors duration-300"
            style={{ color: groupTextColor }}
          >
            GROUP
          </span>
        </div>

        {showTagline && (
          <div className="mt-1 relative">
            <div
              className="h-[1px] w-full mb-0.5 transition-all duration-500 group-hover/logo:bg-[#C5A059]"
              style={{ backgroundColor: dividerColor }}
            />
            <span
              className={`block font-sans font-semibold tracking-[0.12em] lowercase ${currentSize.tagline} opacity-90`}
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

