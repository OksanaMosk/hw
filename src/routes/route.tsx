import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from '../pages/CommentsPage.tsx';
import { UsersJsonplaceholderComponent } from '../users/components/UsersJsonplaceholderComponent.tsx';
import { UsersDummyjsonComponent } from '../users/components/UsersDummyjsonComponent.tsx';
import { PostsJsonplaceholderComponent } from '../posts/components/PostsJsonplaceholderComponent.tsx';
import { PostsDummyjsonComponent } from '../posts/components/PostsDummyjsonComponen.tsx';
import { CommentsJsonplaceholderComponent } from '../comments/components/CommentsJsonplaceholderComponent.tsx';
import { CommentsDummyjsonComponent } from '../comments/components/CommentsDummyjsonComponent.tsx';

export const routes=createBrowserRouter([
    {
        path:'/', element: <MainLayout/>,
        children:[
            {path:'users', element:<UsersPage/>,
                children:[
                    {path:'jsonplaceholder', element:<UsersJsonplaceholderComponent/>},
                    {path:'dummyjson', element:<UsersDummyjsonComponent/>}
                ]
            },
            {path:'posts', element:<PostsPage/>,
                children:[
                    {path:'jsonplaceholder', element:<PostsJsonplaceholderComponent/>},
                    {path:'dummyjson', element:<PostsDummyjsonComponent/>}
                ]
            },
            {path:'comments', element:<CommentsPage/>,
                children:[
                    {path:'jsonplaceholder', element:<CommentsJsonplaceholderComponent/>},
                    {path:'dummyjson', element:<CommentsDummyjsonComponent/>}
                ]
            }
        ]}
])
