'use client';

import { useState, useEffect } from 'react';
import { semanticColors, type ColorMode } from '@/lib/design-system';

export function useTheme() {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('hp-theme') as ColorMode;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setColorMode(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('hp-theme', colorMode);
  }, [colorMode]);

  const toggleTheme = () => {
    setColorMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const colors = semanticColors[colorMode];

  return {
    colorMode,
    setColorMode,
    toggleTheme,
    colors,
  };
} 