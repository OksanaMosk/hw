import { ICommentDummyModel} from '../models/CommentDummyModel.ts';
import { FC } from 'react';

type CommentJsonplaceholderComponentProps = {
    comment: ICommentDummyModel
}

export const CommentDummyjsonComponents:FC<CommentJsonplaceholderComponentProps> = ({comment}) => {
    const   {id, body, postId, likes, user}=comment
    return (
        <li className="flex flex-col w-[400px] gap-5 text-[#404214] box-border bg-[#eef0d3]  border-[4px] border-white hover:text-[#ffffff] hover:bg-[#bab977] p-7 shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl">
            <div className="flex w-full justify-between">
                <p>Comment id # {id}</p>
                <p className="">Post # {postId}</p>
            </div>

            <div className="flex justify-between w-full">
                <h4 className="text-xl font-bold  text-[#bf550d] ">
                    {user.fullName}
                    <span className="text-x"> ({user.username})</span>
                </h4>
                <p>User # {user.id}</p>
            </div>

            <div className="flex justify-between w-full items-end self-end">
                <p className=" font-bold italic w-4/5">{body}</p>
                <p className="">🔥 {likes}</p>
            </div>

        </li>
    );
};
