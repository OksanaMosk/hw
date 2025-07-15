import { IUser } from './IUser.ts';

export interface IBase {
  users:IUser[]
  total: number;
  skip: number;
  limit: number;
}
