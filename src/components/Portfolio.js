import React, { useEffect, useState } from 'react'
import "../styling/styling.scss"

import PortfolioList from "./PortfolioList"
import { PortfolioDetails } from "../data/portfolioDetails"

const Portfolio = () => {
const [ selected, setSelected ] = useState("portfolio-intro")
const [ portfolioDetails, setportfolioDetails ] = useState([])


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
        case "portfolio-website":
            setportfolioDetails(PortfolioDetails[0]);
            break;
        case "terminal-application":
            setportfolioDetails(PortfolioDetails[1]);
            break;
        case "two-sided-marketplace":
            setportfolioDetails(PortfolioDetails[2]);
            break;
        default:
            // keep an eye on errors re-direction to intro. Coding may need to be changed
            break;
    }
    
},[selected])


    return(
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
                <ul>
                    {portfolioList.map((item) => (
                        <PortfolioList 
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected} 
                            id={item.id}
                        />
                    ))}
                </ul>
            <div className="portfolio-container">
                {portfolioDetails.map((details) => (
                    <div className="portfolio-item" id="portfolio-intro">
                        <img 
                            src={details.img}
                            alt="michaelandmason"
                        />
                        <h3>{details.title}</h3>
                    </div>
                ))}
            </div>  
        </div>
    )
}

export default Portfolio