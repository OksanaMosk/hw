import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="w-1/15  min-h-screen text-xl font-bold bg-lime-100 p-4 shadow-md">

  <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? 'text-lime-700'
              : 'text-gray-700 hover:text-lime-600 transition '
          }
        >
          Users  👇
        </NavLink>
</div>
  );
};

