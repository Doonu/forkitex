import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme } from '../lib/theme';

export const WithTheme: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>
);
