import { Notification } from '@entities/Notification';
import { Menu, BurgerMenu } from '@features/Menu';
import { MenuIcon } from '@shared/assets';
import { useDevice } from '@shared/hooks';
import { Logo, Location } from '@shared/ui';
import React, { useState } from 'react';

import { SBottomHeader, SHeader, SInfo, STopHeader, STopHeaderContainer } from './header.styles';

export const Header = () => {
  const { isTablets } = useDevice();

  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const handlerOpenMenu = () => {
    setIsOpenBurgerMenu((prev) => !prev);
  };

  return (
    <SHeader>
      <STopHeaderContainer>
        <STopHeader>
          <Logo />
          <SInfo>
            {!isTablets && <Location />}
            {!isOpenBurgerMenu && <Notification />}
            {isTablets && (
              <>
                <MenuIcon isOpen={isOpenBurgerMenu} onClick={handlerOpenMenu} />
                <BurgerMenu isOpen={isOpenBurgerMenu} onClose={handlerOpenMenu} />
              </>
            )}
          </SInfo>
        </STopHeader>
      </STopHeaderContainer>
      {!isTablets && (
        <SBottomHeader>
          <Menu />
        </SBottomHeader>
      )}
    </SHeader>
  );
};
