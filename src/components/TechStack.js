// import React, { useEffect, useState } from 'react'
import React from 'react'
import "../styling/techstack.scss"
// import TSNameOnHover from './TSNameOnHover'


const TechStack = () => {
    // function to create the onhover that matches based on the item

  // pass the above function into another function that will render the text

  // pass this into a div
    return(
        <div className="techstack" id="techstack">
            <div className="techstack-title">
                <h1>Tech</h1>
            </div>            
            <p>During my adventure with CoderAcademy,  I have used the following technologies to assist with various projects seen in my portfolio</p>
                <div className="techstack-container">
                    <div class="techstackitems">
                        <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-css3-96.png" alt="css-logo" className="techstack-img"  id="css-logo" /></a>
                        <a href="https://www.w3.org/TR/2017/REC-html52-20171214/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-html-5-96.png" alt="html-logo" className="techstack-img"  id="html-logo"/></a>
                        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-javascript-96.png" alt="js-logo" className="techstack-img" id="javascript-logo" /></a>
                        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-nodejs-96.png" alt="nodejs-logo" className="techstack-img" id="node-js"/></a>
                        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-postgresql-96.png" alt="postgres-logo" className="techstack-img" id="postgresql-logo"/></a>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-react-160.png" alt="react-logo" className="techstack-img" id="react-logo"/></a>
                        <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-ruby-on-rails-96.png" alt="rubyonrails-logo" className="techstack-img"  id="rubyonrails-logo"/></a>
                        <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-ruby-programming-language-96.png" alt="ruby-logo" className="techstack-img" id="ruby-logo" /></a>
                        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-git-96.png" alt="git-logo" className="techstack-img" id="git-logo" /></a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-github-96.png" alt="git-hub-logo" className="techstack-img" id="github-logo"/></a>
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><img src="assets/icons8-visual-studio-code-2019-96.png" alt="vscode-logo" className="techstack-img" id="vscode-logo" /></a>
                    </div>
                </div>
            {/* <div className="arrow-image-techstack">
                <a href="#connect"><img src="assets/icons8-expand-arrow-100.png" alt="arrow" /></a>
            </div> */}
        </div>
    )
}

export default TechStack