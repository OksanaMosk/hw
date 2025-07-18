import axios from 'axios';
import { IUserWithTokens } from '../models/IUserWithTokens.ts';
import { IProduct } from '../models/IProduct.ts';
import { IBaseResponseProducts } from '../models/IBaseResponseProducts.ts';
import { retriveLocalStorage } from './helpers.ts';
import { ITokenPair } from '../models/ITokenPair.ts';

type LoginData = {
  username: string;
  password: string;
  expiresInMins: number;
};
//робимо запит на auth
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  headers: {},
});
//робимо для всіх гетів headers.Authorization, потім витягуємо по ключу user з локалстореджа
axiosInstance.interceptors.request.use((requestObject) => {
  if (requestObject.method?.toUpperCase() === 'GET') {
    requestObject.headers.Authorization =
      'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
  }
  return requestObject;
});

//робимо відправку даних на auth/login і отримуємо юзера з токеном, закидаємо в localstorage
export const login = async ({
  username,
  password,
  expiresInMins,
}: LoginData): Promise<IUserWithTokens> => {
  const { data: userWithTokens } = await axiosInstance.post<IUserWithTokens>(
    '/login',
    { username, password, expiresInMins }
  );
  console.log(userWithTokens);
  localStorage.setItem('user', JSON.stringify(userWithTokens));
  return userWithTokens;
};

//робимо запит на auth/продуктс для залогіненого користувача і отримуємо data.products
export const allProducts = async (): Promise<IProduct[]> => {
  const {
    data: { products },
  } = await axiosInstance.get<IBaseResponseProducts>('/products');
  console.log(products);
  return products;
};


//робимо запит відправляємо рефреш на нові токени після 1 хв, оновлюємо токени, присвоєюмо нові токени, перезаписуємо їх знов в локалсторедж
export const refresh = async () => {
  const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
  const {
    data: { accessToken, refreshToken },
  } = await axiosInstance.post<ITokenPair>('/refresh', {
    refreshToken: iUserWithTokens.refreshToken,
    expiresInMins: 1,
  });
  iUserWithTokens.accessToken = accessToken;
  iUserWithTokens.refreshToken = refreshToken;
  localStorage.setItem('user', JSON.stringify(iUserWithTokens));
};
