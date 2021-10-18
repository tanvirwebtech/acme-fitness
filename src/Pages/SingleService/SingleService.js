import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SiteButton from "../../components/Buttons/SiteButton";
import "./SingleService.css";

const SingleService = (props) => {
    const { id, service_title, thumb, price, service_desc } = props.service;

    return (
        <>
            <Col>
                <Card
                    style={{
                        backgroundColor: "#ffffff22",
                    }}
                    className="card-bg text-light"
                >
                    <Card.Img
                        variant="top"
                        src={thumb}
                        className="img-fluid p-2"
                    />
                    <Card.Body className="p-2">
                        <Card.Title>
                            {" "}
                            <span className="site-aqua">
                                {service_title}
                            </span>{" "}
                        </Card.Title>
                        <Card.Text>
                            {service_desc.slice(0, 100) + "..."}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <h4 className="py-2">${price}/Month</h4>
                        <Link to={`/service-details/${id}`}>
                            <SiteButton>View Details</SiteButton>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default SingleService;
