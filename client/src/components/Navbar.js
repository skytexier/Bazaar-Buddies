import {
    IoIosShirt, IoIosDesktop, IoIosAmericanFootball, IoIosBody, IoLogoGameControllerB, IoMdRocket, IoMdHammer, IoMdMusicalNotes
} from 'react-icons/io'

import { MdBlender, MdChair, MdBed, MdEmojiFoodBeverage, MdCarRepair, MdLocalFlorist, MdAllInbox, MdMenuBook, MdDirectionsCarFilled, MdWatch } from "react-icons/md"

 const Navbar = () => {
    return(
        <ul className="ul-item"> 

            <li>
                <h4>Antiques</h4>
                {/* icon */}
                <MdEmojiFoodBeverage className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Appliances</h4>
                {/* icon */}
                <MdBlender className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Auto Parts</h4>
                {/* icon */}
                <MdCarRepair className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Books</h4>
                {/* icon */}
                <MdMenuBook className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Vehicles</h4>
                {/* icon */}
                <MdDirectionsCarFilled className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Clothes</h4>
                {/* icon */}
                <IoIosShirt className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Collectibles</h4>
                {/* icon */}
                <IoIosBody className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Electronics</h4>
                {/* icon */}
                <IoIosDesktop className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Farm & Garden</h4>
                {/* icon */}
                <MdLocalFlorist className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Furniture</h4>
                {/* icon */}
                <MdChair className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>General</h4>
                {/* icon */}
                <MdAllInbox className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Bedroom</h4>
                {/* icon */}
                <MdBed className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Jewelry</h4>
                {/* icon */}
                <MdWatch className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Music</h4>
                {/* icon */}
                <IoMdMusicalNotes className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Sporting</h4>
                {/* icon */}
                <IoIosAmericanFootball className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Tools</h4>
                {/* icon */}
                <IoMdHammer className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Toys & Games</h4>
                {/* icon */}
                <IoMdRocket className='iconBorder'/>
                {/* link */}
            </li>
            <li>
                <h4>Video Gaming</h4>
                {/* icon */}
                <IoLogoGameControllerB className='iconBorder'/>
                {/* link */}
            </li>

    
        </ul> 
    );
}
//working on it (JL) feel free to add on

;
export default Navbar;