import { FC, PropsWithChildren } from 'react';

import { GlobalStyle } from './GlobalStyles/global';
import { WithAntdConfig } from './WithAntdConfig';
import { WithTheme } from './WithTheme';

export const WithProviders: FC<PropsWithChildren> = ({ children }) => (
  <WithTheme>
    <WithAntdConfig>
      <GlobalStyle />
      {children}
    </WithAntdConfig>
  </WithTheme>
);
