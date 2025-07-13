import {NavLink, Outlet} from "react-router-dom";


export  const CommentsPage = () => {
    return (
        <div className="flex flex-col">

            <div className="w-[15vw] bg-lime-100 p-4 shadow-md">
                <ul className="flex flex-col gap-6 text-lg text-xl font-bold">
                    <li className="w-full shadow-xl">
                        <NavLink
                            to="jsonplaceholder"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-lime-700 underline"
                                    : "text-gray-700 hover:text-lime-600 transition"
                            }
                        >
                            CommentsJson
                        </NavLink>
                    </li>
                    <li className="w-full shadow-xl">
                        <NavLink
                            to="dummyjson"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-lime-700 underline"
                                    : "text-gray-700 hover:text-lime-600 transition"
                            }
                        >
                            CommentsDummy
                        </NavLink>
                    </li>
                </ul>
            </div>


            <div className="w-full p-6">
                <Outlet />
            </div>
        </div>
    );
};
