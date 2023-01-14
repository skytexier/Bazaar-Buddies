import React from "react"
import { MdSearch } from "react-icons/md"
import Col from 'react-bootstrap/Col'
import { Container, Row, Button } from "react-bootstrap"
import './Header.css'
import { Link } from "react-router-dom";


function Header (){
    return(
        <Container>
        <Row>
            {/* <Col>
                <h4>Bazaar Buddies</h4>
                <p>Your Friends, Your Shopping</p>
            </Col> */}
            <Col>
            <nav className = "header"> 
            <div className ="header__Search"> 
                <input type="text" className="header__searchInput"/>
                <Col>
                <Button variant="primary">Search<MdSearch/></Button>
                </Col>
            </div>
            {/*first link */}
            <Link to="/" className="header__link">
            <div className = "header__option">
                <span className ="header__optionLineOne"> Hello, User</span>
                <span className ="header__optionLineTwo"> Sign In</span>
            </div>
            </Link>
            {/*second link */}
            <Link to="/checkout" className="header__link">
            <div className = "header__optionBasket">
                <button ShoppingBasketIcon>Checkout</button>
            </div>
            </Link>
            </nav>
            </Col>
        </Row>
        </Container>
    )
}

export default Header


// MN - SHT - WIP