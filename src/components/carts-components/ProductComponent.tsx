import { IProduct } from '../../models/ICart.ts';
import { FC } from 'react';

type ProductProps={
  product: IProduct
}

export const ProductComponent:FC<ProductProps> = ({product}) => {
 const {id, title, price, quantity, total, discountPercentage, discountedTotal, thumbnail }=product
  return (
    <li
      className=" flex gap-1 justify-between text-[#404214] text-[8px]  h-[70px] box-border border-[1px] border-white p-1"
    >
      <img className="w-[65px] object-contain" src={thumbnail} alt={title} />

      <div className="w-1/3 flex flex-col">
          <h5 className="font-bold text-[10px] text-[#bf550d]">{title}</h5>
        <p  className="">Price: {price.toFixed(2)} X {quantity} pcs</p>
      </div>


      <div className="w-1/3 flex flex-col items-end ">
        <p>id: {id}</p>
        <div className="flex flex-col items-end">
          <p className="font-bold text-[10px]">Total $: {total.toFixed(2)}</p>
          <p>Discounted $: {discountedTotal}</p>
          <p>Discount %: {discountPercentage}</p>
        </div>
      </div>

    </li>
  );
};

