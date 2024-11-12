import { ConfigProvider } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { antdTheme } from '../lib/antdTheme';

export const WithAntdConfig: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
);
