import React from 'react'
import "../styling/styling.scss"


const Menu = ( {menuOpen, setMenuOpen} ) => {
    return(
        <div className={"menu " + (menuOpen && "active")} id="menu">
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#techstack">Tech Stack</a>
                </li>              
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>              
            </ul>               
        </div>
    )

}

export default Menu