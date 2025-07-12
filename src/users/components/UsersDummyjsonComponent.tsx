import {useEffect, useState} from "react";

import {IUserDummyModel} from "../models/UserDummyModel.ts";
import {UserDummyjsonComponent} from "./UserDummyjsonComponent.tsx";
import { loadUsersDummy } from '../services/api_service_dummy.ts';


export const UsersDummyjsonComponent = () => {
    const[users, setUsers]=useState<IUserDummyModel[]>([])

    useEffect(() => {
        async function fetchUsersDummy () {
            const allUsersDummy:IUserDummyModel[] = await loadUsersDummy()
            setUsers(allUsersDummy)
        }
        fetchUsersDummy().catch(console.error)

    }, []);
    return (
        <ul className="flex flex-wrap justify-center self-center gap-10">
            {
                users.map((user, id:number)=> <UserDummyjsonComponent key={id} user={user}/>)
            }
        </ul>
    );
};
