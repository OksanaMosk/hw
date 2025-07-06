import {ITodoModel} from "../models/TodoModel.ts";

interface ITodoProps {
    todo:ITodoModel
}
export const TodoComponent = ({todo:{id,userId,title,completed}}:ITodoProps) => {
    return (
        <li  className=" flex flex-col justify-between w-[400px] h-40  text-[#508068] bg-[#e4dedf] p-7
   shadow-xl rounded-xl   hover:text-[#445C4C] hover:bg-[#BFC9CA]
    cursor-pointer transition duration-200 ease-in-out
  ">
            <h2 className="flex justify-start w-[100%] text-[18px] font-bold  ">Title {title}</h2>
            <div  className="flex justify-between">
            <p>ID: {id}</p>
            <p>USERID: {userId}</p>
            </div>
            <p className=" w-[100%] font-bold size-4 m-0 ">Completed Status: {completed.toString()}</p>
        </li>
    );
};


