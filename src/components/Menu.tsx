import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="flex w-full justify-center text-xl font-bold bg-lime-100 p-4 shadow-md" >
      <NavLink
        to="/users"
        className={({ isActive }) =>
          isActive
            ? 'text-lime-700'
            : 'text-gray-700 hover:text-lime-600'
        }
      >
        Users  👇
      </NavLink>
    </div>
  );
};
