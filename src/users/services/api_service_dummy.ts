
import {IUserDummyModel} from "../models/UserDummyModel.ts";

const endpoint_dummy=import.meta.env.VITE_API_BASE_URL_D

const loadUsersDummy=async ():Promise<IUserDummyModel[]>=>{
    const data = await fetch(endpoint_dummy + '/users')
        .then(value => value.json())
    return data.users|| data;
}

export {loadUsersDummy}
