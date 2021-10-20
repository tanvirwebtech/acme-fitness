import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Trainer from "../Trainer/Trainer";

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch("/trainers.json")
            .then((res) => res.json())
            .then((data) => setTrainers(data));
    }, []);
    return (
        <>
            <Container className="text-light">
                <h2 className="py-5">Our Trainers</h2>
                <Row xs={1} md={3} sm={2} className="g-4">
                    {trainers.map((trainer) => (
                        <Trainer key={trainer.id} trainer={trainer} />
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Trainers;
