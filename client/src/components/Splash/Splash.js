// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../ProductCard.js";

export default function Splash(props){
    
        const items = [
            {
                name: "Apples",
                price: 10,
                category: "Fruit"
            },
            {
                name: "Bananas",
                price: 1,
                category: "Fruit"
            },
            {
                name: "Oranges",
                price: 2,
                category: "Fruit"
            },
        ];

    return (
        <section className="products" id="products">
                    <Col>
                        <h2>{props.category}</h2>
                            <Row className="justify-content-center">
                                {
                                    items.map((item, index) => {
                                        return (
                                            <ProductCard 
                                            key={index}
                                            {...item}
                                            />
                                        )
                                    })
                                }
                        </Row>
                    </Col>
            </section>
        )
    }