import { Menu } from './components/Menu.tsx';
import { Outlet } from 'react-router-dom';

import './App.css'



  export const App = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Menu />
        <main className="flex-grow flex justify-center items-center mt-10 mb-10">
          <Outlet />
        </main>
      </div>

    );
  };
