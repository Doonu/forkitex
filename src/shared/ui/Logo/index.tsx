import { Logo as LogoSvg } from '@shared/assets';
import { ERoutes } from '@shared/config';
import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => (
  <Link to={ERoutes.HOME_PAGE}>
    <LogoSvg />
  </Link>
);
