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

// Pages import
import Home from './pages/Home'
import Antiques from "./pages/Antiques.js";
import Appliances from './pages/Appliances.js'


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
            {/* <Route path = "/antiques" element = {Antiques} />
            <Route path = "/auto-parts" element = {AutoParts} />
            <Route path = "/books" element = {Books} />
            <Route path = "/vehicles" element = {Vehicles} />
            <Route path = "/clothes" element = {Clothes} />
            <Route path = "/collectibles" element = {Collectibles} />
            <Route path = "/electronics" element = {Electronics} />
            <Route path = "/garden" element = {Garden} />
            <Route path = "/furniture" element = {Furniture} />
            <Route path = "/general" element = {General} />
            <Route path = "/bedroom" element = {Bedroom} />
            <Route path = "/jewelry" element = {Jewelry} />
            <Route path = "/music" element = {Music} />
            <Route path = "/sporting" element = {Sporting} />
            <Route path = "/tools" element = {Tools} />
            <Route path = "/toys" element = {Toys} />
            <Route path = "/gaming" element = {Gaming} /> */}
          <Route path = "/antiques" element = {<Antiques/>} />
          <Route path = "/appliances" element = {<Appliances/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
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
