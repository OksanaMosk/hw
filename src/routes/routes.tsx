import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout.tsx';
import { ProductsPage } from '../pages/products-pages/ProductsPage.tsx';
import { RecipesPage } from '../pages/recipes-pages/RecipesPage.tsx';
import { ProductDetailsPage } from '../pages/products-pages/ProductDetailsPage.tsx';
import { RecipeDetailsPage } from '../pages/recipes-pages/RecipeDetailsPage.tsx';


export const routes = createBrowserRouter([
  {
    path: '/', element: <MainLayout />, children: [
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductDetailsPage /> },

      { path: 'recipes', element: <RecipesPage /> },
      { path: 'recipes/:id', element: <RecipeDetailsPage /> },

    ],
  },
]);
