import {FC, useEffect, useState} from 'react';
import { IUserJsonModel } from '../models/UserJsonModel.ts';
import { loadUsers } from '../services/api_service_jsonplaceholder.ts';
import {UserJsonplaceholderComponent} from "./UserJsonplaceholderComponent.tsx";

export const UsersJsonplaceholderComponent:FC = () => {
    const[users, setUsers]=useState<IUserJsonModel[]>([])

    useEffect(() => {
        async function fetchUsers () {
            const allUsersJson:IUserJsonModel[] = await loadUsers()
            setUsers(allUsersJson)
        }
        fetchUsers().catch(console.error)

    }, []);
    return (
        <ul className="flex flex-wrap justify-center self-center gap-10">
            {
                users.map((user, id:number)=> <UserJsonplaceholderComponent key={id} user={user}/>)
            }
        </ul>
    );
};
