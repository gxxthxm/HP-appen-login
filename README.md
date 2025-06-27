# HP Design System - Next.js Application

This Next.js application showcases a comprehensive design system built from the provided JSON files containing color palettes and typography styles.

## Features

- **🎨 Color System**: Complete color palette with light/dark mode support
- **✍️ Typography**: Comprehensive text styles for laptop and mobile devices
- **🌗 Theme Switching**: Dynamic light/dark mode with localStorage persistence
- **📱 Responsive**: Optimized for both desktop and mobile viewing
- **🔧 Developer-Friendly**: TypeScript support with full type safety

## Design System Structure

### Colors (`src/lib/design-system/colors.ts`)

The color system provides:
- **Semantic Colors**: Primary, secondary, background, text, success, warning, error colors
- **Mode Support**: Light and dark theme variations
- **Utility Functions**: 
  - `getColor(colorName, mode)` - Get specific color value
  - `getAllColors(mode)` - Get all colors for a theme
  - `generateCSSCustomProperties(mode)` - Generate CSS variables
  - `getTailwindColors(mode)` - Get Tailwind-compatible color object

### Typography (`src/lib/design-system/typography.ts`)

The typography system includes:
- **Device-Specific Styles**: Laptop and mobile optimized typography
- **Style Categories**: Headlines, body text, captions, buttons, long text
- **Font Management**: Montserrat, Roboto, and Crimson Text support
- **Utility Functions**:
  - `getTextStyle(name)` - Get specific text style
  - `getStylesByCategory(device, category)` - Filter styles by category
  - `generateCSSClass(style)` - Generate CSS classes from text styles

## Usage Examples

### Using Colors

```typescript
import { semanticColors, getColor } from '@/lib/design-system';

// Get semantic colors for current theme
const colors = semanticColors.light; // or semanticColors.dark

// Get specific color
const primaryColor = getColor('Blue-50-Primary', 'light');

// Use in components
<div style={{ backgroundColor: colors.primary, color: colors.text }}>
  Themed content
</div>
```

### Using Typography

```typescript
import { semanticTypography, getFontWeightValue } from '@/lib/design-system';

// Get semantic typography styles
const h1Style = semanticTypography.laptop.h1;

// Apply to component
<h1 style={{
  fontFamily: h1Style.fontFamily,
  fontWeight: getFontWeightValue(h1Style.fontWeight),
  fontSize: `${h1Style.fontSize}px`
}}>
  Heading Text
</h1>
```

### Using the Theme Hook

```typescript
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { colorMode, toggleTheme, colors } = useTheme();
  
  return (
    <div style={{ backgroundColor: colors.background, color: colors.text }}>
      <button onClick={toggleTheme}>
        Switch to {colorMode === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
}
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── lib/design-system/
│   ├── colors.ts          # Color system utilities
│   ├── typography.ts      # Typography system utilities
│   ├── index.ts          # Main exports
│   ├── export.json       # Color palette data
│   └── textStyles.json   # Typography data
├── components/ui/
│   └── DesignSystemDemo.tsx # Demo component
├── hooks/
│   └── useTheme.ts       # Theme management hook
└── types/
    └── json.d.ts         # JSON import declarations
```

## Design System Files

- **`export.json`**: Contains the complete color palette with light/dark mode variants
- **`textStyles.json`**: Contains typography definitions for laptop and mobile devices

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library with hooks
- **ESLint** - Code linting and formatting

## Contributing

The design system is built to be extensible. To add new colors or typography styles:

1. Update the respective JSON files
2. The TypeScript utilities will automatically pick up the changes
3. Update semantic mappings if needed
4. Run tests to ensure compatibility

## License

This project is part of the HP design system implementation. 