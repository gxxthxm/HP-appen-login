'use client';

import React, { useState } from 'react';
import { semanticColors, semanticTypography, createTextStyleObject } from '@/lib/design-system';
import Navigation from '@/components/ui/Navigation';

// Google Icon Component
const GoogleIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path d="M10.5 8.59L20.58 8.59C20.73 9.36 20.8 10.14 20.8 10.92C20.8 16.57 16.9 21 10.5 21C4.7 21 0 16.3 0 10.5S4.7 0 10.5 0C13.14 0 15.47 0.98 17.25 2.61L14.7 5.16C13.65 4.18 12.18 3.59 10.5 3.59C6.86 3.59 3.91 6.54 3.91 10.18S6.86 16.77 10.5 16.77C14.14 16.77 16.36 14.41 16.68 11.41L10.5 11.41V8.59Z" fill="#3977F2"/>
    <path d="M1.12 12.49L17.45 12.49C17.24 15.65 14.91 18.28 11.75 19.21L1.12 12.49Z" fill="#6BCF63"/>
    <path d="M0 5.78L4.62 5.78C2.8 7.56 1.82 10.01 1.82 12.67L0 5.78Z" fill="#FFA000"/>
    <path d="M1.12 0L17.53 0C15.96 2.8 13.3 4.9 10.15 5.78L1.12 0Z" fill="#FF1744"/>
  </svg>
);

// Eye Icon Component
const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M5.25 9L12.75 9" stroke="#FF1744" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="9" r="8.25" stroke="#FF1744" strokeWidth="1.5"/>
  </svg>
);

// Arrow Icon Component
const ArrowIcon = ({ direction = 'right' }: { direction?: 'left' | 'right' }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path 
      d={direction === 'right' ? "M6 6L18.5 12L6 18" : "M18 6L5.5 12L18 18"} 
      stroke="white" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const colors = semanticColors.dark; // Using dark theme for this design
  
  const h1Style = createTextStyleObject(semanticTypography.laptop.h1);
  const h2Style = createTextStyleObject(semanticTypography.laptop.h2);
  const bodyStyle = createTextStyleObject(semanticTypography.laptop.body2);
  const captionStyle = createTextStyleObject(semanticTypography.laptop.caption);
  const buttonStyle = createTextStyleObject(semanticTypography.laptop.button);

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#0f172a' }}
    >
      <Navigation />
      {/* Background Decorative Elements */}
      <div 
        className="absolute top-[300px] right-[830px] w-[780px] h-[780px] rounded-full opacity-20"
        style={{ 
          backgroundColor: '#3977F2',
          filter: 'blur(220px)'
        }}
      />
      <div 
        className="absolute top-[-134px] left-[-181px] w-[822px] h-[782px] rounded-full opacity-20"
        style={{ 
          backgroundColor: '#3977F2',
          filter: 'blur(230px)'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[559px] mx-auto px-4">
        
        {/* Main Card */}
        <div 
          className="relative rounded-[32px] p-[44px] backdrop-blur-sm border"
          style={{
            background: 'linear-gradient(135deg, rgba(251, 251, 251, 0.2) 0%, rgba(252, 252, 252, 0.2) 100%)',
            borderColor: '#8f8fae',
          }}
        >
          
          {/* HP Logo */}
          <div className="flex justify-center mb-6">
            <svg width="133" height="48" viewBox="0 0 133 48" fill="none">
              <rect width="133" height="48" fill="white" rx="8"/>
              <text x="66.5" y="30" textAnchor="middle" fill="#0f172a" fontSize="20" fontWeight="bold" fontFamily="Arial">HP</text>
            </svg>
          </div>

          {/* Header Text */}
          <div className="text-center mb-8">
            <h1 
              className="mb-3"
              style={{ 
                ...h1Style, 
                fontSize: '28px',
                color: '#fcfcfc',
                textAlign: 'center',
                margin: '0 0 12px 0'
              }}
            >
              Utforska mer – registrera dig nu
            </h1>
            <p 
              style={{ 
                ...bodyStyle,
                color: '#fcfcfc',
                textAlign: 'center',
                margin: 0
              }}
            >
              Lås upp exklusiva funktioner
            </p>
          </div>

          {/* Form Container */}
          <div className="space-y-4">
            
            {/* Google Sign Up Button */}
            <button 
              className="w-full flex items-center justify-center gap-6 rounded-[35px] border transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: '#2b333d',
                borderColor: '#1c3857',
                padding: '12px 24px',
                height: '45px',
                boxShadow: '0 0 24px rgba(0,0,0,0.12)'
              }}
            >
              <GoogleIcon />
              <span style={{ ...buttonStyle, color: '#fcfcfc' }}>
                Fortsätt med Google
              </span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-5 py-4">
              <div className="flex-1 h-[1px]" style={{ backgroundColor: '#fcfcfc' }} />
              <span style={{ ...captionStyle, color: '#fcfcfc' }}>
                Eller registrera dig med
              </span>
              <div className="flex-1 h-[1px]" style={{ backgroundColor: '#fcfcfc' }} />
            </div>

            {/* Email Input */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-postadress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-[35px] border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    backgroundColor: '#313d50',
                    borderColor: '#1c3857',
                    color: '#a7a7a7',
                    padding: '12px 19px',
                    height: '46px',
                    fontSize: '16px'
                  }}
                />
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <EyeIcon />
                </button>
              </div>

              {/* Register Button */}
              <button 
                className="w-full flex items-center justify-center gap-4 rounded-[30px] transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{
                  backgroundColor: '#3977F2',
                  padding: '12px 24px',
                  height: '48px'
                }}
              >
                <ArrowIcon direction="left" />
                <span style={{ ...buttonStyle, color: '#fcfcfc' }}>
                  Registrera dig
                </span>
                <ArrowIcon direction="right" />
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center pt-4">
              <button 
                className="hover:underline transition-all"
                style={{ 
                  ...captionStyle, 
                  color: '#fcfcfc',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Har du redan ett konto? Logga in
              </button>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="text-center mt-8 px-4">
          <p 
            style={{ 
              ...captionStyle,
              fontSize: '12px',
              color: '#f5f5f5',
              lineHeight: '1.5'
            }}
          >
            Genom att registrera dig godkänner du användaravtalet för HP-appen, 
            <span className="underline cursor-pointer hover:text-blue-400"> sekretesspolicyn</span> och 
            <span className="underline cursor-pointer hover:text-blue-400"> cookiepolicyn</span>.
          </p>
        </div>
      </div>
    </div>
  );
} 