import React, { useEffect } from 'react';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { ProductCard } from '../components/ProductCard.js';
import  Splash  from '../components/Splash/Splash.js'

const Toys = (props) => {

    return(
        <Col lg={12}>
        <section className="products" id="products">
          <h2>Toys</h2>
              <Row className="justify-content-center">
        {itemArr.map((item, index) => {
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

export default Toys;