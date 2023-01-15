
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { useState,} from "react";
import Col from 'react-bootstrap/Col';
import "./Navbar.css";
 
export default function Navbar() {
    
    const [sidebar, setSideBar] = useState(true);

return (
    <Col lg={2}>
        <nav className = {sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className = "nav-menu-items">
            <Link to= "/home"className = "logo-section">
            <img src={require("../../assets/BazaarBuddies.png")}  />
            </Link>
                {SidebarData.map((item, index) => {
                    return (
                        <li key= {index} className = {item.cName}>
                            <Link to = {item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </Col>
    )
};

//working on it (JL) feel free to add on