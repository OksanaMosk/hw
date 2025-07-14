import { IProduct } from '../../models/ICart.ts';
import { FC } from 'react';

type ProductProps={
  product: IProduct
}

export const ProductComponent:FC<ProductProps> = ({product}) => {
  const {id, title, price, quantity, total, discountPercentage, discountedTotal, thumbnail }=product
  return (
    <li
      className=" flex flex-col gap-1 text-[#404214] text-[16px] box-border border-[1px] border-white p-1"
    >
      <div className=" flex justify-between">
        <h5 className="font-bold text-[16px] text-[#bf550d]">{title}</h5>
        <p>id: {id}</p>
      </div>

     <img className="w-[70px] object-contain" src={thumbnail} alt={title} />
      <p>Discount %: {discountPercentage}</p>
      <div className=" flex justify-between">
          <p className="">Price: {price.toFixed(2)} X {quantity} pcs</p>
          <p>Total $: {total.toFixed(2)}</p>
        </div>
      <div className="flex flex-col items-end">
        <p className="font-bold">Discounted $: {discountedTotal}</p>

      </div>
    </li>
  );
};
