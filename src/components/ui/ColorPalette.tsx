'use client';

import React from 'react';
import { getAllColors, type ColorMode } from '@/lib/design-system';

interface ColorPaletteProps {
  mode: ColorMode;
  onColorClick?: (colorName: string, colorValue: string) => void;
  maxColors?: number;
}

export default function ColorPalette({ 
  mode, 
  onColorClick, 
  maxColors = 50 
}: ColorPaletteProps) {
  const colors = getAllColors(mode);
  const colorEntries = Object.entries(colors).slice(0, maxColors);

  const handleColorClick = (name: string, value: string) => {
    if (onColorClick) {
      onColorClick(name, value);
    } else {
      // Default behavior: copy to clipboard
      navigator.clipboard.writeText(value);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {colorEntries.map(([name, color]) => (
        <div 
          key={name} 
          className="group cursor-pointer"
          onClick={() => handleColorClick(name, color)}
          title={`${name}: ${color}\nClick to copy`}
        >
          <div 
            className="w-full h-16 rounded-lg border-2 border-gray-200 mb-2 transition-transform group-hover:scale-105 shadow-sm"
            style={{ backgroundColor: color }}
          />
          <div className="text-xs text-center">
            <div className="font-medium text-gray-700 truncate">
              {name.replace(/[^a-zA-Z0-9]/g, ' ').trim()}
            </div>
            <div className="text-gray-500 font-mono">
              {color}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 