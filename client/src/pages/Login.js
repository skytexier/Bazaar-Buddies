import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from "../utils/auth";

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [login, {error}] = useMutation(LOGIN_USER)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({variables:{
        ...userFormData
      }})

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
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
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;

// import { useState, useContext} from "react";
// import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { LOGIN_USER } from "../utils/mutations";
// import Authorizer from '../utils/auth';
// import { Button, Form } from 'semantic-ui-react';
// import gql from 'graphql-tag';

// import { useForm } from '../utils/hooks.js'
// import { AuthContext } from '../context/auth.js';

// function Login(props) {
//   const context = useContext(AuthContext);
//   const [errors, setErrors] = useState({});

//   const { onChange, onSubmit, values } = useForm(loginUserCallback, {
//     username: '',
//     password: ''
//   });

//   const [loginUser, { loading }] = useMutation(LOGIN_USER, {
//     update(
//       _,
//       {
//         data: { login: userData }
//       }
//     ) {
//       context.login(userData);
//       props.history.push('/');
//     },
//     onError(err) {
//       setErrors(err.graphQLErrors[0].extensions.exception.errors);
//     },
//     variables: values
//   });

//   function loginUserCallback() {
//     loginUser();
//   }

//     return(
//         <div className="form-content"> 
//             <Form onSubmit={onSubmit} noValidate className={loading ? 'loading': ''}>
//                 <h1>Login</h1>
//                 <Form.Input
//                     label="Username"
//                     placeholder="Username.."
//                     name="username"
//                     type="text"
//                     value={values.username}
//                     error={errors.username ? true : false}
//                     onChange={onChange}
//                 />
//                 <Form.Input
//                     label="Password"
//                     placeholder="Password.."
//                     name="password"
//                     type="password"
//                     value={values.password}
//                     error={errors.password ? true : false}
//                     onChange={onChange}
//                 />
//                 <Button type="submit" variant="primary">
//                     Login
//                 </Button>
//             </Form>
//             {Object.keys(errors).length > 0 && (
//                 <div className="ui error message">
//                     <ul className="list">
//                         {Object.values(errors).map((value) => (
//                             <li key={value}>{value}</li>
//                         ))}
//                     </ul>   
//                 </div>
//             )}
//         </div>
//     );
// }
// export default Login;