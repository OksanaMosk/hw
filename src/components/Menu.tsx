import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="w-[70px]  min-h-screen text-xl font-bold bg-lime-100 p-4 shadow-md" >

  <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? 'text-lime-700 sticky top-[50vh] transform -translate-y-1/2 text-[16px]'
              : 'text-gray-700 hover:text-lime-600 transition text-[16px]'
          }
        >
          Users  👉
        </NavLink>
</div>
  );
};

