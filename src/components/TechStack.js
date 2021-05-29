import React from 'react'
import "../styling/styling.scss"


const TechStack = () => {
    return(
        <div className="techstack" id="techstack">
            <h1>Tech Stack</h1>
            <p>During my adventure with CoderAcademy, I have worked on the following technologies to produce the the projects seen in my portfolio</p>
            <div className="techstack-container">
                <div class="techstackitems">
                    <img src="assets/icons8-css3-96.png" alt="css-logo"/>
                    <img src="assets/icons8-html-5-96.png" alt="html-logo"/>
                    <img src="assets/icons8-nodejs-96.png" alt="nodejs-logo"/>
                    <img src="assets/icons8-postgresql-96.png" alt="postgres-logo"/>
                    <img src="assets/icons8-react-160.png" alt="react-logo"/>
                    <img src="assets/icons8-ruby-gem-128.png" alt="rubygem-logo"/>
                    <img src="assets/icons8-ruby-on-rails-96.png" alt="rubyonrails-logo"/>
                    <img src="assets/icons8-ruby-programming-language-96.png" alt="ruby-logo"/>
                </div>
            </div>
        </div>
    )
}

export default TechStack