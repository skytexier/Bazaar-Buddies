import React, {useState} from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Page from "./components/Page.js";
import Navbar from "./components/Navbar.js";
// import Footer from "./components/Footer/index";
import Splash from "./components/Splash.js";
// import Navbar from "./components/Navbar/index";
import './App.css';

function App() {
  // const [pages] = useState(["item", "pay", "post"]);
  // const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    // <>
    // <div className="">
    //   <Navbar/>
    //   <Header
    //     pages={pages}
    //     setCurrentPage={setCurrentPage}
    //     currentPage={currentPage}
    //   />
      
    //   <Page currentPage = {currentPage} />
    //   <Footer/>
    // </div>
    // </>
    <div className="App">
      <Navbar/>
      <Header/>
      <Splash/>
      <Footer/>
    </div>
  );
}

export default App;
//ST & JL
