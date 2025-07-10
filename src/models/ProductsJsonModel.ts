import {IProductsModel} from "./ProductModel.ts";

export interface IProductsJsonModel  {
  products: IProductsModel[];
  total: number;
  skip: number;
  limit: number;
}
