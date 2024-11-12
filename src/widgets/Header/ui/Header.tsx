import { Menu } from '@features/Menu';
import { Logo } from '@shared/ui';
import React, { useState } from 'react';

import { SBottomHeader, SHeader, STopHeader, STopHeaderContainer } from './header.styles';
import Location from './Location/Location';

export const Header = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const handlerOpenMenu = () => {
    setIsOpenBurgerMenu((prev) => !prev);
  };

  return (
    <SHeader>
      <STopHeaderContainer>
        <STopHeader>
          <Logo />
          <Location />
        </STopHeader>
      </STopHeaderContainer>
      <SBottomHeader>
        <Menu />
      </SBottomHeader>
    </SHeader>
  );
};
