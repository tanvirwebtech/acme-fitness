import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
    const { setName, setUserEmail, userPass, setUserPass, signUpWithEmail } =
        useAuth();
    const [err, setErr] = useState("");
    const [signUpStatus, setSignUpStatus] = useState(false);
    const [isPassMatched, setIsPassMatched] = useState(false);

    // Email Input
    const handleEmailInput = (e) => {
        setUserEmail(e.target.value);
    };

    // Password Input
    const handlePassInput = (e) => {
        const pass = e.target.value;
        if (pass.length < 6) {
            setErr("Password must contain at least 6 character!");
        } else {
            setUserPass(e.target.value);
        }
    };

    // Check Password Match
    const handleConfirmPassInput = (e) => {
        const pass = e.target.value;
        if (pass.length < 6) {
            setErr("Password must contain at least 6 character!");
        }
        if (pass !== userPass) {
            setErr("Password Does not match!");
        } else {
            setErr("");
            setIsPassMatched(true);
            setUserPass(e.target.value);
        }
    };
    const handleName = (e) => {
        setName(e.target.value);
    };

    // Handle Sign Up
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isPassMatched) {
            signUpWithEmail();
        } else {
            setErr("Password Does not matched!");
        }
        if (!err) {
            setSignUpStatus(true);
        }
    };
    return (
        <div className="text-light">
            {signUpStatus ? (
                <div className="success">
                    <p className="text-success">
                        Your Registration is Successfull!
                    </p>
                </div>
            ) : (
                <Form
                    onSubmit={handleSubmit}
                    className="login-form w-50 mx-auto p-4"
                >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            className="w-50 mx-auto"
                            onBlur={handleName}
                            required
                        />
                    </Form.Group>
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
                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            onBlur={handleConfirmPassInput}
                            className="w-50 mx-auto"
                            required
                        />
                    </Form.Group>
                    <p className="text-danger text-center mb-4">{err}</p>
                    <Button variant="secondary" type="submit">
                        Sign Up
                    </Button>
                    <p className="pt-5 pb-4 text-center">
                        Already signed up?{" "}
                        <Link to="/login">
                            <span className="site-aqua text-decoration-none">
                                Login Here
                            </span>
                        </Link>
                    </p>
                </Form>
            )}
        </div>
    );
};

export default SignUp;
