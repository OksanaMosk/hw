import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadAll } from '../../services/api_service.ts';
import { IBase } from '../../models/IBase.ts';
import { ICart } from '../../models/ICart.ts';
import { CartComponent } from './CartComponents.tsx';
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
    <div className="flex justify-center mt-10 mb-10" >
      {carts.length === 0 ? (
        <div className=" text-2xl text-[#bf550d]">
          <p>User with ID # {id} has no carts available.</p>
        </div>
      ) : (
        <ul className=" flex justify-center gap-5">
          {carts.map((cart: ICart, index: number) => (
            <CartComponent key={index} cart={cart} />
          ))}
        </ul>
      )}
    </div>
  );
}
