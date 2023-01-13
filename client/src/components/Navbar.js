import {
    IoIosShirt, IoIosDesktop, IoIosAmericanFootball, IoIosBody, IoLogoGameControllerB, IoMdRocket, IoMdHammer, IoMdMusicalNotes
} from 'react-icons/io'
import { 
    MdStore, MdBlender, MdChair, MdBed, MdEmojiFoodBeverage, MdCarRepair, MdLocalFlorist, MdAllInbox, MdMenuBook, MdDirectionsCarFilled, MdWatch 
} from "react-icons/md"
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';

import "./Navbar.css";
 
export default function Navbar() {

    const [sidebar ] = useState(true);

return (
    <Col lg={2}>
        <nav className = {sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className = "nav-menu-items">
            <logo className = "logo-section">
                <MdStore className="logo-icon"/>
                <h3 className='logo-text'>Bazaar Buddies</h3>
            </logo>
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