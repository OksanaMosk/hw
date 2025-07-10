import {FC, useEffect, useState} from 'react';
import {IProductsModel} from "../../models/ProductModel.ts";
import {loadProducts} from "../../data/api_service.ts";
import {ProductComponent} from "../product/ProductComponent.tsx";

export const ProductsComponent:FC = () => {
    const[products, setProducts]=useState<IProductsModel[]>([])
    useEffect(() => {
       async function fetchProduct(){
           const allProducts= await loadProducts()
           setProducts(allProducts)
       }
fetchProduct().catch(console.error)
    }, []);

    return (
        <ul className="flex flex-wrap justify-center self-center  m-10 gap-10">
            {
                products.map(product=> <ProductComponent key={product.id} product={product}/>)
            }
        </ul>
    );
};

