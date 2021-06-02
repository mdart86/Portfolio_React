import React, { useEffect, useState } from 'react'
import "../styling/styling.scss"
// import { SiGithub } from "react-icons/si";

import PortfolioList from "./PortfolioList"
import { PortfolioIntro, OriginalPortfolio, TerminalApplication, TwoSidedMarketplace } from "../data/portfolioDetails"

const Portfolio = () => {
const [ selected, setSelected ] = useState("portfolio-intro")
const [ portfolioData, setPortfolioData ] = useState([])


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

useEffect(() => {
    switch(selected){
        case "portfolio-intro":
            setPortfolioData(PortfolioIntro);
            break;
        case "portfolio-website":
            setPortfolioData(OriginalPortfolio);
            break;
        case "terminal-application":
            setPortfolioData(TerminalApplication);
            break;
        case "two-sided-marketplace":
            setPortfolioData(TwoSidedMarketplace);
            break;
        default:
            setPortfolioData(PortfolioIntro);
            break;
    }
},[selected])


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
                <div className="portfolio-image-container">
                    {portfolioData.map((item) => (
                        <div className="portfolio-banner">
                            <a href={item.presentation ? item.presentation : ""} target="_blank" rel="noopener noreferrer"><img classname="image-1" src={item.img1} alt="portfolio-pic" />{item.title}</a>
                        </div>
                    ))}
                </div>
                <div className="portfolio-details-container">
                {portfolioData.map((item) => (
                    <div className="portfolio-item-details">
                        <div className="portfolio-description">
                          <p>{item.description}</p>
                        </div>
                        <div className="portfolio-tech-stack">
                            <h3>{item.techstack ? <h3>Techstack:</h3> : ""}</h3> 
                            <p>{item.techstack ? item.techstack : ""}</p>
                        </div>
                        <div className="portfolio-tech-tools">
                            <h3>{item.techtools ? <h3>Techtools:</h3> : ""}</h3> 
                            <p>{item.techtools ? item.techtools : ""}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="portfolio-item-button">
                {portfolioData.map((item) => (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"><img src="assets/icons8-github-100.png" alt="github-log"/></a>
                ))}
            </div>
            <div className="arrow-image-portfolio">
                <a href="#techstack"><img src="assets/icons8-expand-arrow-100.png" alt="arrow"  /></a>
            </div>
        </div>  
    )
}

export default Portfolio




///test code for conditional rendering
// if ({item.img1}) {
//     <img 
//      src={item.img1}
//      alt="portfolio-banner"
//      />
// }
// if ({item.img2})
// { item.img1 && item.img2 ?  

// }
