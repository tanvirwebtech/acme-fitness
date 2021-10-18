import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
import google from "../../images/google.png";
const Login = () => {
    const { signInUsingGoogle, signInWithEmail, setUserEmail, setUserPass } =
        useAuth();

    const handleEmailInput = (e) => {
        setUserEmail(e.target.value);
    };
    const handlePassInput = (e) => {
        setUserPass(e.target.value);
    };

    const login = (e) => {
        e.preventDefault();
        signInWithEmail();
    };
    return (
        <div className="text-light">
            <h4>Please Login Here</h4>
            <Form onSubmit={login} className="login-form w-50 mx-auto p-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="w-50 mx-auto"
                        onBlur={handleEmailInput}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onBlur={handlePassInput}
                        className="w-50 mx-auto"
                        required
                    />
                </Form.Group>
                <Button variant="secondary" type="submit">
                    Sign in
                </Button>
                <p className="pt-5 pb-4 text-center">
                    New at Acme Fitness?{" "}
                    <Link to="/login">
                        <span className="site-aqua">Sign Up Here</span>
                    </Link>
                </p>
                <hr />
                <p> or </p>

                <button
                    onClick={signInUsingGoogle}
                    className="px-3 py-2 sign-in-google"
                >
                    {" "}
                    <img src={google} width="45px" alt="" /> Login with google
                </button>
            </Form>
        </div>
    );
};

export default Login;
