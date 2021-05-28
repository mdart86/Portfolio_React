import React, { useEffect, useState } from 'react'
import "../styling/styling.scss"

import PortfolioList from "./PortfolioList"

const Portfolio = () => {
const [ selected, setSelected ] = useState("portfolio-intro")
const [ portfolioItem, setPortfolioItem ] = useState([])


const portfolioList = [
    {
        id: "portfolio-intro",
        title: "Portfolio Intro",
    },
    {
        id: "portfolio-website",
        title: "Original Portfolio Website",
    },
    {
        id: "terminal-application",
        title: "Terminal Application",
    },
    {
        id: "two-sided-marketplace",
        title: "Two Sided Marketplace",
    }
]

// useEffect(() => {
//     switch(selected){
//         case "portfolio-intro":
//             setPortfolioItem()
//             break
//         case "portfolio-website":
//             setPortfolioItem()
//             break
//         case "terminal-application":
//             setPortfolioItem(portfolioList.id)
//             break
//         case "two-sided-marketplace":
//             setPortfolioItem(portfolioList.id)
//             break
//         default:
//             setPortfolioItem(portfolioList.id)
//     }
    
// },[selected])


    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
                <ul>
                    {portfolioList.map((item) => (
                        <PortfolioList title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected} 
                            id={item.id}
                        />
                    ))}
                </ul>
            <div className="portfolio-container">
                <div className="portfolio-item" id="portfolio-intro">
                    <img src="assets/mnm.jpg" alt="michaelandmason"/>
                    <h3>Portfolio Intro</h3>
                </div>
                <div className="portfolio-item" id="portfolio-website">
                    <img src="assets/mnm.jpg" alt="michaelandmason"/>
                    <h3>Original Portfolio Website</h3>
                </div>
                <div className="portfolio-item" id="terminal-application">
                    <img src="assets/mnm.jpg" alt="michaelandmason"/>
                    <h3>Terminal Application</h3>
                </div>
                <div className="portfolio-item" id="two-sided-marketplace">
                    <img src="assets/mnm.jpg" alt="michaelandmason"/>
                    <h3>Two Sided Marketplace</h3>
                </div>
            </div>  
        </div>
    )
}

export default Portfolio