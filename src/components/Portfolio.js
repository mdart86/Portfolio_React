import React from 'react'
import "../styling/styling.scss"

const Portfolio = () => {
    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Original Portfolio Website</li>
                <li>Terminal Application</li>
                <li>Two Sided Marketplace</li>
            </ul>
            <div className="portfolio-container">
                <img src="assets/mnm.png" alt="michaelandmason"/>
                <h3>Original Portfolio Website</h3>
            </div>
            <div className="portfolio-container">
                <img src="assets/mnm.png" alt="michaelandmason"/>
                <h3>Original Portfolio Website</h3>
            </div>
        </div>
    )

}

export default Portfolio