
import { useFetch } from '../hooks/useFetch.tsx';
import { RecipeComponent } from './RecipeComponent.tsx';
import { IBaseModel } from '../models/IBaseModel.ts';
import { IRecipe } from '../models/IRecipe.ts';

export const RecipesComponent = () => {

  const defaultValue: IBaseModel = {
    recipes: [] as IRecipe[],
    total: 0,
    skip: 0,
    limit: 0
  };

  const data = useFetch<IBaseModel>('https://dummyjson.com/recipes',defaultValue)
  const recipes=data.recipes;
  console.log(recipes);
  return (
    <>
      <h1 className="flex justify-center font-bold text-3xl text-[#404214] mt-10">Recipes</h1>
    <ul className="flex flex-wrap justify-center self-center  m-10 gap-10">
      {
        recipes.map((recipe) => <RecipeComponent key={recipe.id} recipe={recipe} />)
      }
    </ul>
    </>
  );
};

