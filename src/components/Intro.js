import React from 'react'
import "../styling/styling.scss"




const Intro = () => {
    return(
        <div className="intro" id="intro">
            <div className="left-intro">
                <div className="image-container">
                    <img src="assets/me.png" alt="me-in-vancouver"/>
                </div>
            </div>
            <div className="right-intro">
                <h1>Intro Page</h1>
                <a href="#portfolio">Portfolio... CLICK HERE</a>
            </div>
        </div>
    )
}

export default Intro