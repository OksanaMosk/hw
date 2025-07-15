import { useEffect, useState } from 'react';
import { loadAll } from '../../services/api_service.ts';
import { IUser } from '../../models/IUser.ts';
import { UserComponents } from './UserComponents.tsx';
import { IBase } from '../../models/IBase.ts';

export const UsersComponents = () => {
  const[users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    loadAll<IBase & {users:IUser[]}>('/users')
      .then(({users})=>setUsers(users))
  }, []);

  return (
    <ul className="flex flex-wrap justify-center self-center gap-10 mb-10 mt-10">
      {users.map((user:IUser) => <UserComponents key={user.id} user={user}/>)}
    </ul>
  );
};
