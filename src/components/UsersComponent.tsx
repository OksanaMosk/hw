

import { UserComponent } from './UserComponent.tsx';
import { useEffect } from 'react';

import { useAppSelector } from '../redux/hooks/useAppSelector.tsx';
import { useAppDispatch } from '../redux/hooks/useAppDispatch.tsx';
import {userSliceAction } from '../redux/slices/userSlice/UserSlice.ts';

export const UsersComponent = () => {
  const { users } = useAppSelector(({ userSlice }) => userSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
  dispatch(userSliceAction.loadUsers())

  }, []);

  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <UserComponent key={user.id} user={user} />
      ))}
    </div>
  );
};

