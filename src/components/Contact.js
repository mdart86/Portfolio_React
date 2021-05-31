import React from 'react'
import { SiMinutemailer, SiGithub, SiLinkedin } from "react-icons/si";
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
        <div className="contact" id="contact">
            <div className="left-contact">
                <img src="assets/diana-polekhina-1ixT36dfuSQ-unsplash.jpg" alt="new-message-icon"/>
            </div>
                <div className="right-contact">
                    <h2>Lets connect and do some great things together</h2>
                    <a href="mailto: mdart86@hotmail.com" className="contact-me-button">
                        <p className="pr-2">Email</p>
                        <SiMinutemailer className="contact-me-text" />
                    </a>
                    <a href="https://github.com/mdart86" target="_blank" rel="noopener noreferrer" className="contact-me-button">
                        <p className="pr-2">GitHub</p>
                        <SiGithub className="contact-me-text"/>
                    </a>
                    <a href="https://www.linkedin.com/in/michael-dart-537a3b57/" target="_blank" rel="noopener noreferrer" className="contact-me-button">
                        <p className="pr-2">LinkedIn</p>
                        <SiLinkedin className="contact-me-text"/>
                    </a>
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