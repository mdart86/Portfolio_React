import React from 'react'
// import { , SiGithub, SiLinkedin, SiTwitter, SiMedium } from "react-icons/si";
import "../styling/menu.scss"


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
                <p>Copyright &copy;</p>
                <p>Michael Dart, 2021</p>
            </div>              
        </div>
    )
}

export default Menu