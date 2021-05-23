import React from 'react'
import "./styling/styling.scss"

import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {
  return (
    <div className="app">
      <NavBar />
        <div className="areas">
          <Intro />
          <Portfolio />
          <Contact />
        </div>
    </div>
  );
}

export default App;
