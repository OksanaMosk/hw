import { IProduct } from '../../models/ICart.ts';
import { FC } from 'react';
import { ProductComponent } from './ProductComponent.tsx';

type ProductsProps={
  products: IProduct[]
}


export const ProductsComponent:FC<ProductsProps> = ({products}) => {
  return (
    <ul>
      {products.map((product:IProduct) => <ProductComponent key={product.id} product={product}></ProductComponent>)}
    </ul>
  );
};

