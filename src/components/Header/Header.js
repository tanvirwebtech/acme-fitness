import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="transparent"
                className="text-light"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto text-light">
                            <Nav.Link as={NavLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/get_membership">
                                MemberShip
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/services"
                                className="me-5"
                            >
                                Services
                            </Nav.Link>
                            {user.email ? (
                                <button
                                    className="header-logout-btn px-2 mx-2"
                                    onClick={() => logOut()}
                                >
                                    Log out
                                </button>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to="/login">
                                        Login <i className="fas fa-user"></i>
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/signup">
                                        SignUp{" "}
                                        <i className="fas fa-user-plus"></i>
                                    </Nav.Link>
                                </>
                            )}
                            <div className="user-icon">
                                <div className="h5">{user.displayName}</div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
