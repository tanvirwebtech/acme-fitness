import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about-banner">
                <div className="about-content h-100 text-light">
                    <Container className="h-100">
                        <Row className="py-5 h-100">
                            <Col className="d-flex justify-content-center align-items-center h-100">
                                <h2 className="heading">About Us</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <section className="py-5 text-light">
                <Container>
                    <Row className="g-4">
                        <Col className="d-flex align-items-center">
                            <div className="about-details">
                                <h2 className="fs-1">Our Commitment</h2>
                                <p>
                                    Our purpose is to pass on empowering
                                    knowledge and training guidance in order to
                                    have a positive impact on the health and
                                    fitness of everyone we work with. We have
                                    world class fitness equipment{" "}
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className="about-thumb">
                                <img
                                    src="https://i.ibb.co/fXKgq84/about-thumb.jpg"
                                    alt=""
                                    className="w-75"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;
