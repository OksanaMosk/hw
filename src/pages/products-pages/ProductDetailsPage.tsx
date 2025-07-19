import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { IProduct } from '../../models/IProduct.ts';
import { ProductComponent } from '../../components/products-components/ProductComponent.tsx';
import { loadAll } from '../../services/api_service.ts';
import { MyContext } from '../../context/MyContextProvider.tsx';

import './Product.css';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);

  const { theme } = useContext(MyContext);

  useEffect(() => {
    if (id) {
      loadAll<IProduct>(`/products/${id}`).then(setProduct);
    }
  }, [id]);
  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className={`${theme} flex justify-center w-full`}>
      <ProductComponent product={product} />
    </div>
  );
};
