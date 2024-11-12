import { Header } from '@widgets/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultScreen = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default DefaultScreen;
