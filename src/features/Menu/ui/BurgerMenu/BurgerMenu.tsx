import { Menu } from '@features/Menu';
import { useDevice } from '@shared/hooks';
import { Location } from '@shared/ui';
import React, { FC } from 'react';

import { SDrawer } from './burgerMenu.styles';
import { BurgerMenuProps } from '../../models/burgerMenu.types';

export const BurgerMenu: FC<BurgerMenuProps> = ({ onClose, isOpen }) => {
  const { isTablets } = useDevice();

  return (
    <SDrawer onClose={onClose} open={isOpen} getContainer={false}>
      <Menu />
      {isTablets && <Location />}
    </SDrawer>
  );
};
