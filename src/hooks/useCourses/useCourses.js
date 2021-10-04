import React, { useEffect, useState } from 'react';

// custom hook for courses data load
const useCourses = () => {
    const [courses, setCourses] = useState([]);
    const [searchedCourses, setSearchedCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            setSearchedCourses(data);
        })
    }, []);
    return [courses, searchedCourses, setSearchedCourses];
};

export default useCourses;
