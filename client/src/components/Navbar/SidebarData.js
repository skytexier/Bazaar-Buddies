
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
        cName: "nav-text"
    },
    {
        title:"Appliances",
        path: "/appliances",
        icon: <MdBlender/>,
        cName: "nav-text"
    },
    {
        title:"Auto Parts",
        path: "/auto-parts",
        icon: <MdCarRepair/>,
        cName: "nav-text"
    },
    {
        title:"Books",
        path: "/books",
        icon: <MdMenuBook/>,
        cName: "nav-text"
    },
    {
        title:"Vehicles",
        path: "/vehicles",
        icon: <MdDirectionsCarFilled/>,
        cName: "nav-text"
    },
    {
        title:"Clothes",
        path: "/clothes",
        icon: <IoIosShirt/>,
        cName: "nav-text"
    },
    {
        title:"Electronics",
        path: "/electronics",
        icon: <IoIosDesktop/>,
        cName: "nav-text"
    },
    {
        title:"Furniture",
        path: "/furniture",
        icon: <MdChair/>,
        cName: "nav-text"
    },
    {
        title:"General",
        path: "/general",
        icon: <MdAllInbox/>,
        cName: "nav-text"
    },
    {
        title:"Bedroom",
        path: "/bedroom",
        icon: <MdBed/>,
        cName: "nav-text"
    },
    {
        title:"Jewelry",
        path: "/jewelry",
        icon: <MdWatch/>,
        cName: "nav-text"
    },
    {
        title:"Sporting",
        path: "/sporting",
        icon: <IoIosAmericanFootball/>,
        cName: "nav-text"
    },
    {
        title:"Tools",
        path: "/tools",
        icon: <IoMdHammer/>,
        cName: "nav-text"
    },
    {
        title:"Toys",
        path: "/toys",
        icon: <IoMdRocket/>,
        cName: "nav-text"
    },
];

