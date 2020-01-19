/**
 * Define colors
 */

const white = '#FFFFFF';
const light = '#EFEFEF';
const lightGray = '#C6C6C6';
const gray = '#AAAAAA';
const black = '#131313';
const red = '#F54545';
const green = '#43D043';
const action = '#3B9DFF';
/**
 * Responsive Scaling
 */

interface Breakpoints {
  [key: number]: string;
  mobile?: string;
  tablet?: string;
  smallDesktop?: string;
  desktop?: string;
  mq?: {
    mobile?: string;
    tablet?: string;
    smallDesktop?: string;
    desktop?: string;
  };
}
const breakpoints: Breakpoints = ['576px', '768px', '992px', '1200px'];
breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.smallDesktop = breakpoints[2];
breakpoints.desktop = breakpoints[3];
breakpoints.mq = {};
breakpoints.mq.mobile = `@media screen and (min-width: ${breakpoints.mobile})`;
breakpoints.mq.tablet = `@media screen and (min-width: ${breakpoints.tablet})`;
breakpoints.mq.smallDesktop = `@media screen and (min-width: ${
  breakpoints.smallDesktop
})`;
breakpoints.mq.desktop = `@media screen and (min-width: ${
  breakpoints.desktop
})`;

/**
 * Fonts
 */
export interface FontSizes {
  [key: number]: number;
  title?: number;
  titleMobile?: number;
  subtitle?: number;
  subtitleMobile?: number;
  body?: number;
  body2?: number;
  header1?: number;
  header2?: number;
}

const fontSizes: FontSizes = [16, 18, 24, 36, 42, 64];
fontSizes.body = fontSizes[0];
fontSizes.body2 = fontSizes[1];
fontSizes.header1 = fontSizes[3];
fontSizes.header2 = fontSizes[2];
fontSizes.title = fontSizes[5];
fontSizes.subtitle = fontSizes[4];
fontSizes.subtitleMobile = fontSizes[3];
fontSizes.titleMobile = fontSizes[3];

export interface FontWeights {
  [key: number]: number;
  light?: number;
  regular?: number;
  bold?: number;
  black?: number;
}

const fontWeights: FontWeights = [400, 700, 900];
fontWeights.regular = fontWeights[0];
fontWeights.bold = fontWeights[1];
fontWeights.black = fontWeights[2];

export interface Spacing {
  [key: number]: number;
}
const space: Spacing = [0, 2, 5, 10, 15, 20, 25, 30, 35, 40];

export interface CornerRadii {
  [key: number]: number;
  none?: number;
  small?: number;
  default?: number;
  rounded?: number;
}
const cornerRadius: CornerRadii = [0, 3, 5, 200];
cornerRadius.none = cornerRadius[0];
cornerRadius.small = cornerRadius[1];
cornerRadius.default = cornerRadius[2];
cornerRadius.rounded = cornerRadius[3];

export interface Shadows {
  [key: number]: string;
  none?: string;
  light?: string;
  default?: string;
}
const shadows: Shadows = [
  'none',
  '0 2px 5px 0 rgba(0,0,0,0.05)',
  '0 2px 10px 0 rgba(0,0,0,0.1)',
];
shadows.none = shadows[0];
shadows.light = shadows[1];
shadows.default = shadows[2];

export interface Transitions {
  [key: number]: string;
  none?: string;
  default?: string;
}
/** Transition */
const transitions: Transitions = ['none', 'all 0.2s ease'];
transitions.none = transitions[0];
transitions.default = transitions[1];

const colors = {
  primary: '#005DAA',
  secondary: '#FFD200',
  white,
  black,
  light,
  lightGray,
  gray,
  red,
  green,
  action,
};

const fonts = {
  title: 'Open Sans',
  main: 'Open Sans',
};

const theme: KTheme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,
  cornerRadii: cornerRadius,
  shadows,
  breakpoints,
  transitions,
};

export type Colors = typeof colors;

export type Fonts = typeof fonts;

export interface KTheme {
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  space: Spacing;
  cornerRadii: CornerRadii;
  shadows: Shadows;
  breakpoints: Breakpoints;
  transitions: Transitions;
}

export default theme;
