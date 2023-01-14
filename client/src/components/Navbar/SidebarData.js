
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
        cName: "nav-text iconBorder"
    },
    {
        title:"Appliances",
        path: "/appliances",
        icon: <MdBlender/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"AutoParts",
        path: "/auto-parts",
        icon: <MdCarRepair/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Books",
        path: "/books",
        icon: <MdMenuBook/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Vehicles",
        path: "/vehicles",
        icon: <MdDirectionsCarFilled/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Clothes",
        path: "/clothes",
        icon: <IoIosShirt/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Electronics",
        path: "/electronics",
        icon: <IoIosDesktop/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Furniture",
        path: "/furniture",
        icon: <MdChair/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"General",
        path: "/general",
        icon: <MdAllInbox/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Bedroom",
        path: "/bedroom",
        icon: <MdBed/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Jewelry",
        path: "/jewelry",
        icon: <MdWatch/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Sporting",
        path: "/sporting",
        icon: <IoIosAmericanFootball/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Tools",
        path: "/tools",
        icon: <IoMdHammer/>,
        cName: "nav-text iconBorder"
    },
    {
        title:"Toys",
        path: "/toys",
        icon: <IoMdRocket/>,
        cName: "nav-text iconBorder"
    },
];

