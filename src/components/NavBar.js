import React from 'react'
import "../styling/styling.scss"
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';

const NavBar = ( {menuOpen, setMenuOpen} ) => {
    return(
        <div className={"nav-bar " + (menuOpen && "active")}>
            <div className="inner-nav-bar">
                <div className="left-inner-nav-bar">
                    <a href="#intro"className="logo">Michael Dart</a>
                        <div className="item-container">
                            <ContactMailIcon className="icon" />
                            <span>mdart86@hotmail.com</span>
                        </div>
                        <div className="item-container">
                            <GitHubIcon className="icon"/>
                            <span>mdart86</span>
                        </div>
                        <div className="item-container">
                            <InstagramIcon className="icon" />
                            <span>mdart86</span>
                        </div>
                        <div className="item-container">
                            <Twitter className="icon"/>
                            <span>@MichaelDart12</span>
                        </div>
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