import {ICommentModel} from "../models/CommentModel.ts";

const endpointComments =import.meta.env.VITE_API_BASE_URL + '/comments'

const loadComment=async ():Promise<ICommentModel[]>=> {
  return await fetch(endpointComments)
        .then(value=> value.json())
}
export {loadComment}
