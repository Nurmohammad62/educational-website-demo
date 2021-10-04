import React from 'react';
import './Course.css';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLink, faEye, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

// course component
const Course = (props) => {
    const history = useHistory();

    const hanldeCourseDetails = () => {
        history.push(`/courseDetails/${id}`)
    }

    const {id, img, title, courseTime, courseAccess, view, certificate} = props.popularCourse;
    const timeIcon = <FontAwesomeIcon icon={faClock} />
    const accessIcon = <FontAwesomeIcon icon={faLink} />
    const viewIcon = <FontAwesomeIcon icon={faEye} />
    const certificateIcon = <FontAwesomeIcon icon={faCertificate} />
    return (
        <Col>
            {/* card to show single course */}
            <Card className='card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <p>{timeIcon} {courseTime}</p>
                <p>{accessIcon} {courseAccess}</p>
                <p>{viewIcon} {view}</p>
                <p>{certificateIcon} {certificate}</p>
                <Button className='btn-course-left'>View Details</Button>
                <Button className='btn-course-right' variant='primary'>Enroll Course</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;