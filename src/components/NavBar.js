import React from 'react'
import "../styling/navbar.scss"
import { init } from 'ityped'

import { useEffect, useRef } from 'react'

const NavBar = ( {menuOpen, setMenuOpen} ) => {
    
    const textRef = useRef()

    // ityped use effect to show statements in navbar typed along the page... // see strings in useeffect as to what is typed
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 2000,
            strings: ["studying Full-Stack Web Development", "evolving into a Junior Web Developer"]
        })
    },[])

    return(
        <div className={"nav-bar " + (menuOpen && "active")}>
            <div className="inner-nav-bar">
                <div className="left-inner-nav-bar">
                    <a href="#intro"className="logo">Michael Dart</a>
                    <h2>... <span ref={textRef}></span></h2>
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