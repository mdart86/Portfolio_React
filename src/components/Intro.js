import React from 'react'
import { init } from 'ityped'

import { useEffect, useRef } from 'react'

import "../styling/styling.scss"




const Intro = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 2000,
            strings: ["Studying Full Stack Web Development", "Evolving into a Junior developer"]
        })
    },[])

    return(
        <div className="intro" id="intro">
            <div className="left-intro">
                <div className="image-container">
                    <img src="assets/me.png" alt="me-in-vancouver"/>
                </div>
            </div>
            <div className="right-intro">
                <div className="intro-text">
                    <h2>Hello there, I am,</h2>
                    <h1>Michael Dart</h1>
                    <h3>I am a...<span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">Portfolio... CLICK HERE</a>
            </div>
        </div>
    )
}

export default Intro