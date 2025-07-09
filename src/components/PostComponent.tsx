import  {FC, useRef, useState} from 'react';
import {IPostModel} from "../models/PostModel.ts";


import {CommentsComponent} from "./CommentsComponent.tsx";

type PostProps={
    post:IPostModel,

}
export const PostComponent:FC<PostProps> = ({post}) => {

const [isOpen, setIsOpen]=useState(false)
    const containerRef = useRef<HTMLLIElement>(null);

    return (
        <li
            ref={containerRef}
            className="relative flex flex-col w-[1000px] gap-3 text-[#404214] box-border bg-[#eef0d3]  border-[4px] border-white hover:text-[#ffffff] hover:bg-[#bab977] p-7 shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl"
        >
            <h2 className="flex justify-between text-xl italic">"{post.title}"</h2>
            <div className="flex justify-between font-bold text-s">
                <p>Post Id: {post.id}</p>
                <p>User Id: {post.userId}</p>
            </div>
            <p className="flex justify-start w-full text-sm italic">{post.body}</p>
            <div className="flex justify-between w-1/6">
                <p>👍 {post.reactions.likes}</p>
                <p>👎 {post.reactions.dislikes}</p>
            </div>
            <div className="flex justify-between w-full">
                <p className="flex justify-start text-xs">
                    tags: "{post.tags.join('", "')}"
                </p>
                <p className="flex justify-start text-s font-bold">Views: {post.views}</p>
            </div>

            <button className="flex justify-start" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Close Comments 👈' : 'Comments 👉'}
            </button>

            {isOpen &&
                    <CommentsComponent postId={post.id} />
            }
        </li>
    );
};
