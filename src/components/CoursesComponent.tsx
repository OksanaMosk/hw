
import {coursesAndDurationArray} from '../arrays-2'
import {ICourseModal} from "../models/CourseModal.tsx"
import {CourseComponent} from "./CourseComponent"

export const CoursesComponent = () => {
    return (
        <ul className="flex flex-col gap-[40px] justify-center w-100 items-center mt-20
mx-auto p-[20px] text-xl bg-lime-200 shadow-xl rounded-xl ">
            {coursesAndDurationArray.map((course: ICourseModal, index:number)=>{
                return <CourseComponent course={course} key={index}/>
            })
            }

        </ul>
    );
};


