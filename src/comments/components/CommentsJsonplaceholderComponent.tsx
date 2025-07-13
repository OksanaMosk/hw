import {FC, useEffect, useState} from 'react';
import { ICommentJsonModel } from '../models/CommentJsonModel.ts';
import { loadComments } from '../services/api_service_jsonplaceholder.ts';
import {CommentJsonplaceholderComponent} from './CommentJsonplaceholderComponent.tsx'

export const CommentsJsonplaceholderComponent:FC = () => {
    const[comments, setComments]=useState<ICommentJsonModel[]>([])

    useEffect(() => {
        async function fetchComments () {
            const allCommentsJson:ICommentJsonModel[] = await loadComments()
            setComments(allCommentsJson)
        }
        fetchComments().catch(console.error)

    }, []);
    return (
        <ul className="flex flex-wrap justify-center self-center gap-10">
            {
                comments.map((comment, id:number)=> <CommentJsonplaceholderComponent key={id} comment={comment}/>)
            }
        </ul>
    );
};
