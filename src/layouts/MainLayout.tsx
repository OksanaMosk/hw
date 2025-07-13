import { Menu } from '../components/Menu.tsx';
import { Outlet } from 'react-router-dom';


export const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Menu />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

