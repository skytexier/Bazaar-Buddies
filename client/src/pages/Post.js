import React, { useState } from "react";
import { Form, Button, Alert, Col, Row, Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../utils/mutations";
import { GET_USER, QUERY_CATEGORIES, GET_PRODUCT_BY_USER} from "../utils/queries";
import { ProductCard } from '../components/ProductCard.js';



import Auth from "../utils/auth";

const Post = () => {
    const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER);
    const { loading: catLoading, error: catError, data: catData } = useQuery(QUERY_CATEGORIES);
    const userId = userData?.me?._id
    const { loading: productLoading, error: productError, data: productData } = useQuery(GET_PRODUCT_BY_USER, {
      variables: { userId },
    });
    productData ? console.log(productData) : console.log('no data found')
    const newData = productData ? Object.values(productData) : console.log('no product data');
    const userProducts = productData ? productData.getProductByUser.map(({ category, description, image, name, price}) => {
      console.log(newData)
      return {
        category: category._id,
        description,
        image,
        name,
        price,
      }
    }) : console.log('cannot map user product data')
    console.log(userProducts)


    const [createProduct, error] = useMutation(CREATE_PRODUCT);
    const [productFormData, setproductFormData] = useState({
        name: "",
        description: "",
        image: "",
        price: "",
        category: {
            _id: "",
        },
        user: {
            name: ""
        }
    });
    console.log(productFormData)
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setproductFormData({ ...productFormData, [event.target.name]: event.target.value });
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
                category: productFormData.category,
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
        <Container>
        <Col className='product_box' lg={12}>
        <Row>
          <section className="products">
        <Col className="d-flex flex-column align-items-center p-3">
          <h4>Post a product!</h4>
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
                value={productFormData.category}
                onChange={(event) =>handleInputChange(event)}
                required>
                   { catData? catData.categories.map(category => (
                  <option key={category._id} value={category._id}>
                      {category.name}
                  </option>
                    )) : <option>loading categories</option>}
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
          </section>
          </Row>
          <Row>
          <section className="products" id="products">
            <h2>Your Posts</h2>
        <Row className="product_grid">
          {userProducts ? userProducts.map((item, index) => {
          return <ProductCard
          key={index}
          {...item}
          />
        }) : <h4>No Data yet :</h4>}
          </Row>
          </section>
          </Row>
          </Col>
          </Container>
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