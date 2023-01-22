import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import {useDispatch, useSelector} from 'react-redux';

function UserPosts(){
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const {loading, data} = useQuery(QUERY_PRODUCTS);
    console.log(data)

    useEffect(() => {
      if (data) {
        dispatch

      }
    })

    return (
        <Col className='product_box' lg={12}>
          <section className="products" id="products">
            <h2>User Posted Items</h2>
            <Container className='subcategories'>
            <h4>Major Categories</h4>
            </Container>
        <Row className="product_grid">
          {data.map((item, index) => {
            return <ProductCard
            key={index}
            {...item}
            />
          })}
          </Row>
          </section>
        </Col>
      );
}

export default UserPosts;