import { ICart } from '../../models/ICart.ts';
import { FC } from 'react';
import { ProductsComponent } from './ProductsComponent.tsx';

type CartsProps= {
  cart: ICart;
}


export const CartComponent:FC<CartsProps> = ({cart}) => {
const {   id,
  total,
  discountedTotal,
  userId,
  totalProducts,
  products,
  totalQuantity }=cart
  return (
    <li
      className="w-[300px] justify-between flex flex-col gap-1 text-[10px] text-[#404214] box-border bg-[#eef0d3]  border-[1px] border-white hover:text-[#ffffff] hover:bg-[#bab977] p-2 shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl"
    >
      <div className="flex justify-between">
        <p>id: {id}</p>
        <p>User Id: {userId}</p>
      </div>
      <ProductsComponent products={products}/>
      <div>
        <div className="flex justify-between ">
          <p>Total Products:{totalProducts}</p>
          <p className=" text-[12px]">$: {total}</p>
        </div>

        <div className="flex justify-between shadow-md text-[14px] text-[#bf550d] ">
          <p>Total Quantity:{totalQuantity}</p>
          <p>Discounted $: {discountedTotal}</p>
        </div>
      </div>

    </li>
  );
};

