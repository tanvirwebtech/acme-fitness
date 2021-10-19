import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import heroImg from "../../images/hero-thunb.png";
import SiteButton from "../../components/Buttons/SiteButton";
import useServiceContext from "../../hooks/useServiceContext";
import SingleService from "../SingleService/SingleService";
import BMICalculator from "../../components/BMICalculator/BMICalculator";
import { Link } from "react-router-dom";
const Home = () => {
    const { services } = useServiceContext();
    return (
        <div className="text-white">
            <div className="hero-banner">
                <div className="hero-content py-5">
                    <Container>
                        <Row>
                            <Col md={7} className="d-flex align-items-center">
                                <div className="welcome-details">
                                    <h1 className="welcome-heading">
                                        WelCome To{" "}
                                        <span className="site-aqua">
                                            Acme Fitness
                                        </span>{" "}
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Iste ipsa, molestias
                                        est iusto quibusdam tempora dolore
                                        libero voluptates eius earum error
                                        exercitationem velit, soluta totam
                                        nulla? Possimus maiores sit laborum.
                                    </p>
                                    <Link to="/about">
                                        <SiteButton>
                                            Learn More{"  "}
                                            <i className="fas fa-arrow-right"></i>
                                        </SiteButton>
                                    </Link>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className="hero-thumb">
                                    <img
                                        className="img-fluid"
                                        src={heroImg}
                                        alt=""
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Service Section */}
            <section className="py-5">
                <h2 className="py-5">
                    Our <span className="site-aqua">WorkOut</span> Courses
                </h2>
                <div className="services">
                    <Container>
                        <Row xs={1} md={3} sm={2} className="g-4">
                            {services.map((service) => (
                                <SingleService
                                    key={service?.id}
                                    service={service}
                                />
                            ))}
                        </Row>
                    </Container>
                </div>
            </section>
            {/* BMI Calculator */}
            <section>
                <BMICalculator></BMICalculator>
            </section>
        </div>
    );
};

export default Home;
