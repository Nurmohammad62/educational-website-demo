import React from 'react';
import './About.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import missionImg from '../../images/mission.jpeg';
import storyImg from '../../images/story.jpeg';

// About component
const About = () => {
    return (
        <>
            {/*header start */}
            <header className='about-header'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='about-heading'>The big mission <br /> behind Education</h1>
                            <Button className='mt-5' variant='primary' size='lg'>Join Our Team</Button>
                        </Col>
                        <Col>
                            <p>Lots of different organizations have mission statements — non-profit organizations, government departments, small businesses, big corporations. Vision statements aren’t the same as mission statements, but they are closely related. To create a mission statement, you should first have a vision for where you want to see your school in the future.</p>
                        </Col>
                    </Row>
                </Container>
            </header>
            {/* about header end */}

            {/* members section */}
            <section className='about-section-members'>
                <Container className='text-center'>
                    <Row>
                        <h2 className='members-header'>A few numbers that we <br /> are proud of</h2>
                    </Row>
                    <Row sm={1} md={3}>
                        <Col>
                            <h1 className='members-figure'>100,000+</h1>
                            <h3 className='member-student'>Students</h3>
                            <p>Choose from more than 100,000 Bachelor’s programmes at universities, colleges and schools worldwide.</p>
                        </Col>
                        <Col>
                            <h1 className='members-figure'>5,000+</h1>
                            <h3 className='member-student'>Five-star reviews</h3>
                            <p>Choose from more than 5,000 Bachelor’s programmes at universities, colleges and schools worldwide.</p>
                        </Col>
                        <Col>
                            <h1 className='members-figure'>75,000+</h1>
                            <h3 className='member-student'>Students community</h3>
                            <p>Choose from more than 75,000 Bachelor’s programmes at universities, colleges and schools worldwide.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section blog */}
            <section className='section-blog'>
                <Container>
                    <Row xs={1} md={2} className='mb-5 mt-5' style={{display: 'flex', alignItems: 'center'}}>
                        <Col>
                            <img className='img-fluid rounded' src={missionImg} alt="" />
                        </Col>
                        <Col>
                            <h1 className='about-mission-heading'>The mission behind <br /> Education platform</h1>
                            <p>Online learning allows FSU students to pursue their degree requirements outside of the traditional classroom setting and can accelerate or enhance their time to degree. FSU's online courses are especially important to Graduate students who are working professionals seeking an advanced degree in their fields and to those FSU Undergraduate students who cannot attend on-site classes because of work or family obligations. As stated above in the Mission Statement, an additional and equally important benefit of online learning is that it helps students develop the technical skills and online learning strategies they need to pursue their future educational and professional goals.</p>
                        </Col>
                    </Row>

                    <Row xs={1} md={2} className='mb-5 mt-5' style={{display: 'flex', alignItems: 'center'}}>
                        <Col>
                            <h1 className='about-mission-heading'>The story of our founders</h1>
                            <p>He legends of our ancestors are what drive us. The way people speak of our predecessors and what they managed to achieve. Everybody has heard of the great Srivijaya Empire – a great power of the past that exerted its rule upon all the islands and even dared to dictate high tolls to the Indian and Chinese trading ships that passed between them. Sadly, that same greed also led to their downfall.</p>
                        </Col>
                        <Col>
                            <img className='img-fluid rounded' src={storyImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;