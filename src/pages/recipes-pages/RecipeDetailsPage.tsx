import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { loadAll } from '../../services/api_service.ts';
import { RecipeComponent } from '../../components/recipes-components/RecipeComponent.tsx';
import { IRecipe } from '../../models/IRecipe.ts';
import { MyContext } from '../../context/MyContextProvider.tsx';

export const RecipeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { theme, changeTheme } = useContext(MyContext);
  const [recipe, setRecipe] = useState<IRecipe | null>(null);

  useEffect(() => {
    if (id) {
      loadAll<IRecipe>(`/recipes/${id}`).then(setRecipe);
    }
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  const handlerDark = () => {
    changeTheme('dark');
  };
  const handlerLight = () => {
    changeTheme('light');
  };

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <button
        className={`absolute top-5 right-5 w-[150px] box-border bg-[#eef0d3] hover:text-white hover:bg-[#badd86] p-2 rounded-xl cursor-pointer hover:border-[1px] ${
          theme === 'dark'
            ? 'text-lime-700 underline'
            : 'text-[#404214] hover:text-lime-600'
        }`}
        onClick={handlerDark}
      >
        Theme Dark
      </button>
      <button
        className={`absolute top-5 right-45 w-[150px] box-border bg-[#eef0d3] hover:text-white hover:bg-[#badd86] p-2 rounded-xl cursor-pointer hover:border-[1px] ${
          theme === 'light'
            ? 'text-lime-700 underline'
            : 'text-[#404214] hover:text-lime-600'
        }`}
        onClick={handlerLight}
      >
        Theme Light
      </button>
      <div className="flex justify-center my-10 mt-[80px]">
        <RecipeComponent recipe={recipe} />
      </div>
    </div>
  );
};
