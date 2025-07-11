import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {UsersJsonplaceholderComponent} from "../components/UsersComponents/UsersJsonplaceholderComponent.tsx";
import {UsersDummyjsonComponent} from "../components/UsersComponents/UsersDummyjsonComponent.tsx";
import {PostsJsonplaceholderComponent} from "../components/PostsComponents/PostsJsonplaceholderComponent.tsx";
import {PostsDummyjsonComponent} from "../components/PostsComponents/PostsDummyjsonComponent.tsx";
import {CommentsJsonplaceholderComponent} from "../components/CommentsComponents/CommentsJsonplaceholderComponent.tsx";

export const routes =createBrowserRouter([
    {
        path:'/', element:<MainLayout/>,
        children: [
            {path:'users', element:<UsersPage/>,
            children:[
                {path:'jsonplaceholder', element:<UsersJsonplaceholderComponent/>},
                {path:'dummyjson', element:<UsersDummyjsonComponent/>}
            ]},
            {path:'posts', element:<PostsPage/>,
            children:[
                {path:'jsonplaceholder', element:<PostsJsonplaceholderComponent/>},
                {path:'dummyjson', element:<PostsDummyjsonComponent/>}
            ]},
            {path:'comments', element:<CommentsPage/>,
                children:[
                    {path:'jsonplaceholder', element:<CommentsJsonplaceholderComponent/>}
                ]},
        ]
    }
])
