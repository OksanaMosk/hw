import {ICommentModel} from "../models/CommentModel.ts";
import {FC} from "react";

type CommentProps={
comment:ICommentModel
}
export const CommentComponent:FC<CommentProps> = ({comment:{postId,id,name,email,body}})=> {
    return (
        <li className="flex flex-col justify-between w-[400px] gap-1 h-60  text-[#479600] bg-[#ffffff] p-7
   shadow-xl rounded-xl   hover:text-[#9f9c07] hover:bg-[#f3f5e1]
    cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-2xl">
            <div className="flex justify-between">
                <p>Post ID: {postId}</p>
                <p>ID: {id}</p>

            </div>
            <div>
                <h3 className="flex justify-start w-full text-[14px] font-bold">{name}</h3>
                <p className="w-full text-sm italic">email {email}</p></div>
            <p className="text-[12px]">"{body}"</p>
        </li>
    );
};

