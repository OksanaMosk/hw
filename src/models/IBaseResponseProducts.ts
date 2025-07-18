import { IProduct } from './IProduct.ts';

export interface IBaseResponseProducts {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
//модель відповіді з продуктами з бази даних
