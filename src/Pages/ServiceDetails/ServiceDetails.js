import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SiteButton from "../../components/Buttons/SiteButton";
import { Link, useParams } from "react-router-dom";
import "./ServiceDetails.css";
import useServiceContext from "../../hooks/useServiceContext";
import Trainer from "../../components/Trainer/Trainer";

const ServiceDetails = () => {
    let { service_id } = useParams();
    const [service, setService] = useState({});
    const { services } = useServiceContext();
    const [trainers, setTrainers] = useState([]);
    const [courseTrainer, setCourseTrainer] = useState({});

    // Getting Single service info using id parameter
    useEffect(() => {
        setService(services?.find((e) => e.id === service_id));
    }, [services]);

    const {
        service_title,
        length,
        price,
        service_desc,
        trainer,
        banner,
        trainerId,
    } = service || {};
    useEffect(() => {
        fetch("/trainers.json")
            .then((res) => res.json())
            .then((data) => setTrainers(data));
    }, []);

    useEffect(() => {
        setCourseTrainer(trainers?.find((e) => e.id === trainerId));
    }, [trainers]);

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
                            <div className="d-flex align-items-center">
                                <div className="course-desc-wrapper">
                                    <h2 className="course-desc py-3">
                                        Course Description:
                                    </h2>
                                    <p className="fs-5">{service_desc}</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={5} sm={6}>
                            <div className="d-flex align-items-center h-100 justify-content-center">
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
                                    <Link to="/enroll-confirm">
                                        <SiteButton>Join Now</SiteButton>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Course Trainer  */}
                <section>
                    <Container>
                        <h2 className="pt-5 pb-4">Course Trainer</h2>
                        <Row md={3} sm={1} xs={1}>
                            <Col></Col>
                            <Col>
                                {courseTrainer ? (
                                    <Trainer trainer={courseTrainer} />
                                ) : (
                                    ""
                                )}{" "}
                            </Col>

                            <Col></Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
};

export default ServiceDetails;
