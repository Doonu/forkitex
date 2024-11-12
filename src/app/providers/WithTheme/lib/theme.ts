import { breakpoints } from '@shared/constants';
import { DefaultTheme } from 'styled-components';

const Breakpoints: DefaultTheme['breakpoints'] = {
  maxMobile: breakpoints.maxMobile,
  maxTablets: breakpoints.maxTablets,
  maxLaptops: breakpoints.maxLaptops,
  maxDesktops: breakpoints.maxDesktops,
};

export const Theme: DefaultTheme = {
  core: {
    colorPrimary: '#FFFFFF',
    colorSecondary: '#1F2229',
    colorTextPrimary: '#7C8792',
    colorTextSecondary: '#959597',
  },
  breakpoints: Breakpoints,
};
