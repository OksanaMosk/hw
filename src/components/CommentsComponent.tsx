import React, {useEffect, useState} from 'react';
import {loadComment} from "../data/api_service.ts";
import {ICommentModel} from "../models/CommentModel.ts";
import {CommentComponent} from "./CommentComponent.tsx";


export const CommentsComponent = () => {
    const [comments, setComments]=useState<ICommentModel[]>([])
    useEffect(() => {
       loadComment().then(value => setComments(value))
    }, []);
    return (
        <ul className="flex flex-wrap justify-center self-center  m-10 gap-10" >
            {comments.map((comment) => <CommentComponent key={comment.id} comment={comment} />)
            }
        </ul>
    );
};


