
import {CourseComponent} from "./CourseComponent.tsx";
import {coursesArray} from "../data/arrays-2.ts";

export const CoursesComponent = () => {
    return (
        <ul className="flex flex-wrap justify-center self-center  mb-10 mt-10
    gap-[40px]">
            {
                coursesArray.map((value, index:number)=>
                <CourseComponent key={index} item={value} />)
                }
        </ul>
    );
};

