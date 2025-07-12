import {ICommentJsonModel} from "../models/CommentJsonModel.ts";

const endpoint_json=import.meta.env.VITE_API_BASE_URL_J

const loadComments=async ():Promise<ICommentJsonModel[]>=>{
    const data = await fetch(endpoint_json + '/comments')
        .then(value => value.json())
    return data
}

export {loadComments}
