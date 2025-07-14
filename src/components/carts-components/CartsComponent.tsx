import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadAll } from '../../services/api_service.ts';
import { IBase } from '../../models/IBase.ts';
import { ICart } from '../../models/ICart.ts';
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
        <div className="text-[#bf550d] z-10">
          <p>User with ID # {id} has no carts available.</p>
        </div>
      ) : (
        <ul  className=" flex gap-5 mr-5
    ">
          {carts.map((cart: ICart, index: number) => (
            <CartComponent key={index} cart={cart} />
          ))}
        </ul>
      )}
    </div>
  );
}
