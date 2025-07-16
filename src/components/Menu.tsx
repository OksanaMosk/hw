import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="flex w-full justify-evenly text-xl font-bold bg-lime-100 p-4 shadow-md" >
      <NavLink
        to="/cars?page=1"
        className={({ isActive }) =>
          isActive
            ? 'text-lime-700'
            : 'text-[#404214] hover:text-lime-600'
        }
      >
 Cars🚘
      </NavLink>
      <NavLink
        to="/cars/add"
        className={({ isActive }) =>
          isActive
            ? 'text-lime-700'
            : 'text-[#404214] hover:text-lime-600'
        }
      >
        Add your car!✅
      </NavLink>
    </div>
  );
};
