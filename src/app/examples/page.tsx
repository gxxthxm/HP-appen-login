'use client';

import React from 'react';
import { 
  semanticColors,
  semanticTypography,
  createTextStyleObject,
  createThemedStyles,
  useTheme 
} from '@/lib/design-system';
import ColorPalette from '@/components/ui/ColorPalette';

export default function ExamplesPage() {
  const { colorMode, toggleTheme, colors } = semanticColors.light; // Using light mode for examples

  const h1Style = createTextStyleObject(semanticTypography.laptop.h1);
  const bodyStyle = createTextStyleObject(semanticTypography.laptop.body1);
  const buttonStyle = createTextStyleObject(semanticTypography.laptop.button);

  return (
    <div style={{ backgroundColor: colors.background, color: colors.text, minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ ...h1Style, color: colors.primary, marginBottom: '1rem' }}>
            Design System Examples
          </h1>
          <p style={{ ...bodyStyle, color: colors.textSecondary }}>
            Practical examples of using the HP Design System in your components
          </p>
        </header>

        {/* Card Example */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ ...h1Style, fontSize: '28px', marginBottom: '1.5rem' }}>
            Card Components
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            
            {/* Primary Card */}
            <div style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ ...h1Style, fontSize: '20px', color: colors.primary, marginBottom: '1rem' }}>
                Primary Card
              </h3>
              <p style={{ ...bodyStyle, marginBottom: '1.5rem' }}>
                This is a card using the design system's semantic colors and typography.
              </p>
              <button style={{
                ...buttonStyle,
                backgroundColor: colors.primary,
                color: colors.surface,
                border: 'none',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                cursor: 'pointer'
              }}>
                Primary Action
              </button>
            </div>

            {/* Success Card */}
            <div style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.success}`,
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ ...h1Style, fontSize: '20px', color: colors.success, marginBottom: '1rem' }}>
                Success Card
              </h3>
              <p style={{ ...bodyStyle, marginBottom: '1.5rem' }}>
                This card uses success color theming for positive feedback.
              </p>
              <button style={{
                ...buttonStyle,
                backgroundColor: colors.success,
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                cursor: 'pointer'
              }}>
                Success Action
              </button>
            </div>

            {/* Warning Card */}
            <div style={{
              backgroundColor: colors.surface,
              border: `1px solid ${colors.warning}`,
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ ...h1Style, fontSize: '20px', color: colors.warning, marginBottom: '1rem' }}>
                Warning Card
              </h3>
              <p style={{ ...bodyStyle, marginBottom: '1.5rem' }}>
                This card uses warning colors to draw attention to important information.
              </p>
              <button style={{
                ...buttonStyle,
                backgroundColor: colors.warning,
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                cursor: 'pointer'
              }}>
                Warning Action
              </button>
            </div>
          </div>
        </section>

        {/* Typography Examples */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ ...h1Style, fontSize: '28px', marginBottom: '1.5rem' }}>
            Typography Hierarchy
          </h2>
          <div style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '2rem'
          }}>
            <h1 style={{ ...createTextStyleObject(semanticTypography.laptop.h1), margin: '0 0 1rem 0' }}>
              Headline 1 - Main Page Title
            </h1>
            <h2 style={{ ...createTextStyleObject(semanticTypography.laptop.h2), margin: '0 0 1rem 0' }}>
              Headline 2 - Section Title
            </h2>
            <h3 style={{ ...createTextStyleObject(semanticTypography.laptop.h3), margin: '0 0 1rem 0' }}>
              Headline 3 - Subsection Title
            </h3>
            <p style={{ ...createTextStyleObject(semanticTypography.laptop.body1), margin: '0 0 1rem 0' }}>
              Body 1 - This is the primary body text style used for most content. It's designed to be highly readable and comfortable for extended reading.
            </p>
            <p style={{ ...createTextStyleObject(semanticTypography.laptop.body2), margin: '0 0 1rem 0' }}>
              Body 2 - This is a smaller body text style, perfect for secondary information or captions.
            </p>
            <small style={{ ...createTextStyleObject(semanticTypography.laptop.caption), display: 'block', margin: '0 0 1rem 0' }}>
              Caption - Small text for additional context or metadata
            </small>
          </div>
        </section>

        {/* Form Example */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ ...h1Style, fontSize: '28px', marginBottom: '1.5rem' }}>
            Form Components
          </h2>
          <div style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '500px'
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                ...createTextStyleObject(semanticTypography.laptop.caption),
                fontWeight: '600',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Email Address
              </label>
              <input 
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  fontSize: '16px',
                  backgroundColor: colors.background,
                  color: colors.text
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                ...createTextStyleObject(semanticTypography.laptop.caption),
                fontWeight: '600',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Message
              </label>
              <textarea 
                placeholder="Enter your message"
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                  fontSize: '16px',
                  backgroundColor: colors.background,
                  color: colors.text,
                  resize: 'vertical'
                }}
              />
            </div>
            <button style={{
              ...buttonStyle,
              backgroundColor: colors.primary,
              color: colors.surface,
              border: 'none',
              borderRadius: '8px',
              padding: '0.75rem 2rem',
              cursor: 'pointer',
              width: '100%'
            }}>
              Send Message
            </button>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 style={{ ...h1Style, fontSize: '28px', marginBottom: '1.5rem' }}>
            Interactive Color Palette
          </h2>
          <div style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '2rem'
          }}>
            <p style={{ ...bodyStyle, marginBottom: '1.5rem' }}>
              Click any color to copy its hex value to your clipboard.
            </p>
            <ColorPalette 
              mode="light" 
              maxColors={24}
              onColorClick={(name, value) => {
                navigator.clipboard.writeText(value);
                alert(`Copied ${value} to clipboard!`);
              }}
            />
          </div>
        </section>

      </div>
    </div>
  );
} 