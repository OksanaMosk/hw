import { RecipesComponent } from '../../components/recipes-components/RecipesComponent.tsx';
import { Outlet } from 'react-router-dom';

export const RecipesPage = () => {
  return (
    <div>
      <RecipesComponent/>
      <Outlet/>
    </div>
  );
};

