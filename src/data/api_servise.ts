import {IPostsJsonModel} from "../models/PostsJsonModel.ts";
import {IPostModel} from "../models/PostModel.ts";
import {ICommentsJsonModel} from "../models/CommentsJsonModel.ts";
import {ICommentModel} from "../models/CommentModel.ts";

const endpointPosts=import.meta.env.VITE_API_BASE_URL + "/posts"
// postsconst endpointPosts=import.meta.env.VITE_API_BASE_URL + "/comments"
// Оскільки ці завдання через ліміти не вдалося об'єднати (спільних давало лише декілька PostId), а мене це заїло, бо довго мучилася, пішла шляхом обходу лімітів, так сказати, щоб загрузити, до кожного посту 30 коментарів, так цікавіше

const loadPost= async () :Promise<IPostModel[]> => {
    const responcePost:IPostsJsonModel = await fetch(endpointPosts)
        .then(value => value.json())

    return responcePost.posts
}

const loadComments=async (postId:number) :Promise<ICommentModel[]> =>{
  const endpointPComments=`${import.meta.env.VITE_API_BASE_URL}/posts/${postId}/comments`
    const responseComments: ICommentsJsonModel= await fetch (endpointPComments)
        .then(value=> value.json())

    return responseComments.comments
}
export {loadPost, loadComments}
