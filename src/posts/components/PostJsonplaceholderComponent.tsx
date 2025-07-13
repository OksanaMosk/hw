import {IPostJsonModel} from "../models/PostJsonModel.ts";
import {FC} from "react";

type PostJsonplaceholderComponentsProps ={
    post:IPostJsonModel
}

export const PostJsonplaceholderComponent:FC<PostJsonplaceholderComponentsProps> = ({post}) => {
    const {userId, id, title, body}=post
    return (
        <li className="flex flex-col w-[610px] gap-3 text-[#404214] box-border bg-[#eef0d3]  border-[4px] border-white hover:text-[#ffffff] hover:bg-[#bab977] p-7 shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl">
            <div className="flex justify-between font-bold text-s">
                <p>Post Id: {id}</p>
                <p>User Id: {userId}</p>
            </div>
            <h2 className="flex text-xl italic">"{title}"</h2>
            <p className="flex w-full text-sm italic">{body}</p>
        </li>
    );
};
