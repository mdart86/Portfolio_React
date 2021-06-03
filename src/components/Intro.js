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
                <h1>Welcome</h1>
                    <div className="intro-div">
                        <p>From a young age I have been an explorer, when some people read novels, I read at Atlases. 
                            As I grew older and started to wonder what it would be like to see those places, it was time to throw away the Atlas!
                            <br></br>                          
                            <br></br>                          
                            I began travelling in 1997 on my first family holiday to North America and Europe. Since that first trip, I was hooked! I have meet many new people and made some great friends along the way.
                            <br></br>                          
                            <br></br>
                            Years went by, I got a job in Travel, I also lived in another country for a short period of time. 
                            <br></br>
                            <br></br>
                            Come just recently, I wanted to try something new! This is when I decided to venture on a new path to learn about Web Development.
                            <br></br>
                            <br></br>
                            <span className="intro-last-line">So, since 2020 my coding journey has begun!</span>                           
                            </p>  
                            <a href="#portfolio"><img src="assets/icons8-expand-arrow-100.png" alt="arrow" className="arrow-image-intro" /></a>          
                    </div>
            </div>
        </div>
    )
}

export default Intro