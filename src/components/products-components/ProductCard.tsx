import { FC } from 'react';
import { IProduct } from '../../models/IProduct.ts';

export const ProductCard: FC<{ product: IProduct }> = ({ product }) => (
  <div>
    <h3 className="font-bold text-lg text-[#bf550d]">
      {product.title}
      <span className="italic">(Brand: {product.brand})</span>
    </h3>
    <p className="text-lg">Price: ${product.price.toFixed(2)}</p>
    <img
      className="imgHero max-w-[200px] object-contain rounded shadow-lg"
      src={product.thumbnail}
      alt={product.title}
    />
  </div>
);
