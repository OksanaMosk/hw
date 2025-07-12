import {ICommentDummyModel} from "../models/CommentDummyModel.ts";

const endpoint_dummy=import.meta.env.VITE_API_BASE_URL_D

const loadCommentsDummy=async ():Promise<ICommentDummyModel[]>=>{
    const data = await fetch(endpoint_dummy + '/comments')
        .then(value => value.json())
    return data.comments
}

export {loadCommentsDummy}
