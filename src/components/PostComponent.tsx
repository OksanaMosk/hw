import {IPost} from "../models/PostModel.ts";

interface IPostComponentProps {
  post: IPost;
}

const PostComponent = ({ post:{id, userId, title, body} }: IPostComponentProps) => {
  return <li className=" flex flex-col justify-between w-[400px] gap-1 h-60  text-[#fcfbfc] bg-[#93a368] p-7
   shadow-xl rounded-xl   hover:text-[#cadbb7] hover:bg-[#485936]
    cursor-pointer transition duration-200 ease-in-out
  ">
    <h3  className="flex justify-start w-full text-[14px] font-bold  ">{title}</h3>

 <div className="flex justify-between ">
   <p>ID: {id}</p>
   <p>USER ID: {userId}</p>
 </div>
    <p className=" w-full text-sm italic">" {body} "</p>
  </li>;
};

export default PostComponent;
