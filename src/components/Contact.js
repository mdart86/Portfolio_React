import React, { useState } from 'react'
import "../styling/styling.scss"


const Contact = () => {
    const [message, setMessage] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(true)
    }

    return(
        <div className="contact" id="contact">
            <div className="left-contact"></div>
                <img src="assets/diana-polekhina-1ixT36dfuSQ-unsplash.jpg" alt="new-message-icon"/>
            <div className="right-contact">
                <h2>Send me a message.</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Enter email address"/>
                        <textarea placeholder="Type your message here..."></textarea>
                        <button type="submit">Send</button> 
                        {/* add logic that will allow these fields not to be empty */}
                        { message && <span>Thank you for your message, I will reply soon!</span> }
                    </form>
            </div>
        </div>
    )

}

export default Contact