import { useAppSelector } from '../../redux/hooks/useAppSelector.tsx';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch.tsx';
import { useEffect } from 'react';
import { userAction } from '../../redux/slices/UserSlice.ts';
import { UserComponent } from './UserComponent.tsx';
import { IUser } from '../../models/IUser.ts';

export const UsersComponent = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.userStoreSlice.users);

  useEffect(() => {
    dispatch(userAction.loadUsers());
  }, []);
  return (
    <div className="flex flex-col">
      {users.length > 0 && (
        <>
          <h1 className="flex justify-center text-[#eef0d3]  text-5xl mb-10">
            Users
          </h1>
          <ul className="flex flex-wrap justify-center self-center gap-10">
            {users.map((user: IUser) => (
              <UserComponent key={user.id} user={user} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
