import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { useState,} from "react";
import Col from 'react-bootstrap/Col';
import "./Navbar.css";
 
export default function Navbar() {
    
    const [sidebar, setSideBar] = useState(true);
    const [activeCat, setActiveCat] = useState('');
    const [activeTitle, setActiveTitle] = useState('');

    const onActiveCategory = (value) => {
        setActiveCat(value)
    };


return (

    <Col xs={12} sm={3} md={2} className="col-2 p-0">


        <ul className = "nav-menu nav_active_category">
            <li>{activeCat}
                <span>{activeTitle}</span>
            </li>
        </ul>

        <Nav className = {sidebar ? "nav-menu active" : "nav-menu"}>

        

            <ul className = "nav-menu-items">
                {SidebarData.map((item, index) => {
                    return (
                        <li key= {index} className = {item.cName}>
                            <Link to = {item.path} onClick={() => onActiveCategory(item.icon) & setActiveTitle(item.title)}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Nav>
        </Col>
    )
};

//working on it (JL) feel free to add on