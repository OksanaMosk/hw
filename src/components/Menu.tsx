import { NavLink} from "react-router-dom";

export const Menu = () => {
    return (
        <div className="w-[8vw] min-h-screen bg-lime-100 p-4 text-xl  shadow-md">
            <ul className="flex flex-col gap-6 text-lg text-xl font-bold">
                <li className="w-full shadow-xl">
                    <NavLink to="users"  className={({ isActive }) =>
                        isActive
                            ? "text-lime-700 underline"
                            : "text-gray-700 hover:text-lime-600 transition "
                    } >Users</NavLink>
                </li>
                <li className="w-full shadow-xl">
                    <NavLink to="posts"  className={({ isActive }) =>
                        isActive
                            ? "text-lime-700 underline"
                            : "text-gray-700 hover:text-lime-600 transition "
                    }>Posts</NavLink>
                </li>
                <li className="w-full shadow-xl">
                    <NavLink to="comments"  className={({ isActive }) =>
                        isActive
                            ? "text-lime-700 underline"
                            : "text-gray-700 hover:text-lime-600 transition "
                    }>Comments</NavLink>
                </li>
            </ul>
        </div>
    );
};
