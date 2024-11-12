import { ThemeConfig } from 'antd/es/config-provider/context';

import { Theme } from '../../WithTheme/lib/theme';

export const antdTheme: ThemeConfig = {
  token: {},
  components: {
    Tabs: {
      inkBarColor: Theme.core.colorSecondary,
      itemSelectedColor: Theme.core.colorSecondary,
      itemColor: Theme.core.colorTextSecondary,
      itemHoverColor: Theme.core.colorSecondary,
      itemActiveColor: Theme.core.colorSecondary,
    },
    Menu: {},
  },
};
