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
                        <p>From a young age I have been an explorer, when some people read novels, I read at Atlases. As I grew older and started to wonder what it would be like to see those places, It was time to throw away the Atlas! I began travelling in 1997 on my first family holiday to North America and Europe. Since that first trip, I was hooked! I have meet many new people and made some great friends along the way. Years went by, careers changed, even getting a job in Travel, I also lived in another country for a short period of time. Come just recently, I wanted to try something new, it's in my nature to learn and grow. I quote from an boss and friend: "You'll enjoy your new course, just be the sponge that you are!". That is when I decided to venture on a new path to learn about Web Development. There have been many challenges throughout my life and at the end of each challenge, I believe I have come out a stronger person. I am keen to progress in this new and ever changing world. I look forward to tackling the new challenges that lie ahead (or do I? Ha ha). </p>            
                    </div>
                <a href="#portfolio">Portfolio... CLICK HERE</a>
            </div>
        </div>
    )
}

export default Intro