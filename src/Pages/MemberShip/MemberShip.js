import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleMemberShipPkg from "../SingleMemberShipPkg/SingleMemberShipPkg";

const MemberShip = () => {
    const [memberShipPkg, setMemberShipPkg] = useState([]);
    useEffect(() => {
        fetch("/memberShip.json")
            .then((res) => res.json())
            .then((data) => setMemberShipPkg(data));
    }, []);
    return (
        <>
            <section className="text-light">
                <h1>Take Our Membership</h1>
                <p className="pb-4">We Have amazing package plan for you!</p>
                <Container>
                    <Row xs={1} md={3} sm={2} className="g-4">
                        {memberShipPkg.map((pkg) => (
                            <SingleMemberShipPkg key={pkg?.pkg_id} pkg={pkg} />
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default MemberShip;
