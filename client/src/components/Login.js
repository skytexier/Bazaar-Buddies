import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Login.css'
import { useState } from 'react';
import Authorize from '../utils/auth'
import { loginUser } from '../utils/API'


const Login =() => {

    const [userFormData, setUserFormData] = useState({email: '', password: ''});
    const [validated] = useState(false)

    const handleInput = async (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUserFormData({...userFormData, [name]: value });
    };

    const handleForm = async (event) => {
        event.preventDefault();

        //check if form is full
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await loginUser(userFormData);

            if (!response.ok){
                throw new Error('ayo we got an error!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Authorize.login(token);
        } catch (err) {
            console.error(err)
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };


    return( 
        
        <Col className='login'>
        <div className='login-box'>
            <div className ="login__container">
                <h2>Sign In</h2>
                <Form onSubmit={handleForm}>
                    <h3>E-mail</h3>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control className='form-control-sm' type="Email" placeholder='Enter email'/>
                    </Form.Group>
                    <h3>Password</h3>
                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control className='form-control-sm' type="password" placeholder='Enter Password'/>
                    </Form.Group>
                    <Button type="submit" className="login__signInButton">Sign In</Button>
                </Form>
                <Button className='login__registerButton'>Create your account</Button>
            </div>
        </div>
        </Col>
    )
}


export default Login