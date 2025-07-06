
import {coursesAndDurationArray} from '../arrays-2'
import {ICourseModal} from "../Models/CourseModal.tsx"
import {CourseComponent} from "./CourseComponent.tsx"

export const CoursesComponent = () => {
    return (
        <div>
            {coursesAndDurationArray.map((course: ICourseModal, index:number)=>{
                return <CourseComponent course={course} key={index}/>
            })
            }

        </div>
    );
};


