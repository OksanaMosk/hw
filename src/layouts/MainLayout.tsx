import { Menu } from '../components/Menu.tsx';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Menu />
      <main className="flex-grow flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};
