import React from "react";
import { MdSearch } from "react-icons/md";
import Col from "react-bootstrap/Col";
import { Container, Row, Button, Stack } from "react-bootstrap";
import { MdShoppingBasket } from "react-icons/md";
import "./Header.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../utils/queries";

function Header() {
  const { loading, error, data } = useQuery(GET_USER);
  if (loading) return "Loading";
  console.log(data);
  console.log(error);

  //if user is logged in, then be able to see certain navbar items
  if (Auth.loggedIn()) {
    return (
      <Container fluid className="header">
        <Row className="header-row">
          <Col className="icon col-auto">
            {/* home router presents the home information */}
            <Link to="/" className="header-link">
              <img src={require("../../assets/BazaarBuddies.png")} alt="logo" />
            </Link>
          </Col>
          <Col className="title col-auto">
            <h1>Bazaar Buddies</h1>
            <p>Your Friends, Your Shopping, Your Bazaar</p>
          </Col>
          <Col className="user-options col-auto">
            {/*first link */}
            <ul className="user-buttons">
              {data ? (
                <li>
                  {/* user router presents user information and posts made */}
                  <Link to="/user" className="header-link">
                    <Button variant="warning">
                      <div className="header-option">
                        <span className="header-text">
                          Hello {data.me.name}
                        </span>
                      </div>
                    </Button>
                  </Link>
                </li>
              ) : (
                <Button variant="danger">
                <div className="header-option">
                  <span className="header-text">
                  User not logged in
                  </span>
                </div>
              </Button>
              )}

              <li>
                {/* check out products from users */}
                <Link to="/bazaarPosts" className="header-link">
                  <Button variant="warning">
                    <div className="header-option">
                      <span className="header-text">
                        Bazaar Buddies Products
                      </span>
                    </div>
                  </Button>
                </Link>
              </li>
              <li>
                {/* router to make a post */}
                <Link to="/userproducts" className="header-link">
                  <Button variant="warning">
                    <div className="header-option">
                      <span className="header-text">Make a post</span>
                    </div>
                  </Button>
                </Link>
              </li>
              <li>
                {/* log out router */}
                <Link to="" className="header-link">
                  <Button variant="danger" onClick={() => Auth.logout()}>
                    <div className="header-option">
                      <span className="header-text">Logout</span>
                    </div>
                  </Button>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
    //if not logged in, user does not have access to certain navbar, but can login with button
  } else {
    return (
      <Container fluid className="header">
        <Row className="header-row">
          <Col className="icon col-auto">
            <Link to="/" className="header-link">
              <img src={require("../../assets/BazaarBuddies.png")} alt="logo" />
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
                    <div className="header-option">
                      <span className="header-text">Login</span>
                    </div>
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/signup" className="header-link">
                  <Button variant="warning">
                    <div className="header-option">
                      <span className="header-text"> Sign Up</span>
                    </div>
                  </Button>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;

// MN - SHT - WIP
