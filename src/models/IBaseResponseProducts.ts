import { IProduct } from './IProduct.ts';

export interface IBaseResponseProducts {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
