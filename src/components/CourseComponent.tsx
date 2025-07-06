
import {ICourse} from "../models/ICourse.ts";
import {ModulesComponent} from "./ModulesComponent.tsx";

interface ICourseComponentProps {
    item: ICourse;

}
export const CourseComponent = ({item}:ICourseComponentProps) => {
    return (
        <li        className="text-[#107980] p-4
    w-[600px] h-100 shadow-xl rounded-xl  bg-[#EDE1CF]
    flex flex-col
    gap-[8px]
   hover:text-[#107980] hover:bg-[#D9C5BC]
    cursor-pointer transition duration-200 ease-in-out
  ">
            <h3  className="text-[40px] pl-4 w-[100%]">{item.title}</h3>
            <h5 className="font-bold size-8 m-0 pl-4">Duration</h5>
            <div className=" w-[100%]  flex  justify-between pl-4">
            <p className="w-1/2">{item.monthDuration} months</p>
            <p className="w-1/2">{item.hourDuration} hours</p>
            </div>
           <ModulesComponent modules={item.modules}/>
        </li>
    );
};


