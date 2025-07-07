import {IPost} from "../models/PostModel.ts";

const endpointPost=import.meta.env.VITE_API_BASE_URL + '/posts'


const loadPost= async ():Promise<IPost[] >=> {
    return await fetch(endpointPost)
        .then(res =>
            res.json()
        )
}

export {loadPost}
