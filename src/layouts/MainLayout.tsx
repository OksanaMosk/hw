import { Menu } from '../components/Menu.tsx';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { MyContext } from '../context/MyContextProvider.tsx';

export const MainLayout = () => {
  const [themeColor, setThemeColor] = useState('light');

  return (
    <MyContext.Provider
      value={{
        theme: themeColor,
        changeTheme: (themeValue: string) => {
          setThemeColor(themeValue);
        },
      }}
    >
      <div className="min-h-screen flex flex-col">
        <Menu />
        <main className="flex-grow flex justify-center items-center">
          <Outlet />
        </main>
      </div>
    </MyContext.Provider>
  );
};
