import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
import google from "../../images/google.png";

const Login = () => {
  const { signInUsingGoogle, signInWithEmail, setUserEmail, setUserPass, err } =
    useAuth();
  const location = useLocation();

  const redirectUrl = location.state?.from || "/";

  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      // setUser(result.user);
      history.push(redirectUrl);
    });
  };
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
      {location.state ? (
        <div className="redirected">
          <p className="text-warning px-3 py-2 ">You must Login First</p>
        </div>
      ) : (
        ""
      )}
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
        {err ? (
          <p className="text-danger text-center py-2">
            Email and Password Does not match
          </p>
        ) : (
          ""
        )}
        <Button variant="secondary" type="submit">
          Sign in
        </Button>
        <p className="pt-5 pb-4 text-center">
          New at Acme Fitness?{" "}
          <Link to="/signup">
            <span className="site-aqua text-decoration-none">Sign Up Here</span>
          </Link>
        </p>
        <hr />
        <p> or </p>

        <button
          onClick={handleGoogleSignIn}
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
