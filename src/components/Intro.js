import React from 'react'
import "../styling/styling.scss"


const Intro = () => {
    return(
        <div className="intro" id="intro">
            <div className="left"></div>
                <div className="image-container">
                    <img src="../public/assets/me.png" alt="me-in-vancouver"/>
                </div>
            <div className="right"></div>
        </div>
    )

}

export default Intro