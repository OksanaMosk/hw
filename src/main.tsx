import {createRoot} from 'react-dom/client'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersPage} from "./pages/UsersPage.tsx";
import {PostsPage} from "./pages/PostsPage.tsx";
import {CommentsPage} from "./pages/CommentsPage.tsx";
import {ProductsPage} from "./pages/ProductsPage.tsx";
import {MainLayout} from "./layouts/MainLayout.tsx";
import './index.css';


createRoot(document.getElementById('root')!).render(
<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route path={'/users'} element={<UsersPage/>}/>
            <Route path={'/posts'} element={<PostsPage/>}/>
            <Route path={'/comments'} element={<CommentsPage/>}/>
            <Route path={'/products'} element={<ProductsPage/>}/>
        </Route>
    </Routes>
</BrowserRouter>
)
