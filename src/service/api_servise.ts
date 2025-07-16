import axios from 'axios';
import { ICar } from '../models/ICar.ts';

const axiosInstance = axios.create({
  baseURL: 'http://owu.linkpc.net/carsAPI/v1',
  headers: { 'Content-Type': 'application/json' },
});

export const getCars = async (): Promise<ICar[]> => {
  const axiosResponse = await axiosInstance.get<ICar[]>('/cars');
  const cars = axiosResponse.data;
  return cars;
};
export const addCar  = async (car: ICar)=> {
  await axiosInstance.post('/cars', car);
};
