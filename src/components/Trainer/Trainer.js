import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";

const Trainer = (props) => {
    const { name, img, desc, rating } = props.trainer;
    return (
        <>
            <Col>
                <Card
                    style={{
                        backgroundColor: "#ffffff22",
                    }}
                    className="card-bg text-light"
                >
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="p-2">
                        <Card.Title className="py-4 fs-3">
                            {" "}
                            <span className="site-aqua">{name}</span>{" "}
                        </Card.Title>
                        <Card.Text>{desc}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="pb-4">
                        <p>
                            <Rating
                                emptySymbol="far fa-star "
                                fullSymbol="fas fa-star site-aqua"
                                initialRating={rating}
                                readonly
                            ></Rating>{" "}
                        </p>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default Trainer;
