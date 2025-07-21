import {IUserJsonModel} from "../../models/user-models/UserJsonModel.ts";

const endpoint_json=import.meta.env.VITE_API_BASE_URL_J

const loadUsers=async ():Promise<IUserJsonModel[]>=>{
      return await fetch(endpoint_json + '/users')
        .then(value => value.json())
}

export {loadUsers}
