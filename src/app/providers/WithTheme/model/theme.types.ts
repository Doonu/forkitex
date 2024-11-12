import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    core: {
      colorPrimary: string;
      colorSecondary: string;
      colorTextPrimary: string;
      colorTextSecondary: string;
    };
    breakpoints: {
      maxMobile: number;
      maxTablets: number;
      maxLaptops: number;
      maxDesktops: number;
    };
  }
}
