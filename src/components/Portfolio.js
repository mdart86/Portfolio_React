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
                {portfolioData.map((item) => (
                    <div className="portfolio-banner">
                        <img 
                            src={item.img}
                            alt="portfolio-banner"
                        />
                        <h3>{item.title}</h3>
                    </div>
                 ))}
                {portfolioData.map((item) => (
                    <div className="portfolio-item-details">
                      <p>{item.description}</p>
                      <p>{item.techstack ? item.techstack : ""}</p>
                    </div>
                ))}
                {portfolioData.map((item) => (
                    <div className="portfolio-item-button">
                      <a href={item.link} target="_blank" rel="noopener noreferrer"><button>{item.linklabel}</button></a>
                    </div>
                ))}
            </div>
            <a href="#techstack"><img src="assets/icons8-expand-arrow-100.png" alt="arrow" className="arrow-image-portfolio" /></a>
        </div>  
    )
}

export default Portfolio