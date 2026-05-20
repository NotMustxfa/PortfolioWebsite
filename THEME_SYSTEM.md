# Theme System Documentation

## Overview
The portfolio now has a dramatic visual transformation between Creative and Professional modes. The switch is so significant it appears as a different website entirely.

## Key Features

### Creative Mode
- **Colors**: Electric Lime (#00FF41) and Gold (#FFD700)
- **Typography**: IBM Plex Mono monospace with wide letter-spacing
- **Borders**: 2px sharp borders with no border radius
- **Animations**: High intensity (1x speed), fast transitions (200ms)
- **Layout**: Chaotic, energetic feel with intense visual effects
- **Background**: Pure black with animated glowing orbs and geometric accents
- **Effects**: Neon glow, glitch animations, pulsing elements

### Professional Mode
- **Colors**: Blue (#3B82F6) and Purple (#8B5CF6)
- **Typography**: System fonts (Inter/Segoe UI) sans-serif
- **Borders**: 1px subtle borders with rounded corners (8px)
- **Animations**: Reduced intensity (0.4x speed), smooth transitions (350ms)
- **Layout**: Organized, refined feel with minimal visual effects
- **Background**: Gradient with subtle dot pattern and soft glows
- **Effects**: Smooth fades, refined shadows, subtle highlighting

## Files Modified

### Core Theme System
- `src/context/ThemeContext.tsx` - Comprehensive theme configuration
- `src/App.tsx` - Theme-aware background and layout
- `src/styles/index.css` - Global CSS utilities

### Component Styling
- `src/components/Navbar.tsx` - Theme-responsive navigation
- `src/components/ThemeToggle.tsx` - Enhanced toggle component

### New Files
- `src/styles/theme-transitions.css` - Dramatic transition effects
- `src/hooks/useThemeStyles.ts` - Helper hook for components

## Using Theme in Components

### Basic Usage
```tsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { mode, config } = useTheme();
  
  return (
    <div style={{
      backgroundColor: config.bg,
      color: config.text,
      fontFamily: config.fontFamily,
      borderRadius: config.borderRadius,
      transitionDuration: config.transitionDuration
    }}>
      {mode === 'creative' ? '✦ Creative' : '◆ Professional'}
    </div>
  );
}
```

### Using Theme Styles Hook
```tsx
import { useThemeStyles } from '../hooks/useThemeStyles';

function StyledComponent() {
  const { styles, config } = useThemeStyles();
  
  return (
    <button style={styles.primaryButton}>
      Click me
    </button>
  );
}
```

## Theme Config Properties

### Colors
- `primary` - Main accent color
- `secondary` - Secondary accent color
- `bg` - Background color
- `bgSecondary` - Secondary background
- `text` - Primary text color
- `textSecondary` - Secondary text color

### Typography
- `fontFamily` - Body font
- `headingFamily` - Heading font
- `fontSize` - Font size scale object

### Spacing & Layout
- `borderRadius` - Border radius value
- `borderWidth` - Border width value
- `spacing` - Spacing scale object

### Animation
- `animationIntensity` - Multiplier for animation speeds
- `transitionDuration` - Global transition duration
- `glassOpacity` - Glass effect opacity

## CSS Variables

The theme system uses data attributes for CSS targeting:
```css
[data-mode="creative"] {
  /* Creative mode styles */
}

[data-mode="professional"] {
  /* Professional mode styles */
}
```

## Animation Configurations

Use the `useThemeAnimation` hook for animation variants:
```tsx
import { useThemeAnimation } from '../hooks/useThemeStyles';

function AnimatedComponent() {
  const { containerVariants, itemVariants, duration } = useThemeAnimation();
  
  // Use with Framer Motion
}
```

## Transition Durations
- **Creative**: 200ms (fast and snappy)
- **Professional**: 350ms (smooth and deliberate)

## Border Styles
- **Creative**: 2px solid, no radius (sharp lines)
- **Professional**: 1px solid, 8px radius (refined curves)

## Best Practices

1. **Always use theme config** for styling instead of hardcoded values
2. **Use the useThemeStyles hook** for common styling patterns
3. **Apply transitionDuration** to all style changes for smooth animations
4. **Respect animationIntensity** when creating custom animations
5. **Test in both modes** to ensure the design looks stunning in each

## Performance Notes

- CSS transitions are optimized for performance
- Backdrop blur effects are GPU-accelerated
- Animation intensity automatically adjusts based on mode
- All transforms use GPU-optimized properties

## Future Enhancements

Consider adding:
- Smooth scroll behavior differences per mode
- Different hover state animations
- Mode-specific component layouts
- Conditional feature visibility based on mode
