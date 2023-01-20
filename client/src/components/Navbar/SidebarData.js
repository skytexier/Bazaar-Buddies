
import {
    IoIosShirt, IoIosDesktop, IoIosAmericanFootball, IoIosBody, IoLogoGameControllerB, IoMdRocket, IoMdHammer, IoMdMusicalNotes
} from 'react-icons/io'

import { 
    MdBlender, MdChair, MdBed, MdEmojiFoodBeverage, MdCarRepair, MdLocalFlorist, MdAllInbox, MdMenuBook, MdDirectionsCarFilled, MdWatch 
} from "react-icons/md"

export const SidebarData = [
    {
        title: "Antiques",
        path: "/antiques",
        icon: <MdEmojiFoodBeverage/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Appliances",
        path: "/appliances",
        icon: <MdBlender/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Auto Parts",
        path: "/auto-parts",
        icon: <MdCarRepair/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Books",
        path: "/books",
        icon: <MdMenuBook/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Vehicles",
        path: "/vehicles",
        icon: <MdDirectionsCarFilled/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Clothes",
        path: "/clothes",
        icon: <IoIosShirt/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Electronics",
        path: "/electronics",
        icon: <IoIosDesktop/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Furniture",
        path: "/furniture",
        icon: <MdChair/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"General",
        path: "/general",
        icon: <MdAllInbox/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Bedroom",
        path: "/bedroom",
        icon: <MdBed/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Jewelry",
        path: "/jewelry",
        icon: <MdWatch/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Sporting",
        path: "/sporting",
        icon: <IoIosAmericanFootball/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Tools",
        path: "/tools",
        icon: <IoMdHammer/>,
        cName: "nav-text nav-icon"
    },
    {
        title:"Toys",
        path: "/toys",
        icon: <IoMdRocket/>,
        cName: "nav-text nav-icon"
    },
];

