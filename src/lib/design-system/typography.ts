import textStylesData from './textStyles.json';

// Type definitions for our typography system
export interface TextStyle {
  name: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  letterSpacing: {
    unit: string;
    value: number;
  };
  textCase: string;
}

export type DeviceType = 'laptop' | 'mobile';
export type StyleCategory = 'headline' | 'caption' | 'body' | 'long-text' | 'button';

// Get all text styles
export const textStyles: TextStyle[] = textStylesData.textStyles;

// Helper function to find text style by name
export function getTextStyle(name: string): TextStyle | undefined {
  return textStyles.find(style => style.name === name);
}

// Helper function to get styles by device and category
export function getStylesByCategory(device: DeviceType, category: StyleCategory): TextStyle[] {
  const devicePrefix = device.charAt(0).toUpperCase() + device.slice(1);
  const categoryMap: Record<StyleCategory, string[]> = {
    'headline': ['Headline'],
    'caption': ['Caption'],
    'body': ['Body'],
    'long-text': ['Long text'],
    'button': ['Button']
  };
  
  const categoryPatterns = categoryMap[category] || [];
  
  return textStyles.filter(style => {
    const isDeviceMatch = style.name.startsWith(devicePrefix);
    const isCategoryMatch = categoryPatterns.some(pattern => 
      style.name.toLowerCase().includes(pattern.toLowerCase())
    );
    return isDeviceMatch && isCategoryMatch;
  });
}

// Pre-built typography sets for easier usage
export const typography = {
  laptop: {
    headlines: getStylesByCategory('laptop', 'headline'),
    captions: getStylesByCategory('laptop', 'caption'),
    body: getStylesByCategory('laptop', 'body'),
    longText: getStylesByCategory('laptop', 'long-text'),
    buttons: getStylesByCategory('laptop', 'button'),
  },
  mobile: {
    headlines: getStylesByCategory('mobile', 'headline'),
    captions: getStylesByCategory('mobile', 'caption'),
    body: getStylesByCategory('mobile', 'body'),
    longText: getStylesByCategory('mobile', 'long-text'),
    buttons: getStylesByCategory('mobile', 'button'),
  },
};

// Convert font weight names to CSS values
export function getFontWeightValue(fontWeight: string): string {
  const weightMap: Record<string, string> = {
    'Regular': '400',
    'Medium': '500',
    'SemiBold': '600',
    'Bold': '700',
    'ExtraBold': '800',
    'Black': '900',
  };
  return weightMap[fontWeight] || '400';
}

// Generate CSS class from text style
export function generateCSSClass(style: TextStyle): string {
  const className = style.name.toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
  
  return `.${className} {
  font-family: "${style.fontFamily}", sans-serif;
  font-weight: ${getFontWeightValue(style.fontWeight)};
  font-size: ${style.fontSize}px;
  letter-spacing: ${style.letterSpacing.value}${style.letterSpacing.unit === 'PERCENT' ? '%' : 'px'};
  text-transform: ${style.textCase.toLowerCase()};
}`;
}

// Generate all CSS classes
export function generateAllCSSClasses(): string {
  return textStyles.map(generateCSSClass).join('\n\n');
}

// Get semantic typography styles
export const semanticTypography = {
  laptop: {
    h1: getTextStyle('Laptop/Headline/Headline 1'),
    h2: getTextStyle('Laptop/Headline/Headline 2'),
    h3: getTextStyle('Laptop/Headline/Headline 3'),
    h4: getTextStyle('Laptop/Headline/Headline 4'),
    h5: getTextStyle('Laptop/Headline/Headline 5'),
    body1: getTextStyle('Laptop/Body/Body 1 Regular'),
    body2: getTextStyle('Laptop/Body/Body 2 Regular'),
    caption: getTextStyle('Laptop/Caption/Caption 1 regular'),
    button: getTextStyle('Laptop/Button/Button 1'),
  },
  mobile: {
    h1: getTextStyle('Mobile/Headline/Headline 1'),
    h2: getTextStyle('Mobile/Headline/Headline 2'),
    h3: getTextStyle('Mobile/Headline/Headline 3'),
    h4: getTextStyle('Mobile/Headline/Headline 4'),
    h5: getTextStyle('Mobile/Headline/Headline 5'),
    body1: getTextStyle('Mobile/Body/Body 1 Regular'),
    body2: getTextStyle('Mobile/Body/Body 2 Regular'),
    caption: getTextStyle('Mobile/Caption/Caption 1 Regular'),
    button: getTextStyle('Mobile/Button/Button 1'),
  },
}; 