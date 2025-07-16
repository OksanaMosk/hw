import { ICar } from '../models/ICar.ts';
import { FC } from 'react';

type CarProps = {
  car: ICar;
};

export const CarComponent: FC<CarProps> = ({ car }) => {
  const { id, brand, price, year } = car;
  return (
    <li className=" flex flex-col justify-center w-1/6 min-w-[200px] p-2 h-40 gap-1 text-[#404214] box-border bg-[#eef0d3]  border-[4px] border-white hover:text-[#ffffff] hover:bg-[#bab977] shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl">
      <p>ID: {id}</p>
      <h3 className="font-bold">Brand: {brand}</h3>
      <p>Year: {year}</p>
      <p  className="font-bold">Price: ${price}</p>
    </li>
  );
};
