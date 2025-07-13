
import {IPostDummyModel} from "../models/PostDummyModel.ts";

const endpoint_dummy=import.meta.env.VITE_API_BASE_URL_D

const loadPostsDummy=async ():Promise<IPostDummyModel[]>=>{
    const data = await fetch(endpoint_dummy + '/posts')
        .then(value => value.json())
    return data.posts
}

export {loadPostsDummy}
