// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "./ProductCard.js";

export default function Splash(){
    
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
        ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={6}>
                        <h2>Products</h2>
                            <Row>
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
                </Row>
            </Container>
            </section>
        )
    }