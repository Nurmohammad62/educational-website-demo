import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './MainHeader.css';
import person from '../../images/online-education.png';
import { useHistory } from 'react-router';

// main header component for the home page main header
const MainHeader = () => {
    const history = useHistory();
    const handleExploreCourses = () => {
        history.push('/courses');
    }
    return (
        <div className='main-header'>
            <Container>
                <Row style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                    
                    {/* text and button column */}
                    <Col md={5}>
                        <h1 className='main-heading'>Grow your skills,<br /> define your future</h1>
                        <p>Presenting Academy, the tech school of the future. We teach you the right skills to be prepared for tomorrow.</p>
                        <div>
                            <Button onClick={handleExploreCourses} variant='primary' size='lg'>Explore Courses</Button>
                        </div>
                    </Col>

                    {/* image coumn */}
                    <Col md={7}>
                        <img className='lady-img' src={person} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainHeader;