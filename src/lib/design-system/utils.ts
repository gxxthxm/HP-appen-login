import { semanticColors, type ColorMode } from './colors';
import { type TextStyle, getFontWeightValue } from './typography';

// Utility to create a style object from a text style
export function createTextStyleObject(style: TextStyle | undefined) {
  if (!style) return {};
  
  return {
    fontFamily: `"${style.fontFamily}", sans-serif`,
    fontWeight: getFontWeightValue(style.fontWeight),
    fontSize: `${style.fontSize}px`,
    letterSpacing: `${style.letterSpacing.value}${style.letterSpacing.unit === 'PERCENT' ? '%' : 'px'}`,
    textTransform: style.textCase.toLowerCase() as 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  };
}

// Utility to create a themed style object
export function createThemedStyles(colorMode: ColorMode) {
  const colors = semanticColors[colorMode];
  
  return {
    container: {
      backgroundColor: colors.background,
      color: colors.text,
    },
    card: {
      backgroundColor: colors.surface,
      color: colors.text,
      borderColor: colors.border,
    },
    button: {
      primary: {
        backgroundColor: colors.primary,
        color: colors.surface,
      },
      secondary: {
        backgroundColor: colors.secondary,
        color: colors.text,
      },
    },
    text: {
      primary: { color: colors.text },
      secondary: { color: colors.textSecondary },
      success: { color: colors.success },
      warning: { color: colors.warning },
      error: { color: colors.error },
    },
  };
}

// Utility to generate CSS variables for the current theme
export function generateThemeVariables(colorMode: ColorMode): Record<string, string> {
  const colors = semanticColors[colorMode];
  const variables: Record<string, string> = {};
  
  Object.entries(colors).forEach(([key, value]) => {
    variables[`--color-${key}`] = value;
  });
  
  return variables;
}

// Utility to check if a color is dark (for determining text color)
export function isColorDark(color: string): boolean {
  // Remove # if present
  const hex = color.replace('#', '');
  
  // Parse RGB values
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance < 0.5;
}

// Utility to get contrast color (black or white) for a given background
export function getContrastColor(backgroundColor: string): string {
  return isColorDark(backgroundColor) ? '#ffffff' : '#000000';
} 