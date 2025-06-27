import colorData from './export.json';

// Extract the color palette from the JSON structure
const colorPalette = colorData[0]['Color Palette'];

// Type definitions for our color system
export type ColorMode = 'light' | 'dark';
export type ColorTokens = keyof typeof colorPalette.modes.light;

// Helper function to get color value by name and mode
export function getColor(colorName: ColorTokens, mode: ColorMode = 'light'): string {
  const color = colorPalette.modes[mode][colorName];
  return color?.$value || '#000000';
}

// Helper function to get all colors for a specific mode
export function getAllColors(mode: ColorMode = 'light') {
  return Object.entries(colorPalette.modes[mode]).reduce((acc, [key, value]) => {
    acc[key] = (value as any).$value;
    return acc;
  }, {} as Record<string, string>);
}

// Pre-built color sets for common use cases
export const colors = {
  light: getAllColors('light'),
  dark: getAllColors('dark'),
};

// Semantic color mappings for easier usage
export const semanticColors = {
  light: {
    primary: getColor('Blue-50-Primary', 'light'),
    secondary: getColor('Blue-200 - Secondary', 'light'),
    tertiary: getColor('Blue-300 - Tertiary', 'light'),
    background: getColor('Background', 'light'),
    surface: getColor('White|Black', 'light'),
    text: getColor('Text | Icon', 'light'),
    textSecondary: getColor('Grey', 'light'),
    success: getColor('Status Green', 'light'),
    warning: getColor('Alert-100', 'light'),
    error: getColor('Red-100', 'light'),
    border: getColor('Grey stroke', 'light'),
  },
  dark: {
    primary: getColor('Blue-50-Primary', 'dark'),
    secondary: getColor('Blue-200 - Secondary', 'dark'),
    tertiary: getColor('Blue-300 - Tertiary', 'dark'),
    background: getColor('Background', 'dark'),
    surface: getColor('White|Black', 'dark'),
    text: getColor('Text | Icon', 'dark'),
    textSecondary: getColor('Grey', 'dark'),
    success: getColor('Status Green', 'dark'),
    warning: getColor('Alert-100', 'dark'),
    error: getColor('Red-100', 'dark'),
    border: getColor('Grey stroke', 'dark'),
  },
};

// CSS custom properties generator
export function generateCSSCustomProperties(mode: ColorMode = 'light'): string {
  const colors = getAllColors(mode);
  return Object.entries(colors)
    .map(([key, value]) => `  --color-${key.toLowerCase().replace(/[^a-z0-9]/g, '-')}: ${value};`)
    .join('\n');
}

// Tailwind CSS color configuration
export function getTailwindColors(mode: ColorMode = 'light') {
  const colors = getAllColors(mode);
  const tailwindColors: Record<string, string> = {};
  
  Object.entries(colors).forEach(([key, value]) => {
    const tailwindKey = key.toLowerCase().replace(/[^a-z0-9]/g, '-');
    tailwindColors[tailwindKey] = value;
  });
  
  return tailwindColors;
} 