import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag';

import { useForm } from '../utils/hooks.js'
import { AuthContext } from '../context/auth.js';
// import { useState } from 'react';

function Login(props) {
    const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(
      _,
      {
        data: { login: userData }
      }
    ) {
      context.login(userData);
      props.history.push('/');
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  function loginUserCallback() {
    loginUser();
  }

    return(
        <div className="form-content"> 
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading': ''}>
                <h1>Login</h1>
                <Form.Input
                    label="Username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                />
                <Form.Input
                    label="Password"
                    placeholder="Password.."
                    name="password"
                    type="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                />
                <Button type="submit" primary>
                    Login
                </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map((value) => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>   
                </div>
            )}
        </div>
    );
}

const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    )
    {
        login(
            username: $username
            password: $password
        )
        {
            id email username createdAt token
        }
    }
`
export default Login;
















































// import React from 'react'
// import {Container, Row, Col, Form, Button} from 'react-bootstrap';
// import './Login.css'
// import { useState } from 'react';
// import Authorize from '../utils/auth'
// import { loginUser } from '../utils/API'


// const Login =() => {

//     const [userFormData, setUserFormData] = useState({email: '', password: '', confirmPassword: ''});
//     const [validated] = useState(false)

//     const handleInput = async (event) => {
//         event.preventDefault();
//         const { name, value } = event.target;
//         setUserFormData({...userFormData, [name]: value });
//     };

//     const handleForm = async (event) => {
//         event.preventDefault();

//         //check if form is full
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }

//         try {
//             const response = await loginUser(userFormData);

//             if (!response.ok){
//                 throw new Error('ayo we got an error!');
//             }

//             const { token, user } = await response.json();
//             console.log(user);
//             Authorize.login(token);
//         } catch (err) {
//             console.error(err)
//         }

//         setUserFormData({
//             username: '',
//             email: '',
//             password: '',
//         });
//     };


//     return( 
        
//         <Col className='login'>
//         <div className='login-box'>
//             <div className ="login__container">
//                 <h2>Sign In</h2>
//                 <Form onSubmit={handleForm}>
//                     <h3>E-mail</h3>
//                     <Form.Group className='mb-3' controlId='formBasicEmail'>
//                     <Form.Control className='form-control-sm' type="Email" placeholder='Enter email'/>
//                     </Form.Group>
//                     <h3>Password</h3>
//                     <Form.Group className='mb-3' controlId='formBasicPassword'>
//                     <Form.Control className='form-control-sm' type="password" placeholder='Enter Password'/>
//                     </Form.Group>
//                     <Button type="submit" className="login__signInButton">Sign In</Button>
//                 </Form>
//                 <Button className='login__registerButton'>Create your account</Button>
//             </div>
//         </div>
//         </Col>
//     )
// }


// export default Login