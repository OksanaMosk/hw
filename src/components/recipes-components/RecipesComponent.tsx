
import { loadAll } from '../../services/api_service.ts';
import { useEffect, useState } from 'react';
import { IRecipe } from '../../models/IRecipe.ts';
import { IBaseModel } from '../../models/IBaseModel.ts';
import { Link } from 'react-router-dom';
import { RecipeCard } from './RecipeCard.tsx';

export const RecipesComponent = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    loadAll<IBaseModel & {recipes: IRecipe[]}>('/recipes').then(
      ({ recipes }) => setRecipes(recipes)
    );
  }, []);

  return (
    <>
      {recipes.length > 0 && (
        <>
          <h1 className="flex justify-center text-[#404214] text-5xl mt-10">
            Recipes
          </h1>
          <ul className="flex flex-wrap justify-center self-center  m-10 gap-10">
            {recipes.map((recipe:IRecipe) => (
              <li
                className="flex flex-col justify-between w-[400px] gap-2 text-[#404214] box-border bg-[#eef0d3] hover:text-white hover:bg-[#badd86] p-4 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl hover:border-[1px]"
                key={recipe.id}
              >
                <Link to={`/recipes/${recipe.id}`}>
                  <RecipeCard recipe={recipe} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
