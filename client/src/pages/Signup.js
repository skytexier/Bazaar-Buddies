import React, { useState } from "react";
import { Form, Button, Alert, Col, Row } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = (props) => {
  const [addUser, error] = useMutation(ADD_USER)

  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const mutationRes = await addUser({
      variables: {
        name: userFormData.name,
        email: userFormData.email,
        password: userFormData.password,
        confirmPassword: userFormData.confirmPassword,
      },
    });
    const token = mutationRes.data.addUser.token;
    console.log(token)
    Auth.login(token)

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // try {
      
    //   const {data} = await addUser({variables:{
    //     ...userFormData
    //   }})

    //   Auth.login(data.addUser.token);

    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
    // }

    // setUserFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    // });
    console.log(error)
    console.log(userFormData)
  };

  return (
    <>
    <Row>
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
          Something went wrong with your signup!
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
      </Row>
    </>
  );
};

export default Signup;




// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Form } from 'semantic-ui-react';
// import { useMutation } from '@apollo/react-hooks'
// import gql from 'graphql-tag';
// import { useForm } from '../utils/hooks.js'
// import { AuthContext } from '../context/auth.js';
// import { ADD_USER } from '../utils/mutations.js';

// function Register(props) {
// const context = useContext(AuthContext);
//   const [errors, setErrors] = useState({});

//   const { onChange, onSubmit, values } = useForm(registerUser, {
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [addUser, { loading }] = useMutation(ADD_USER, {
//     update(
//       _,
//       {
//         data: { register: userData }
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

//   function registerUser() {
//     addUser();
//   }


//     return(
//         <div className="form-content"> 
//             <Form onSubmit={onSubmit} noValidate className={loading ? 'loading': ''}>
//                 <h1>Register</h1>
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
//                     label="Email"
//                     placeholder="Email.."
//                     name="email"
//                     type="email"
//                     value={values.email}
//                     error={errors.email ? true : false}
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
//                 <Form.Input
//                     label="Confirm Password"
//                     placeholder="Confirm Password.."
//                     name="confirmPassword"
//                     type="password"
//                     value={values.confirmPassword}
//                     error={errors.confirmPassword ? true : false}
//                     onChange={onChange}
//                 />
//                 <Button type="submit" variant="primary">
//                     Register
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

// const REGISTER_USER = gql`
//     mutation register(
//         $name: String!
//         $email: String!
//         $password: String!
//         $confirmPassword: String!
//     )
//     {
//         addUser(
//             registerInput: {
//                 name: $username
//                 email: $email
//                 password: $password
//                 confirmPassword: $confirmPassword
//             }
//         )
//         {
//             id email username createdAt token
//         }
//     }
// `
// export default Register;
