import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import {useDispatch, useSelector} from 'react-redux';

const  UserPosts = (props ) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
      const {loading, error, data} = useQuery(QUERY_PRODUCTS);
      if (loading) return 'Loading';
      if (error) return `Error ${error.message}`;
      console.log(data)


    return (
        <Col className='product_box' lg={12}>
          <section className="products" id="products">
            <h2>User Posted Items</h2>
            <Container className='subcategories'>
            <h4>Major Categories</h4>
            </Container>
        <Row className="product_grid">
          {data ? data.products.map((item, index) => {
          return <ProductCard
          key={index}
          {...item}
          />
        }) : <h4>No Data yet :</h4>}
          </Row>
          </section>
        </Col>
      );
}

export default UserPosts;