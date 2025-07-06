
import {CourseComponent} from "./CourseComponent.tsx";
import {coursesArray} from "../data/arrays-2.ts";

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesArray.map((value, index:number)=>
                <CourseComponent key={index} item={value} />)
                }
        </ul>
    );
};

