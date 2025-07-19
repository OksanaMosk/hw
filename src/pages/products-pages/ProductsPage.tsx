
import { ProductsComponent } from '../../components/products-components/ProductsComponent.tsx';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContextProvider.tsx';

import './Product.css';

export const ProductsPage = () => {

  const {theme}=useContext(MyContext)

  return (
  <div className={theme}>
      <ProductsComponent/>
      <Outlet/>
    </div>
  );
};

