
import { IProduct } from '../../models/IProduct.ts';
import { useEffect, useState } from 'react';
import { loadAll } from '../../services/api_service.ts';
import { IBaseModel } from '../../models/IBaseModel.ts';
import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard.tsx';

export const ProductsComponent = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    loadAll<IBaseModel & { products: IProduct[] }>('/products').then(
      ({ products }) => setProducts(products)
    );
  }, []);

  return (
    <>
      {products.length > 0 && (
        <>
          <h1 className="flex justify-center text-[#404214] text-5xl mt-10">
            Products
          </h1>
          <ul className="flex flex-wrap justify-center self-center  m-10 gap-10">
            {products.map((product: IProduct) => (
              <li className="flex flex-col justify-between w-[400px] gap-2 text-[#404214] box-border bg-[#eef0d3] hover:text-white hover:bg-[#badd86] p-4 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl hover:border-[1px]" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
