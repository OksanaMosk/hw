
import {coursesAndDurationArray} from '../arrays-2'
import {ICourseModal} from "../Models/CourseModal.tsx"
import {CourseComponent} from "./CourseComponent.tsx"

export const CoursesComponent = () => {
    return (
        <ul className="flex flex-col gap-[40px] justify-center w-100 items-center mt-20
mx-auto p-[20px] text-xl bg-sky-200 shadow-xl rounded-xl">
            {coursesAndDurationArray.map((course: ICourseModal, index:number)=>{
                return <CourseComponent course={course} key={index}/>
            })
            }

        </ul>
    );
};


