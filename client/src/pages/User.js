import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button, Container } from "react-bootstrap"
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "../utils/queries";
import { UPDATE_USER } from '../utils/mutations';
import { DELETE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useEffect, useState } from 'react';

function User () {
    const [queryData, setQueryData] = useState();
    const {data} = useQuery(GET_USER);
    
    useEffect(() => {

        setQueryData(data)
    }, [data]);

    const [updateUser, {loading, error, updateData}] = useMutation(UPDATE_USER);
    const [deleteUser, {loading: deleteLoading, error: deleteError, }] = useMutation(DELETE_USER)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email} = event.target.elements;

        try {
            const { updateData } = await updateUser({ variables: {
                name: name.value, 
                email: email.value,
            } })
            console.log(updateData)
        } catch (error) {
            console.log(error)
        }
    };

    const handleDelete = async () => {
        try {
          await deleteUser({ variables: { id: data.me._id } });
          //Log us out as well as delete user
          Auth.logout();
          // handle success
        } catch (err) {
          // handle error
        }
      };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    //if logged in, presents user info and be able to upda
    if(Auth.loggedIn()){
        return(
            <Col className='product_box' lg={12}>
                <section className="products" id="products">
                <div className="userCard">
                    <section className='products'>
                    {/* expression checks if there is data prints it or tells no data found */}
                    {queryData ? 
                        <><h4>Current username: {queryData.me.name}</h4><h4>Current email: {queryData.me.email}</h4></>
                    : <h4>No user data found </h4>}
                    </section>
                    <div className="posts">
                        {/* {items} */}
                        <br></br>
                        <h4>Update your information? Use this form!</h4>
                        <p>Refresh to ensure changes</p>
                    </div> 
                        <Form className='item-search' onSubmit={handleSubmit}>
                        {/* <input type="text" placeholder="name" name="name" />
                        <input type="text" placeholder="email" name="email" /> */}
                        <Form.Group className='mt-2'>
                            <Form.Label htmlFor="name">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your username"
                                    name="name"
                                    required
                                />
                            <Form.Control.Feedback type="invalid">
                                    Username is required!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='mt-3' htmlFor="email">Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Your email address"
                                name="email"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Email is required!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="warning" type='submit' className='mt-4'>
                            <div className="user-button">
                                <span className="user-text">Update user info</span>
                            </div>
                        </Button>
                    </Form>
                </div>
                </section>
                
                <Col className='mt-5'>
                <section className="products" id="products">
                    <div className="deleteUser">
                        <Button variant="danger" onClick={handleDelete}>
                            <div className="user-button">
                                <span className="user-text">Delete User Account</span>
                            </div>
                        </Button>
                    </div> 
                </section>
                </Col>
            </Col>
        );
    }
    else{
        return(
            <Col className="col-auto">
                <h4>User not logged in. Log in for page</h4>
            </Col>
        );
    }
    
}

export default User;