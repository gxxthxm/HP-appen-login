'use client';

import React, { useState } from 'react';
import { 
  semanticColors, 
  getAllColors, 
  type ColorMode,
  semanticTypography,
  type TextStyle,
  getFontWeightValue 
} from '@/lib/design-system';

export default function DesignSystemDemo() {
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  const colors = getAllColors(colorMode);
  const themeColors = semanticColors[colorMode];

  const renderTextStyle = (style: TextStyle | undefined, label: string) => {
    if (!style) return null;
    
    return (
      <div className="mb-4 p-4 border rounded">
        <h4 className="text-sm font-medium text-gray-600 mb-2">{label}</h4>
        <div 
          style={{
            fontFamily: style.fontFamily,
            fontWeight: getFontWeightValue(style.fontWeight),
            fontSize: `${style.fontSize}px`,
            letterSpacing: `${style.letterSpacing.value}${style.letterSpacing.unit === 'PERCENT' ? '%' : 'px'}`,
            textTransform: style.textCase.toLowerCase() as any,
            color: themeColors.text,
          }}
        >
          The quick brown fox jumps over the lazy dog
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {style.fontFamily} · {style.fontWeight} · {style.fontSize}px
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen p-8 transition-colors duration-300"
      style={{ 
        backgroundColor: themeColors.background,
        color: themeColors.text 
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: themeColors.primary }}
          >
            HP Design System
          </h1>
          <div className="flex gap-4 items-center">
            <span style={{ color: themeColors.textSecondary }}>Theme:</span>
            <button
              onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
              className="px-4 py-2 rounded transition-colors"
              style={{
                backgroundColor: themeColors.primary,
                color: themeColors.surface
              }}
            >
              Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
        </div>

        {/* Color Palette Section */}
        <section className="mb-12">
          <h2 
            className="text-2xl font-semibold mb-6"
            style={{ color: themeColors.text }}
          >
            Color Palette ({colorMode} mode)
          </h2>
          
          {/* Semantic Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4" style={{ color: themeColors.textSecondary }}>
              Semantic Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(themeColors).map(([name, color]) => (
                <div key={name} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-lg mb-2 border"
                    style={{ 
                      backgroundColor: color,
                      borderColor: themeColors.border
                    }}
                  />
                  <div className="text-sm font-medium" style={{ color: themeColors.text }}>
                    {name}
                  </div>
                  <div className="text-xs" style={{ color: themeColors.textSecondary }}>
                    {color}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Colors */}
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ color: themeColors.textSecondary }}>
              All Colors ({Object.keys(colors).length} total)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 max-h-96 overflow-y-auto">
              {Object.entries(colors).slice(0, 32).map(([name, color]) => (
                <div key={name} className="text-center">
                  <div 
                    className="w-12 h-12 rounded mb-1 border"
                    style={{ 
                      backgroundColor: color,
                      borderColor: themeColors.border
                    }}
                  />
                  <div className="text-xs truncate" style={{ color: themeColors.text }}>
                    {name.slice(0, 12)}...
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 
            className="text-2xl font-semibold mb-6"
            style={{ color: themeColors.text }}
          >
            Typography
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Laptop Typography */}
            <div>
              <h3 className="text-lg font-medium mb-4" style={{ color: themeColors.textSecondary }}>
                Laptop Typography
              </h3>
              {renderTextStyle(semanticTypography.laptop.h1, 'Headline 1')}
              {renderTextStyle(semanticTypography.laptop.h2, 'Headline 2')}
              {renderTextStyle(semanticTypography.laptop.h3, 'Headline 3')}
              {renderTextStyle(semanticTypography.laptop.body1, 'Body 1')}
              {renderTextStyle(semanticTypography.laptop.body2, 'Body 2')}
              {renderTextStyle(semanticTypography.laptop.caption, 'Caption')}
              {renderTextStyle(semanticTypography.laptop.button, 'Button')}
            </div>

            {/* Mobile Typography */}
            <div>
              <h3 className="text-lg font-medium mb-4" style={{ color: themeColors.textSecondary }}>
                Mobile Typography
              </h3>
              {renderTextStyle(semanticTypography.mobile.h1, 'Headline 1')}
              {renderTextStyle(semanticTypography.mobile.h2, 'Headline 2')}
              {renderTextStyle(semanticTypography.mobile.h3, 'Headline 3')}
              {renderTextStyle(semanticTypography.mobile.body1, 'Body 1')}
              {renderTextStyle(semanticTypography.mobile.body2, 'Body 2')}
              {renderTextStyle(semanticTypography.mobile.caption, 'Caption')}
              {renderTextStyle(semanticTypography.mobile.button, 'Button')}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 