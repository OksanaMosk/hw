import { useForm } from 'react-hook-form';
import { ICar } from '../models/ICar.ts';
import { addCar } from '../service/api_servise.ts';
import { carValidator } from '../validators/carValidator.ts';
import { joiResolver } from '@hookform/resolvers/joi';
import { useState } from 'react';

export const AddYourCarComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICar>({ mode: 'all', resolver: joiResolver(carValidator) });

  const [submitted, setSubmitted] = useState(false);

  const createHandler = (data: ICar) => {
    addCar(data);
    setSubmitted(true);
    reset();

    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div  className=" flex flex-col justify-center w-1/3 ">
      <form onSubmit={handleSubmit(createHandler)} className=" flex flex-col justify-center w-full p-5 gap-10 text-[#404214] box-border bg-[#eef0d3]  border-[4px] border-white   shadow-xl rounded-2xl cursor-pointer  hover:shadow-2xl">
        <div className="h-[40px]">
          <input
            type="text"
            {...register('brand')}
            className="w-full font-bold border border-[#404214] rounded-lg px-3 py-2 outline-none hover:bg-white "
            placeholder="Brand"
          />
          <p className="text-[#404214] text-sm">{errors.brand?.message}</p>
        </div>
        <div className="h-[40px]">
          <input
            type="number"
            {...register('price')}
            className="w-full font-bold border border-[#404214] rounded-lg px-3 py-2 outline-none hover:bg-white"
            placeholder="Price"
          />
          <p className="text-[#404214] text-sm">{errors.price?.message}</p>
        </div>
        <div className="h-[40px]">
          <input
            type="number"
            {...register('year')}
            className="w-full font-bold border border-[#404214] rounded-lg  px-3 py-2 outline-none hover:bg-white"
            placeholder="Year"
          />
          <p className="text-[#404214] text-sm">{errors.year?.message}</p>
        </div>
        <button
          type="submit"
          className="text-white font-bold flex justify-center items-center w-full h-16 bg-[#bab977] border-[4px]  rounded-2xl  border-white hover:bg-[#404214] transition"
        >
          Add Car
        </button>
        {submitted && (
          <p className="text-lime-700 text-center font-bold">
            You submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
};
