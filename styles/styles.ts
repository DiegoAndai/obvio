interface stringKeyed {
  [ key: string ]: any;
}

export const COLORS: stringKeyed = {
  gray: '#959595',
  lightGray: '#ECECEC',
  highlightGray: '#2D2D2D',
  darkGray: '#1F1F1F',
  black: '#000000',
  white: '#FFFFFF',
  orange: '#E88006',
};

export const SPACING: stringKeyed = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '20px',
  xl: '28px',
  '2xl': '48px',
};

export const TEXT_SIZES: stringKeyed = {
  xs: '14px',
  sm: '16px',
  md: '18px',
  lg: '28px',
  xl: '40px',
  '2xl': '50px',
  '3xl': '70px',
  '4xl': '110px',
};

export const ICON_SIZES: stringKeyed = {
  md: 18,
  lg: 28,
};

export const FONTS: stringKeyed = {
  body: 'OpenSansLight',
  medium: 'OpenSansRegular',
  bold: 'OpenSansBold',
};

export const StyleUtils = {
  fontFamily: (type = 'body') => `font-family:   ${FONTS[type]};`,
  fontSize: (size = 'sm') => `font-size:     ${TEXT_SIZES[size]};`,
  padded: (size = 'md') => `padding:       ${SPACING[size]};`,
  paddedX: (size = 'md') => `padding-right: ${SPACING[size]}; padding-left: ${SPACING[size]};`,
  spacedTop: (size = 'md') => `margin-top:    ${SPACING[size]};`,
  spacedBottom: (size = 'md') => `margin-bottom: ${SPACING[size]};`,
  spacedRight: (size = 'md') => `margin-right:  ${SPACING[size]};`,
  spacedVertical: (size = 'md') => `margin:  ${SPACING[size]} 0;`,
  rounded: () => `border-radius: ${SPACING.sm};`,
  shadowed: () => 'box-shadow:    0 2px 3px rgba(0, 0, 0, .1);',
};
