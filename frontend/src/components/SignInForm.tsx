import { useState } from "react";
import { Button, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function SignInForm() {
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} method="POST">
      <Form.Group controlId="studentId">
        <Form.Label>Student ID</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Please enter your id"
        />
        <Form.Control.Feedback type="invalid">
          Please enter an id
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Enter your password"
        />
        <Form.Control.Feedback type="invalid">
          Please enter a password
        </Form.Control.Feedback>
      </Form.Group>
      <div className="mt-1 d-flex justify-content-end">
        <a href="" style={{textDecoration: "none"}}>
          Forgot your password?
        </a>
      </div>
      <Button type="submit" className="mt-4 w-100">
        Sign in
      </Button>

      <div className="mt-5">
        <a href="" style={{textDecoration: "none"}}>
          Not registered yet?
        </a>
      </div>
      <Button type="submit" className="mt-2">
        Sign Up
      </Button>
    </Form>
  )
}