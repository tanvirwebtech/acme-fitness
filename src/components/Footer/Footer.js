import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <Container>
                    <Row>
                        <Col>
                            <div className="footer-logo">
                                <img src={logo} alt="" />
                            </div>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
