import React from "react";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Page from "./components/Page.js";
import Navbar from "./components/Navbar/Navbar.js";
import SidebarData from "./components/Navbar/SidebarData.js"
import { BrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
// import Footer from "./components/Footer/index";
import Splash from "./components/Splash.js";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'

function App() {
  // const [pages] = useState(["item", "pay", "post"]);
  // const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    // <>
    // <div className="">

    
      
    //   <Page currentPage = {currentPage} />
    //   <Footer/>
    // </div>
    // </>
    <div className="App">
      {/* <Navbar/> */}
      <Row fluid={true} className="p-0">
      <BrowserRouter>
        <Navbar />
          <Routes>
            {/* <Route path = "/antiques" element = {Antiques} />
            <Route path = "/appliances" element = {Appliances} />
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
          <Route path="/home" element={<Home/>} />
          </Routes>
      {/* <Header/> */}
      </BrowserRouter>
      <Footer/>
      </Row>
    </div>
  );
}

export default App;
//ST & JL
