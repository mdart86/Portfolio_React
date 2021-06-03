import React from 'react'
import { SiMinutemailer, SiGithub, SiLinkedin, SiTwitter, SiMedium } from "react-icons/si";
// import { Button } from 'react-bootstrap';
import "../styling/styling.scss"
// import ContactMailIcon from '@material-ui/icons/ContactMail';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import Twitter from '@material-ui/icons/Twitter';


const Contact = () => {
    // const [message, setMessage] = useState(false)

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setMessage(true)
    // }

    return(
        <div className="connect" id="connect">
            <div className="left-connect">
                <img src="assets/diana-polekhina-1ixT36dfuSQ-unsplash.jpg" alt="new-message-icon"/>
            </div>
                <div className="right-connect">
                    <a href="mailto: mdart86@hotmail.com?subject=Contact from Portfolio site!" className="connect-me-button">
                        <p className="pr-2">Email</p>
                        <SiMinutemailer className="connect-me-text" />
                    </a>
                    <a href="https://github.com/mdart86" target="_blank" rel="noopener noreferrer" className="connect-me-button">
                        <p className="pr-2">GitHub</p>
                        <SiGithub className="connect-me-text"/>
                    </a>
                    <a href="https://www.linkedin.com/in/michael-dart-537a3b57/" target="_blank" rel="noopener noreferrer" className="connect-me-button">
                        <p className="pr-2">LinkedIn</p>
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
{/* add medium link */}

                    {/* <div className="item-container">
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
                    </div> */}
                </div>
        </div>
    )
}

export default Contact