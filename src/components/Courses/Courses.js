import React from 'react';
import './Courses.css';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses/useCourses';
import Course from '../Course/Course';

// courses component to show all courses
const Cources = () => {
    const [courses, searchedCourses, setSearchedCourses] = useCourses();

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedCourses = courses.filter(course => course.title.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedCourses(matchedCourses);
    }
    return (
        <>
            <div className='text-center mb-5 all-courses-heading'>
                <h1>All Our Courses</h1>
                <input  onChange={handleSearch} className='search-box' type="text" placeholder="search a course" />
            </div>
            <Container className='mb-5'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        // map courses data to show single course
                        searchedCourses.map(course => <Course 
                        key = {course.id}
                        popularCourse = {course}
                        ></Course>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Cources;