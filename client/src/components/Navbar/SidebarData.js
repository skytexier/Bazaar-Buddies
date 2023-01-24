
// Import React Icons
import {
    IoIosShirt, IoIosDesktop, IoIosAmericanFootball, IoIosBody, IoLogoGameControllerB, IoMdRocket, IoMdHammer, IoMdMusicalNotes, IoIosCloud
} from 'react-icons/io'

import { 
    MdBlender, MdChair, MdBed, MdEmojiFoodBeverage, MdCarRepair, MdLocalFlorist, MdAllInbox, MdMenuBook, MdDirectionsCarFilled, MdWatch, MdSpaceDashboard 
} from "react-icons/md"


// Sidebar Data to be pulled into Navbar
// path brings the user to that category's specific page
export const SidebarData = [
    {
        title: "Antiques",
        path: "/antiques",
        icon: <MdEmojiFoodBeverage/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Appliances",
        path: "/appliances",
        icon: <MdBlender/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Auto Parts",
        path: "/auto-parts",
        icon: <MdCarRepair/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Books",
        path: "/books",
        icon: <MdMenuBook/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Motors",
        path: "/motors",
        icon: <MdDirectionsCarFilled/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Clothes",
        path: "/clothes",
        icon: <IoIosShirt/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Electronics",
        path: "/electronics",
        icon: <IoIosDesktop/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Furniture",
        path: "/furniture",
        icon: <MdChair/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Home Goods",
        path: "/homegoods",
        icon: <MdBed/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Jewelry",
        path: "/jewelry",
        icon: <MdWatch/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Sporting",
        path: "/sporting",
        icon: <IoIosAmericanFootball/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"Tools",
        path: "/tools",
        icon: <IoMdHammer/>,
        cName: "nav_text nav_icon"
    },
    {
        title:"The Beyond",
        path: "/beyond",
        icon: <IoIosCloud/>,
        cName: "nav_text nav_icon"
    },
];

