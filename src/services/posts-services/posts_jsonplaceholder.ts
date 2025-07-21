import {IPostJsonModel} from "../../models/post-models/PostJsonModel.ts";

const endpoint_json=import.meta.env.VITE_API_BASE_URL_J

const loadPosts=async ():Promise<IPostJsonModel[]>=>{
    return  await fetch(endpoint_json + '/posts')
        .then(value => value.json())

}

export {loadPosts}
