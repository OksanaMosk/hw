import { IUser } from '../models/IUser.ts';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks/useAppSelector.tsx';

type UserProps= {
  user: IUser
}

export const UserComponent:FC<UserProps> = ({user} ) => {
  const{id}=useParams()

  const {userSlice:{user}}=useAppSelector(state => state)
  useEffect(() => {

  }, [id]);

  return (
  <li>{user.id} {user.name}</li>
  )
};
