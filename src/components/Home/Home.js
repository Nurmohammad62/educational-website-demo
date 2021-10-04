import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses/useCourses';
import MainHeader from '../MainHeader/MainHeader';
import Course from '../Course/Course';
import './Home.css';
import learnImg from '../../images/svg-1.svg';
import graduateImg from '../../images/svg-2.svg';
import workImg from '../../images/svg-3.svg';
import { useHistory } from 'react-router';

// home component for home page
const Home = () => {
    // hooks
    const history = useHistory();
    const [courses] = useCourses([]);

    const popularCourses = courses.slice(0, 3);

    // button hanlder to show all courses
    const handleAllCourses = () => {
        history.push('/courses')
    }
    return (
        <div>
            {/* main header of home page */}
            <MainHeader></MainHeader>

            {/* popular courses section */}
            <section>
                <Container className='pt-5 pb-5'>
                    <h1 className='text-center mt-5 mb-5'>Popular Courses</h1>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            popularCourses.map(popularCourse => <Course
                                key = {popularCourse.id} 
                                popularCourse = {popularCourse}
                                ></Course>)
                        }
                    </Row>
                    <div className='text-center mt-5 mb-5'>
                        <Button onClick={handleAllCourses} variant='outline-primary' size='lg'>Browse All courses</Button>
                    </div>
                </Container>
            </section>
            
            {/* invite section */}
            <section className='section-invite'>
                <Container className='text-center'>
                    <Row>
                        <h1 className='mt-5 mb-5
                        invite-heading'>Why learn with our courses?</h1>
                    </Row>
                    <Row xs={1} md={1} lg={3} className="g-4">
                        <Col>
                            <img className='mb-3' src={learnImg} alt="" />
                            <br />
                            <h2 className='invite-sub-heading'>1. Learn</h2>
                            <p>Learn in the sense of "teach" dates from the 13th century and was standard until at least the early 19th.  made them drunk with true Hollands—and then learned them the art of making bargains  — Washington Irving But by Mark Twain's time it was receding to a speech form associated chiefly with the less educated.</p>
                        </Col>
                        <Col>
                            <img className='mb-3' src={graduateImg} alt="" />
                            <br />
                            <h2 className='invite-sub-heading'>2. Graduate</h2>
                            <p>In the 19th century the transitive sense (1a) was prescribed; the intransitive  I graduated from college  was condemned. The intransitive prevailed nonetheless, and today it is the sense likely to be prescribed and the newer transitive sense (1b)  she graduated high school  the one condemned. All three are standard.</p>
                        </Col>
                        <Col>
                            <img className='mb-3' src={workImg} alt="" />
                            <br />
                            <h2 className='invite-sub-heading'>3. Work</h2>
                            <p>Life is another name for labour. A person who does not have hard work in life cannot move forward, where one is born, one day he will dry up and fall on the earth. It is like a pond in which water neither comes nor flows. When it rained a little bit was filled and it kept rotting. The wanderer also runs away from his bad smell, no one likes to come near. </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;