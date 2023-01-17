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
            <Col className="user-options">
            {/*first link */}
            <ul className="user-options">
                <li>
                    <Link to="/" className="header-link">
                        <div className = "header-option">
                            <span className ="header-text"> Sign In</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="header-link">
                        <div className = "header-option">
                            <span className ="header-text"> Sign Up</span>
                        </div>
                    </Link>
                </li>
                <li>
                      {/*second link */}
                    <Link to="/checkout" className="header-link">
                         <div className = "header-option">
                            <MdShoppingBasket/>
                            {/*number of items in the basket */}
                                <span className = "header-optionLineTwo header-basketCount"> 2 </span> {/*testing*/}
                         </div>
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