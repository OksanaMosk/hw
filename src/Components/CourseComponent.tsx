import  {FC} from 'react';
import {ICourseModal} from "../Models/CourseModal.ts";

type PropsType={
    course:ICourseModal
}

export const CourseComponent:FC<PropsType>=({course}) => {
    return (

<li>{course.title} {course.monthDuration}</li>

    );
};


