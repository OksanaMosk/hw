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

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  headers: {},
});

axiosInstance.interceptors.request.use((requestObject) => {
  if (requestObject.method?.toUpperCase() === 'GET') {
    requestObject.headers.Authorization =
      'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
  }
  return requestObject;
});

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

export const allProducts = async (): Promise<IProduct[]> => {
  const {
    data: { products },
  } = await axiosInstance.get<IBaseResponseProducts>('/products');
  console.log(products);
  return products;
};

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
