
import {ICourse} from "../models/ICourse.ts";
import {ModulesComponent} from "./ModulesComponent.tsx";

interface ICourseComponentProps {
    item: ICourse;

}
export const CourseComponent = ({item}:ICourseComponentProps) => {
    return (
        <li>
            <h2>{item.title}</h2>
            <p>{ item.monthDuration}</p>
            <p>{item.hourDuration}</p>
           <ModulesComponent modules={item.modules}/>
        </li>
    );
};


