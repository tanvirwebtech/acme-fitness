import React from "react";
import { Container, Row } from "react-bootstrap";
import useServiceContext from "../../hooks/useServiceContext";
import SingleService from "../SingleService/SingleService";

const Services = () => {
    const { services } = useServiceContext();
    return (
        <>
            <Container>
                <Row xs={1} md={3} sm={2} className="g-4">
                    {services.map((service) => (
                        <SingleService key={service?.id} service={service} />
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Services;
