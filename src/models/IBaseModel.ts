import { IRecipe } from './IRecipe.ts';

export interface IBaseModel {
  recipes: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}
