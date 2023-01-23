import React, { useState } from "react";
import { Form, Button, Alert, Col, Row } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../utils/mutations";
import { GET_USER, QUERY_CATEGORIES } from "../utils/queries";


import Auth from "../utils/auth";

const Post = () => {
    const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER);
    const { loading: catLoading, error: catError, data: catData } = useQuery(QUERY_CATEGORIES);
    const [createProduct, error] = useMutation(CREATE_PRODUCT);
    console.log(userData)
    console.log(catData)

    const [productFormData, setproductFormData] = useState({
        name: "",
        description: "",
        image: "",
        price: "",
        category: {
            _id: "63ce37fbafea67f48d23ffb2",
            name: "Antiques"
        },
        user: {
            _id: "63ce38a423d6bbabab4e9e51",
            name: "jongster"
        }
    });

    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setproductFormData({ ...productFormData, [name]: value });
        console.log(productFormData)
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const mutationRes = await createProduct({
          variables: {
            input: {
                name: productFormData.name,
                description: productFormData.description,
                image: productFormData.image,
                price: productFormData.price,
                category: catData.categories[0]._id,
                user: userData.me.name
            },
          },
        });
        console.log(error)
        console.log(mutationRes)
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
      };


    if (Auth.loggedIn()) {
    return (
        <>
        <Row>
        <Col className="d-flex flex-column align-items-center p-3">
          <h4>Add a Post</h4>
          {/* This is needed for the validation functionality above */}
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            {/* show alert if server response is bad */}
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              Something went wrong adding your post!
            </Alert>
            <Form.Group>
              <Form.Label htmlFor="name">Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                name="name"
                onChange={handleInputChange}
                value={productFormData.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                Product name is required!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="image">Product Image Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product image"
                name="image"
                onChange={handleInputChange}
                value={productFormData.image}
                required
              />
              <Form.Control.Feedback type="invalid">
                Product image is required!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product description"
                name="description"
                onChange={handleInputChange}
                value={productFormData.description}
                required
              />
              <Form.Control.Feedback type="invalid">
                Product description is required!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="price">Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product price"
                name="price"
                onChange={handleInputChange}
                value={productFormData.price}
                required
              />
              <Form.Control.Feedback type="invalid">
                Price has to be more than or = 0
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="category">Category</Form.Label>
              <Form.Select
                type="text"
                placeholder="Category"
                name="category"
                required>
                    <option>Antiques</option>
                    <option>Appliances</option>
                    <option>AutoParts</option>
                    <option>Books</option>
                    <option>Clothes</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Other</option>
                    <option>Homegoods</option>
                    <option>Jewelry</option>
                    <option>Motors</option>
                    <option>Sporting</option>
                    <option>Tools</option>
                </Form.Select>

              <Form.Control.Feedback type="invalid">
                Product description is required!
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="mt-2"
              disabled={
                !(
                    productFormData.name &&
                    productFormData.image &&
                    productFormData.description &&
                    productFormData.price
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
    } else {
        return (
            <Col className='product_box' lg={12}>
        <section className="products" id="products">
            <h4>Please login to make a post!</h4>
        </section>
        </Col>

        )
    }
};

export default Post;