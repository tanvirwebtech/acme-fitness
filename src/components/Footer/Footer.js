import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    const facebookIcon = (
        <FontAwesomeIcon className="social-icon fs-3" icon={faFacebook} />
    );
    const twitterIcon = (
        <FontAwesomeIcon className="social-icon fs-3" icon={faTwitter} />
    );
    const linkedinIcon = (
        <FontAwesomeIcon className="social-icon fs-3" icon={faLinkedin} />
    );
    return (
        <>
            <footer className="py-4 text-light">
                <Container>
                    <Row xs={1} md={3} sm={2} className="g-4">
                        {/* Site Logo and Social Icons  */}
                        <Col>
                            <div className="footer-logo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="social">
                                <h2 className="text-center pb-4">
                                    Follow Us On Social Media
                                </h2>
                                <a
                                    href="https://www.facebook.com/tanvirwebtech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mx-2 text-white"
                                >
                                    {facebookIcon}
                                </a>
                                <a
                                    href="https://www.twitter.com/tanvirwebtech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mx-2 text-white"
                                >
                                    {twitterIcon}
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/tanvirwebtech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mx-2 text-white"
                                >
                                    {linkedinIcon}
                                </a>
                            </div>
                        </Col>

                        {/* Important Links  */}
                        <Col className="d-flex justify-content-center align-items-center">
                            <div className="important-linka">
                                <h2>Important Links</h2>
                                <Link
                                    to=""
                                    className="text-white text-decoration-none d-block"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    to=""
                                    className="text-white text-decoration-none d-block"
                                >
                                    Terms and Conditions
                                </Link>
                            </div>
                        </Col>

                        {/* Address Column */}
                        <Col className="d-flex justify-content-center align-items-center">
                            <div className="address">
                                <h2>
                                    {" "}
                                    <i className="fas fa-map-marker-alt"></i>{" "}
                                    Address
                                </h2>
                                <h4>53/A Sate View road, California, USA</h4>

                                <h5>
                                    <i className="fas fa-phone-alt"></i> +1 541
                                    6546
                                </h5>
                                <h5>
                                    <i className="fas fa-envelope"></i>{" "}
                                    contact@acmefitness.com
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
