import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useCourses from '../../hooks/useCourses/useCourses';

const CourseDetails = () => {
    const {courseId} = useParams();
    const [courses] = useCourses([]);
    const [runningCourse, setRunningCourse] = useState({});
    const selectedCourse = courses.find(course => course.id === courseId);
    setRunningCourse(selectedCourse);
    console.log(runningCourse);
    return (
        <div>
            <h1>{runningCourse?.title}</h1>
        </div>
    );
};

export default CourseDetails;