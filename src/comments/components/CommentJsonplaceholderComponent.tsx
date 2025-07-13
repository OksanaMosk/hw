import {ICommentJsonModel} from "../models/CommentJsonModel.ts";
import {FC} from "react";

type CommentJsonplaceholderComponentProps = {
    comment: ICommentJsonModel
}

export const CommentJsonplaceholderComponent:FC<CommentJsonplaceholderComponentProps> = ({comment}) => {
    const { postId, id, name, email, body,}=comment
    return(
        <li className="relative flex flex-col justify-between w-[400px] gap-3 text-[#404214] box-border bg-[#eef0d3]  border-[4px] border-white hover:text-[#ffffff] hover:bg-[#bab977] p-7 shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl">
            <h2 className="flex text-xl italic">"{name}"</h2>
            <div className="flex justify-between font-bold text-s">
                <p>Post Id: {id}</p>
                <p>User Id: {postId}</p>
            </div>
            <p className="flex w-full text-sm italic">{body}</p>
            <p className="flex text-s font-bold">Email: {email}</p>
        </li>)
};
