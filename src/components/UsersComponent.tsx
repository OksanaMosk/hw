import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {IBase} from "../models/IBase.ts"
import {UserComponent} from "./UserComponent.tsx";
import {loadAll} from "../services/api_service.ts";


export const UsersComponent= () => {

  const[users, setUsers]=useState<IUser[]>([])

    useEffect(() => {
        loadAll<IBase & {users:IUser[]}>('/users')
            .then (({users})=> setUsers(users)
    )
    }, []);

  return (
    <ul className="flex flex-wrap justify-center self-center gap-10 mb-10 mt-10">
      {
        users.map((user, id:number)=> <UserComponent key={id} user={user}/>)
      }
    </ul>
  );
};

