import {Menu} from "../components/Menu.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

