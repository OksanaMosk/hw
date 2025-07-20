import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <ul className="flex w-full justify-evenly text-xl font-bold bg-lime-100 p-4 shadow-md">
      <li>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? 'text-lime-700 underline'
              : 'text-[#404214] hover:text-lime-600'
          }
        >
       Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive
              ? 'text-lime-700 underline'
              : 'text-[#404214] hover:text-lime-600'
          }
        >

          Posts
        </NavLink>
      </li>


      <li>
        <NavLink
          to="/comments"
          className={({ isActive }) =>
            isActive
              ? 'text-lime-700 underline'
              : 'text-[#404214] hover:text-lime-600'
          }
        >
          Comments
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/complex"
          className={({ isActive }) =>
            isActive
              ? 'text-lime-700 underline'
              : 'text-[#404214] hover:text-lime-600'
          }
        >
        Complex
        </NavLink>
      </li>
    </ul>
  );
};
