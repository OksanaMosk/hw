import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { UsersPage } from '../pages/UsersPage.tsx';
import { PostsPage } from '../pages/PostsPage.tsx';

export const routes=createBrowserRouter([
  {path:'/', element:<MainLayout/>, children:[
      {path:'users', element:<UsersPage/>},
      {path: 'users/:id', element:<UsersPage/>},
      {path:'posts', element:<PostsPage/>}
    ]}
])
