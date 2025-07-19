import { FC } from 'react';

import { IRecipe } from '../../models/IRecipe.ts';



export const RecipeCard:FC<{recipe:IRecipe}> = ({recipe}) => (
  <div>
    <div  className="flex justify-between">
      <h3 className="font-bold text-lg text-[#bf550d]">
      {recipe.name}
    </h3>
      <div className="flex flex-col justify-center items-center">
        🕰
        <h5 className="font-bold">Time:️</h5>
        <p>Prepare {recipe.prepTimeMinutes} min</p>
        <p>Cook {recipe.cookTimeMinutes} min min</p>
        <p>Calories: {recipe.caloriesPerServing}</p>
      </div>
    </div>
    <img
      className="imgHero max-w-[200px] object-contain rounded shadow-lg"
      src={recipe.image}
      alt={recipe.name}

    />


  </div>
);
