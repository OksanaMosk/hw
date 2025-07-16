import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { AddYourCarPage } from '../pages/AddYourCarPage.tsx';
import { CarsPage } from '../pages/CarsPage.tsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'cars', element: <CarsPage /> },
      { path: 'cars/add', element: <AddYourCarPage /> },
    ],
  },
]);
