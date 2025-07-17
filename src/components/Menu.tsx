import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <ul className="flex w-full justify-evenly text-xl font-bold bg-lime-100 p-4 shadow-md" >

      <li><NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-lime-700 underline'
            : 'text-[#404214] hover:text-lime-600'
        }
      >
      Home
      </NavLink>
      </li>


      <li><NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? 'text-lime-700 underline'
            : 'text-[#404214] hover:text-lime-600'
        }
      >
   Login
      </NavLink>
      </li>

      <li  className=" flex flex-col items-center gap-1">
        <NavLink
        to="/auth/products"
        className={({ isActive }) =>
          isActive
            ? 'text-lime-700 underline'
            : 'text-[#404214] hover:text-lime-600'
        }
      >
      Products

      </NavLink>
        <span className='text-xs italic'>(only for authorized users)
        </span>
      </li>
    </ul>
  );
};
