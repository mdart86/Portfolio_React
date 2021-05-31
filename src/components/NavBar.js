import React from 'react'
import "../styling/styling.scss"

const NavBar = ( {menuOpen, setMenuOpen} ) => {
    return(
        <div className={"nav-bar " + (menuOpen && "active")}>
            <div className="inner-nav-bar">
                <div className="left-inner-nav-bar">
                    <a href="#intro"className="logo">Michael Dart</a>
                </div>
                <div className="right-inner-nav-bar">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>            
            </div>    
        </div>
    )
}

export default NavBar