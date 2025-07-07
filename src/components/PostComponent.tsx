import {IPost} from "../models/PostModel.ts";
import { FC } from 'react';

type PostComponentProps= {
  post: IPost;
}

const PostComponent:FC<PostComponentProps>= ({ post:{id, userId, title, body} }) => {
  return <li className=" flex flex-col justify-between w-[400px] gap-1 h-60  text-[#fcfbfc] bg-[#93a368] p-7
   shadow-xl rounded-xl   hover:text-[#cadbb7] hover:bg-[#485936]
    cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-2xl
  ">
    <h3  className="flex w-full text-[14px] font-bold  ">{title}</h3>

 <div className="flex justify-between ">
   <p>ID: {id}</p>
   <p>USER ID: {userId}</p>
 </div>
    <p className=" w-full text-sm italic">" {body} "</p>
  </li>;
};

export default PostComponent;
