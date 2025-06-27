"use client";

import React, { useState } from 'react';

// Google Icon Component
const GoogleIcon = () => (
  <svg width="21" height="21" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
  </svg>
);

// Eye Icon Component
const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M5.25 9L12.75 9" stroke="#FF1744" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 3C12.18 3 15 6 15 9C15 12 12.18 15 9 15C5.82 15 3 12 3 9C3 6 5.82 3 9 3Z" stroke="#FF1744" strokeWidth="1.5"/>
  </svg>
);

// Arrow Left Icon
const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18.5 12L6 12M6 12L12 18M6 12L12 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Arrow Right Icon  
const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5.5 12L18 12M18 12L12 6M18 12L12 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Checkmark Icon for email validation
const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#22c55e"/>
    <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PasswordVisibilityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Home() {
  // State to manage login/register mode and logged in state
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFirstTimeLoginMode, setIsFirstTimeLoginMode] = useState(false);
  const [isPasswordCreation, setIsPasswordCreation] = useState(false);
  const [isDiagnosisMode, setIsDiagnosisMode] = useState(false);
  const [isNameInput, setIsNameInput] = useState(false);
  const [userName, setUserName] = useState('');
  const [isCareerSelection, setIsCareerSelection] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState('');
  const [targetScore, setTargetScore] = useState(0.0);
  const [otherCourses, setOtherCourses] = useState('');
  const [isPlanSelection, setIsPlanSelection] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  // Password validation functions
  const hasLowercase = (str: string) => /[a-z]/.test(str);
  const hasUppercase = (str: string) => /[A-Z]/.test(str);
  const hasNumber = (str: string) => /[0-9]/.test(str);
  const hasMinLength = (str: string) => str.length >= 8;

  const getPasswordStrength = () => {
    return {
      lowercase: hasLowercase(password),
      uppercase: hasUppercase(password),
      number: hasNumber(password),
      length: hasMinLength(password)
    };
  };

  // Google OAuth configuration
  const handleGoogleLogin = () => {
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 'your-google-client-id';
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || `${window.location.origin}/auth/callback`;
    const scope = 'openid email profile';
    
    const googleAuthUrl = `https://accounts.google.com/oauth2/v2/auth?` +
      `client_id=${googleClientId}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `scope=${encodeURIComponent(scope)}&` +
      `response_type=code&` +
      `access_type=offline&` +
      `prompt=consent`;
    
    window.location.href = googleAuthUrl;
  };

  // Toggle between login and register modes
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  // Handle First Time Login button click
  const handleFirstTimeLogin = () => {
    // Reset all states
    setIsLoginMode(true); // Put in login mode
    setIsLoggedIn(false);
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
    setPasswordError(false);
    setEmailError(false);
    setEmailValid(false);
    setIsPasswordCreation(false);
    setIsDiagnosisMode(false);
    setIsNameInput(false);
    setIsCareerSelection(false);
    setIsPlanSelection(false);
    setUserName('');
    setSelectedCareer('');
    setTargetScore(0.0);
    setOtherCourses('');
    // Enable first time login mode
    setIsFirstTimeLoginMode(true);
  };

  // Handle Test Diagnosis button click
  const handleTestDiagnosis = () => {
    // Reset all states
    setIsLoginMode(false); // Put in register mode
    setIsLoggedIn(false);
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
    setPasswordError(false);
    setEmailError(false);
    setEmailValid(false);
    setIsPasswordCreation(false);
    setIsFirstTimeLoginMode(false);
    setIsNameInput(false);
    setIsCareerSelection(false);
    setIsPlanSelection(false);
    setUserName('');
    setSelectedCareer('');
    setTargetScore(0.0);
    setOtherCourses('');
    // Enable diagnosis mode
    setIsDiagnosisMode(true);
  };

  // Handle login button click
  const handleLogin = () => {
    if (email.trim()) {
      // Validate email format for both login and register modes
      if (!email.endsWith('@gmail.com')) {
        setEmailError(true);
        return;
      }
      setEmailError(false);
      
      if (isLoginMode) {
        if (isFirstTimeLoginMode) {
          // First time login mode: go to password creation screen
          setIsPasswordCreation(true);
        } else {
          // Regular login mode: go to password verification screen
          setIsLoggedIn(true);
        }
      } else {
        // Register mode
        if (isDiagnosisMode) {
          // Diagnosis flow: go to name input screen
          setIsNameInput(true);
        } else {
          // Regular register mode: go directly to success page
          setIsAuthenticated(true);
        }
      }
    }
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Clear email error when user starts typing
    if (emailError) {
      setEmailError(false);
    }
    
    // Check if email is valid (ends with @gmail.com and has content before @)
    const isValid = newEmail.endsWith('@gmail.com') && newEmail.length > '@gmail.com'.length;
    setEmailValid(isValid);
  };

  // Handle password input change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    // Clear error when user starts typing
    if (passwordError) {
      setPasswordError(false);
    }
  };

  // Handle password authentication
  const handlePasswordSubmit = () => {
    if (password.length >= 8) {
      setIsAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  // Handle password creation completion
  const handlePasswordCreationSubmit = () => {
    const strength = getPasswordStrength();
    if (strength.lowercase && strength.uppercase && strength.number && strength.length) {
      setIsAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  // Handle name input change
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  // Handle name input completion
  const handleNameSubmit = () => {
    if (userName.trim()) {
      setIsNameInput(false);
      setIsCareerSelection(true);
    }
  };

  // Handle career selection
  const handleCareerSelect = (career: string) => {
    // Toggle selection - if already selected, unselect it
    if (selectedCareer === career) {
      setSelectedCareer('');
      setTargetScore(0.0);
      return;
    }
    
    setSelectedCareer(career);
    
    // Auto-adjust target score based on career position
    const careers = [
      'Teacher', 'Lawyer', 'Engineer', 'Doctor',           // Row 1: 0.5
      'Carpenter', 'Journalist', 'Filmmaker', 'Programmer', // Row 2: 1.0
      'Mechanic', 'Electrician', 'Pilot', 'Architect',     // Row 3: 1.5
      'Auditor', 'Nutritionist', 'Data analyst', 'Pharmacist' // Row 4: 2.0
    ];
    
    const careerIndex = careers.indexOf(career);
    if (careerIndex !== -1) {
      const row = Math.floor(careerIndex / 4); // 0, 1, 2, 3
      const targetScore = 0.5 + (row * 0.5); // 0.5, 1.0, 1.5, 2.0
      setTargetScore(targetScore);
    }
  };

  // Handle target score change
  const handleTargetScoreChange = (score: number) => {
    setTargetScore(score);
  };

  // Handle other courses input change
  const handleOtherCoursesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherCourses(e.target.value);
  };

  // Handle career selection completion
  const handleCareerSelectionContinue = () => {
    setIsCareerSelection(false);
    setIsPlanSelection(true);
  };

  // Handle plan selection completion
  const handlePlanSelectionContinue = () => {
    setIsAuthenticated(true);
  };

  // Check if login/register button should be enabled
  const isLoginEnabled = isLoginMode && email.trim().length > 0;
  const isRegisterEnabled = !isLoginMode; // Register button is always enabled

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* CSS Keyframes for animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          25% {
            transform: translate(30px, -20px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 30px) scale(0.95);
          }
          75% {
            transform: translate(40px, 20px) scale(1.02);
          }
        }
        
        @keyframes float2 {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(-25px, 35px) scale(1.03);
          }
          66% {
            transform: translate(35px, -15px) scale(0.97);
          }
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: rgb(57, 119, 242);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: rgb(57, 119, 242);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* Main background with dark blue color matching Figma design */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: 'rgb(15, 23, 42)', // r: 0.059, g: 0.090, b: 0.165 converted to RGB
        }}
      >
        {/* Decorative Circle 1 - Top right area with floating animation */}
        <div 
          className="absolute rounded-full"
          style={{
            left: '830px',
            top: '300px',
            width: '780px',
            height: '780px',
            backgroundColor: 'rgba(57, 119, 242, 0.2)', // r: 0.225, g: 0.467, b: 0.95 with 20% opacity
            filter: 'blur(220px)',
            animation: 'float1 20s ease-in-out infinite',
          }}
        />
        
        {/* Decorative Circle 2 - Top left area with different floating animation */}
        <div 
          className="absolute rounded-full"
          style={{
            left: '-181px',
            top: '-134px',
            width: '822px',
            height: '782px',
            backgroundColor: 'rgba(57, 119, 242, 0.2)', // Same blue color with 20% opacity
            filter: 'blur(230px)',
            animation: 'float2 25s ease-in-out infinite',
          }}
        />
        </div>

      {/* Test Buttons - Outside the main flow */}
      <div className="absolute top-4 left-4 z-20">
        <button 
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-all duration-200 shadow-lg"
          onClick={handleTestDiagnosis}
        >
          Test Diagnosis
        </button>
      </div>
      
      <div className="absolute top-4 right-4 z-20">
        <button 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-all duration-200 shadow-lg"
          onClick={handleFirstTimeLogin}
        >
          Test First Time Login
        </button>
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-[559px]">
          {/* Main Glassmorphic Card */}
          <div 
            className="rounded-[32px] border backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(251, 251, 251, 0.2) 0%, rgba(252, 252, 252, 0.2) 100%)',
              borderColor: 'rgba(143, 143, 174, 1)',
              opacity: 0.6,
            }}
          >
            <div className="p-11">
              {/* HP Logo */}
              <div className="flex justify-center mb-6">
                <svg width="133" height="49" viewBox="0 0 133 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.4475 17.7386V23.5714H32.5992C33.8866 23.5714 34.7877 23.3539 35.3027 22.9189C35.8265 22.4838 36.0884 21.7292 36.0884 20.655C36.0884 19.5808 35.8265 18.8262 35.3027 18.3912C34.7877 17.9561 33.8866 17.7386 32.5992 17.7386H31.4475Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.80947 0.5C1.30315 0.5 0.0820312 1.72104 0.0820312 3.22727V45.7727C0.0820312 47.279 1.30314 48.5 2.80946 48.5H45.6302C47.1365 48.5 48.3576 47.279 48.3576 45.7727V3.22727C48.3576 1.72104 47.1365 0.5 45.6302 0.5H2.80947ZM8.53708 14.4091V34.3182C10.7966 34.3182 12.6282 32.4866 12.6282 30.2273V26.4091H19.7196V34.3182C21.979 34.3182 23.8107 32.4866 23.8107 30.2273V18.5C23.8107 16.2407 21.979 14.4091 19.7196 14.4091V23.1364H12.6282V18.5C12.6282 16.2407 10.7966 14.4091 8.53708 14.4091ZM31.4475 26.8739V30.2273C31.4475 32.4866 29.6159 34.3182 27.3564 34.3182V14.4361H31.4475H32.4527C35.1962 14.4361 37.1671 14.9244 38.3657 15.9009C39.5732 16.8775 40.1769 18.4622 40.1769 20.655C40.1769 22.8478 39.5732 24.4325 38.3657 25.4091C37.1671 26.3857 35.1962 26.8739 32.4527 26.8739H31.4475Z" fill="white"/>
                  <path d="M72.3246 42.7726L72.371 22.8636C74.6495 22.8689 76.4923 24.7202 76.487 26.9985L76.4598 38.657C76.4545 40.9353 74.6031 42.778 72.3246 42.7726Z" fill="white"/>
                  <path d="M88.4509 42.7727L88.4973 22.8637C90.7758 22.869 92.6186 24.7203 92.6133 26.9986L92.5861 38.657C92.5808 40.9354 90.7294 42.778 88.4509 42.7727Z" fill="white"/>
                  <path d="M55.318 26.0818C55.318 24.6745 55.5799 23.4391 56.1035 22.3755C56.6436 21.3118 57.3718 20.4936 58.2882 19.9209C59.2046 19.3482 60.2274 19.0618 61.3566 19.0618C62.3221 19.0618 63.1649 19.2582 63.8849 19.6509C64.6213 20.0436 65.1859 20.5591 65.5786 21.1973V19.2582H69.7762V32.9545H65.5786V31.0155C65.1695 31.6536 64.5968 32.1691 63.8604 32.5618C63.1403 32.9545 62.2975 33.1509 61.332 33.1509C60.2192 33.1509 59.2046 32.8645 58.2882 32.2918C57.3718 31.7027 56.6436 30.8764 56.1035 29.8127C55.5799 28.7327 55.318 27.4891 55.318 26.0818ZM65.5786 26.1064C65.5786 25.0591 65.2841 24.2327 64.6949 23.6273C64.1222 23.0218 63.4185 22.7191 62.5839 22.7191C61.7493 22.7191 61.0375 23.0218 60.4483 23.6273C59.8756 24.2164 59.5892 25.0345 59.5892 26.0818C59.5892 27.1291 59.8756 27.9636 60.4483 28.5855C61.0375 29.1909 61.7493 29.4936 62.5839 29.4936C63.4185 29.4936 64.1222 29.1909 64.6949 28.5855C65.2841 27.98 65.5786 27.1536 65.5786 26.1064Z" fill="white"/>
                  <path d="M76.5195 21.1973C76.9286 20.5591 77.4932 20.0436 78.2132 19.6509C78.9332 19.2582 79.776 19.0618 80.7415 19.0618C81.8707 19.0618 82.8935 19.3482 83.8099 19.9209C84.7263 20.4936 85.4464 21.3118 85.97 22.3755C86.51 23.4391 86.7801 24.6745 86.7801 26.0818C86.7801 27.4891 86.51 28.7327 85.97 29.8127C85.4464 30.8764 84.7263 31.7027 83.8099 32.2918C82.8935 32.8645 81.8707 33.1509 80.7415 33.1509C79.7924 33.1509 78.9496 32.9545 78.2132 32.5618C77.4932 32.1691 76.7229 31.6618 76.3138 31.04L74.5411 38.8175L72.3592 39.4836L72.322 19.2582H76.5195V21.1973ZM82.5089 26.0818C82.5089 25.0345 82.2144 24.2164 81.6252 23.6273C81.0525 23.0218 80.3406 22.7191 79.4896 22.7191C78.655 22.7191 77.9432 23.0218 77.354 23.6273C76.7813 24.2327 76.4949 25.0591 76.4949 26.1064C76.4949 27.1536 76.7813 27.98 77.354 28.5855C77.9432 29.1909 78.655 29.4936 79.4896 29.4936C80.3242 29.4936 81.0361 29.1909 81.6252 28.5855C82.2144 27.9636 82.5089 27.1291 82.5089 26.0818Z" fill="white"/>
                  <path d="M92.6888 21.1973C93.0979 20.5591 93.6625 20.0436 94.3825 19.6509C95.1025 19.2582 95.9453 19.0618 96.9109 19.0618C98.04 19.0618 99.0628 19.3482 99.9792 19.9209C100.896 20.4936 101.616 21.3118 102.139 22.3755C102.679 23.4391 102.949 24.6745 102.949 26.0818C102.949 27.4891 102.679 28.7327 102.139 29.8127C101.616 30.8764 100.896 31.7027 99.9792 32.2918C99.0628 32.8645 98.04 33.1509 96.9109 33.1509C95.9617 33.1509 95.1189 32.9545 94.3825 32.5618C93.6625 32.1691 92.9512 31.6618 92.542 31.04L90.0875 38.8175L88.4913 39.4836V19.2582H92.6888V21.1973ZM98.6782 26.0818C98.6782 25.0345 98.3837 24.2164 97.7945 23.6273C97.2218 23.0218 96.5099 22.7191 95.659 22.7191C94.8244 22.7191 94.1125 23.0218 93.5234 23.6273C92.9506 24.2327 92.6642 25.0591 92.6642 26.1064C92.6642 27.1536 92.9506 27.98 93.5234 28.5855C94.1125 29.1909 94.8244 29.4936 95.659 29.4936C96.4936 29.4936 97.2054 29.1909 97.7945 28.5855C98.3837 27.9636 98.6782 27.1291 98.6782 26.0818Z" fill="white"/>
                  <path d="M117.572 25.8855C117.572 26.2782 117.548 26.6873 117.499 27.1127H107.999C108.064 27.9636 108.334 28.6182 108.809 29.0764C109.3 29.5182 109.897 29.7391 110.601 29.7391C111.648 29.7391 112.376 29.2973 112.786 28.4136H117.253C117.024 29.3136 116.607 30.1236 116.001 30.8436C115.412 31.5636 114.668 32.1282 113.767 32.5373C112.867 32.9464 111.861 33.1509 110.748 33.1509C109.406 33.1509 108.212 32.8645 107.164 32.2918C106.117 31.7191 105.299 30.9009 104.71 29.8373C104.121 28.7736 103.826 27.53 103.826 26.1064C103.826 24.6827 104.112 23.4391 104.685 22.3755C105.274 21.3118 106.092 20.4936 107.14 19.9209C108.187 19.3482 109.39 19.0618 110.748 19.0618C112.074 19.0618 113.252 19.34 114.283 19.8964C115.314 20.4527 116.116 21.2464 116.689 22.2773C117.278 23.3082 117.572 24.5109 117.572 25.8855ZM113.277 24.7809C113.277 24.0609 113.031 23.4882 112.54 23.0627C112.049 22.6373 111.436 22.4245 110.699 22.4245C109.995 22.4245 109.398 22.6291 108.907 23.0382C108.433 23.4473 108.138 24.0282 108.024 24.7809H113.277Z" fill="white"/>
                  <path d="M127.642 19.1109C129.245 19.1109 130.522 19.6345 131.471 20.6818C132.436 21.7127 132.919 23.1364 132.919 24.9527V32.9545H128.746V25.5173C128.746 24.6009 128.509 23.8891 128.034 23.3818C127.56 22.8745 126.922 22.6209 126.12 22.6209C125.318 22.6209 124.68 22.8745 124.205 23.3818C123.731 23.8891 123.493 24.6009 123.493 25.5173V32.9545H119.296V19.2582H123.493V21.0745C123.919 20.4691 124.491 19.9945 125.212 19.6509C125.932 19.2909 126.742 19.1109 127.642 19.1109Z" fill="white"/>
                </svg>
              </div>

              {/* Header Section - Changes based on state */}
              <div className="text-center mb-9">
                <h1 className="text-white text-[28px] font-semibold mb-3 leading-tight">
                  {isAuthenticated ? "Kom igång" :
                   isLoggedIn ? "Kom igång" : 
                   isPlanSelection ? "Välkommen till HP-appen som gratisanvändare!" :
                   isCareerSelection ? "What do you want to study in future?" :
                   isNameInput ? "What name should be given to you?" :
                   isPasswordCreation ? "Nästan klart! Skapa ett säkert lösenord" :
                   isLoginMode ? "Välkommen tillbaka" : "Utforska mer – registrera dig nu"}
                </h1>
                <p className="text-white text-lg opacity-90">
                  {isAuthenticated ? "Lås upp ditt konto med din unika nyckel" :
                   isLoggedIn ? "Lås upp ditt konto med din unika nyckel" :
                   isPlanSelection ? "" :
                   isCareerSelection ? "" :
                   isNameInput ? "" :
                   isPasswordCreation ? "Skapa ditt säkra lösenord" :
                   isLoginMode ? "Logga in för att komma åt ditt konto" : "Lås upp exklusiva funktioner"}
                </p>
              </div>

              {/* Form Section */}
              <div className="space-y-6">
                {!isLoggedIn && !isAuthenticated && !isPasswordCreation && !isNameInput && !isCareerSelection && !isPlanSelection ? (
                  <>
                    {/* Google Sign-up Button */}
                    <button 
                      onClick={handleGoogleLogin}
                      className="w-full flex items-center justify-center gap-6 px-6 py-3 rounded-[35px] border hover:bg-opacity-80 transition-all duration-200"
                      style={{
                        backgroundColor: 'rgb(57, 64, 75)',
                        borderColor: 'rgb(30, 41, 59)',
                        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.12)',
                      }}
                    >
                      <GoogleIcon />
                      <span className="text-white text-base font-medium">
                        Fortsätt med Google
                      </span>
                    </button>

                    {/* Divider - Changes based on mode */}
                    <div className="flex items-center gap-5">
                      <div className="flex-1 h-px bg-white"></div>
                      <span className="text-white text-sm">
                        {isLoginMode ? "Eller logga in med" : "Eller registrera dig med"}
                      </span>
                      <div className="flex-1 h-px bg-white"></div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="E-postadress"
                          value={email}
                          onChange={handleEmailChange}
                          className={`w-full px-5 py-3 rounded-[35px] border text-white placeholder-gray-400 bg-opacity-100 transition-all duration-200 ${
                            emailError ? 'border-red-500' : ''
                          }`}
                          style={{
                            backgroundColor: 'rgb(49, 61, 80)',
                            borderColor: emailError ? '#ef4444' : 'rgb(30, 41, 59)',
                          }}
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          {emailValid ? <CheckmarkIcon /> : <EyeIcon />}
                        </div>
                      </div>
                      {/* Email Error Message */}
                      {emailError && (
                        <div className="text-red-500 text-sm px-1">
                          Check your email address again
                        </div>
                      )}
                    </div>

                    {/* Login specific fields */}
                    {isLoginMode && (
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center gap-2">
                          <input 
                            type="checkbox" 
                            id="remember" 
                            className="w-4 h-4 rounded border border-white bg-transparent"
                          />
                          <label htmlFor="remember">Kom ihåg mig</label>
                        </div>
                        <span className="cursor-pointer hover:underline">Glömt Lösenord?</span>
                      </div>
                    )}

                    {/* Login/Registration Button - Changes based on mode */}
                    <button 
                      onClick={handleLogin}
                      disabled={isLoginMode ? !isLoginEnabled : false}
                      className={`w-full flex items-center justify-center gap-4 px-5 py-3 rounded-[30px] text-white font-medium transition-all duration-300 ${
                        (isLoginMode && !isLoginEnabled) ? 'cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'
                      }`}
                      style={{
                        backgroundColor: isLoginMode 
                          ? (isLoginEnabled ? 'rgb(57, 119, 242)' : 'rgb(71, 85, 105)') // Active blue vs inactive gray for login
                          : 'rgb(57, 119, 242)', // Always blue for register mode
                        transform: 'translateZ(0)', // For better transition performance
                      }}
                    >
                      <ArrowLeftIcon />
                      <span>{isLoginMode ? "Logga in" : "Registrera dig"}</span>
                      <ArrowRightIcon />
                    </button>

                    {/* Mode Toggle Link - Changes based on mode */}
                    <div className="text-center">
                      <p className="text-white text-sm">
                        {isLoginMode ? "Har du inte ett konto? " : "Har du redan ett konto? "}
                        <span 
                          className="underline cursor-pointer"
                          onClick={toggleMode}
                        >
                          {isLoginMode ? "Registrera dig" : "Logga in"}
                        </span>
                      </p>
                    </div>
                  </>
                ) : isNameInput && !isAuthenticated ? (
                  <>
                    {/* Name Input Screen */}
                    <div className="space-y-8">
                      {/* Name Input */}
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Type name"
                          value={userName}
                          onChange={handleNameChange}
                          className="w-full px-6 py-4 rounded-[20px] border text-white placeholder-gray-400 bg-transparent transition-all duration-200 text-lg"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(10px)',
                          }}
                        />
                      </div>

                      {/* Large spacing for better visual hierarchy */}
                      <div style={{ height: '200px' }}></div>

                      {/* Continue Button */}
                      <button 
                        onClick={handleNameSubmit}
                        disabled={!userName.trim()}
                        className={`w-full py-4 rounded-[25px] text-white font-medium transition-all duration-200 text-lg ${
                          userName.trim() ? 'hover:opacity-90' : 'opacity-50 cursor-not-allowed'
                        }`}
                        style={{
                          backgroundColor: 'rgb(57, 119, 242)',
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </>
                ) : isCareerSelection && !isAuthenticated ? (
                  <>
                    {/* Career Selection Screen */}
                    <div className="space-y-8">
                      {/* Career Options Grid - 4x4 layout */}
                      <div className="grid grid-cols-4 gap-4">
                        {[
                          { name: 'Teacher', icon: '🏫' },
                          { name: 'Lawyer', icon: '🔨' },
                          { name: 'Engineer', icon: '👷‍♂️' },
                          { name: 'Doctor', icon: '👨‍⚕️' },
                          { name: 'Carpenter', icon: '🔨' },
                          { name: 'Journalist', icon: '📰' },
                          { name: 'Filmmaker', icon: '🎬' },
                          { name: 'Programmer', icon: '💻' },
                          { name: 'Mechanic', icon: '🔧' },
                          { name: 'Electrician', icon: '⚡' },
                          { name: 'Pilot', icon: '✈️' },
                          { name: 'Architect', icon: '🏗️' },
                          { name: 'Auditor', icon: '🔍' },
                          { name: 'Nutritionist', icon: '🥗' },
                          { name: 'Data analyst', icon: '📊' },
                          { name: 'Pharmacist', icon: '💊' }
                        ].map((career) => (
                          <button
                            key={career.name}
                            onClick={() => handleCareerSelect(career.name)}
                            className={`relative min-h-[55px] px-3 py-2 rounded-[20px] border transition-all duration-200 flex items-center gap-2 text-left ${
                              selectedCareer === career.name
                                ? 'border-blue-500'
                                : 'border-gray-600 hover:border-gray-500'
                            }`}
                            style={{
                              backgroundColor: selectedCareer === career.name 
                                ? 'rgb(57, 119, 242)' 
                                : 'rgb(49, 61, 80)',
                              borderColor: selectedCareer === career.name 
                                ? 'rgb(57, 119, 242)'
                                : 'rgb(30, 41, 59)'
                            }}
                          >
                            <div className="w-[30px] h-[30px] flex items-center justify-center text-lg flex-shrink-0">
                              {career.icon}
                            </div>
                            <span className="text-white text-xs font-medium flex-1 leading-tight">
                              {career.name}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* Other courses section */}
                      <div className="space-y-3">
                        <h3 className="text-white text-base font-medium">Other courses</h3>
                        <input
                          type="text"
                          placeholder="Enter course"
                          value={otherCourses}
                          onChange={handleOtherCoursesChange}
                          className="w-full h-[55px] px-4 rounded-[20px] border text-white placeholder-gray-400 bg-transparent transition-all duration-200 text-sm"
                          style={{
                            backgroundColor: 'rgb(49, 61, 80)',
                            borderColor: 'rgb(30, 41, 59)'
                          }}
                        />
                      </div>

                      {/* Target Score Section */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white text-base font-medium">Target Score</h3>
                          <span className="text-gray-400 text-xs">* You can customise the score to your need</span>
                        </div>
                        
                        {/* Score Display */}
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                            {targetScore.toFixed(1)}
                          </div>
                        </div>

                        {/* Slider */}
                        <div className="relative">
                          <input
                            type="range"
                            min="0.0"
                            max="2.0"
                            step="0.1"
                            value={targetScore}
                            onChange={(e) => handleTargetScoreChange(parseFloat(e.target.value))}
                            className="slider w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                            style={{
                              background: `linear-gradient(to right, rgb(57, 119, 242) 0%, rgb(57, 119, 242) ${(targetScore / 2.0) * 100}%, rgb(75, 85, 99) ${(targetScore / 2.0) * 100}%, rgb(75, 85, 99) 100%)`
                            }}
                          />
                          
                          {/* Slider Labels */}
                          <div className="flex justify-between text-gray-400 text-xs mt-2">
                            <span>0.0</span>
                            <span>2.0</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <button 
                          onClick={() => setIsCareerSelection(false)}
                          className="px-8 py-3 rounded-[25px] border border-gray-600 text-white font-medium transition-all duration-200 hover:bg-gray-700"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          Back
                        </button>
                        <button
                          onClick={handleCareerSelectionContinue}
                          disabled={!selectedCareer && !(otherCourses.trim() && targetScore > 0)}
                          className={`px-8 py-3 rounded-[25px] font-medium transition-all duration-200 ${
                            (selectedCareer || (otherCourses.trim() && targetScore > 0))
                              ? 'text-white hover:opacity-90'
                              : 'text-gray-400 cursor-not-allowed'
                          }`}
                          style={{
                            backgroundColor: (selectedCareer || (otherCourses.trim() && targetScore > 0)) ? 'rgb(57, 119, 242)' : 'rgb(71, 85, 105)',
                          }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </>
                ) : isPlanSelection && !isAuthenticated ? (
                  <>
                    {/* Plan Selection Screen */}
                    <div className="space-y-8">
                      {/* Plan Cards Container */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Free Plan Card */}
                        <div className="rounded-[20px] border p-6 space-y-6" style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        }}>
                          {/* Header with Icon */}
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                              backgroundColor: 'rgba(239, 68, 68, 0.2)'
                            }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2"/>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="9" y1="9" x2="9.01" y2="9" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="15" y1="9" x2="15.01" y2="9" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <h3 className="text-white text-xl font-semibold">Det här kan du göra helt gratis</h3>
                          </div>

                          {/* Features List */}
                          <div className="space-y-4">
                            {[
                              'Prova utvalda frågor från varje del av provet',
                              'Göra ett komplett övningsprov med automatisk rättning och normering',
                              'Få din normerade poäng för varje provdel',
                              'Få hjälp av en AI-coach med exempeluppgifter och tips'
                            ].map((feature, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-5 h-5 mt-0.5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                                    <path d="M1 4.5L4 7.5L11 0.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span className="text-white text-sm leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Premium Plan Card */}
                        <div className="rounded-[20px] border p-6 space-y-6" style={{
                          backgroundColor: 'rgba(57, 119, 242, 0.1)',
                          borderColor: 'rgb(57, 119, 242)',
                        }}>
                          {/* Header with Icon */}
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
                              backgroundColor: 'rgba(57, 119, 242, 0.2)'
                            }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#3977F2"/>
                              </svg>
                            </div>
                            <h3 className="text-white text-xl font-semibold">Vad du får med Premium</h3>
                          </div>

                          {/* Features List */}
                          <div className="space-y-4">
                            {[
                              '12 000+ uppgifter med lösningar',
                              'Videogenomgångar av lärare',
                              'Obegränsat antal övningsprov',
                              'Teori & strategier för hela provet',
                              'Normerad poäng på alla provdelar',
                              'AI-coach som hjälper dig med uppgifter dygnet runt',
                              'Resultatgaranti: nå ditt mål eller få pengarna tillbaka'
                            ].map((feature, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-5 h-5 mt-0.5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                                    <path d="M1 4.5L4 7.5L11 0.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span className="text-white text-sm leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <button 
                          onClick={handlePlanSelectionContinue}
                          className="flex-1 px-6 py-3 rounded-[25px] border text-white font-medium transition-all duration-200 hover:bg-opacity-20"
                          style={{
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          Fortsätt gratis
                        </button>
                        <button 
                          onClick={handlePlanSelectionContinue}
                          className="flex-1 px-6 py-3 rounded-[25px] text-white font-medium transition-all duration-200 hover:opacity-90"
                          style={{
                            backgroundColor: 'rgb(57, 119, 242)',
                          }}
                        >
                          Se prisplaner
                        </button>
                      </div>
                    </div>
                  </>
                ) : isPasswordCreation && !isAuthenticated ? (
                  <>
                    {/* Password Creation Screen */}
                    <div className="space-y-6">
                      {/* Password Input */}
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Skapa Lösenord"
                          value={password}
                          onChange={handlePasswordChange}
                          className={`w-full px-5 py-3 rounded-[35px] border text-white placeholder-gray-400 bg-opacity-100 transition-all duration-200 ${
                            passwordError ? 'border-red-500' : ''
                          }`}
                          style={{
                            backgroundColor: 'rgb(49, 61, 80)',
                            borderColor: passwordError ? '#ef4444' : 'rgb(30, 41, 59)',
                          }}
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <PasswordVisibilityIcon />
                        </div>
                      </div>

                      {/* Password Strength Requirements */}
                      {password.length > 0 && (
                        <div className="space-y-4">
                          {/* Progress bars */}
                          <div className="flex gap-2">
                            {[
                              getPasswordStrength().lowercase,
                              getPasswordStrength().uppercase,
                              getPasswordStrength().number,
                              getPasswordStrength().length
                            ].map((isActive, index) => (
                              <div
                                key={index}
                                className={`flex-1 h-2 rounded-full transition-all duration-200 ${
                                  isActive ? 'bg-green-500' : 'bg-gray-600'
                                }`}
                              />
                            ))}
                            <span className="text-white text-sm ml-2">Svagt</span>
                          </div>

                          {/* Requirements list */}
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2">
                              {getPasswordStrength().lowercase ? (
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                              ) : (
                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7M7 1L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                  </svg>
                                </div>
                              )}
                              <span className="text-white">1 Liten bokstav</span>
                            </div>

                            <div className="flex items-center gap-2">
                              {getPasswordStrength().uppercase ? (
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                              ) : (
                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7M7 1L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                  </svg>
                                </div>
                              )}
                              <span className="text-white">1 Stor bokstav</span>
                            </div>

                            <div className="flex items-center gap-2">
                              {getPasswordStrength().number ? (
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                              ) : (
                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7M7 1L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                  </svg>
                                </div>
                              )}
                              <span className="text-white">1 Siffra</span>
                            </div>

                            <div className="flex items-center gap-2">
                              {getPasswordStrength().length ? (
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                              ) : (
                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7M7 1L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                  </svg>
                                </div>
                              )}
                              <span className="text-white">8 bokstäver</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Continue Button */}
                      <button 
                        onClick={handlePasswordCreationSubmit}
                        className="w-full py-3 rounded-[30px] text-white font-medium transition-all duration-200 hover:opacity-90"
                        style={{
                          backgroundColor: 'rgb(57, 119, 242)',
                        }}
                      >
                        Fortsätt
                      </button>
                    </div>
                  </>
                ) : isLoggedIn && !isAuthenticated ? (
                  <>
                    {/* Password Input Screen */}
                    <div className="space-y-6">
                      {/* Password Input */}
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Ange lösenord"
                          value={password}
                          onChange={handlePasswordChange}
                          className={`w-full px-5 py-3 rounded-[35px] border text-white placeholder-gray-400 bg-opacity-100 transition-all duration-200 ${
                            passwordError ? 'border-red-500' : ''
                          }`}
                          style={{
                            backgroundColor: 'rgb(49, 61, 80)',
                            borderColor: passwordError ? '#ef4444' : 'rgb(30, 41, 59)',
                          }}
                        />
                      </div>

                      {/* Error Message and Forgot Password */}
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          {passwordError && (
                            <span className="text-red-500">*Fel lösenord</span>
                          )}
                        </div>
                        <span className="text-white cursor-pointer hover:underline">
                          Glömt Lösenord?
                        </span>
                      </div>

                      {/* Continue Button */}
                      <button 
                        onClick={handlePasswordSubmit}
                        className="w-full py-3 rounded-[30px] text-white font-medium transition-all duration-200 hover:opacity-90"
                        style={{
                          backgroundColor: 'rgb(57, 119, 242)',
                        }}
                      >
                        Fortsätt
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Success/Diagnosis screen - shows after registration or successful password entry */}
                    <div className="text-center text-white">
                      {isDiagnosisMode ? (
                        <>
                          <h2 className="text-xl mb-4">Diagnos & Hälsoöversikt</h2>
                          <div className="space-y-4 text-left max-w-md mx-auto">
                            <div className="bg-white bg-opacity-10 rounded-lg p-4">
                              <h3 className="font-semibold mb-2">Senaste Hälsokontroll</h3>
                              <p className="text-sm text-gray-300">15 Juni 2024</p>
                            </div>
                            <div className="bg-white bg-opacity-10 rounded-lg p-4">
                              <h3 className="font-semibold mb-2">Kommande Undersökningar</h3>
                              <p className="text-sm text-gray-300">Blodprov - 28 Juni 2024</p>
                            </div>
                            <div className="bg-white bg-opacity-10 rounded-lg p-4">
                              <h3 className="font-semibold mb-2">Mediciner</h3>
                              <p className="text-sm text-gray-300">3 aktiva recept</p>
                            </div>
                            <button className="w-full py-3 mt-6 rounded-[30px] text-white font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-200">
                              Visa Fullständig Hälsoprofil
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <h2 className="text-xl mb-4">Autentisering lyckades!</h2>
                          <p>Du är nu inloggad.</p>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Terms and Conditions - Only show in register mode and when not logged in */}
          {!isLoginMode && !isLoggedIn && (
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
                Genom att registrera dig godkänner du{' '}
                <span className="underline cursor-pointer">användaravtalet för HP-appen</span>,{' '}
                <span className="underline cursor-pointer">sekretesspolicyn</span> och{' '}
                <span className="underline cursor-pointer">cookiepolicyn</span>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
