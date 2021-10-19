import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SiteButton from "../../components/Buttons/SiteButton";

const SingleMemberShipPkg = (props) => {
    const { pkg_name, pkg_price, pkg_desc, pkg_id } = props.pkg;
    return (
        <>
            <Col>
                <Card
                    style={{
                        backgroundColor: "#ffffff22",
                    }}
                    className="card-bg text-light"
                >
                    <Card.Body className="p-2">
                        <Card.Title className="py-4 fs-3">
                            {" "}
                            <span className="site-aqua">{pkg_name}</span>{" "}
                        </Card.Title>
                        <Card.Text>{pkg_desc}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="pb-4">
                        <h4 className="py-2">
                            ${pkg_price}/{pkg_id === 202 ? "Day" : "Month"}
                        </h4>

                        {/* Link to Enroll Confirm Page */}
                        <Link to="/enroll-confirm">
                            <SiteButton>Continue</SiteButton>
                        </Link>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default SingleMemberShipPkg;
