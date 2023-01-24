import React, { useState } from "react";
import { Form, Button, Alert, Col, Row } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = (props) => {
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [passAlert, setPassAlert] = useState(false);
  const [addUser, error] = useMutation(ADD_USER)

  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    if (userFormData.password !== userFormData.confirmPassword) {
      setPassAlert(true)
      event.preventDefault();
    } else { 
    event.preventDefault();
    const form = event.currentTarget;
    const mutationRes = await addUser({
      variables: {
        name: userFormData.name,
        email: userFormData.email,
        password: userFormData.password,
      },
    });
    const token = mutationRes.data.addUser.token;
    console.log(token)
    Auth.login(token)

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }}

    console.log(error)
    console.log(userFormData)
  };

  return (
    <>
    <Row>
    <section className="products">
    <Col className="d-flex flex-column align-items-center p-3">
      <h4>Signup!</h4>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup! Try again.
        </Alert>
        <Alert
          dismissible
          onClose={() => setPassAlert(false)}
          show={passAlert}
          variant="danger"
        >
          Your passwords do not match!
        </Alert>
        
        <Form.Group>
          <Form.Label htmlFor="name">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="name"
            onChange={handleInputChange}
            value={userFormData.name}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={handleInputChange}
            value={userFormData.confirmPassword}
            required
          />
          <Form.Control.Feedback type="invalid">
            Confirm your password!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.name &&
              userFormData.email &&
              userFormData.password &&
              userFormData.confirmPassword
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
      </Col>
      </section>
      </Row>
    </>
  );
};

export default Signup;