import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const EnrollConfirm = () => {
  const { user } = useAuth();
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/enroll-success");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="login-form w-50 mx-auto p-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control readOnly defaultValue={user.displayName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly defaultValue={user.email} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Full Address"
            className="w-50 mx-auto"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Age"
            className="w-50 mx-auto"
            required
          />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Enroll
        </Button>
      </Form>
    </div>
  );
};

export default EnrollConfirm;
