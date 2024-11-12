import { useDevice } from '@shared/hooks';
import { Tabs } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SMenu } from './menu.styles';
import { itemsMenu } from '../lib/itemsMenu';
import { useMenuActive } from '../lib/useMenuActive';

export const Menu = () => {
  const navigate = useNavigate();
  const activeKey = useMenuActive();
  const { isTablets } = useDevice();

  return (
    <>
      {!isTablets && (
        <Tabs items={itemsMenu} activeKey={activeKey} onTabClick={(key) => navigate(`/${key}`)} />
      )}
      {isTablets && (
        <SMenu
          onClick={({ key }) => navigate(`/${key}`)}
          defaultSelectedKeys={[activeKey]}
          items={itemsMenu}
        />
      )}
    </>
  );
};
