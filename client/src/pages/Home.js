import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import  Splash  from '../components/Splash/Splash.js'

import { 
  MdRefresh,
  MdSearch
} from "react-icons/md"


const Home = () => {


    return (
        <Col className='product_box' lg={12}>
        <section className="products">
          <h2>Welcome to Bazaar Buddies</h2>
          <Container className='homepage'>
          <Col className='home-desc'>
            <h5>Bazaar Buddies is an e-commerce platform that uses MongoDB and an eBay API to host a myriad of products. Users can search through our predefined categories and choose whether Bazaar Buddies products or eBay products are displayed.</h5>
            <span></span>
            <img src={require("../assets/bazaaar.png")} alt="logo"/>
          </Col>
          </Container>
      <Row className="product_grid">
        </Row>
        </section>
      </Col>
    )

}

export default Home;