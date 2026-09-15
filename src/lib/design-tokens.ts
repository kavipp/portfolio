export const colors = {
  background: '#FAFAFC',
  primarySurface: '#FFFFFF',
  secondarySurface: '#F3F4F7',
  tertiarySurface: '#EBEFF4',
  primaryText: '#0B1220',
  secondaryText: '#3D485C',
  mutedText: '#6B7A90',
  border: '#DEE3EC',
  subtleBorder: '#E8EDF3',
  primaryBrand: '#1E4FD8',
  primaryHover: '#1A3FC4',
  primaryActive: '#1636A0',
  primarySoft: '#E8EEFA',
  primaryGlow: '#3B7DFF',
  secondaryAccent: '#0A7F96',
  secondaryHover: '#086B7F',
  accentSoft: '#E0F4F7',
  success: '#047857',
  successSoft: '#D1FADF',
  warning: '#B45309',
  warningSoft: '#FEF3C7',
  error: '#B91C1C',
  errorSoft: '#FEE2E2',
  
  glass: {
    light: 'rgba(255, 255, 255, 0.7)',
    medium: 'rgba(255, 255, 255, 0.5)',
    border: 'rgba(255, 255, 255, 0.2)',
  },
  
  gradient: {
    brand: 'linear-gradient(135deg, #1E4FD8 0%, #0A7F96 100%)',
    brandHover: 'linear-gradient(135deg, #1A3FC4 0%, #086B7F 100%)',
    subtle: 'linear-gradient(180deg, rgba(30, 79, 216, 0.03) 0%, rgba(10, 127, 150, 0.03) 100%)',
    hero: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(30, 79, 216, 0.08), transparent), radial-gradient(circle at 80% 80%, rgba(10, 127, 150, 0.06), transparent)',
  },
} as const;

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  30: '120px',
  36: '144px',
} as const;

export const borderRadius = {
  button: '10px',
  input: '10px',
  smallCard: '12px',
  featureCard: '16px',
  largeContainer: '24px',
  pill: '999px',
  full: '9999px',
} as const;

export const shadows = {
  xs: '0 1px 2px rgba(11, 18, 32, 0.03)',
  small: '0 2px 8px rgba(11, 18, 32, 0.04)',
  medium: '0 12px 40px rgba(11, 18, 32, 0.06)',
  large: '0 24px 80px rgba(11, 18, 32, 0.08)',
  xl: '0 32px 100px rgba(11, 18, 32, 0.10)',
  inner: 'inset 0 2px 4px rgba(11, 18, 32, 0.03)',
  glow: '0 0 40px rgba(30, 79, 216, 0.15)',
  glowSubtle: '0 0 20px rgba(30, 79, 216, 0.08)',
} as const;

export const typography = {
  fontFamily: {
    heading: 'var(--font-geist-sans)',
    body: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  fontSize: {
    display: { desktop: '72px', tablet: '56px', mobile: '42px' },
    h1: { desktop: '56px', tablet: '48px', mobile: '38px' },
    h2: { desktop: '42px', tablet: '36px', mobile: '30px' },
    h3: { desktop: '28px', tablet: '26px', mobile: '22px' },
    h4: { desktop: '22px', tablet: '20px', mobile: '18px' },
    body: { desktop: '18px', tablet: '17px', mobile: '16px' },
    bodyLarge: { desktop: '20px', tablet: '19px', mobile: '17px' },
    small: '14px',
    micro: '12px',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    display: 750,
  },
  lineHeight: {
    display: '1.02',
    heading: '1.12',
    body: '1.7',
    tight: '1.3',
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.1em',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
} as const;

export const container = {
  maxWidth: '1240px',
  padding: {
    desktop: '32px',
    tablet: '24px',
    mobile: '20px',
  },
} as const;

export const transitions = {
  micro: '100ms cubic-bezier(0.2, 0, 0, 1)',
  fast: '150ms cubic-bezier(0.2, 0, 0, 1)',
  standard: '200ms cubic-bezier(0.2, 0, 0, 1)',
  smooth: '300ms cubic-bezier(0.2, 0, 0, 1)',
  large: '400ms cubic-bezier(0.2, 0, 0, 1)',
  spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const zIndex = {
  dropdown: 100,
  sticky: 200,
  modal: 300,
  popover: 400,
  tooltip: 500,
  toast: 600,
} as const;

export const animation = {
  duration: {
    instant: '0ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

export const blur = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
} as const;