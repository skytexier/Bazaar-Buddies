// Importing React, Router and Apollo packages
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components import
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Navbar from "./components/Navbar/Navbar.js";
import SidebarData from "./components/Navbar/SidebarData.js"
import Login from "./components/Login.js"
import Register from "./components/Register.js"
import CartList from "./components/CartList.js"
import Checkout from "./components/Checkout.js"


// import { AuthProvider } from './context/auth';
// import AuthRoute from './utils/AuthRoute';
// Pages import
import Home from './pages/HomeGoods'
import Antiques from "./pages/Antiques.js";
import Appliances from './pages/Appliances.js'
import AutoParts from "./pages/Autoparts.js";
import Books from "./pages/Books.js";
import Clothes from "./pages/Clothes.js";
import Electronics from "./pages/Electronics.js";
import Furniture from './pages/Furniture.js';
import General from './pages/General.js';
import HomeGoods from './pages/HomeGoods.js';
import Jewelry from './pages/Jewelry.js'
import Sporting from './pages/Sporting.js';
import Tools from './pages/Tools.js'
import Motors from './pages/Motors.js'



// React Boostrap / Styling Imports
import { Container, Col, Row } from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Constructing main GraphQL API Endpoint
const httpLink = createHttpLink({
  uri: '/graphql'
});

// Constructing middleware request, attaching JWT tokens with authorization headers
const authLink = setContext((_, { headers }) => {
  // get token from local storage if exists
  const token = localStorage.getItem('id_token');
  // return headers to the context so httpLink can read it
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // setting up our client to use auth middleware before our GraphQL API calls
  // data aint free in this economy
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [pages] = useState(["item", "pay", "post"]);
  // const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Container fluid>
        <Row>
        <Navbar/>
        <Col className="col">
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path = "/antiques" element = {<Antiques/>} />
          <Route path = "/appliances" element = {<Appliances/>} />
          <Route path = "/auto-parts" element = {<AutoParts/>} />
          <Route path = "/books" element = {<Books/>} />
          <Route path = "/clothes" element = {<Clothes/>} />
          <Route path = "/electronics" element = {<Electronics/>} />
          <Route path = "/furniture" element = {<Furniture/>} />
          <Route path = "/beyond" element = {<General/>} />
          <Route path = "/jewelry" element = {<Jewelry/>} />
          <Route path = "/sporting" element = {<Sporting/>} />
          <Route path = "/tools" element = {<Tools/>} />
          <Route path = "/motors" element = {<Motors/>} />
          <Route path = "/homegoods" element = {<HomeGoods/>} />
          </Routes>
          </Col>
      </Row>
      </Container>
      </BrowserRouter>
      <Footer/>
    </div>
    </ApolloProvider>
  );
}

export default App;
//ST & JL
