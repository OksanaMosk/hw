import {IPostDummyModel} from "../models/PostDummyModel.ts";

import {FC} from "react";

type PostDummyjsonComponentsProps ={
    post:IPostDummyModel
}
export const PostDummyjsonComponents:FC<PostDummyjsonComponentsProps> = ({post}) => {
    const{id, title, body, tags, reactions, views, userId}=post
    return (
        <li

            className="flex flex-col w-[610px] gap-3 text-[#404214] box-border bg-[#eef0d3]  border-[4px] border-white hover:text-[#ffffff] hover:bg-[#bab977] p-7 shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl"
        >
            <h2 className="flex text-xl italic">"{title}"</h2>
            <div className="flex justify-between font-bold text-s">
                <p>Post Id: {id}</p>
                <p>User Id: {userId}</p>
            </div>
            <p className="flex w-full text-sm italic">{body}</p>
            <div className="flex justify-between w-1/6">
                <p>👍 {reactions.likes}</p>
                <p>👎 {reactions.dislikes}</p>
            </div>
            <div className="flex justify-between w-full">
                <p className="flex  text-xs">
                    tags: "{tags.join('", "')}"
                </p>
                <p className="flex text-s font-bold">Views: {views}</p>
            </div>




        </li>
    );
};
