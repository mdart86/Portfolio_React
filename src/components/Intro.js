import React from 'react'
import "../styling/intro.scss"

const Intro = () => {
    return(
        <div className="intro" id="intro">
            <div className="left-intro">
            <h1>Welcome</h1>
                <div className="image-container">
                    <img src="assets/me.png" alt="me-in-vancouver"/>
                </div>
            </div>
            <div className="right-intro">
                    <div className="intro-div">
                        <p>  From a young age I have been an explorer. While some people read novels, I read Atlases. As I grew older, I started to wonder what it would be like to see these places. That's when I realised it was time to throw away the Atlas and start exploring!                           
                            <br></br>                          
                            <br></br>                          
                            I began travelling... I was hooked! Throughout my travels I have met so many people along the way, some of which are now lifelong friends.  
                            <br></br>                          
                            <br></br>
                            Years went by and I landed my dream job in travel. During this role I was able to live overseas in London for a short period, which allowed me to travel some more.  
                            <br></br>
                            <br></br>
                            Last year, the travel industry was decimated by the impact of COVID-19. I was fortunate enough to retain my job, however it made me wonder what else is out there. I wanted a new challenge. After much deliberation, I decided to venture into Web Development, as Technology has always interested me. 
                            <br></br>
                            <br></br>
                            <span className="intro-last-line">Alas, my coding journey began in October 2020!</span>                           
                            </p>  
                    </div>
            </div>
            {/* <div className="arrow-image-intro">
                <a href="#portfolio"><img src="assets/icons8-expand-arrow-100.png" alt="arrow" className="arrow-image-intro" /></a>          
            </div> */}
        </div>
   
    )
}

export default Intro