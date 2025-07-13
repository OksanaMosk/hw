import { UsersComponents } from '../components/users-components/UsersComponents.tsx';
import { Outlet } from 'react-router-dom';


export const UsersPage = () => {

  return (
    <div className="flex min-h-screen">
      <UsersComponents/>

      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

