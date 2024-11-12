import { NotFoundPage } from '@pages/NotFoundPage';
import { ERoutes } from '@shared/config';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePageLazy = lazy(() => import('../../pages/HomePage/ui/HomePage'));

export const privateRoutes = createBrowserRouter([
  {
    path: ERoutes.HOME_PAGE,
    errorElement: <NotFoundPage />,
    children: [
      { path: ERoutes.HOME_PAGE, element: <HomePageLazy /> },
      { path: ERoutes.ADVANTAGES_PAGE },
    ],
  },
]);
