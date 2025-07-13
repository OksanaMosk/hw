import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadAll } from '../../services/api_service.ts';
import { IBase } from '../models/IBase.ts';
import { ICart } from '../models/ICart.ts';
import { CartComponent } from './CartComponent.tsx';
export const CartsComponent = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadAll<IBase & { carts: ICart[] }>(`/carts/user/${id}`)
        .then(({ carts }) => {

          setCarts(carts);
        });
    }
  }, [id]);


  return (
    <div >
      {carts.length === 0 ? (
        <div className="text-red-700 z-10">
          <p>User with ID # {id} has no carts available.</p>
        </div>
      ) : (
        <ul  className=" w-[450px] flex flex-col mr-5 gap-1 p-1 bg-white shadow-lg rounded-xl z-10
    ">
          {carts.map((cart: ICart, index: number) => (
            <CartComponent key={index} cart={cart} />
          ))}
        </ul>
      )}
    </div>
  );
}
