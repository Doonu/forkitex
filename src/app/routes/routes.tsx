import { NotFoundPage } from '@pages/NotFoundPage';
import { ERoutes } from '@shared/config';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import DefaultScreen from '../layout/DefaultScreen';

const HomePageLazy = lazy(() => import('../../pages/HomePage/ui/HomePage'));
const MockPageLazy = lazy(() => import('../../pages/MockPage'));

export const privateRoutes = createBrowserRouter([
  {
    path: ERoutes.HOME_PAGE,
    errorElement: <NotFoundPage />,
    element: <DefaultScreen />,
    children: [
      { path: ERoutes.HOME_PAGE, element: <HomePageLazy /> },
      { path: ERoutes.ADVANTAGES_PAGE, element: <MockPageLazy /> },
      { path: ERoutes.PROMO_PAGE, element: <MockPageLazy /> },
      { path: ERoutes.NEW_SUBSCRIBERS, element: <MockPageLazy /> },
      { path: ERoutes.STOCKS_PAGE, element: <MockPageLazy /> },
      { path: ERoutes.TARIFFS_PAGE, element: <MockPageLazy /> },
      { path: ERoutes.TECHNOLOGIES_eSIM_PAGE, element: <MockPageLazy /> },
    ],
  },
]);
