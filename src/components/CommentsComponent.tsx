import {FC,  useEffect, useState} from 'react';
import { ICommentModel } from '../models/CommentModel.ts';
import { loadComments } from '../data/api_servise.ts';
import {CommentComponent} from './CommentComponent.tsx'



type CommentsProps = {
    postId: number;

};


export const CommentsComponent:FC<CommentsProps> = ({postId}) => {
  const [comments, setComments]=useState<ICommentModel[]>([])
    const[loading, setLoading]=useState<boolean>(false)
  useEffect(() => {
      setLoading(true);

      async function fetchComments(){
     const allComments=await loadComments(postId)

      const filteredComments=allComments.filter((comment)=> comment.postId===postId)
     setComments(filteredComments)
       setLoading(false);
   }

   fetchComments().catch(() => setLoading(false));

  }, [postId]);


    if (loading) {
        return (
            <p className="absolute top-1/2 left-1/2 w-[50%] -translate-x-1/2 -translate-y-1/2
        flex flex-col gap-1 pl-4 text-[#404214] bg-white shadow-lg rounded-xl z-10">
                Loading comments...
            </p>
        );
    }

    if (comments.length===0 ) {
        return <p className="absolute top-1/2 left-1/2 w-[50%] -translate-x-1/2 -translate-y-1/2
    flex flex-col gap-1 pl-4 text-[#404214] bg-white shadow-lg rounded-xl z-10">No comments...</p>
    }


  return (
    <ul
      className="absolute top-1/2 left-1/2 w-[50%] -translate-x-1/2 -translate-y-1/2
    flex flex-col gap-1 p-1 bg-white shadow-lg rounded-xl z-10
    ">
      {comments.map((comment) => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};


