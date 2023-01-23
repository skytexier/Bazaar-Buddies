import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import {useDispatch, useSelector} from 'react-redux';

const  BazaarPosts = (props ) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state)
      const {loading, error, data} = useQuery(QUERY_PRODUCTS);
      if (loading) return 'Loading';
      if (error) return `Error ${error.message}`;
      console.log(data)
        const newData = data.products.map(({ category, description, image, name, price}) => {
          return {
            category: category.name,
            description,
            image,
            name,
            price
          }
        })
        console.log(newData)
      







    return (
        <Col className='product_box' lg={12}>
          <section className="products" id="products">
            <h2>Bazaar Items</h2>
        <Row className="product_grid">
          {newData ? newData.map((item, index) => {
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

export default BazaarPosts;