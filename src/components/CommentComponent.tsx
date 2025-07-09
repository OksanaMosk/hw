import  { FC } from 'react';
import { ICommentModel } from '../models/CommentModel.ts';

type CommentProps={
  comment:ICommentModel
}
export const CommentComponent:FC<CommentProps> = ({comment:{ id, body, postId, likes, user }}) => {
  return (
    <li
      className="flex flex-col h-20 justify-between
   shadow-l rounded-xl   text-[#404214] bg-[#bab977] p-2
    cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-2xl "
    >
      <div className="flex w-full justify-between  text-[10px]">
        <p>comment id # {id}</p>
        <p className="w-[15%]">Post # {postId}</p>
      </div>

      <div className="flex justify-between w-full">
        <h4 className="italic text-[12px]">
          {user.fullName}
          <span className="text-x"> ({user.username})</span>
        </h4>
        <p className="w-[15%] text-[10px] ">User # {user.id}</p>
      </div>

      <div className="flex justify-between w-full items-end self-end">
        <p className=" font-bold italic text-[12px]">{body}</p>
        <p className="w-[15%]">🔥 {likes}</p>
      </div>

    </li>
  );
};


