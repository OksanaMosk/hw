import { FC } from 'react';
import { IPost } from '../../models/IPost.ts';


type PostJsonplaceholderComponentsProps ={
  post:IPost
}

export const PostComponent:FC<PostJsonplaceholderComponentsProps> = ({post}) => {
  const {userId, id, title, body}=post
  return (
    <li className="flex flex-col justify-between w-[400px] gap-3 text-[#404214] box-border bg-[#eef0d3]  border-[4px] border-white hover:text-[#ffffff] hover:bg-[#badd86]  p-7 shadow-xl rounded-xl cursor-pointer  hover:shadow-2xl">
      <div className="flex justify-between font-bold text-s">
        <p>Post Id: {id}</p>
        <p>User Id: {userId}</p>
      </div>
      <h2 className="flex text-[#bf550d] text-xl italic">"{title}"</h2>
      <p className="flex w-full text-sm italic">{body}</p>
    </li>
  );
};
