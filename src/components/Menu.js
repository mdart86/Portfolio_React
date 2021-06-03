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
                    <a href="#connect">Connect</a>
                </li>         
            </ul>      
            <div className="copyright">
                <img src="assets/icons8-copyright-52.png" alt="copyright"></img><p>Michael Dart<br></br> 2021</p>
            </div>              
        </div>
    )
}

export default Menu