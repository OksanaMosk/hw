import {IPostJsonModel} from "../models/PostJsonModel.ts";

const endpoint_json=import.meta.env.VITE_API_BASE_URL_J

const loadPosts=async ():Promise<IPostJsonModel[]>=>{
    const data = await fetch(endpoint_json + '/posts')
        .then(value => value.json())
    return data
}

export {loadPosts}
