import {FC, useEffect, useState} from "react";
import {ICommentDummyModel} from "../../comments/models/CommentDummyModel.ts";
import {CommentDummyjsonComponents} from "./CommentDummyjsonComponent.tsx";
import {loadCommentsDummy} from "../services/api_service_dummy.ts";




export const CommentsDummyjsonComponent:FC = () => {
    const[comments, setComments]=useState<ICommentDummyModel[]>([])

    useEffect(() => {
        async function fetchCommentsDummy () {
            const allCommentsDummy:ICommentDummyModel[] = await loadCommentsDummy()
            setComments(allCommentsDummy)
        }
        fetchCommentsDummy().catch(console.error)

    }, []);
    return (
        <ul className="flex flex-wrap justify-center self-center gap-10">
            {
                comments.map((comment, id:number)=> <CommentDummyjsonComponents key={id} comment={comment}/>)
            }
        </ul>
    );
};
