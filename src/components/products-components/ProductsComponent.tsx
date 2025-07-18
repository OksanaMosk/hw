import { useEffect, useState } from 'react';
import { allProducts, refresh } from '../../services/api_service.ts';
import { IProduct } from '../../models/IProduct.ts';
import { ProductComponent } from './ProductComponent.tsx';

//це вже робили сто раз, можна не розписувати, але добавляємо рефреш, якшо пройшов час, перезавантажуємо
export const ProductsComponent = () => {
  const[products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    allProducts()
      .then(products=>setProducts(products))
      .catch(()=>{
        refresh().then(()=> setProducts(products)
        )
      })
  }, []);
  return (
    <ul className="flex flex-wrap justify-center self-center  m-10 gap-10">
      {
        products.map((product) => <ProductComponent key={product.id} product={product} />)
      }
    </ul>
  );
};

