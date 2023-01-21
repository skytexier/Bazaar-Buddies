import React from "react"
import { MdSearch } from "react-icons/md"
import Col from 'react-bootstrap/Col'
import { Container, Row, Button, Stack} from "react-bootstrap"
import { 
    MdShoppingBasket
} from "react-icons/md"
import './Header.css'
import { Link } from "react-router-dom";


function Header (){
    return(
        <Container fluid className="header">
        <Row className='header-row'>
            <Col className="icon col-auto">
            <Link to="/" className="header-link">
            <img src={require("../../assets/BazaarBuddies.png")} alt="logo"/>
            </Link>
            </Col>
            <Col className="title col-auto">
                <h1>Bazaar Buddies</h1>
                <p>Your Friends, Your Shopping, Your Bazaar</p>
            </Col>
            <Col className="user-options col-auto">
            {/*first link */}
            <ul className="user-buttons">
                <li>
                    <Link to="/login" className="header-link">
                        <Button variant="warning">
                        <div className = "header-option">
                            <span className ="header-text">Login</span>
                        </div>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/register" className="header-link">
                    <Button variant="warning">
                        <div className = "header-option">
                            <span className ="header-text"> Sign Up</span>
                        </div>
                    </Button>
                    </Link>
                </li>
                <li>
                      {/*second link */}
                    <Link to="/checkout" className="header-link">
                    <Button variant="warning">
                         <div className = "header-option">
                            <MdShoppingBasket/>
                            {/*number of items in the basket */}
                                <span className = "header-optionLineTwo header-basketCount"> Cart </span> {/*testing*/}
                         </div>
                        </Button>
                    </Link>
                </li>
            </ul>
            </Col>
        </Row>
        </Container>
    )
}

export default Header


// MN - SHT - WIP