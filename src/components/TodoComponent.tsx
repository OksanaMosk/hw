
import {ITodo} from "../models/TodoModel.ts";
import {FC} from "react";

type TodoComponentProps= {
  todo: ITodo;
}

export const TodoComponent:FC<TodoComponentProps> = ({ todo:{id, todo:text, completed,userId}}) => {
  return <li className="flex flex-col justify-between w-[400px] gap-1 h-36  text-[#48523D] bg-[#E4E8F4] p-7
   shadow-xl rounded-xl   hover:text-[#48523D] hover:bg-[#B5C6B8]
    cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-z-12 hover:shadow-2xl">
    <div className="flex justify-between">
        <p>ID: {id}</p>
        <p>User ID: {userId}</p>
    </div>
        <p className="w-full text-sm italic"> {text}</p>
        <p className= "flex justify-start w-full text-[14px] font-bold">{completed.toString()}</p>
  </li>;
};
