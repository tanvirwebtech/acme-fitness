import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SiteButton from "../../components/Buttons/SiteButton";
import { useParams } from "react-router-dom";
import "./ServiceDetails.css";
import useServiceContext from "../../hooks/useServiceContext";

const ServiceDetails = () => {
    let { service_id } = useParams();
    const [service, setService] = useState({});
    const { services } = useServiceContext();
    useEffect(() => {
        setService(services?.find((e) => e.id === service_id));
    }, []);

    const { service_title, length, price, service_desc, trainer, banner } =
        service || {};
    return (
        <>
            <div
                style={{
                    backgroundImage: `url('${banner}')`,
                }}
                className="top-banner d-flex justify-content-center"
            >
                <div className="work-out-heading text-light d-flex align-items-end">
                    <h2>{service_title}</h2>
                </div>
            </div>
            <div className="workout-desc text-light">
                <Container>
                    <Row className="mt-5">
                        <Col md={7} sm={6} className="text-light p-3">
                            <h2 className="course-desc py-3">
                                Course Description:
                            </h2>
                            <p className="fs-5">{service_desc}</p>
                        </Col>
                        <Col md={5} sm={6}>
                            <div className="course-overview p-3 text-light ">
                                <h4>
                                    Course Trainer: <span>{trainer}</span>
                                </h4>
                                <h4>
                                    Duration: <span>{length}</span>
                                </h4>
                                <h4>
                                    Price: <span>${price} / month</span>
                                </h4>
                                <SiteButton>Join Now</SiteButton>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ServiceDetails;
