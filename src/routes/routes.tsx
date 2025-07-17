import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayouts.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { ProductsPage } from '../pages/ProductsPage.tsx';
import { LoginPage } from '../pages/LoginPage.tsx';

export const routes =createBrowserRouter([
  {
    path: '/', element: <MainLayout/>,children:[
      {index: true,element:<HomePage/>},
      {path: 'login', element:<LoginPage/>},
      {path:'/auth/products', element:<ProductsPage/>}
    ]
  }
])
