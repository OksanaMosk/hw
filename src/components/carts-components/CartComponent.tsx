import { ICart } from '../models/ICart.ts';
import { FC } from 'react';

interface CartsProps {
  cart: ICart;
}


export const CartComponent:FC<CartsProps> = ({cart}) => {
const {   id,
  total,
  discountedTotal,
  userId,
  totalProducts,
  totalQuantity }=cart
  return (
    <li
      className="flex flex-col text-[10px] justify-between
   shadow-l rounded-xl   text-[#404214] bg-[#bab977] p-1
    cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-2xl "
    >
      <p>id: {id}</p>
      <p>Total: {total}</p>
      <p>User Id: {userId}</p>
      <p>Discounted Total: {discountedTotal}</p>
      <p>Total Quantity:{totalQuantity}</p>
      <p>Total Products:{totalProducts}</p>
    </li>
  );
};

