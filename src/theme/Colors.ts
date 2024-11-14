export enum defaultTheme {
  background = '#000000',
  font = '#FFFFFF',
  red = '#FF0000',
  backBtnBackground = '#0D0D0E',
  profit = '#26A705',
  notFocused = '#3F414C',
  line = '#AD1A22',
  celticBlue = '#AED2F9',
  blackGreyShaded = '#131416',
  white = '#FFFFFF',
  darkJungleGreen = '#1C2126',
}

export enum lightTheme {}

enum COLOR_SCHEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export const COLORS = {
  [COLOR_SCHEME.LIGHT]: lightTheme,
  [COLOR_SCHEME.DARK]: defaultTheme,
};

export const getCurrentTheme = (theme: string | 'dark') => {
  return COLORS[theme === 'dark' ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT];
};
