import React from 'react'
import { SiMinutemailer, SiGithub, SiLinkedin, SiTwitter, SiMedium } from "react-icons/si";
import "../styling/connect.scss"

const Contact = () => {
    return(
        <div className="connect" id="connect">
                    <div className="connect-heading">
                        <h1>Connect with me</h1>
                    </div>
                    <div class="connect-content">
                        {/* <div className="left-connect">
                            <img src="assets/diana-polekhina-1ixT36dfuSQ-unsplash.jpg" alt="new-message-icon"/>
                        </div> */}
                            <a href="mailto: mdart86@hotmail.com?subject=Contact from Portfolio site!" className="connect-me-button">
                                <p className="pr-2">Email</p>
                                <SiMinutemailer className="connect-me-text" />
                            </a>
                            <a href="https://github.com/mdart86" target="_blank" rel="noopener noreferrer" className="connect-me-button">
                                <p className="pr-2">mdart86</p>
                                <SiGithub className="connect-me-text"/>
                            </a>
                            <a href="https://www.linkedin.com/in/michael-dart-537a3b57/" target="_blank" rel="noopener noreferrer" className="connect-me-button">
                                <p className="pr-2">Michael Dart</p>
                                <SiLinkedin className="connect-me-text"/>
                            </a>
                            <a href="https://twitter.com/MichaelDart12" target="_blank" rel="noopener noreferrer" className="connect-me-button">
                                <p className="pr-2">@MichaelDart12</p>
                                <SiTwitter className="connect-me-text"/>
                            </a>
                            <a href="https://michaeldart12.medium.com/" target="_blank" rel="noopener noreferrer" className="connect-me-button">
                                <p className="pr-2">@michaeldart12</p>
                                <SiMedium className="connect-me-text"/>
                            </a>
                    </div>
                    {/* <div className="arrow-image-connect">
                        <a href="#intro"><img src="assets/icons8-collapse-arrow-100.png" alt="arrow" className="arrow-image-connect" /></a>
                    </div> */}
        </div>
    )
}

export default Contact