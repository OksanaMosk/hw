import { IRecipe } from '../../models/IRecipe.ts';
import { FC } from 'react';

type RecipeProps ={
 recipe: IRecipe;
}

export const RecipeComponent:FC<RecipeProps> = ({ recipe }) => {
  const{ id,
    name,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    difficulty,
    caloriesPerServing,
    tags,
    userId,
    image,
    rating,
    reviewCount,
    mealType}=recipe
  return (

    <li className="flex flex-col justify-between w-[650px] gap-2 text-[#404214] box-border bg-[#eef0d3] hover:text-white hover:bg-[#badd86] p-4 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl hover:border-[1px]">
      <div className="flex justify-between w-full">
        <h3  className=" text-2xl font-bold">{name}</h3>
        <div>
          <p>Rating: {rating} 🌟</p>
          <p>Review: {reviewCount}</p>
        </div>
      </div>
      <p className="text-[12px] italic">Tags: {tags.join(  ", "  ).toLowerCase()}</p>
      <div className="flex justify-between text-[12px] gap-3 w-full">
        <img className="w-[250px] object-contain" src={image} alt={name} />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-3 w-full">

            <div className="flex flex-col w-1/2">
              <h5 className="font-bold">Ingredients:</h5>
              <ul>
                {
                  ingredients.map((ingredient:string, index:number)=> <li key={index} >{index+1}. {ingredient}</li>)
                }
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h5 className="font-bold">Time: 🕰️</h5>
              <p>Prepare {prepTimeMinutes} min</p>
              <p>Cook {cookTimeMinutes} min min</p>
              <p>Calories: {caloriesPerServing}</p>
            </div>
          </div>

          <div className="flex-col">
            <h3 className=" font-bold">Instruction: </h3>
            <p>{instructions.join('  ')}</p>
            <p className=" font-bold">Servings: {servings}</p>
            <p>Difficulty Level: {difficulty}</p>
          </div>
        </div>

      </div>
      <div className="flex justify-between w-full text-[12px]">
        <p className="italic">Meal Type: {mealType.join(', ')}</p>
        <div>
          <p>
            Recipe # {id}
          </p>
          <p>
            User id: {userId}
          </p>
        </div>

      </div>

    </li>
  )
};
