import { useState,} from "react";
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
// SidebarData populates the title, path, icon, and class names for each category
import { SidebarData } from "./SidebarData";
import Col from 'react-bootstrap/Col';
import "./Navbar.css";
 
export default function Navbar() {
    
    const [sidebar, setSideBar] = useState(true);
    const [activeCat, setActiveCat] = useState('');
    const [activeTitle, setActiveTitle] = useState('');
    // Active Category sets what category the user is currently viewing
    const onActiveCategory = (value) => {
        setActiveCat(value)
    };

// Calling the navbar using the Sidebar Data     

return (

    <Col xs={12} sm={3} md={2} lg={2} className="col-2 p-0">
        <ul className = "nav_menu nav_active_category">
            <li>{activeCat}
            {/* Set Active Category Title */}
                <span>{activeTitle}</span>
            </li>
        </ul>
        <Nav className = {sidebar ? "nav_menu active" : "nav_menu"}>
            <ul className = "nav_menu_items">
                {SidebarData.map((item, index) => {
                    return (
                        <li key= {index} className = {item.cName}>
                            {/* Set Active Category Title based on user's choice of category */}
                            <Link to = {item.path} onClick={() => onActiveCategory(item.icon) & setActiveTitle(item.title)}>
                                 {/* Populates Category pages */}
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
