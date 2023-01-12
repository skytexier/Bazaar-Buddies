import React from "react"
import { MdSearch } from "react-icons/md"


function Header (){
    return(
        <nav className = "header"> 
            <div className ="header__Search"> 
                <input type="text" className="header__searchInput"/>
                <MdSearch/>
            </div>

            <div className = "header__option">
                <span className ="header__optionLineOne"> Hello User</span>
                <span className ="header__optionLineTwo"> Sign In or Sign Out</span>
            </div>
        </nav>
    )
}

export default Header


// MN - WIP















