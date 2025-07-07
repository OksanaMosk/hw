import  {FC} from 'react';
import {ICourseModal} from "../models/CourseModal.ts";

type PropsType={
    course:ICourseModal
}

export const CourseComponent:FC<PropsType>=({course}) => {
    return (

<li className="text-green-600  hover:text-gray-800 cursor-pointer transition duration-200 ease-in-out">{course.title} - Duration {course.monthDuration} months</li>

    );
};


