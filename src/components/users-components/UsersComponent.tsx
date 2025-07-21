import { useEffect, useState } from 'react';
import { IUser } from '../../models/IUser.ts';
import { loadUsers } from '../../services/api_service.ts';
import { IBase } from '../../models/IBase.ts';
import { UserComponent } from './UserComponent.tsx';
import { useSearchParams } from 'react-router-dom';
import { PaginationComponent } from '../PaginationComponent.tsx';

export const UsersComponent = () => {
  const [searchParams] = useSearchParams();
  const [users, setUsers] = useState<IUser[]>([]);
  const currentPage = searchParams.get('page') || '1';
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadUsers(currentPage).then(({ users, total }: IBase) => {
      setUsers(users);
      setTotal(total);
    });
  }, [searchParams]);

  return (
    <>
      <ul className="flex flex-wrap justify-center self-center gap-10 mb-10 mt-10">
        {users.map((user: IUser) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </ul>
      <PaginationComponent limit={30} total={total} />
    </>
  );
};
