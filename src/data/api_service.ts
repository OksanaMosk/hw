import {IProductsModel} from "../models/ProductModel.ts";
import {IProductsJsonModel } from "../models/ProductsJsonModel.ts"

const endpointProducts = import.meta.env.VITE_API_BASE_URL;

const loadProducts= async ():Promise<IProductsModel[]> => {
  const responceProducts:IProductsJsonModel = await fetch(endpointProducts + '/products')
        .then(value => value.json())
   return responceProducts.products

}
export {loadProducts}
