import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <ul className="flex w-full justify-evenly text-xl font-bold bg-lime-100 p-4 shadow-md">
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? 'text-lime-700 underline'
              : 'text-[#404214] hover:text-lime-600'
          }
        >
          Products
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? 'text-lime-700 underline'
              : 'text-[#404214] hover:text-lime-600'
          }
        >
          Recipes
        </NavLink>
      </li>
    </ul>
  );
};
