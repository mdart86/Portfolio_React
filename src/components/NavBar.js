import React from 'react'
import "../styling/styling.scss"
import {ContactMailIcon,GitHubIcon,Twitter} from '@material-ui/icons';


const NavBar = () => {
    return(
        <div className="nav-bar">
            <div className="inner-nav-bar">
                <div className="left-inner-nav-bar">
                    <a href="#intro"className="logo">genius.</a>
                        <div className="item-container">
                            <ContactMailIcon/>
                            <span>My Email</span>
                        </div>
                        <div className="item-container">
                            <GitHubIcon/>
                            <span>GitHub Icon</span>
                        </div>
                        <div className="item-container">
                            <Twitter/>
                            <span>Twitter</span>
                        </div>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
                <h1>Hello Left</h1>
                <div className="right-inner-nav-bar">
                    <h1>Hello Right</h1>    
                </div>            
            </div>    
        </div>
    )
}

export default NavBar