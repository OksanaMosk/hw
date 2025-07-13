
import { NavLink} from "react-router-dom";

export  const Menu = () => {
    return (

        <ul className=" flex w-full justify-evenly text-xl font-bold bg-lime-100 p-4 shadow-md">
          <li>
            <NavLink
              to="users"
              className={({ isActive }) =>
                isActive
                  ? 'text-lime-700 underline'
                  : 'text-gray-700 hover:text-lime-600 transition '
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="posts"
              className={({ isActive }) =>
                isActive
                  ? 'text-lime-700 underline'
                  : 'text-gray-700 hover:text-lime-600 transition '
              }
            >
              Posts
            </NavLink>
          </li>
        </ul>
    );
};

