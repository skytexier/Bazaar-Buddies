import React from "react"
import { MdSearch } from "react-icons/md"
import Col from 'react-bootstrap/Col'
import { Container, Row, Button} from "react-bootstrap"
import { 
    MdShoppingBasket
} from "react-icons/md"
import './Header.css'
import { Link } from "react-router-dom";


function Header (){
    return(
        <Container fluid className="header">
        <Row>
            <Col className="icon col-1">
            <img src={require("../../assets/BazaarBuddies.png")}  />
            </Col>
            <Col className="col-2">
                <h4>Bazaar Buddies</h4>
                <p>Your Friends, Your Shopping</p>
            </Col>
            <Col className="col-2">
            <div className ="header__Search"> 
                <input type="text" className="header__searchInput"/><Button variant="primary">Search<MdSearch/></Button>
            </div>
            </Col>
            <Col>
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
                <button >Checkout</button>
                <MdShoppingBasket/>
                {/*number of items in the basket */}
                <span className = "header__optionLineTwo header__basketCount"> 2 </span> {/*testing*/}
            </div>
            </Link>
            </Col>
        </Row>
        </Container>
    )
}

export default Header


// MN - SHT - WIP